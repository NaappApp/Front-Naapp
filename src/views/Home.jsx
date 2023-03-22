import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Footer } from "../components/app/layout/Footer";
import { Header } from "../components/app/layout/Header";

export const Home = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login");
    } else {
      setIsLoggedIn(true);
    }
  }, [navigate, isLoggedIn]);

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
