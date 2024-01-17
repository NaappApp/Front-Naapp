import React from "react";
import { useState } from "react";
import { MobileSidebar } from "../layout/MobileSidebar";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../../../store/user/userSlice";

export const UserPersonals = () => {
  const [username, Setusername] = useState("");
  const [firstname, SetFirstName] = useState("");
  const [lastname, SetLastName] = useState("");
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const { email, password } = useSelector((state) => state.user);

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(updateUser({ email, password, username, firstname, lastname }));
    navigate("/register/type");

    //props.updatePersonals(user);
  };

  return (
    <div className="login-page-container relative">
      <MobileSidebar link="/register" />
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
                Setusername(e.target.value);
              }}
            />
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
          </div>

          <button className="btn btn-plain form-submit" type="submit">
            Suivant
          </button>
        </form>
      </div>
    </div>
  );
};
