import React from "react";
import PropTypes from "prop-types";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Email from "../../../assets/icons/mail.svg";
import Password from "../../../assets/icons/password.svg";
import Eye from "../../../assets/icons/eye.svg";
import { MobileSidebar } from "../layout/MobileSidebar";

export const LoginForm = (props) => {
  let navigate = useNavigate();
  const [passWord, SetPassWord] = useState("");
  const [mail, SetMail] = useState("");
  const [isRemembered, SetIsRemembered] = useState(false);
  const [isPlainPassword, SetIsPlainPassword] = useState(false);
  const [error, setError] = useState(null);

  return (
    <div className="login-page-container">
      <MobileSidebar link="/" />
      <div className="login-container">
        <h1 className="login-header-title">Je me connecte</h1>
        <h2 className="login-header-subtitle">
          Afin d’interagir avec les autres membres de Naapp et voir leurs publications, veuillez
          vous connecter à votre compte.
        </h2>
      </div>
      <form className="form-container">
        <div className="form-input-container">
          <label className="form-input-label" htmlFor="email">
            Adresse Email
          </label>
          <img src={Email} alt="" className="form-input-icon" />
          <input
            type="email"
            placeholder="exemple@mail.fr"
            className="form-input  form-input-email"
            id="email"
            onChange={(e) => {
              SetMail(e.target.value);
            }}
          />
        </div>
        <div className="form-input-container form-input-container--password">
          <label className="form-input-label" htmlFor="pwd">
            Mot de passe
          </label>
          <img src={Password} alt="" className="form-input-icon" />
          <img
            src={Eye}
            onClick={() => SetIsPlainPassword(!isPlainPassword)}
            alt=""
            className="form-input-icon form-input-icon--right"
          />
          <input
            type={isPlainPassword ? "text" : "password"}
            placeholder="********"
            autoComplete="current-password"
            className="form-input  form-input-password"
            id="pwd"
            onChange={(e) => {
              SetPassWord(e.target.value);
            }}
          />
          <div className="form-input-remember">
            <input
              className="form-input-checkbox"
              type="checkbox"
              name="remember"
              id="remember"
              onChange={(e) => {
                SetIsRemembered(e.target.value);
              }}
            />
            <label className="form-label-checkbox" htmlFor="remember">
              Restez connecté(e)
            </label>
          </div>
        </div>
        <div className="form-submit">
          <button
            className="btn-custom btn-plain"
            type="button"
            onClick={() => {
              setError(null);
              props
                .handleSubmit(mail, passWord, isRemembered)
                .catch((err) => setError(err.message));
            }}>
            Se connecter
          </button>
          <button className="login-invisible-button" onClick={() => navigate("/forgottenPassword")}>
            <p className="form-missing">Mot de passe oublié ?</p>
          </button>
        </div>
        {error && <h2 className="error-message login-header-subtitle">{error}</h2>}

        <div className="login-register">
          <h3>Pas encore membre ? Rejoignez nous !</h3>
          <button className="btn-custom btn-outlined mt-6" onClick={() => navigate("/register")}>
            Créer votre compte
          </button>
        </div>
      </form>
    </div>
  );
};

LoginForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired
};
