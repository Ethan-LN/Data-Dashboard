import React from "react";
import "../styles/Navigation.css";
import avatar_image from "../images/elon_musk.jpeg";
import { ManageSection } from "./ManageSection";

const Navigation = () => {
  return (
    <div className="nav">
      <div className="avatar__nav">
        <img className="avatar" src={avatar_image} alt="profile" />
      </div>
      <div>
        <ManageSection />
    </div>
    </div>
  );
};

export default Navigation;
