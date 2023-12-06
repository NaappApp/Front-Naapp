import React from "react";
import Image from "../../../assets/icons/Ellipse-temp1.svg";
import Account from "../../../assets/icons/account.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as farHeart } from "@fortawesome/free-regular-svg-icons";
//import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faComment as farComment } from "@fortawesome/free-regular-svg-icons";
import { faShareFromSquare as farShareFromSquare } from "@fortawesome/free-regular-svg-icons";

export const Post = (props) => {
  const listItems = props.PostInfo.NeuroBalises.map(
    (e) => (
      <p className="Post-Header-AsdList-Item" key={e}>
        {e}
      </p>
    )
    //todo : extracte the data from the textarea
  );
  const switchLike = () => {
    const likeButton = document.getElementById("like-button");
    console.log(likeButton);
    //var classe = likeButton.getClassList().First();
    console.log(likeButton.getClassList);
    // if (classe === "svg-inline--fa fa-heart") {
    //   likeButton.getClassList().remove("svg-inline--fa fa-heart");
    //   likeButton.getClassList().add("svg-solide--fa fa-heart");
    // } else {
    //   likeButton.icon == farHeart;
    // }
  };

  return (
    <div className="Post">
      <div className="Post-Header">
        <img src={props.empty ? Account : Image} alt="" className="Post-Image" />
        <div className="Post-Header-Flex">
          <p className="Post-Header-Names">
            {props.PostInfo.Name} {props.PostInfo.FamilyName}
          </p>
          <div className="Post-Header-AsdList">{listItems}</div>
        </div>
      </div>
      {props.empty ? (
        <textarea type="area" placeholder="Ecrivez quelque chose..." className="Post-input" />
      ) : (
        <>
          <p className="Post-text">{props.PostInfo.text}</p>
          <div className="Post-interaction">
            <div className="Post-like" onClick={switchLike}>
              <FontAwesomeIcon id="like-button" icon={farHeart} />
              <p>{props.PostInfo.Likes}</p>
            </div>
            <div className="Post-comment">
              <FontAwesomeIcon icon={farComment} />
              <p>Commenter</p>
            </div>
            <div className="Post-share">
              <FontAwesomeIcon icon={farShareFromSquare} />
              <p>Partager</p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
