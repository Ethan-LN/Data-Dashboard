import React from "react";
import "../styles/Navigation.css";
import avatar_image from "../images/elon_musk.jpeg";

const Navigation = () => {
  return (
    <div className="nav">
      <div className="avatar_nav">
        <img className="avatar" src={avatar_image} alt="profile" />
      </div>
      <div className="data__nav">Data</div>
      <div className="charts_nav">Charts</div>
    </div>
  );
};

export default Navigation;
