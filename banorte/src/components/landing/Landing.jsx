import React from "react";
import useIosInstallPrompt from "../../hooks/useIosInstallPrompt";
import Modal from "../modal/Modal";
import logo from "../../assets/images/logo.svg";
import headershowcase from "../../assets/images/header_showcase.svg";
import oldman from "../../assets/images/oldman.svg";
import beardedman from "../../assets/images/beardedman.svg";
import relax from "../../assets/images/relax.svg";
import "../../assets/styles/Landing.css";

function Landing() {
  const { prompt } = useIosInstallPrompt();
  return (
    <div className="background-landing">
      {prompt && <Modal prompt={prompt} />}
      <div className="is-relative">
        <section className="section is-absolute">
          <img alt="banorte header" src={logo} />
          <h3 className="header-text">Todas tus operaciones, un solo click</h3>
          <button className="button is-danger">COMENCEMOS</button>
        </section>
        <section>
          <img alt="girl with computer" className="fill" src={headershowcase} />
        </section>
      </div>
      <section>
        <h3 className="landing-text has-text-left has-text-weight-bold">
          Ve al banco en la comodidad de tu hogar
        </h3>
      </section>
      <section>
        <div className="background-landing">
          <img alt="hombre mayor con teléfono" className="fill" src={oldman} />
        </div>
        <div>
          <h3 className="landing-text-image has-text-weight-bold">
            La misma seguridad y garantía de una sucursal
          </h3>
          <p className="additional-text">
            Con nuestro sistema de autenticación, estarás seguro de que solo tú
            podrás disponer de tu dinero.
          </p>
        </div>
      </section>
      <section>
        <div className="background-landing">
          <img
            alt="hombre joven con teléfono"
            className="fill"
            src={beardedman}
          />
        </div>
        <div className="section">
          <h3 className="landing-text-inverted has-text-weight-bold">
            No te pierdas ninguno de tus servicios
          </h3>
          <div className="additional-text-inverted">
            <ul className="check-bullets has-text-black">
              <li>Dale seguimiento a tus tarjetas</li>
              <li>Haz transferencias a cuentas Banorte y de otros bancos</li>
              <li>Paga tus servicios y tarjetas de crédito</li>
              <li>Recarga tiempo aire</li>
              <li>Haz retiro en cajero sin necesidad de tu tarjeta</li>
            </ul>
          </div>
        </div>
      </section>
      <section>
        <div className="background-landing">
          <img
            alt="mujer joven estirandose"
            className="fill"
            src={relax}
          />
        </div>
        <div className="section">
          <h3 className="landing-text-image has-text-weight-bold">
            consíguelo fácilmente
          </h3>
          <p className="additional-text">
            Disfrutar de todos estos beneficios es fácil. 
            Solo necesitas:
          </p>
          <div className="additional-text">
            <ul className="check-bullets has-text-black">
              <li>Tener una cuenta activa con Banorte</li>
              <li>Un celular con Android o iOs</li>
              <li>Una cuenta de correo electrónico</li>
            </ul>
          </div>
          <p className="additional-text">
            ¡Listo! Ya puedes registrarte y tener la tranquilidad
            y comodidad de Banorte móvil.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Landing;
