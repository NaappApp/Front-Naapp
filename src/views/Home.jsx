import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Footer } from "../components/app/layout/Footer";
import { Header } from "../components/app/layout/Header";

export const Home = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Lors de la vérification de l'authentification
    const cookies = document.cookie.split("; ");
    const tokenCookie = cookies.find((row) => row.trim().startsWith("token="));
    const expirationCookie = cookies.find((row) => row.trim().startsWith("tokenExpiration="));

    const token = tokenCookie ? tokenCookie.split("=")[1] : null;
    const expirationTime = expirationCookie ? new Date(expirationCookie.split("=")[1]) : null;

    if (token && expirationTime && new Date() < expirationTime) {
      setIsLoggedIn(true);
    } else {
      navigate("/login");
    }
  }, [navigate]);

  if (!isLoggedIn) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Header />
      <main className="App">
        <header className="backgroundTest" data-testid="bg-scss">
          <code data-testid="code-element">Code Naapp</code>
        </header>
      </main>
      <Footer />
    </>
  );
};
