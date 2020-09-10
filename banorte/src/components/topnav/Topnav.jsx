import React, { useEffect } from "react";

function Topnav() {
  useEffect(() => {
    document.body.className = "has-navbar-fixed-top";
    return () => {
      document.body.className = "";
    };
  });

  return (
    <div className="navbar is-fixed-top is-warning">
      <button className="button is-warning">
        <i className="fas fa-chevron-left"></i>
      </button>
    </div>
  );
}

export default Topnav;
