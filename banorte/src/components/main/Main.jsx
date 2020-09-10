import React, { useEffect } from "react";
import MainNavbar from "../mainnavbar/MainNavbar";
import Maintop from "../maintop/Maintop";
import "../../assets/styles/Main.css";
import balance from "../../assets/images/Balance.svg";

function Main() {
  useEffect(() => {
    document.body.className = "custom-navfix";
    return () => {
      document.body.className = "";
    };
  });

  return (
    <>
      <Maintop />
      <div className="section-main main-background">
        <h1 className="has-text-centered white has-text-weight-medium is-size-3">
          Hola Carmen
        </h1>
        <img className="" src={balance} />
      </div>
      <MainNavbar />
    </>
  );
}

export default Main;
