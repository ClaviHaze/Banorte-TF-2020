import React from 'react';
import badgeReg from '../../assets/images/insBanorte.svg';

function BadgeReg() {
    return (
        <div className="section-main main-background">
            <div className="">
                <div className="modal-card-body modal-badgereg">
                    <div className="modal-content">
                    <h3 className="title-badge has-text-weight-bold">¡Haz completado tu registro!</h3>
                    <h4 className="text-badge has-text-weight-bold">Insignia usuario aprendiz</h4>
                    <img 
                    className=""
                    src={badgeReg}
                    />
                    <div className="has-text-centered is-italic is-size-5">
                    <p className="is-inline-block is-pink points">+100 puntos</p>
                    <br/>
                    <p className="is-inline-block pr-1 points"> de experiencia</p>
                    </div>
                    </div>
                </div> 
                {/* <div className="buttons-social">
                    <a href="https://www.facebook.com/banorte" target="_blank">
          <span className="icon is-medium fa-social">
            <i className="fab fa-facebook"></i>
            </span>
            </a>
                    </div> */}
                <button className="modal-close is-large" aria-label="close"></button>
            </div>
        </div>
    )
}

export default BadgeReg
