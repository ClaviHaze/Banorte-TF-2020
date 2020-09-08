import React from "react";
import useIosInstallPrompt from "../../hooks/useIosInstallPrompt";
import Modal from "../modal/Modal";
import logo from "../../assets/images/logo.svg";
import headershowcase from "../../assets/images/header_showcase.svg";
import oldman from "../../assets/images/oldman.svg";
import beardedman from "../../assets/images/beardedman.svg";
import relax from "../../assets/images/relax.svg";
import help from "../../assets/images/help.svg";
import "../../assets/styles/Landing.css";

function Landing({ history }) {
  const { prompt } = useIosInstallPrompt();
  return (
    <div className="background-landing">
      {prompt && <Modal prompt={prompt} />}
      <div className="is-relative">
        <section className="column is-absolute">
          <img alt="banorte header" width="180vw" src={logo} />
          <h3 className="header-text has-spacing has-text-weight-light my-2">
            Todas tus operaciones, un solo click
          </h3>
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
      <section className="columns is-mobile is-gapless">
        <div className="background-landing column align-center">
          <img alt="hombre mayor con teléfono" src={oldman} />
        </div>
        <div className="column">
          <h3 className="landing-text-image has-text-weight-bold">
            La misma seguridad y garantía de una sucursal
          </h3>
          <p className="additional-text">
            Con nuestro sistema de autenticación, estarás seguro de que solo tú
            podrás disponer de tu dinero.
          </p>
        </div>
      </section>
      <section className="columns is-mobile is-gapless">
        <div className="column">
          <div className="">
            <h3 className="landing-text-image has-text-weight-bold pl-1">
              No te pierdas ninguno de tus servicios
            </h3>
            <div className="additional-text">
              <ul className="check-bullets pl-5 has-text-black">
                <li>Dale seguimiento a tus tarjetas</li>
                <li>Haz transferencias a cuentas Banorte y de otros bancos</li>
                <li>Paga tus servicios y tarjetas de crédito</li>
                <li>Recarga tiempo aire</li>
                <li>Haz retiro en cajero sin necesidad de tu tarjeta</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="background-landing column align-center">
          <img alt="hombre joven con teléfono" src={beardedman} />
        </div>
      </section>
      <section className="columns is-mobile is-gapless">
        <div className="background-landing column align-center">
          <img alt="mujer joven estirandose" src={relax} />
        </div>
        <div className="column">
          <h3 className="landing-text-image has-text-weight-bold">
            Consíguelo fácilmente
          </h3>
          <p className="additional-text">
            Disfrutar de todos estos beneficios es fácil. Solo necesitas:
          </p>
          <div className="additional-text">
            <ul className="check-bullets pl-5 has-text-black">
              <li>Tener una cuenta activa con Banorte</li>
              <li>Un celular con Android o iOs</li>
              <li>Una cuenta de correo electrónico</li>
            </ul>
          </div>
          <p className="additional-text">
            ¡Listo! Ya puedes registrarte y tener la tranquilidad y comodidad de
            Banorte móvil.
          </p>
        </div>
      </section>
      <section className="file is-centered">
        <button className="button is-danger">HAZTE DIGITAL</button>
        <div className="mt-4 mr-0">
          <img alt="ayuda" className="help-icon" src={help} />
        </div>
      </section>
      <section className="background-footer">
        <div className="buttons">
          <button className="button">
            <span className="icon is-medium">
              <i className="fab fa-facebook-square"></i>
            </span>
          </button>
        </div>
      </section>
    </div>
  );
}

export default Landing;
