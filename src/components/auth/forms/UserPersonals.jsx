import React from "react";
import { useState } from "react";
import { ReturnButton } from "../../UI/ReturnButton";

export const UserPersonals = (props) => {
  const [pseudo, SetPseudo] = useState("");
  const [firstName, SetFirstName] = useState("");
  const [lastName, SetLastName] = useState("");
  const [error, SetError] = useState({
    pseudo: "",
    firstName: "",
    lastName: ""
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    if (pseudo === "") {
      SetError({ ...error, pseudo: "Veuillez remplir ce champ" });
      return;
    }
    if (firstName === "") {
      SetError({ ...error, firstName: "Veuillez remplir ce champ" });
      return;
    }
    if (lastName === "") {
      SetError({ ...error, lastName: "Veuillez remplir ce champ" });
      return;
    }

    const user = {
      pseudo: pseudo,
      firstName: firstName,
      lastName: lastName
    };

    props.updatePersonals(user);
  };

  return (
    <div className="login-page-container relative">
      <div className="absolute top-20 left-20">
        <ReturnButton link="/register" />
      </div>

      <div className="login-container">
        <h1 className="login-header-title">Renseigner vos informations</h1>
        <h2 className="login-header-subtitle">
          Vos publications et votre profil apparaîtront sous ce nom
        </h2>
        <form className="form-container" onSubmit={handleSubmit}>
          <div className="form-input-container  form-input-container-regular">
            <label className="form-input-label" htmlFor="pseudo">
              Pseudonyme
            </label>
            <input
              type="text"
              placeholder="Entrer votre Pseudo"
              className="form-input form-input-email form-input-regular"
              onChange={(e) => {
                SetPseudo(e.target.value);
              }}
            />
            {error.pseudo && <span className="error-message">{error.pseudo}</span>}
          </div>

          <div className="form-input-container form-input-container-regular">
            <label className="form-input-label" htmlFor="pseudo">
              Prénom
            </label>
            <input
              type="text"
              placeholder="Entrer votre Prénom"
              className="form-input form-input-email form-input-regular"
              onChange={(e) => {
                SetFirstName(e.target.value);
              }}
            />
            {error.firstName && <span className="error-message">{error.firstName}</span>}
          </div>

          <div className="form-input-container form-input-container-regular">
            <label className="form-input-label" htmlFor="pseudo">
              Nom
            </label>
            <input
              type="text"
              placeholder="Entrer votre Nom"
              className="form-input form-input-email form-input-regular"
              onChange={(e) => {
                SetLastName(e.target.value);
              }}
            />
            {error.lastName && <span className="error-message">{error.lastName}</span>}
          </div>

          <button className="btn btn-plain form-submit" type="submit">
            Suivant
          </button>
        </form>
      </div>
    </div>
  );
};
