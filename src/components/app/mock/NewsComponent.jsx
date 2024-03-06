import React from "react";
import { Post } from "./Post";
import { useEffect, useState } from "react";
export const News = () => {
  const [user, setUser] = useState({});
  const tokenCookie = document.cookie.split("; ")[0];
  console.log(tokenCookie);
  useEffect(() => {
    console.log("entered useeffect");
    const getUser = async () => {
      const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/auth/me`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${tokenCookie}`
        }
      });
      const data = await response.json();
      setUser(data);
    };
    getUser();
  }, []);

  const EmptyPost = {
    Name: user.Name,
    FamilyName: user.FamilyName,
    NeuroBalises: [],
    Likes: 0,
    text: "",
    From: "News"
  };
  const PostExemple = [
    {
      Name: "Honoré",
      FamilyName: "Lise",
      NeuroBalises: [],
      Likes: 66,
      text: "Bonjour je suis nouveau sur Naapp et je suis très content de faire partie de cette communauté !"
    },
    {
      Name: "Lise",
      FamilyName: "Honoré",
      NeuroBalises: ["Dyslexique", "Hypersensible"],
      Likes: 50164,
      text: "La newsletter de ce mois est très intéressante !"
    }
  ];

  return (
    <>
      <section className="NewsPage-section">
        <Post PostInfo={EmptyPost} empty={true}></Post>
        <Post PostInfo={PostExemple[0]}></Post>
        <Post PostInfo={PostExemple[1]}></Post>
      </section>
    </>
  );
};
