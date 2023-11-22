import React from "react";
import Image from "../../../assets/icons/main-logo-dark.svg";
import LogoInstagram from "../../../assets/icons/instagram.svg";
import LogoLinkedin from "../../../assets/icons/linkedin.svg";
import LogoFacebook from "../../../assets/icons/facebook.svg";
import { useNavigate } from "react-router-dom";

export const SideBar = (props) => {
  if (props.state === undefined) props.state.From = "News";

  const navigate = useNavigate();
  const ToNews = () => {
    props.state.From = "News";
    navigate("/MainInApp", { state: props.state });
  };
  const events = () => {
    props.state.From = "News";
    navigate("/Events", { state: props.state });
  };
  const tips = () => {
    props.state.From = "News";
    navigate("/tips", { state: props.state });
  };
  const account = () => {
    props.state.From = "News";
    navigate("/account", { state: props.state });
  };
  const settings = () => {
    props.state.From = "News";
    navigate("/settings", { state: props.state });
  };
  return (
    <div className="sidebar-In">
      <div className="sidebar-In-content">
        <header className="empty-container"></header>
        <div className="sidebar-In-container">
          <img src={Image} alt="logo naapp" className="sidebar-In-logo" />
        </div>
        <div className="sidebar-In-p-container">
          <p onClick={() => ToNews()}>Fil d’actualité</p>
          <p onClick={() => events()}>Événements</p>
          <p onClick={() => tips()}>Astuces</p>
          <p onClick={() => account()}>Mon compte</p>
          <p onClick={() => settings()}>Paramètres</p>
        </div>

        <footer className="sidebar-In-footer">
          <div className="sidebar-In-reseaux">
            <a
              href="https://www.facebook.com/profile.php?id=100089179046629"
              target="_blank"
              rel="noreferrer">
              <img className="sidebar-In-logoImg" src={LogoFacebook} alt="logo facebook" />
            </a>
            <a href="https://www.instagram.com/naapp_app/" target="_blank" rel="noreferrer">
              <img className="sidebar-In-logoImg" src={LogoInstagram} alt="logo instagram" />
            </a>
            <a href="https://www.linkedin.com/company/naapp/" target="_blank" rel="noreferrer">
              <img className="sidebar-In-logoImg" src={LogoLinkedin} alt="logo linkedin" />
            </a>
          </div>
          <nav className="sidebar-In-footer-nav">
            <a href="/" className="sidebar-In-footer-link">
              Mentions légales <span className="sidebar-In-spacing">|</span>
            </a>
            <a href="/" className="sidebar-In-footer-link">
              Paramètrer les cookies <span className="sidebar-In-spacing">|</span>
            </a>
            <a href="/" className="sidebar-In-footer-link">
              Politique de confidentialité <span className="sidebar-In-spacing">|</span>
            </a>
            <a href="/" className="sidebar-In-footer-link">
              Nous contacter <span className="sidebar-In-spacing">|</span>
            </a>
            <a href="/" className="sidebar-In-footer-link">
              Aide
            </a>
          </nav>
        </footer>
      </div>
    </div>
  );
};
