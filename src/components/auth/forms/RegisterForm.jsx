import React from 'react'
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import ReturnButton from '../../../assets/img/ReturnButton.png'
import EmailImg from "../../../assets/icons/mail.svg";
import Password from "../../../assets/icons/password.svg";
import Eye from "../../../assets/icons/eye.svg";

export const RegisterForm = (props) => {
    const [passWord, SetPassword] = useState("");
    const [checkPassword, SetCheckPassword] = useState("");
    const [email, SetEMail] = useState("");
    const [isPlainPassword, SetIsPlainPassword] = useState(false);
    let navigate = useNavigate()


    return (
        <div className="login-page-container Email-MDP-flex-column">
            <div className='Email-MDP-flex'>
                <img src={ReturnButton} alt="Bouton pour retourner à la page précédente" onClick={() => props.ToLogin()} className='Email-MDP-ButtonToPreviousPage' />
                <h1 className='login-header-title'>Inscrivez - vous !</h1>
            </div>
            <div className='login-container'>
                <h2 className='Email-MDP-subtitle'>Veuillez vous inscrire afin d’interagir avec les autres membres de Naapp et voir leurs publications.</h2>
                <form className='form-container'>
                    <div className='form-input-container'>
                        <label className='form-input-label' htmlFor="email">Adresse Email</label>
                        <img src={EmailImg} alt="" className='form-input-icon' />
                        <input type="email" placeholder='exemple@mail.fr' className='form-input  form-input-email' id='email' onChange={(e) => SetEMail(e.target.value)} />
                    </div>
                    <div className='form-input-container form-input-container--password'>
                        <label className='form-input-label' htmlFor="pwd">Mot de passe</label>
                        <img src={Password} alt="" className='form-input-icon' />
                        <img src={Eye} onClick={() => SetIsPlainPassword(!isPlainPassword)} alt="Inverse visibilité mot de passe" className='form-input-icon form-input-icon--right' />
                        <input type={isPlainPassword ? 'text' : 'password'} placeholder='********' className='form-input  form-input-password' id='pwd' onChange={(e) => SetPassword(e.target.value)} />
                    </div>
                    <div className='form-input-container form-input-container--password'>
                        <label className='form-input-label' htmlFor="checkpwd">Validation de votre mot de passe </label>
                        <img src={Password} alt="" className='form-input-icon' />
                        <img src={Eye} onClick={() => SetIsPlainPassword(!isPlainPassword)} alt="Inverse visibilité mot de passe" className='form-input-icon form-input-icon--right' />
                        <input type={isPlainPassword ? 'text' : 'password'} placeholder='********' className='form-input  form-input-password' id='checkpwd' onChange={(e) => SetCheckPassword(e.target.value)} />
                    </div>
                    <button className='btn btn-outlined form-submit' type="submit" onClick={() => props.createAccount(email, passWord, checkPassword)}>S'inscrire</button>

                    <div className='Email-MDP-MarginTop'>
                        <h3 className='Email-MDP-ReCenter'>Déja membre ?</h3>
                        <button className='btn btn-plain form-register-btn' onClick={() => navigate('/')}>Se Connecter</button>
                    </div>
                </form>
            </div>
        </div>
    )
} 
