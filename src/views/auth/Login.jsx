import React from 'react'
import { LoginForm } from '../../components/auth/forms/LoginForm';
import { SideBar } from '../../components/auth/layout/Sidebar';

export const Login = () => {
    const handleSubmit = (e) => {
        console.log(e);
        // Here check if the given email & password match any data in our api
    }

    const onAuthenticationSucces = () => {
        // Must redirect to the '/redirected url once user is loged
    }

    return (
        <div className='login-form'>
            <SideBar />
            <LoginForm handleSubmit={handleSubmit} />
        </div>
    )
}
