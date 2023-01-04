import React from 'react'
import { Footer } from '../components/app/layout/Footer'
import { Header } from '../components/appLayout/Header'

export const Home = () => {
    return (
        <>
            <Header />
            <main className='App'>
                <header className='backgroundTest' data-testid='bg-scss'>
                    <code data-testid='code-element'>Let's code Naapp</code>
                </header>
            </main>
            <Footer />
        </>

    )
}
