import React from 'react'
import { useNavigate } from 'react-router-dom';
import { SideBar } from '../components/layout/SideBar';
import { useLocation } from 'react-router-dom';
import { Asd } from '../components/ASD';

const ASDtype = ["neuroatypique", "autisme", "trouble du spectre autistique", "trouble envahissant du développement", "trouble du développement global", "trouble"]

export const ASD = () => {
    let navigate = useNavigate()
    const { state } = useLocation()
    
    const ReturnToPreviousPage = () => {
        navigate('/userChoice', {state : {DataForTheAccount : state.DataForTheAccount}})
    }

    const AsdArrayExtraction = (array) => {
        state.DataForTheAccount.NeuroBalises = array
        navigate("/FinalRoute",{state : {DataForTheAccount : state.DataForTheAccount}})
    }
        return (
        <div className='Email-MDP-Page'>
            <SideBar/>
            <Asd AsdArrayExtraction={AsdArrayExtraction} ReturnToPreviousPage={ReturnToPreviousPage} ASDtype={ASDtype}/>
        </div>
        )

}
    
