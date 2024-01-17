import React from "react";
import { LoginForm } from "../../components/auth/forms/LoginForm";
import { Sidebar } from "../../components/auth/layout/Sidebar";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = async (email, password) => {
    try {
      const response = await fetch("http://naapp-api.devamarion.fr/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, password })
      });

      if (!response.ok) {
        const data = await response.json();

        if (response.status === 400 && data.msg === "Invalid credentials") {
          throw new Error("Adresse e-mail ou mot de passe invalide !");
        } else {
          throw new Error(data.msg || `Erreur de connexion: ${response.status}`);
        }
      }

      const data = await response.json();

      if (data.token) {
        const expirationTime = new Date();
        expirationTime.setTime(expirationTime.getTime() + 3 * 60 * 60 * 1000);

        document.cookie = `${
          data.token
        }; Secure;  SameSite=None; expires=${expirationTime.toUTCString()}`;
        document.cookie = `tokenExpiration=${expirationTime.toUTCString()}; Secure; SameSite=None`;
        navigate("/app");
      } else {
        const result = "err" + data.msg;
        console.log(result);
        throw new Error(result);
      }
    } catch (error) {
      console.error("Fetch error:", error);
      throw error;
    }
  };

  return (
    <div className="login-form">
      <Sidebar />
      <LoginForm handleSubmit={handleSubmit} />
    </div>
  );
};
