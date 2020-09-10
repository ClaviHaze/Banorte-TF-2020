import React, { useState } from "react";
import MaskInput from "react-maskinput";
import RegEmail from "../regemail/RegEmail";

function CardNumber({ rendering, setCardNumber, cardValue, emailValue, passValue }) {

  const [cardDummy, setCardDummy] = useState('');
  cardValue(cardDummy);

  const handleClick = () => {
    rendering("email");
  }

  return (
    <>
      <div>
        <div className="has-text-centered">
          <h1 className="has-text-weight-medium is-size-3 onboarding-title">
            ¡Comencemos!
          </h1>
        </div>
        <div className=" has-text-centered is-italic is-size-5">
          <p className="is-inline-block pr-1">Ingresa tu</p>
          <p className="is-inline-block is-pink ">número de tarjeta.</p>
        </div>
      </div>
      <div className="file is-centered">
        <div className="field input-form">
          <label className="label is-size-6">Número de tarjeta</label>
          <div className="control has-icons-right">
            <MaskInput
              maskChar="_"
              mask="0000-0000-0000-0000 "
              size={20}
              className="input"
              onChange={(e) => setCardDummy(e.target.value)}
            />
            <span className="icon is-small is-right fa-red">
              <i className="fas fa-question-circle"></i>
            </span>
          </div>
          <div className="control has-icons-right">
            <div className="file is-centered button-form">
              <button 
              className="button is-halfwidth is-warning"
              onClick={handleClick}
              >
                Siguiente
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardNumber;
