import React from "react";
import { useState } from "react";
import { ReturnButton } from "../../UI/ReturnButton";

export const UserBio = (props) => {
  const [Bio, SetBio] = useState("");
  const [error, SetError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (Bio === "") {
      SetError("Veuillez remplir ce champ");
      return;
    }
    const user = {
      Bio: Bio
    };
    props.updateBio(user);
  };

  const handleSkip = (event) => {
    const user = {
      Bio: ""
    };
    event.preventDefault();
    props.updateBio(user);
  };

  return (
    <div className="login-page-container relative">
      <div className="absolute top-20 left-20">
        <ReturnButton link="/register/type" />
      </div>

      <div className="login-container">
        <h1 className="login-header-title">Racontez nous qui vous êtes...</h1>
        <h2 className="login-header-subtitle self-start">
          Ce texte apparaitra dans la rubrique “Qui suis-je” sur votre profil.
        </h2>
        <form className="w-full" onSubmit={handleSubmit}>
          <textarea
            placeholder="200 caractères maximum"
            className="Bio-Text-box rounded-2xl w-full text-base mb-8"
            onChange={(e) => {
              SetBio(e.target.value);
            }}
          />
          {error && <span className="error-message">{error}</span>}

          <div className="flex justify-end">
            <div>
              <button className="btn btn-plain form-submit mb-4" type="submit">
                Suivant
              </button>
              <button className="text-gray-400 underline" type="submit" onClick={handleSkip}>
                Passer cette étape
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
