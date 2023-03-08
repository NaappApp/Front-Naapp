import React from 'react';
import Image from "../../../assets/icons/main-logo-dark.svg";
import LogoInstagram from "../../../assets/icons/instagram.svg";
import LogoLinkedin from "../../../assets/icons/linkedin.svg";
import LogoFacebook from "../../../assets/icons/facebook.svg";

export const SideBar = () => {
    return (
        <div className='sidebar'>
            <input type="checkbox" id="show-menu" />
            <label htmlFor="show-menu" className="sidebar-menu-icon"><i className="fa fa-bars"></i></label>
            <div className="sidebar-content">
                <header className='empty-container'>
                </header>
                <div className='sidebar-container'>
                    <img src={Image} alt='logo naapp' className='sidebar-logo' />
                    <p className='sidebar-text'>Premier réseau social français dédié à l’accès à l’information sur la neuroatypie. </p>
                    <p className='sidebar-text-par'>Directement concerné, curieux, ou encore professionnel de santé, partagez vos expériences, demandez des avis et conseils, trouvez des ressources et bien plus encore.</p>
                    <h2 className='sidebar-subtitle'>Créez des liens !</h2>
                </div>

                <footer className='sidebar-footer'>
                    <div className='sidebar-reseaux'>
                        <a href="https://www.facebook.com/profile.php?id=100089179046629" target="_blank" rel='noreferrer'>
                            <img className='sidebar-logoImg' src={LogoFacebook} alt="logo facebook" />
                        </a>
                        <a href="https://www.instagram.com/naapp_app/" target="_blank" rel='noreferrer'>
                            <img className='sidebar-logoImg' src={LogoInstagram} alt="logo instagram" />
                        </a>
                        <a href="https://www.linkedin.com/company/naapp/" target="_blank" rel='noreferrer'>
                            <img className='sidebar-logoImg' src={LogoLinkedin} alt="logo linkedin" />
                        </a>
                    </div>
                    <nav className='sidebar-footer-nav'>
                        <a href='/' className='sidebar-footer-link'>Mentions légales <span className='sidebar-spacing'>|</span></a>
                        <a href='/' className='sidebar-footer-link'>Paramètrer les cookies <span className='sidebar-spacing'>|</span></a>
                        <a href='/' className='sidebar-footer-link'>Politique de confidentialité <span className='sidebar-spacing'>|</span></a>
                        <a href='/' className='sidebar-footer-link'>Nous contacter <span className='sidebar-spacing'>|</span></a>
                        <a href='/' className='sidebar-footer-link'>Aide</a>
                    </nav>
                </footer>
            </div>
        </div>
    );
}
