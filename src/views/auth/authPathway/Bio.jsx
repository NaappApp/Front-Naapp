import React from "react";
import { Sidebar } from "../../../components/auth/layout/Sidebar";
import { UserBio } from "../../../components/auth/forms/UserBio";
//import { useDispatch } from "react-redux";
//import { useNavigate } from "react-router-dom";
//import { updateUser } from "../../../store/user/userSlice";

export const Bio = () => {
  /*
  const dispatch = useDispatch();
  const navigate = useNavigate();
  //MOCK
  const mock = [
    {
      Email: "galliez@y.com",
      mdp: "ynov",
      InterestCenter: ["Sport", "Cinéma", "Gastronomie", "Dessin/Art", "Nature"],
      NeuroBalises: [],
      Name: "Galliez",
      FamilyName: "Loelia",
      Role: "fatiguer",
      Speudo: "",
      Bio: "Bonjour je suis CEO de Naapp",
      From: "",
      Follower: 180,
      Following: 260
    },
    {
      Email: "noa@y.com",
      mdp: "ynov",
      InterestCenter: ["Sport", "Cinéma", "Gastronomie", "Dessin/Art", "Nature"],
      NeuroBalises: ["Dysléxie", "Dyscalculie", "Dysphasie", "TDA"],
      Name: "Noa",
      FamilyName: "LeFaux",
      Role: "NeuroAtypique",
      Speudo: "",
      Bio: "Bonjour je suis un dev web qui aime le code et les jeux video",
      From: "",
      Follower: 180,
      Following: 260
    }
  ];
*/
  /*
  const updateBio = (user) => {
    dispatch(updateUser(user));
    //navigate("/register/bio");

    //MOCK
    navigate("/MainInApp", { state: { Data: mock[0] } });
  };
*/
  return (
    <div className="login-form">
      <Sidebar />
      <UserBio />
    </div>
  );
};
