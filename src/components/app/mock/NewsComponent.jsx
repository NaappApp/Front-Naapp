import React, { useEffect, useState } from "react";
import { Post } from "./Post";
import axios from "axios";

export const News = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const tokenCookie = localStorage.getItem("token");

  const fetchMorePosts = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`http://naapp-api.devamarion.fr/api/posts`, {
        headers: {
          ContentType: "application/json",
          Authorization: "Bearer " + tokenCookie
        }
      });

      setPosts("");
      setPosts((prevPosts) => [...prevPosts, ...response.data]);
    } catch (error) {
      console.error("Une erreur est survenue lors de l'affichage des posts:", error);
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
      // fetchMorePosts(); // Fetch more posts when user scrolls to bottom
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

  return (
    <>
      <section className="NewsPage-section">
        <Post PostInfo={EmptyPost} empty={true}></Post>

        {posts.map((post) => (
          <Post key={post.id} PostInfo={post} />
        ))}
        {loading && <p>Loading...</p>}
      </section>
    </>
  );
};
