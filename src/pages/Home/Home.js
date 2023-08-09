import React from "react";
import Navigation from "../../components/Navigation";
import Dashboard from "../../components/Dashboard";
import "./Home.css"

export const Home = () => {
  return (
    <div className="page__home">
      <Navigation />
      <Dashboard />
    </div>
  );
};
