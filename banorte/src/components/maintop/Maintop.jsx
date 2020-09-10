import React from 'react'
import "../../assets/styles/Main.css";
import banlogo from "../../assets/images/banorte_white.svg"
import burger from "../../assets/images/burger_menu.svg"


function Maintop() {
    return (
        <div className="custom-top is-primary">
            <img src={burger}/>
            <img className="logo-ban" src={banlogo}/>
        </div>
    )
}

export default Maintop
