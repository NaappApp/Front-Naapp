import React from 'react';
import Image from "../../assets/img/logo512.png";

export const SideBar = () => {
    return (
        <div className='sidebar'>
            <div className='sidebar-container'>
                <img src={Image} alt='logo naapp' className='sidebar-logo' />
            </div>
            <p className='sidebar-content'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam possimus harum nulla expedita quae aperiam numquam voluptatibus quisquam cum, perferendis magni magnam optio rem voluptatum incidunt quia deserunt perspiciatis aliquam.</p>
            <p className='sidebar-footer'> Made by the best devs of the world in 2022</p>
            <div className='sidebar-reseaux'>
                <a href="https://fr.linkedin.com/in/lo%C3%A9lia-galliez-6bb7981b4" target="_blank" rel='noreferrer'>
                    <i className="sidebar-socials fa fa-brands fa-linkedin"></i>
                </a>
                <a href="https://www.instagram.com/" target="_blank" rel='noreferrer'>
                    <i className="sidebar-socials fa fa-brands fa-instagram"></i>
                </a>
                <a href="https://fr-fr.facebook.com/" target="_blank" rel='noreferrer'>
                    <i className="sidebar-socials fa fa-brands fa-facebook"></i>
                </a>
            </div>

        </div>
    );
}
