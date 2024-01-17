import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerAccountAsync } from "../../../store/user/userSlice";
import { useNavigate } from "react-router-dom";
import {MobileSidebar} from "../layout/MobileSidebar";

export const UserBio = (props) => {
  const [biography, SetBio] = useState("");
  const { email, password, username, firstname, lastname, type } = useSelector(
    (state) => state.user
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const userData = { email, password, username, firstname, lastname, type, biography };
    const result = await dispatch(registerAccountAsync(userData));
    if (result.meta.requestStatus === "fulfilled") {
      navigate("/");
    }
  };

  return (
    <div className="login-page-container relative">
      <MobileSidebar link="/" />

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

          <button className="btn btn-plain form-submit" type="submit">
            Suivant
          </button>
          <button className="Bio-ignore-font" type="submit" onClick={() => props.BioPage("")}>
            Ignorer
          </button>
        </form>
      </div>
    </div>
  );
};
