import React, { useState, useCallback } from "react";
import { withRouter } from "react-router-dom";
import Topnav from "../topnav/Topnav";
import Modalpass from "../../components/modal-pass/Modalpass";
import app from "../../utils/firebase/firebase";
import db from "../../utils/firebase/firebase";
import Steps from "../steps/Steps";

function RegPass({ history,  passValue, email, card}) {
  const [emailReg, setEmailReg] = useState("");
  const [pass, setPass] = useState("");
  const [cardReg, setCardReg] = useState('')
  const [error, setError] = useState(null);

  // setEmailReg(email);
  // setCardReg(card);
    const main = () => {
    history.push("/Main");
  }
  const modal = () => {
    history.push("/modalpass")
  }

  // const handleClick = () => {
  //   signUp();
  // }
  // const signUp = useCallback(async () => {
  //   console.log("start signup")
  //   try {
  //     const res = await app.auth().createUserWithEmailAndPassword(email, pass);
  //     await db.collection("user").doc(res.user.uid).set({
  //       email: res.user.email,
  //       uid: res.user.uid,
  //       card: card,
  //     });
  //     setEmailReg("");
  //     setPass("");
  //     setError(null);
  //     history.push("/Main");
  //     console.log("viva!");
  //   } catch (error) {
  //     switch (error.code) {
  //       case "auth/invalid-email":
  //         setError("El formato del email es incorrecto");
  //         break;
  //       case "auth/weak-password":
  //         setError("La contraseña debe ser de mínimo 6 caracteres");
  //         break;
  //       case "auth/email-already-in-use":
  //         setError("Este email ya esta en uso");
  //         break;
  //       case "auth/wrong-password":
  //         setError(
  //           "La contraseña es incorrecta o el usuario no tiene password"
  //         );
  //         break;
  //       case "auth/user-not-found":
  //         setError("Usuario no encontrado");
  //         break;
  //       default:
  //         return;
  //     }
  //     console.log(error);
  //   }
  //   console.log("after try catch")
  // });

  return (
    <>
      <Topnav />
      <div>
        <div className="has-text-centered">
          <h1 className="has-text-weight-medium is-size-3 onboarding-title">
            ¡Un paso y listo!
          </h1>
        </div>
        <div className=" has-text-centered is-italic is-size-5">
          <p className="is-inline-block pr-1">Genera tu</p>
          <p className="is-inline-block is-pink ">contraseña</p>
        </div>
      </div>
      <div className="file is-centered">
        <div className="field input-form">
          <label className="label is-size-6">Crea tu contraseña</label>
          <div className="control has-icons-right">
            <input
              className="input"
              type="password"
              placeholder="xxxxxx"
              onChange={(e) => setPass(e.target.value)}
            />
          </div>
          <label className="label is-size-6">Confirma tu contraseña</label>
          <div className="control has-icons-right">
            <input className="input" type="password" />
          </div>
        </div>
      </div>
      <div className="file is-centered button-form">
        <button 
        className="button is-halfwidth is-warning"
        onClick={modal}
        // onClick={signUp}
        >Siguiente</button>
      </div>
      <div className="steps-form">
      </div>
    </>
  );
}

export default withRouter(RegPass);
