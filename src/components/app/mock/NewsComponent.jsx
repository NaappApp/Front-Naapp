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
  console.log(user);
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

  const TopHashtag = ["#Dyslexie", "#Hypersensibilité", "#TDAH", "#Autisme"];

  return (
    <>
      <section className="NewsPage-section">
        <div className="NewsPage-Right-MSG">
          <div className="NewsPage-Warning">
            <h1>Avertissement</h1>
            <p>
              L’autodiagnostic peut être dangereux. Si vous suspectez une pathologie / un trouble,
              consultez un professionnel de santé en mesure de fournir un diagnostic fiable.
            </p>
          </div>
          <div className="Hashtag-Container">
            <h2>Top Hashtag</h2>
            <div className="Hashtag-List">
              {TopHashtag.map((e) => (
                <p className="Hashtag-Item" key={e}>
                  {e}
                </p>
              ))}
            </div>
          </div>
        </div>
        <Post PostInfo={EmptyPost} empty={true}></Post>
        <Post PostInfo={PostExemple[0]}></Post>
        <Post PostInfo={PostExemple[1]}></Post>
      </section>
    </>
  );
};
