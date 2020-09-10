import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import Topnav from "../topnav/Topnav";
import Steps from "../steps/Steps";


function RegPass({ history,  passValue, signUp}) {
  const [passDummy, setPassDummy] = useState("");
  passValue(passDummy);

  const handleClick = () => {
    signUp();
  }

  // const complete = () => {
  //   history.push("/Main")
  // }

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
              onChange={(e) => setPassDummy(e.target.value)}
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
        onClick={handleClick}
        >Siguiente</button>
      </div>
      <div className="steps-form">
      </div>
    </>
  );
}

export default withRouter(RegPass);
