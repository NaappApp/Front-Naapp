import React from "react";
import Image from "../../../assets/icons/main-logo-dark.svg";
import LogoInstagram from "../../../assets/icons/instagram.svg";
import LogoLinkedin from "../../../assets/icons/linkedin.svg";
import LogoFacebook from "../../../assets/icons/facebook.svg";
import CirclePicto from "../../../assets/icons/circle-info-picto.svg";
import { useNavigate } from "react-router-dom";

export const SideBar = () => {
  const navigate = useNavigate();

  return (
    <div className="sidebar-In">
      <div className="sidebar-In-content">
        <header className="empty-container">
          <div
            className="tooltip absolute top-8 left-8 tooltip-right"
            data-tip="L’autodiagnostic peut être dangereux. Si vous suspectez une pathologie / un trouble, consultez un professionnel de santé en mesure de fournir un diagnostic fiable.">
            <img src={CirclePicto} alt="" className="w-8 h-8" />
          </div>
        </header>
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

        <footer>
          <div className="flex items-center justify-start">
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
          <nav>
            <ul className="menu menu-md">
              <li>
                <a href="/">Mentions légales</a>
              </li>
              <li>
                <a href="/">Paramètrer les cookies</a>
              </li>
              <li>
                <a href="/">Politique de confidentialité</a>
              </li>
              <li>
                <a href="/">Nous contacter</a>
              </li>
              <li>
                <a href="/">Aide</a>
              </li>
            </ul>
          </nav>
        </footer>
      </div>
    </div>
  );
};
