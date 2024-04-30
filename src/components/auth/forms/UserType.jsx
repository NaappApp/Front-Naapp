import React from "react";
import { useState } from "react";
import Chevron from "../../../assets/icons/chevron-right.svg";
import { MobileSidebar } from "../layout/MobileSidebar";
//import {registerAccountAsync, updateUser} from "../../../store/user/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateUser } from "../../../store/user/userSlice";

export const UserType = () => {
  const [type, Settype] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { email, password, username, firstname, lastname } = useSelector((state) => state.user);
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(updateUser({ email, password, username, firstname, lastname, type }));
    navigate("/register/Bio");

    //props.updatePersonals(user);
  };

  const profilesData = [
    {
      name: "atypical",
      title: "Neuroatypique / Proche d’un.e neuroatypique",
      description:
        "Je suis concerné.e par la neuroatypie directement et/ou c’est le cas de quelqu’un dans mon entourage",
      isSelected: false
    },
    {
      name: "regular",
      title: "Je suis non-sensibilisé / Je m’informe",
      description:
        "Je ne suis pas directement concerné.e par le sujet mais je souhaite en apprendre plus",
      isSelected: false
    },
    {
      name: "professional",
      title: "Professionel.le de santé",
      description:
        "Je suis familier/familière avec le sujet grâce à mon métier et je suis apte à délivrer des informations sûres ",
      isSelected: false
    }
  ];

  const [profiles, SetProfiles] = useState(profilesData);

  return (
    <div className="login-page-container user-type-container relative">
      <MobileSidebar link="/register/name" />

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
                  style={{ fill: profile.isSelected ? "#B87FE5" : "" }}
                  alt="chevron bouton droit"
                />
                <input
                  type="radio"
                  id={profile.name}
                  name="role"
                  value={profile.name}
                  className="form-input-radio hidden"
                  onChange={(e) => {
                    Settype(e.target.value);
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

          <button className="btn-custom btn-plain form-submit" type="submit">
            Suivant
          </button>
        </form>
      </div>
    </div>
  );
};
