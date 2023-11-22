import React from "react";
import { Post } from "./Post";
export const News = () => {
  const EmptyPost = {
    Name: "Mathis",
    FamilyName: "SIlotia",
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
        <div className="NewsPage-Right-MSG">
          <h1>Première Version</h1>
          <p>
            Ceci est une première version de notre application. De nouvelles fonctionnalités
            arrivent très prochainement !
          </p>
        </div>
        <Post PostInfo={EmptyPost} empty={true}></Post>
        <Post PostInfo={PostExemple[0]}></Post>
        <Post PostInfo={PostExemple[1]}></Post>
      </section>
    </>
  );
};
