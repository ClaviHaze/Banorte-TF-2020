import React from "react";
import { withRouter } from "react-router-dom";
import '../../assets/styles/Modal.css';

function Modalpass({ history }) {
    const badgeReg = () => {
        history.push("/badgereg")
    } 
  return (
      <div className="section-main main-background">
      <div className="modal-background">
          <div className="modal-card-body modal-pass">
              <div className="file is-centered">
              <h1 className="file is-centered modal-text has-text-weight-bold">¿Comenzamos?</h1>
          </div>
          <div className="modal-text modal-paragraph">
              <p>Tu contraseña se generó exitosamente</p>
          </div>
          <div className="">
              <div className="file is-centered">
              <button 
              className="is-halfwidth button is-danger"
              onClick={badgeReg}
              >Aceptar</button>
              </div>
              <div className="file is-centered cancel-button">
              {/* <button className="button is-halfwidth">Cancelar</button> */}
              </div>
              </div>
          </div>
      </div>
      </div>
  );
}

export default withRouter(Modalpass);
