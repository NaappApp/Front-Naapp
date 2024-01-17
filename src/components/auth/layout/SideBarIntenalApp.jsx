import React from "react";
import Image from "../../../assets/icons/main-logo-dark.svg";
import LogoInstagram from "../../../assets/icons/instagram.svg";
import LogoLinkedin from "../../../assets/icons/linkedin.svg";
import LogoFacebook from "../../../assets/icons/facebook.svg";
import { useNavigate } from "react-router-dom";

export const SideBar = () => {
  const navigate = useNavigate();

  return (
    <div className="sidebar-In">
      <div className="sidebar-In-content">
        <header className="empty-container"></header>
        <div className="sidebar-In-container">
          <img src={Image} alt="logo naapp" className="sidebar-In-logo" />
        </div>
        <div className="sidebar-In-p-container">
          <p onClick={() => navigate("/")}>Fil d’actualité</p>
          <p onClick={() => navigate("/")}>Événements</p>
          <p onClick={() => navigate("/")}>Astuces</p>
          <p onClick={() => navigate("/account")}>Mon compte</p>
          <p onClick={() => navigate("/")}>Paramètres</p>
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
