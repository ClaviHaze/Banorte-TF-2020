import React, { useState } from "react";
import Topnav from '../../components/topnav/Topnav';
import Steps from '../../components/steps/Steps';
import LoginCardNumber from '../../components/login-cardnumber/LoginCardNumber';
import banlogo from "../../assets/images/logoban.svg";

function Loginform() {

  const render = (next) => {
    setRenderLogin(next);
    console.log(next, "doggy render")
  };

  const [renderLogin, setRenderLogin] = useState(<LoginCardNumber render={render} />)
  const [loginCard, setLoginCard] = useState("0000000000000000");
  const [loginPass, setLoginPass] = useState("password");
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
export default Loginform