import React from "react";
import { useState } from "react";
import { ReturnButton } from "../../UI/ReturnButton";

export const UserType = (props) => {
  const [role, SetRole] = useState("");
  const handleSubmit = (event) => {
    const user = {
      role: role
    };

    event.preventDefault();
    props.updatePersonals(user);
  };

  const profiles = [
    {
      name: "profesional",
      title: "Professionel.le de santé",
      description:
        "Je suis familier/familière avec le sujet grâce à mon métier et je suis apte à délivrer des informations sûres "
    },
    {
      name: "curious",
      title: "Je suis curieux.se / Je m’informe",
      description:
        "Je ne suis pas directement concerné.e par le sujet mais je souhaite en apprendre plus"
    },
    {
      name: "neuroatypical",
      title: "Neuroatypique / Proche d’un.e neuroatypique",
      description:
        "Je suis concerné.e par la neuroatypie directement et/ou c’est le cas de quelqu’un dans mon entourage"
    }
  ];

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
            <div className="form-input-container form-input-container-regular" key={profile.name}>
              <label className="form-input-label" htmlFor={profile.name}>
                {profile.title}
              </label>
              <input

                type="radio"
                id={profile.name}
                name="role"
                value={profile.name}
                className="form-input form-input-email form-input-regular"
                onChange={(e) => {
                  SetRole(e.target.value);
                }}
              />
              <p>{profile.description}</p>
            </div>
          ))}
        </form>
      </div>
    </div>
  );
};
