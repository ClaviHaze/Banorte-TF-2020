import React from 'react';
import { useState, useEffect } from 'react';
import { useModal } from '../../hooks/useModal';
import appleshare from '../../assets/images/appleshare.png';
import '../../assets/styles/Modal.css';

function Modal({ prompt }) {
  const [modalOpen, setModalOpen, toggleModal] = useModal();

  // useEffect( () => {
  //   setModalOpen(true);
  // }, [])


  return (
    // <div isActive={modalOpen}>
    <div isActive={modalOpen}>
      <div className="modal-background"></div>
      <div className="modal-content">
        <div className="box">
          <article className="media">
            <div className="media-content">
              <div className="content">
                <p>
                  The content for the modal comes here. You may use text,
                  images, buttons etc. here.
                </p>
              </div>
              <div className="file is-centered">
              <img 
              src={appleshare}
              alt="Agregar a pantalla principal"
              className="apple-share-logo"
              />
              <button
                className="button is-danger is-small"
                id="closebtn"
                onClick={() => setModalOpen(false)}
                // {console.log()setModalOpen(false), 'aqui nomas para ver'}
              >
                Cerrar
              </button>
              </div>
            </div>
          </article>
        </div>
      </div>
    {/* { useWebInstallPrompt && ( */}
      {/* <div className="modal-background"></div>
      <div className="modal-content">
        <div className="box">
          <article className="media">
            <div className="media-content">
              <div className="content">
                <p>
                  The content for the modal comes here. You may use text,
                  images, buttons etc. here.
                </p>
              </div>
              <button
                className="button is-info is-small"
                id="accept"
                onClick={installButton}
              >
                Previous
              </button>
              <button
                className="button is-danger is-small"
                id="closebtn"
                onClick={closeButton}
              >
                Close Modal
              </button>
            </div>
          </article>
        </div>
      </div> */}
{/* )} */}
    </div>
  );
}

export default Modal;
