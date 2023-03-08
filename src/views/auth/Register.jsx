import React from 'react'
import { useState } from "react";

export const Register = (props) => {
    const [firstPassWord, SetPassFirstWord] = useState("");
    const [secondPassWord, SetPassSecondWord] = useState("");
    const [Email, SetEMail] = useState("");

    return (
        <div className="forms-page-container">
            <button className='ButtonButton-To-Previous-Page' type="submit" onClick={() => props.ReturnToPreviousPage()} />
            <div className='forms-container'>
                <h1 className='form-header-title'>Renseigner vos informations</h1>
                <form className='login-form-container'>

                    <div className='input-container'>
                        <input type="email" placeholder='Entrer votre Email' className='login-input  login-input-email' onChange={(e) => { SetEMail(e.target.value) }} />
                    </div>

                    <div className='input-container'>
                        <input type="password" placeholder='Entrer un mot de passe' className='login-input  login-input-password' onChange={(e) => { SetPassFirstWord(e.target.value) }} />
                    </div>

                    <div className='input-container'>
                        <input type="password" placeholder='Confirmer votre MDP' className='login-input  login-input-password' onChange={(e) => { SetPassSecondWord(e.target.value) }} />
                    </div>
                    <button className='login-form-submit LeftMargin-Button18' type="submit" onClick={() => props.EmailAndPassWord(Email, firstPassWord, secondPassWord)}>Suivant</button>

                </form>
            </div>
        </div>
    )
} 
