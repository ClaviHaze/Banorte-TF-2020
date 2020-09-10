import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import Topnav from '../../components/topnav/Topnav';
import Steps from '../../components/steps/Steps';
import LoginCardNumber from '../../components/login-cardnumber/LoginCardNumber';
import Loginpass from '../../components/login-pass/Loginpass';
import banlogo from "../../assets/images/logoban.svg";

function Loginform({ history }) {

  const loginCardValue = (value) => {
    setLoginCard(value);
  }

  const loginPassValue = (value) => {
    setLoginPass(value);
  }
  const [loginCard, setLoginCard] = useState("0000000000000000");
  const [loginPass, setLoginPass] = useState("password");

  const render = (next) => {
    switch (next) {
      case "card":
        setRenderLogin(<LoginCardNumber
          render={render}
          loginCardValue={loginCardValue}
          />);
        break;
        default:
        setRenderLogin(<Loginpass 
          render={render}
          loginPassValue={loginPassValue}        
        />)
      break;
    }
  };
  const [renderLogin, setRenderLogin] = useState(<LoginCardNumber 
    loginCardValue={loginCardValue}
    render={render} />)
    return (
        <>
        <Topnav />
        <section className="form-section">
          <img className="banlogo" alt="Banorte" src={banlogo} />
          {renderLogin}
          <div className="steps-login">
          <Steps />
          </div>
        </section>
      </>
    )
    }
export default withRouter(Loginform)