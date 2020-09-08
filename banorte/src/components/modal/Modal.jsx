import React from 'react';
import { useState, useEffect } from 'react';

function Modal({ prompt }) {
  const [modalOpen, setModalOpen] = useState(false);
  // console.log(prompt,"holi");

  useEffect( () => {
    setModalOpen(true);
  }, [])
  // console.log(prompt, "pipo 3000")
  return (
    <div className={`modal ${modalOpen === true ? "is-active" : ""} `}>
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
              <button
                className="button is-danger is-small"
                id="closebtn"
                // onClick={handleIOSInstallDeclined}
              >
                Close Modal
              </button>
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
