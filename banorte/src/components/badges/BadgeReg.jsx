import React from 'react';
import badgeReg from '../../assets/images/insBanorte.svg';

function BadgeReg() {
    return (
        <div className="section-main main-background">
            <div className="">
                <div className="modal-card-body modal-badgereg">
                    <div className="modal-content">
                    <h3 className="title-badge">¡Haz completado tu registro!</h3>
                    <h4 className="text-badge">Insignia usuario aprendiz</h4>
                    <img 
                    src={badgeReg}
                    />
                    <p>+100 puntos</p> <p>de experiencia</p>
                    </div>
                </div> 
                <button className="modal-close is-large" aria-label="close"></button>
            </div>
        </div>
    )
}

export default BadgeReg
