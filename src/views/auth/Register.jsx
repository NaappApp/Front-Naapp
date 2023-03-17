import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Sidebar } from '../../components/auth/layout/Sidebar';
import { RegisterForm } from '../../components/auth/forms/RegisterForm';

export const Register = () => {
    let navigate = useNavigate()

    const DataForTheAccount = {
        Bio: "",
        Email: "",
        Role: "",
        Name: "",
        Speudo: "",
        FamilyName: "",
        NeuroBalises: [],
    };
    const EmailAndPassWord = (email, PSW1, PSW2) => {
        //TODO , Mail verification is the email is not already in the DB
        //Todo , create the account in the API
        DataForTheAccount.Email = email
        navigate('/name', { state: { DataForTheAccount: DataForTheAccount } })
    }
    const ToLogin = () => {
        navigate('/')
    }

    return (
        <div className='Email-MDP-Page'>
            <Sidebar />
            <RegisterForm EmailAndPassWord={EmailAndPassWord} ToLogin={ToLogin} />
        </div>
    )
}

