import React from 'react'
import { useState } from "react";
import Email from "../../../assets/icons/mail.svg";
import Password from "../../../assets/icons/password.svg";
import Eye from "../../../assets/icons/eye.svg";


export const LoginForm = (props) => {
    const [passWord, SetPassWord] = useState("");
    const [mail, SetMail] = useState("");
    const [isRemembered, SetIsRemembered] = useState(false);
    const [isPlainPassword, SetIsPlainPassword] = useState(false);

    return (
        <div className="login-page-container">
            <div className='login-container'>
                <h1 className='login-header-title'>Se connecter</h1>
                <h2 className='login-header-subtitle'>Afin d’interagir avec les autres membres de Naapp et voir leurs publications, veuillez vous connecter à votre compte.</h2>
                <form className='form-container'>
                    <div className='form-input-container'>
                        <label className='form-input-label' htmlFor="email">Adresse Email</label>
                        <img src={Email} alt="" className='form-input-icon' />
                        <input type="email" placeholder='exemple@mail.fr' className='form-input  form-input-email' id='email' onChange={(e) => { SetMail(e.target.value) }} />
                    </div>
                    <div className='form-input-container form-input-container--password'>
                        <label className='form-input-label' htmlFor="pwd">Mot de passe</label>
                        <img src={Password} alt="" className='form-input-icon' />
                        <img src={Eye} onClick={() => SetIsPlainPassword(!isPlainPassword)} alt="" className='form-input-icon form-input-icon--right' />
                        <input type={isPlainPassword ? 'text' : 'password'} placeholder='********' className='form-input  form-input-password' id='pwd' onChange={(e) => { SetPassWord(e.target.value) }} />
                        <div className='form-input-remember'>
                            <input className='form-input-checkbox' type="checkbox" name="remember" id="remember" onChange={(e) => { SetIsRemembered(e.target.value) }} />
                            <label className='form-label-checkbox' htmlFor="remember">Restez connecté(e)</label>
                        </div>

                    </div>
                    <button className='btn btn-outlined form-submit' type="submit" onClick={() => props.handleSubmit(mail, passWord, isRemembered)}>Envoyer</button>
                    <button className='login-invisible-button' onClick={() => props.ForgottenPassWord()}><p className='form-missing'>Mot de passe oublié ?</p></button>
                    <div className='login-register'>
                        <h3>Pas encore membre ? Rejoignez nous !</h3>
                        <button className='btn btn-plain form-register-btn' onClick={() => props.ToRegister()}>Créer votre compte</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
