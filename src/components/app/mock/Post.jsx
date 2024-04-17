import React, { useEffect, useState } from "react";

import Image from "../../../assets/icons/Ellipse-temp1.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import {
  faCircleXmark as farCircleXmark,
  faComment as farComment,
  faFileImage as farFileImage,
  faHeart as farHeart,
  faShareFromSquare as farShareFromSquare
} from "@fortawesome/free-regular-svg-icons";
import axios from "axios";

export const Post = (props) => {
  const tokenCookie = document.cookie.split("; ")[0];
  const [post, setNewPost] = useState("");
  const [image, setImage] = useState(null);
  const [error, setError] = useState("");
  const [likeIcon, setLikeIcon] = useState(farHeart);
  const [showDeletePopup, setShowDeletePopup] = useState(false);
  const [mediaUrl, setMediaUrl] = useState(null);

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
      return await axios.get(`${process.env.REACT_APP_API_BASE_URL}/auth/me`, {
        headers: {
          ContentType: "application/json",
          Authorization: "Bearer " + tokenCookie
        }
      });
    } catch (error) {
      console.log("Une erreur est survenue lors de la récupération de l'utilisateur actif", error);
    }
  };

  const verifUserPost = async () => {
    try {
      let dataUser = await getUserActive();

      if (dataUser.data.id === props.PostInfo.creatorId) {
        return true;
      } else {
        return false;
      }
    } catch (error) {
      console.log(
        "Une erreur est survenue lors de la vérification de l'utilisateur du post",
        error
      );
      return false;
    }
  };

  const newPost = async (text) => {
    try {
      let dataUser = await getUserActive();
      const postData = {
        content: text,
        userId: dataUser.data.id,
        file: image
      };

      const responseNewPost = await axios.post(
        `${process.env.REACT_APP_API_BASE_URL}/posts`,

        postData,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + tokenCookie
          }
        }
      );
      setNewPost("");
      setError("");

    } catch (error) {
      setError("Une erreur est survenue lors de l'ajout d'un nouveau post");
      console.log("Une erreur est survenue lors de l'ajout d'un nouveau post", error);
    }
  };

  const handleKeyDown = async (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      await newPost(post);
    }

  };

  const closeMessage = () => {
    setError("");
  };

  const likePost = async (idPost) => {
    try {
      const responseLike = await axios.get(
        `${process.env.REACT_APP_API_BASE_URL}/posts/` + idPost + `/like/`,
        {
          headers: {
            ContentType: "application/json",
            Authorization: "Bearer " + tokenCookie
          }
        }
      );
      return responseLike;
    } catch (error) {
      setError("Une erreur est survenue lors du like du post");
      console.log("Une erreur est survenue lors du like du post", error);
    }
  };

  const switchLike = async (idPost, nbLike) => {
    let resultLike = await likePost(idPost);
    if (resultLike) {
      likeIcon === faHeart && resultLike.data.message !== "Post liked"
        ? setLikeIcon(farHeart)
        : setLikeIcon(faHeart);
    }
  };

  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      const postDataMedia = {
        file: image
      };

      setImage(file);
      const responseImage = await axios.post(
        `${process.env.REACT_APP_API_BASE_URL}/medias`,
        postDataMedia,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: "Bearer " + tokenCookie
          }
        }
      );
      setImage(null);
    }
  };

  const handleGetMediaByPost = async (postId) => {
    try {
      let response = "";
      postId
        ? (response = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/posts/${postId}`, {
            headers: {
              ContentType: "application/json",
              Authorization: "Bearer " + tokenCookie
            }
          }))
        : (response = false);

      if (response.data.medias && response.data.medias.length > 0) {
        const mediaId = response.data.medias[0].id;
        fetchMedia(mediaId);
      }
    } catch (error) {
      console.log("Error while fetching post data:", error);
    }
  };

  const fetchMedia = async (mediaId) => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/medias/${mediaId}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + tokenCookie
        },
        responseType: "blob"
      });

      const blob = response.data;
      setMediaUrl(URL.createObjectURL(blob));
    } catch (error) {
      console.log("Error while fetching media:", error);
    }
  };

  const handleDeleteClick = () => {
    setShowDeletePopup(true);
  };

  const handleConfirmDelete = async (idPost) => {
    try {
      const userPostResult = await verifUserPost();

      if (userPostResult) {
        const responseDelete = await axios.delete(
          `${process.env.REACT_APP_API_BASE_URL}/posts/` + idPost,
          {
            headers: {
              ContentType: "application/json",
              Authorization: "Bearer " + tokenCookie
            }
          }
        );
        setShowDeletePopup(false);
      } else {
        console.log("L'utilisateur actuel n'est pas l'auteur du post.");
        setError("L'utilisateur actuel n'est pas l'auteur du post.");
        setShowDeletePopup(false);
      }
    } catch (error) {
      setError("Une erreur est survenue lors de la suppression du post");
      console.log("Une erreur est survenue lors de la suppression du post", error);
    }
  };
  useEffect(() => {
    handleGetMediaByPost(props.PostInfo.id);
  }, []);

  return (
    <div className="Post">
      <div className="Post-header">
        {!props.empty && (
          <div title="supprimer le post ?" className="delete-icon" onClick={handleDeleteClick}>
            <FontAwesomeIcon icon={farCircleXmark} />
          </div>
        )}
        <div className="Post-Header-Flex">
          <div className="Post-Header-Content">
            <img src={Image} alt="" className="Post-Image" />
            <div className="Post-Header-Text">
              <p className="Post-Header-Names">
                {props.PostInfo.user
                  ? props.PostInfo.user.firstname + " " + props.PostInfo.user.lastname
                  : ""}
              </p>
              <div className="Post-Header-AsdList">{listItems}</div>
            </div>
          </div>
        </div>
      </div>

      {showDeletePopup && !props.empty && (
        <div className="delete-popup">
          <p>Voulez-vous vraiment supprimer ce post ?</p>
          <button onClick={handleConfirmDelete(props.PostInfo.id)}>Confirmer</button>
          <button onClick={() => setShowDeletePopup(false)}>Annuler</button>
        </div>
      )}
      {error ? (
        <div role="alert" className="alert alert-error">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="stroke-current shrink-0 h-6 w-6"
            fill="none"
            viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>
            {error} <FontAwesomeIcon onClick={closeMessage} icon={farCircleXmark} />
          </span>
        </div>
      ) : (
        ""
      )}

      {props.empty ? (
        <div className="card">
          <div className="card-body">
            <textarea
              type="area"
              value={post}
              onChange={(e) => setNewPost(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Ecrivez quelque chose..."
              className="textarea textarea-lg bg-transparent"
            />
            <label className="relative text-white-400 focus-within:text-white-600 block">
              <FontAwesomeIcon
                className="pointer-events-none w-10 h-10 absolute top-1/2 transform -translate-y-1/2 left-3"
                icon={farFileImage}
              />
              <input
                type="file"
                onChange={handleImageChange}
                className="form-input Post-area-input"
              />
            </label>
          </div>
        </div>
      ) : (
        <>
          <p className="Post-text"> {props.PostInfo.content}</p>
          {mediaUrl && <img className="Post-media" src={mediaUrl} alt="test" />}
          <div className="Post-interaction">
            <div className="Post-like" onClick={() => switchLike(props.PostInfo.id)}>
              <FontAwesomeIcon
                id="like-button"
                icon={
                  props.PostInfo.likers && props.PostInfo.likers.includes(props.PostInfo.creatorId)
                    ? faHeart
                    : likeIcon
                }
              />
              <p>{props.PostInfo.Likes}</p>
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
