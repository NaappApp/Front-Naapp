import React from "react";
import { MobileSidebar } from "../layout/MobileSidebar";
import { ReturnButton } from "../../UI/ReturnButton";
import { CardFollow } from "../../UI/CardFollow";

export const UserFollow = () => {
  return (
    <div className="login-page-container ">
      <div className="absolute top-5 left-5">
        <ReturnButton link={history.back} />
      </div>
      <MobileSidebar link="/register" />
      <div className="">
        <h1 className="login-header-title">Entourez-vous !</h1>
        <h2 className="login-header-subtitle">
          Trouvez vos premiers abonnements pour créer encore plus de liens.
        </h2>
        <CardFollow/>
        <CardFollow/>
      </div>
      <button className="btn btn-plain form-submit" type="submit">
        Suivant
      </button>
    </div>
  );
};
