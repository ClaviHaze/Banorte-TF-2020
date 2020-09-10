import React from "react";
import Topnav from '../../components/topnav/Topnav';
import Steps from '../../components/steps/Steps';
import LoginPass from '../../components/login-pass/Loginpass';
import MaskInput from "react-maskinput";
import banlogo from "../../assets/images/logoban.svg";
import '../../assets/styles/login.css';

function LoginCardNumber({ render, history, setLoginCard}) {

    const handleClick = () => {
        render(<LoginPass />);
      }
    const register = () => {
        history.push("/Registerform")
    }

    return (
        <div>
            <div className="has-text-centered">
          <h1 className="has-text-weight-medium is-size-3 onboarding-title">
            Tu banca digital
          </h1>
        </div>
        <div className=" has-text-centered is-italic is-size-5">
          <p className="is-inline-block pr-1">Ingresa tu</p>
          <p className="is-inline-block is-pink ">número de tarjeta.</p>
        </div>
        <div className="file is-centered">
        <div className="field input-form">
          <label className="label is-size-6">Número de tarjeta</label>
          <div className="control has-icons-right">
            <MaskInput
              maskChar="_"
              mask="0000-0000-0000-0000"
              size={20}
              className="input"
              onChange={e => setLoginCard(e.target.value)}
            />
            <span className="icon is-small is-right fa-red">
              <i className="fas fa-question-circle"></i>
            </span>
          </div>
          <div className="control has-icons-right">
            <div className="file is-centered is-rounded">
              <button 
              className="button is-halfwidth is-danger is-outlined button-login"
              onClick={handleClick}
              >
                Siguiente
              </button>
            </div>
          </div>
          <div className="control has-icons-right">
            <div className="file is-centered is-rounded">
              <button 
              className="button is-halfwidth is-danger button-login"
              onClick={register}
              >
                Me quiero registrar
              </button>
            </div>
          </div>
          </div>
          </div>
        </div>
    )
}

export default LoginCardNumber