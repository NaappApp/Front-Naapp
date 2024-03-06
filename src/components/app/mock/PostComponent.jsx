import React, { useEffect, useState } from "react";
import { Post } from "./Post";
import axios from "axios";

export const News = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const tokenCookie = document.cookie.split("; ")[0];
  console.log(tokenCookie);
  const fetchMorePosts = async () => {
    setLoading(true);
    try {
      const response = await axios.get("http://naapp-api.devamarion.fr/api/posts", {
        headers: {
          Authorization: "Bearer " + tokenCookie
        }
      });
      setPosts((prevPosts) => [...prevPosts, ...response.data]);
    } catch (error) {
      console.error("Error fetching posts:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMorePosts();
  }, []);

  const handleScroll = () => {
    const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
    if (scrollTop + clientHeight >= scrollHeight - 20 && !loading) {
      fetchMorePosts(); // Fetch more posts when user scrolls to bottom
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const EmptyPost = {
    Name: "",
    FamilyName: "",
    NeuroBalises: [],
    Likes: 0,
    text: "",
    From: "News"
  };
  const TopHashtag = ["#Dyslexie", "#Hypersensibilité", "#TDAH", "#Autisme"];
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

        {posts.map((post) => (
          <Post key={post.id} PostInfo={post} />
        ))}
        {loading && <p>Loading...</p>}
        <Post PostInfo={PostExemple[0]}></Post>
        <Post PostInfo={PostExemple[1]}></Post>
      </section>
    </>
  );
};
