import React from "react";
import Image from "../../assets/icons/main-logo-dark.svg";
import LogoInstagram from "../../assets/icons/instagram.svg";
import LogoLinkedin from "../../assets/icons/linkedin.svg";
import LogoFacebook from "../../assets/icons/facebook.svg";

export const Dashboard = () => {
  return (
    <div className="home">
      <div className="sidebar--home items-center justify-center">
        <div className="sidebar-content">
          <div className="sidebar-container">
            <img src={Image} alt="logo naapp" className="sidebar-logo" />
            <h2 className="sidebar-subtitle">Créez des liens !</h2>
            <p className="sidebar-text">
              Le réseau social français dédié à l’accès à l’information sur la neuroatypie.
            </p>
            <h1 className="my-32 text-5xl font-bold">Disponible prochainement dans sa V2 !</h1>
          </div>

          <footer className="sidebar-footer">
            <div className="sidebar-reseaux flex items-center justify-center">
              <a
                href="https://www.facebook.com/profile.php?id=100089179046629"
                target="_blank"
                rel="noreferrer">
                <img className="sidebar-logoImg" src={LogoFacebook} alt="logo facebook" />
              </a>
              <a href="https://www.instagram.com/naapp_app/" target="_blank" rel="noreferrer">
                <img className="sidebar-logoImg" src={LogoInstagram} alt="logo instagram" />
              </a>
              <a href="https://www.linkedin.com/company/naapp/" target="_blank" rel="noreferrer">
                <img className="sidebar-logoImg" src={LogoLinkedin} alt="logo linkedin" />
              </a>
            </div>
            <nav className="sidebar-footer-nav">
              <a href="/" className="sidebar-footer-link">
                Mentions légales <span className="sidebar-spacing">|</span>
              </a>
              <a href="/" className="sidebar-footer-link">
                Paramètrer les cookies <span className="sidebar-spacing">|</span>
              </a>
              <a href="/" className="sidebar-footer-link">
                Politique de confidentialité <span className="sidebar-spacing">|</span>
              </a>
              <a href="/" className="sidebar-footer-link">
                Nous contacter <span className="sidebar-spacing">|</span>
              </a>
              <a href="/" className="sidebar-footer-link">
                Aide
              </a>
            </nav>
          </footer>
        </div>
      </div>
    </div>
  );
};
