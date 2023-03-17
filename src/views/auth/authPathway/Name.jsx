import React from 'react'
import { Sidebar } from '../components/layout/SideBar';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Speudo } from '../components/Speudo'
export const Name = () => {

    const navigate = useNavigate()
    const { state } = useLocation()

    const ReturnToPreviousPage = () => {
        navigate('/register')
    }

    const SpeudoDataExtraction = (Speudo, FirstName, LastName) => {
        state.DataForTheAccount.Speudo = Speudo
        state.DataForTheAccount.Name = FirstName
        state.DataForTheAccount.FamilyName = LastName
        navigate('/userChoice', { state: { DataForTheAccount: state.DataForTheAccount } })
    }

    return (
        <div className='login-form'>
            <Sidebar />
            <Speudo SpeudoDataExtraction={SpeudoDataExtraction} ReturnToPreviousPage={ReturnToPreviousPage} />
        </div>
    )
}
