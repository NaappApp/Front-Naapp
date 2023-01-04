import React from 'react'
import { Forms } from '../components/Forms';
import { SideBar } from '../components/layout/SideBar';

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
            <Forms handleSubmit={handleSubmit} />
        </div>
    )
}
