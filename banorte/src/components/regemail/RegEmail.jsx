import React, { useState } from "react";
import Topnav from "../topnav/Topnav";
import RegPass from "../../components/regpass/RegPass";
import { withRouter } from "react-router-dom";

function RegEmail({ rendering, emailValue, passValue}) {
  const [emailDummy, setEmailDummy] = useState("");
  emailValue(emailDummy);

  const handleClick = () => {
    rendering("pass");
  }

  return (
    <>
      <Topnav />
      <div>
        <div className="has-text-centered">
          <h1 className="has-text-weight-medium is-size-3 onboarding-title">
            ¡Te falta poco!
          </h1>
        </div>
        <div className=" has-text-centered is-italic is-size-5">
          <p className="is-inline-block pr-1">Ingresa tu</p>
          <p className="is-inline-block is-pink ">correo electrónico.</p>
        </div>
      </div>
      <div className="file is-centered">
        <div className="field input-form">
          <label className="label is-size-6">Correo electrónico</label>
          <div className="control has-icons-right">
            <input
              className="input"
              type="email"
              placeholder="ejemplo@dominio.com"
              onChange={e => emailValue(e.target.value)}
            />
          </div>
        </div>
      </div>
      <div className="file is-centered button-form">
        <button 
        className="button is-halfwidth is-warning" 
        onClick={handleClick}>
          Siguiente
          </button>
      </div>
    </>
  );
}

export default withRouter(RegEmail);
