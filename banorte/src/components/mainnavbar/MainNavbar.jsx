import React, { useEffect } from "react";
import "../../assets/styles/Main.css";
import home from "../../assets/images/MainHome.svg"
import info from "../../assets/images/MainInfo.svg"
import transfer from "../../assets/images/MainTransfer.svg"
import payments from "../../assets/images/MainPayments.svg"
import help from "../../assets/images/MainHelp.svg"

function MainNavbar() {
  useEffect(() => {
    document.body.className = "has-navbar-fixed-bottom";
    return () => {
      document.body.className = "";
    };
  });

  return (
    <div className="navbar is-fixed-bottom is-primary top-border">
      <div className="field is-group">
        <p className="control">
          <button className="nav-btn">
              <img src={home}/>
          </button>
        </p>
        <p className="control">
        <button className="nav-btn">
              <img src={info}/>
          </button>
        </p>
        <p className="control">
        <button className="nav-btn">
              <img src={transfer}/>
          </button>
        </p>
        <p className="control">
        <button className="nav-btn">
              <img src={payments}/>
          </button>
        </p>
        <p className="control">
        <button className="nav-btn">
              <img src={help}/>
          </button>
        </p>
      </div>
    </div>
  );
}

export default MainNavbar;
