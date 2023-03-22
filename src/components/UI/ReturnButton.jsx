import React from "react";
import { Link } from "react-router-dom";

export const ReturnButton = (props) => {
  return (
    <Link to={props.link}>
      <img src="../../assets/icons/return.svg" alt="Bouton pour retourner à la page précédente" />
      <span>Retour</span>
    </Link>
  );
};
