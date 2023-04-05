import React from "react";
import { Link } from "react-router-dom";
import Return from "../../assets/icons/return.svg";

export const ReturnButton = (props) => {
  return (
    <Link to={props.link} className="returnContainer">
      <img src={Return} alt="Bouton pour retourner à la page précédente" className="returnBtn" />
      <span className="returnText">Retour</span>
    </Link>
  );
};
