import React from 'react'
import { useState } from "react";

export const UserPersonals = (props) => {
    // TODO: 
    const [pseudo, SetPseudo] = useState("");
    const [firstName, SetFirstName] = useState("");
    const [lastName, SetLastName] = useState("");



    return (
        <div className="forms-page-container">
            <button className='ButtonButton-To-Previous-Page' type="submit" onClick={() => props.ReturnToPreviousPage()} />
            <div className='forms-container'>
                <h1 className='form-header-title'>Renseigner vos informations</h1>
                <form className='login-form-container'>
                    <div className='input-container'>
                        <input type="Speudo" placeholder='Entrer votre Pseudo' className='login-input  login-input-Speudo' onChange={(e) => { SetPseudo(e.target.value) }} />
                    </div>

                    <div className='input-container'>
                        <input type="Prenom" placeholder='Entrer votre Prénom' className='login-input  login-input-Prenom' onChange={(e) => { SetFirstName(e.target.value) }} />
                    </div>

                    <div className='input-container'>
                        <input type="Nom" placeholder='Entrer votre Nom' className='login-input  login-input-Nom' onChange={(e) => { SetLastName(e.target.value) }} />
                    </div>
                    <button className='login-form-submit LeftMargin-Button18' type="submit" onClick={() => props.updatePersonals(pseudo, firstName, lastName)}>Suivant</button>

                </form>
            </div>
        </div>
    )
} 
