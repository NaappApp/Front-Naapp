import React, { useState } from "react";
import Image from "../../../assets/icons/Ellipse-temp1.svg";
import Account from "../../../assets/icons/account.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import {
  faComment as farComment,
  faHeart as farHeart,
  faShareFromSquare as farShareFromSquare,
  faCircleXmark as farCircleXmark
} from "@fortawesome/free-regular-svg-icons";
import axios from "axios";

export const Post = (props) => {
  const tokenCookie = document.cookie.split("; ")[0];
  const [post, setnewPost] = useState();
  const [error, setError] = useState("");
  const [likeIcon, setLikeIcon] = useState(farHeart);
  const listItems = props.PostInfo.NeuroBalises
    ? props.PostInfo.NeuroBalises.map((e) => (
        <p className="Post-Header-AsdList-Item" key={e}>
          {e}
        </p>
      ))
    : (e) => (
        <p className="Post-Header-AsdList-Item" key={e}>
          error
        </p>
      );

  const getUserActive = async () => {
    try {
      return await axios.get("http://naapp-api.devamarion.fr/api/auth/me", {
        headers: {
          ContentType: "application/json",
          Authorization: "Bearer " + tokenCookie
        }
      });
    } catch (error) {
      console.log("Une erreur est survenue lors de la récupération de l'utilisateur actif", error);
    }
  };

  const newPost = async (text) => {
    try {
      let dataUser = await getUserActive();

      const postData = {
        content: text,
        userId: dataUser.data.id
      };

      const responseNewPost = await axios.post(
        "http://naapp-api.devamarion.fr/api/posts",
        postData,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + tokenCookie
          }
        }
      );

      console.log(responseNewPost);
      setnewPost((prevPosts) => [...prevPosts, responseNewPost.data]);
    } catch (error) {
      setError("Une erreur est survenue lors de l'ajout d'un nouveau post");
      console.log("Une erreur est survenue lors de l'ajout d'un nouveau post", error);
    }
  };

  const handleKeyDown = async (e) => {
    if (e.key === "Enter") {
      console.log(post);
      e.preventDefault();
      await newPost(post);
      setnewPost("");
    }
  };

  const closeMessage = () => {
    setError("");
  };

  const likePost = async (idPost, nbLike) => {
    try {
      await axios.put("http://naapp-api.devamarion.fr/api/posts/" + idPost, {
        headers: {
          ContentType: "application/json",
          Authorization: "Bearer " + tokenCookie
        },
        data: { nbLike }
      });
    } catch (error) {
      setError("Une erreur est survenue lors du like du post");
      console.log("Une erreur est survenue lors du like du post", error);
    }
  };

  const switchLike = async (idPost, nbLike) => {
    console.log(nbLike + 1);
    await likePost(idPost, nbLike + 1);
    likeIcon === faHeart ? setLikeIcon(farHeart) : setLikeIcon(faHeart);
  };

  return (
    <div className="Post">
      {error ? (
        <div className="Post-Message">
          <p className="Post-Error">
            {error} <FontAwesomeIcon onClick={closeMessage} icon={farCircleXmark} />
          </p>
        </div>
      ) : (
        ""
      )}
      <div className="Post-Header">
        <img src={props.empty ? Account : Image} alt="" className="Post-Image" />
        <div className="Post-Header-Flex">
          <p className="Post-Header-Names">
            {!props.empty ? (
              <a className="Post-text">
                {props.PostInfo.user.firstname + " " + props.PostInfo.user.lastname}
              </a>
            ) : (
              ""
            )}
          </p>
          <div className="Post-Header-AsdList">{listItems}</div>
        </div>
      </div>
      {props.empty ? (
        <form>
          <textarea
            type="area"
            value={post}
            onChange={(e) => setnewPost(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Ecrivez quelque chose..."
            className="Post-input"
          />
        </form>
      ) : (
        <>
          <p className="Post-text">{props.PostInfo.content}</p>
          <div className="Post-interaction">
            <div
              className="Post-like"
              onClick={() => switchLike(props.PostInfo.id, props.PostInfo.likes)}>
              <FontAwesomeIcon id="like-button" icon={likeIcon} />
              <p>{props.PostInfo.likes}</p>
            </div>
            <div className="Post-comment">
              <FontAwesomeIcon icon={farComment} />
            </div>
            <div className="Post-share">
              <FontAwesomeIcon icon={farShareFromSquare} />
            </div>
          </div>
        </>
      )}
    </div>
  );
};
