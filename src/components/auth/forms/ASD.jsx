import React from 'react'

export const Asd = (props) => {
    // TODO: 

    const WhenButtonClick = () => {
        const CheckArray = []
        const Childs = document.getElementById('container').children
        for(const child of Childs){
            if(child.localName === "input"){
                if(child.checked === true){
                    CheckArray.push(child.value)
                }
            }
        }
        props.AsdArrayExtraction(CheckArray)
    }


    return (
        <div className="forms-page-container">
            <button className='ButtonButton-To-Previous-Page' type="submit" onClick={() => props.ReturnToPreviousPage()}/>
            <div className='forms-container'>
                <h1 className='form-header-title'>Lorem ipsum dolor sit amet.</h1>
                <form className='login-form-container'>
                    <div className='checkBoxArray'id='container'>
                    <input type="checkbox" className='input-ASD-Checkbox' id="1"  value="1"/>
                    <label for="1">Lorem, ipsum dolor.</label>
                    <input type="checkbox" className='input-ASD-Checkbox' id="2"  value="2"/>
                    <label for="2">Lorem, ipsum dolor.</label>
                    <input type="checkbox" className='input-ASD-Checkbox' id="3"  value="3"/>
                    <label for="3">Lorem, ipsum dolor.</label>
                    <input type="checkbox" className='input-ASD-Checkbox' id="4"  value="4"/>
                    <label for="4">Lorem, ipsum dolor.</label>
                    <input type="checkbox" className='input-ASD-Checkbox' id="5"  value="5"/>
                    <label for="5">Lorem, ipsum dolor.</label>
                    <input type="checkbox" className='input-ASD-Checkbox' id="6"  value="6"/>
                    <label for="6">Lorem, ipsum dolor.</label>
                    <button className='login-form-submit LeftMargin-Button18' type="submit" onClick={() => WhenButtonClick()}>Suivant</button>
                    <button className='login-form-submit LeftMargin-Button18' type="submit" onClick={() =>  props.AsdArrayExtraction(["neuroatypique"])}>Ignorer</button>
                    </div>
                </form>
            </div>
        </div>
    )
} 
