import React from "react";
import Image from "../../../assets/icons/Ellipse-temp1.svg";
import like from "../../../assets/icons/like.svg";
import Account from "../../../assets/icons/account.svg";

export const Post = (props) => {
  const listItems = props.PostInfo.NeuroBalises.map(
    (e) => (
      <p className="Post-Header-AsdList-Item" key={e}>
        {e}
      </p>
    )
    //todo : extracte the data from the textarea
  );
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
          <div className="Post-like">
            <img src={like} alt="boutton j'aime" /> <p>{props.PostInfo.Likes}</p>
          </div>
        </>
      )}
    </div>
  );
};
