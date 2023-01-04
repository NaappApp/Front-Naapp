import React from 'react'

export const LoginForm = (props) => {
    // TODO: Create a var with useState foreach input (Email & Pwd)

    return (
        <div className="forms-page-container">
            <div className='forms-container'>
                <h1 className='form-header-title'>Se connecter</h1>
                <div className='form-header-socials'>
                    <a href="https://fr.linkedin.com" target="_blank" rel='noreferrer'>
                        <i className="form-header-image fa fa-brands fa-google"></i>
                    </a>
                    <a href="https://www.instagram.com/" target="_blank" rel='noreferrer'>
                        <i className="form-header-image fa fa-brands fa-github"></i>
                    </a>
                    <a href="https://fr-fr.facebook.com/" target="_blank" rel='noreferrer'>
                        <i className="form-header-image fa fa-brands fa-facebook"></i>
                    </a>
                </div>

                <form className='login-form-container'>
                    <div className='input-container'>
                        <input type="email" className='login-input  login-input-email' />
                    </div>
                    <div className='input-container'>
                        <input type="password" className='login-input  login-input-password' />
                    </div>

                    <button className='login-form-submit' type="submit" onClick={props.handleSubmit}>Envoyer</button>
                </form>
            </div>
        </div>
    )
}
