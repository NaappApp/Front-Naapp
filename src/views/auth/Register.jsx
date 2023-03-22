import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Sidebar } from '../../components/auth/layout/Sidebar';
import { RegisterForm } from '../../components/auth/forms/RegisterForm';

export const Register = () => {
    const navigate = useNavigate();
    const [account, setAccount] = useState({
        email: "",
        pseudo: "",
        firstName: "",
        lastName: "",
        bio: "",
        role: "",
        NeuroBalises: [],
    });

    const createAccount = (email, password, checkPassword) => {
        //TODO: Email verification and check if email already exists in the DB
        //TODO: Create the account in the API
        setAccount((prevData) => ({ ...prevData, email: email }));
        navigate('/register/name', { state: { account } });
    };

    return (
        <div className='Email-MDP-Page'>
            <Sidebar />
            <RegisterForm createAccount={createAccount} />
        </div>
    );
}

