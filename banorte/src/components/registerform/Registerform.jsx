import React, { useState, useEffect, useCallback } from "react";
import { withRouter } from "react-router-dom";
import MaskInput from "react-maskinput";
import Topnav from "../topnav/Topnav";
import CardNumber from "../cardnumber/CardNumber";
import RegEmail from "../regemail/RegEmail";
import RegPass from "../regpass/RegPass";
import app from "../../utils/firebase/firebase";
import db from "../../utils/firebase/firebase";
// import { auth, app, db } from '../../utils/firebase/firebase';
import Steps from "../steps/Steps";
import banlogo from "../../assets/images/logoban.svg";
import "../../assets/styles/register.css";

function Registerform({ history }) {
  

  const cardValue = (value) => {
    setCard(value);
  };

  const emailValue = (value) => {
    setEmail(value);
  };

  const passValue = (value) => {
    setPass(value);
  };
  
  const [card, setCard] = useState("");
  const [email, setEmail] = useState("example@mail.com");
  const [pass, setPass] = useState("password");
  const [error, setError] = useState(null);

const rendering = (next) => {
    switch (next) {
      case "email":
        setRender(<RegEmail
          rendering={rendering}
          emailValue={emailValue}
          />)
        break;
        case "pass":
          setRender(<RegPass
            rendering={rendering}
            passValue={passValue}
            signUp={signUp}
            />)
          break;
      default:
        setRender(<CardNumber 
          rendering={rendering} 
          cardValue={cardValue}
          />)
        break;
    }
  };
const [render, setRender] = useState(<CardNumber 
    rendering={rendering} 
    cardValue={cardValue}/>);
  

  // useEffect(() => {
  //   if (app.auth().currentUser) {
  //     history.push("/")
  //   }
  // }, [app.auth().currentUser])

  // const validate = () => {};

  const signUp = useCallback(async () => {
    console.log("start signup")
    try {
      const res = await app.auth().createUserWithEmailAndPassword(email, pass);
      await db.collection("user").doc(res.user.uid).set({
        email: res.user.email,
        uid: res.user.uid,
        card: card,
      });
      setEmail("");
      setPass("");
      setError(null);
      history.push("/Main");
      console.log("viva!");
    } catch (error) {
      switch (error.code) {
        case "auth/invalid-email":
          setError("El formato del email es incorrecto");
          break;
        case "auth/weak-password":
          setError("La contraseña debe ser de mínimo 6 caracteres");
          break;
        case "auth/email-already-in-use":
          setError("Este email ya esta en uso");
          break;
        case "auth/wrong-password":
          setError(
            "La contraseña es incorrecta o el usuario no tiene password"
          );
          break;
        case "auth/user-not-found":
          setError("Usuario no encontrado");
          break;
        default:
          return;
      }
      console.log(error);
    }
    console.log("after try catch")
  });

  return (
    <>
      <Topnav />
      <section className="form-section">
        <img className="banlogo" alt="Banorte" src={banlogo} />
        {render}
        <div className="steps-form">
          <Steps />
        </div>
      </section>
    </>
  );
}

export default withRouter(Registerform);
