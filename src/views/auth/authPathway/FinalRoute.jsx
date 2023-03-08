import React from 'react'
import { useNavigate } from 'react-router-dom';
import { SideBar } from '../components/layout/SideBar';
import { Biography } from '../components/Biography';
import { useLocation } from 'react-router-dom';

export const FinalRoute = () => {
    
    const navigate = useNavigate() 
    const {state} = useLocation()
    console.log(state.DataForTheAccount.NeuroBalises)
    const ReturnToPreviousPage = () => {
        if(state.DataForTheAccount.Role !== "Curieux") {
        navigate('/'+state.DataForTheAccount.Role, {state : {DataForTheAccount : state.DataForTheAccount}})
    } else {
        navigate('/userChoice', {state : {DataForTheAccount : state.DataForTheAccount}})
    }
}
    const BioPage = (BioEntry) => {
        //Todo check if the bio is ok with web rules
        state.DataForTheAccount.Bio = BioEntry
        console.log(state.DataForTheAccount)
        navigate("/redirected",{state : {DataForTheAccount : state.DataForTheAccount}})

    }
        return (
        <div className='login-form'>
            <SideBar/>
            <Biography BioPage={BioPage} ReturnToPreviousPage={ReturnToPreviousPage}/>
        </div>
        )
}
    
