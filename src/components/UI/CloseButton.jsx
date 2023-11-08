import React from "react";
import { Link } from "react-router-dom";
import Close from "../../assets/icons/close.svg";

export const CloseButton = () => {
  return (
    <Link className="closeContainer">
      <img src={Close} alt="Bouton pour fermer la sidebar" className="closeBtn" />
    </Link>
  );
};
