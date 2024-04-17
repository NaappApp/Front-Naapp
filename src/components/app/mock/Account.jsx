import AccountImg from "../../../assets/icons/account.svg";
import BioImg from "../../../assets/img/bio_img.jpg";
import Image from "../../../assets/icons/Ellipse-temp1.svg";

import "../../../assets/scss/pages/_Account.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFeatherPointed, faCertificate, faPlus } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";

import { useEffect, useState } from "react";

export const Account = () => {
  const [user, setUser] = useState({});
  var listItems = [];
  var listItems2 = [];
  const tokenCookie = document.cookie.split("; ")[1].split("=")[1];
  console.log(tokenCookie);
  useEffect(() => {
    console.log("entered useeffect");
    const getUser = async () => {
      const response = await fetch("http://naapp-api.devamarion.fr/api/auth/me", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${tokenCookie}`
        }
      });
      const data = await response.json();
      console.log("data received");
      console.log(data);
      setUser(data);
    };
    getUser();
  }, []);
  console.log(Object.keys(user).length);

  if (Object.keys(user).length != 0) {
    listItems = user.traits.map((e) => (
      <p className="Traits" key={e}>
        {e}
      </p>
    ));
    listItems2 = user.interests.map((e) => (
      <p className="Interest" key={e}>
        {e}
      </p>
    ));
  }

  return (
    <div className="Account">
      <div className="Account-Header">
        <img src={user.empty ? AccountImg : Image} alt="" className="Account-Image" />
        <div>
          <div className="Account-Header-Pseudo">
            <p className="Account-Header-Name">
              {user.empty ? "Account Name" : user.firstname + " " + user.lastname}{" "}
              <FontAwesomeIcon icon={faFeatherPointed} />
            </p>
            <p>
              <span className="Inter-Font">
                {"@" + user.username + " "}
                <FontAwesomeIcon icon={faCertificate} />
              </span>
            </p>
          </div>
        </div>
        {Object.keys(user).length !== 0 && (
          <div className="Follow">
            <p className="Follow-text">
              {user.followers.length}
              <span className="Inter-Font"> followers - </span>
              {user.following.length}
              <span className="Inter-Font"> suivis</span>
            </p>
          </div>
        )}
        <div className="Tag-traits">
          {listItems}
          <div className="Add-Traits">
            <FontAwesomeIcon icon={faPlus} />
          </div>
        </div>
      </div>
      <div className="Account-sub">
        <div className="Account-sub-menu">
          <div className="Navigation">
            <button className="Account-sub-menu-Item" onClick={(event) => menuDisplay(event)}>
              Qui suis-je ?
            </button>
            <button className="Account-sub-menu-Item" onClick={(event) => menuDisplay(event)}>
              Activités
            </button>
            <button className="Account-sub-menu-Item" onClick={(event) => menuDisplay(event)}>
              Événement
            </button>
            <button className="Account-sub-menu-Item" onClick={(event) => menuDisplay(event)}>
              Paramètres
            </button>
          </div>
          <div className="Header-Bio">
            <div className="Bio">
              <h2 className="Bio-Title">
                <FontAwesomeIcon icon={faUser} /> Qui suis-je ?
              </h2>
              <div className="Bio-Content">
                <img
                  src={user.empty ? AccountImg : BioImg}
                  alt="bio image"
                  className="Bio-Content-Image"
                />
                <p className="Bio-text">{user.biography}</p>
              </div>
            </div>
            {Object.keys(user).length !== 0 && (
              <div className="Interest">
                <p className="Interest-Title">Centre d&apos;intérêt</p>
                <div className="Interest-List">{listItems2}</div>
              </div>
            )}
          </div>
          {/* <div className="Activities">
            <div className="Menu">
              <button className="MyPost-Title" id="MyPost-Title">
                Mon activité
              </button>
              <button className="MyEvent-Title" id="MyEvent-Title">
                Mes Événement
              </button>
            </div>
            <div className="MyPost" id="MyPost">
              <div className="MyPost-Header">
                <p className="CreatePost">Créer un post</p>
              </div>
              <div className="Post">
                <div className="Post-Header">
                  <img src={user.empty ? AccountImg : Image} alt="" className="Post-Image" />
                  <div className="Post-Header-Flex">
                    <p className="Post-Header-Names">
                      {user.Name} {user.FamilyName}
                    </p>
                    <div className="Post-Header-AsdList">{listItems3}</div> 
                  </div>
                </div>
                <p className="Post-text">{user.Bio}</p>
              </div>
            </div>
            <div className="MyEvent" id="MyEvent">
              <div className="MyEvent-Header">
                <p className="CreateEvent">Créer un événement</p>
              </div>
              <div className="Event">
                <div className="Event-Header">
                  <img src={user.empty ? AccountImg : Image} alt="" className="Event-Image" />
                  <div className="Event-Header-Flex">
                    <p className="Event-Header-Names">Test</p>
                    <div className="Event-Header-AsdList">{listItems3}</div>
                  </div>
                </div>
                <p className="Event-text">{user.Bio}</p>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

function menuDisplay(event) {
  var element = event.currentTarget;
  console.log(element);
  element.classList.toggle("Selected");
}
