import React from 'react'
import { LoginForm } from '../../components/auth/forms/LoginForm';
import { SideBar } from '../../components/auth/layout/Sidebar';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
    let navigate = useNavigate()

    const handleSubmit = (email, psw) => {
        onAuthenticationSucces()
        // Here check if the given email & password match any data in our api
    }

    const onAuthenticationSucces = () => {
        // Must redirect to the '/redirected url once user is loged   
        navigate('/app')

    }
    const ToRegister = () => {
        navigate('/register')
    }
    const ForgottenPassWord = () => {
        //! Forgotten password is not implemented yet
        navigate('/forgottenPassword')
    }

    return (
        <div className='login-form'>
            <SideBar />
            <LoginForm handleSubmit={handleSubmit} ToRegister={ToRegister} ForgottenPassWord={ForgottenPassWord} />
        </div>
    )
}
