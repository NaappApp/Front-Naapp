import React from "react";
import { useState } from "react";
import { ReturnButton } from "../../UI/ReturnButton";
import Chevron from "../../../assets/icons/chevron-right.svg";

export const UserType = (props) => {
  const [role, SetRole] = useState("");
  const handleSubmit = (event) => {
    console.log();
    const user = {
      role: role
    };

    event.preventDefault();
    props.updateType(user);
  };

  const profilesData = [
    {
      name: "neuroatypical",
      title: "Neuroatypique / Proche d’un.e neuroatypique",
      description:
        "Je suis concerné.e par la neuroatypie directement et/ou c’est le cas de quelqu’un dans mon entourage",
      isSelected: false
    },
    {
      name: "curious",
      title: "Je suis curieux.se / Je m’informe",
      description:
        "Je ne suis pas directement concerné.e par le sujet mais je souhaite en apprendre plus",
      isSelected: false
    },
    {
      name: "profesional",
      title: "Professionel.le de santé",
      description:
        "Je suis familier/familière avec le sujet grâce à mon métier et je suis apte à délivrer des informations sûres ",
      isSelected: false
    }
  ];

  const [profiles, SetProfiles] = useState(profilesData);

  return (
    <div className="login-page-container relative">
      <div className="absolute top-20 left-20">
        <ReturnButton link="/register/name" />
      </div>
      <div className="login-container">
        <h1 className="login-header-title">Indiquez nous qui vous êtes !</h1>
        <h2 className="login-header-subtitle">
          Afin de vous orienter au mieux sur Naapp, identifiez vous sous un certain profil
        </h2>
        <form className="form-container" onSubmit={handleSubmit}>
          {profiles.map((profile) => (
            <div className="mb-16" key={profile.name}>
              <label
                className={`form-input-container--radio form-input-container-regular  rounded-2xl ${
                  profile.isSelected ? "form-input-container--radio--selected" : ""
                }`}
                htmlFor={profile.name}>
                <span className="form-input-radio--label">{profile.title}</span>
                <img
                  className="form-input-radio--chevron"
                  src={Chevron}
                  alt="chevron bouton droit"
                />
                <input
                  type="radio"
                  id={profile.name}
                  name="role"
                  value={profile.name}
                  className="form-input-radio hidden"
                  onChange={(e) => {
                    SetRole(e.target.value);
                    // Set the selected profile as selected and other as not selected
                    SetProfiles(
                      profiles.map((profile) => {
                        if (profile.name === e.target.value) {
                          profile.isSelected = true;
                        } else {
                          profile.isSelected = false;
                        }
                        return profile;
                      })
                    );
                  }}
                />
              </label>
              <p className="form-profil-description">{profile.description}</p>
            </div>
          ))}

          <button className="btn btn-plain form-submit" type="submit">
            Suivant
          </button>
        </form>
      </div>
    </div>
  );
};
