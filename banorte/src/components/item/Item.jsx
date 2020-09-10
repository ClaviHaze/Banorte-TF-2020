import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import "react-slideshow-image/dist/styles.css";
import { Slide } from "react-slideshow-image";
import "../../assets/styles/Item.css";



function Item({ history }) {
  const [index, setIndex] = useState(null);
  const slideImages = [
  "https://i.ibb.co/vq6vWLb/onboarding1.png",
  "https://i.ibb.co/J306Q85/onboarding2.png",
  "https://i.ibb.co/6Hn8NN2/onboarding3.png",
];
    
const properties = {
  autoplay: false,
  duration: 4000,
  transitionDuration: 500,
  indicators: false,
  arrows: false,
  onChange: (previous, next) => {
    console.log(next, "actual")
    setIndex(next);
    if (index === 2) {
      history.push("/register");
    };
  },
};

  return (
    <div>
      <div className="slide has-text-weight-bold">
        <Slide {...properties}>
          <div className="each-slide has-text-centered">
            <p className="p-title">¡Vamos juntos!</p>
            <img className="img-onboarding" alt="movimientos" src={slideImages[0]} />
            <p className="p-additional-text">
              Todos tus movimientos bancarios desde tu móvil.
            </p>
          </div>
          <div className="each-slide has-text-centered">
            <p className="p-title">¡Vamos juntos!</p>
            <img className="img-onboarding" alt="controla" src={slideImages[1]} />
            <p className="p-additional-text">
            Controla tus finanzas desde casa.
            </p>
          </div>
          <div className="each-slide has-text-centered">
            <p className="p-title">¡Vamos juntos!</p>
            <img className="img-onboarding" alt="seguridad" src={slideImages[2]} />
            <p className="p-additional-text">
            Seguridad y confianza sobre tus finanzas. 
            </p>
          </div>
        </Slide>
      </div>
    </div>
  );
}

export default withRouter(Item);
