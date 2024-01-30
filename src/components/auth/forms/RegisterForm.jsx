import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import EmailImg from "../../../assets/icons/mail.svg";
import Password from "../../../assets/icons/password.svg";
import Eye from "../../../assets/icons/eye.svg";
import { MobileSidebar } from "../layout/MobileSidebar";
import { useDispatch } from "react-redux";
import { updateUser } from "../../../store/user/userSlice";

export const RegisterForm = (props) => {
  const [password, SetPassword] = useState("");
  const [checkPassword, SetCheckPassword] = useState("");
  const [email, SetEmail] = useState("");
  const [isPlainPassword, SetIsPlainPassword] = useState(false);
  let navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(updateUser({ email, password, checkPassword }));
    navigate("/register/name");
  };

  return (
    <div className="login-page-container Email-MDP-flex-column">
      <MobileSidebar link="/" />
      <div className="login-container">
        <h1 className="login-header-title">Inscrivez - vous !</h1>
        <h2 className="login-header-subtitle">
          Veuillez vous inscrire afin d’interagir avec les autres membres de Naapp et voir leurs
          publications.
        </h2>
      </div>
      <form className="form-container" onSubmit={handleSubmit}>
        <div className="form-input-container">
          <label className="form-input-label" htmlFor="email">
            Adresse Email
          </label>
          <img src={EmailImg} alt="" className="form-input-icon" />
          <input
            type="email"
            placeholder="exemple@mail.fr"
            autoComplete="email"
            className="form-input  form-input-email"
            id="email"
            onChange={(e) => SetEmail(e.target.value)}
          />
          {props.errorMessage.property === "email" && (
            <span className="error-message">{props.errorMessage.message}</span>
          )}
        </div>
        <div className="form-input-container form-input-container--password">
          <label className="form-input-label" htmlFor="pwd">
            Mot de passe
          </label>
          <img src={Password} alt="" className="form-input-icon" />
          <img
            src={Eye}
            onClick={() => SetIsPlainPassword(!isPlainPassword)}
            alt="Inverse visibilité mot de passe"
            className="form-input-icon form-input-icon--right"
          />
          <input
            type={isPlainPassword ? "text" : "password"}
            placeholder="********"
            className="form-input  form-input-password"
            autoComplete="new-password"
            id="pwd"
            onChange={(e) => SetPassword(e.target.value)}
          />
          {props.errorMessage.property === "password" && (
            <span className="error-message">{props.errorMessage.message}</span>
          )}
        </div>
        <div className="form-input-container form-input-container--password">
          <label className="form-input-label" htmlFor="checkpwd">
            Validation de votre mot de passe
          </label>
          <img src={Password} alt="" className="form-input-icon" />
          <img
            src={Eye}
            onClick={() => SetIsPlainPassword(!isPlainPassword)}
            alt="Inverse visibilité mot de passe"
            className="form-input-icon form-input-icon--right"
          />
          <input
            type={isPlainPassword ? "text" : "password"}
            placeholder="********"
            className="form-input  form-input-password"
            autoComplete="new-password"
            id="checkpwd"
            onChange={(e) => SetCheckPassword(e.target.value)}
          />
          {props.errorMessage.property === "password" && (
            <span className="error-message">{props.errorMessage.message}</span>
          )}
        </div>
        <button className="btn btn-plain form-submit" type="submit">
          S’inscrire
        </button>

        <div className="Email-MDP-MarginTop">
          <h3 className="Email-MDP-ReCenter">Déja membre ?</h3>
          <button className="btn btn-outlined mt-6" onClick={() => navigate("/")}>
            Connexion
          </button>
        </div>
      </form>
    </div>
  );
};
