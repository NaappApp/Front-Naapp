import React from 'react'
import { useState } from "react";



export const UserType = (props) => {

    const [role, SetRole] = useState("");

    return (
        <div className="forms-page-container">
            <button className='ButtonButton-To-Previous-Page' type="submit" onClick={() => props.ReturnToPreviousPage()} />
            <div className='forms-container'>
                <h1 className='form-header-title title-header'>Indiquez nous qui vous êtes !</h1>
                <div className="radio-container" onChange={(e) => { SetRole(e.target.value) }}>
                    <input type="radio" id="Professionel" name="role" value="Professionel" className="role" />
                    <label for="Professionel">Professionel</label>
                    <input type="radio" id="NEUROATYPIQUE" name="role" value="NEUROATYPIQUE" className="role" />
                    <label for="NEUROATYPIQUE">NEUROATYPIQUE</label>
                    <input type="radio" id="Curieux" name="role" value="Curieux" className="role" />
                    <label for="Curieux">Curieux</label>
                </div>
                <div className="button-container">
                    <button type="submit" className="button" onClick={() => props.saveRole(role)}>Suivant</button>
                </div>



            </div>
        </div>
    )
}