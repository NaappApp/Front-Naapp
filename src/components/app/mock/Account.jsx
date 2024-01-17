import AccountImg from "../../../assets/icons/account.svg";
import Image from "../../../assets/icons/Ellipse-temp1.svg";
import "../../../assets/scss/pages/_Account.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser as farUsers } from "@fortawesome/free-regular-svg-icons";
import { useEffect, useState } from "react";

export const Account = () => {
  const [user, setUser] = useState({});

  const tokenCookie = document.cookie.split("; ")[0];
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
      setUser(data);
    };
    getUser();
  }, []);
  console.log(user);
  console.log(Object.keys(user).length);
  // const listItems = user.traits.map(
  //   (e) => (
  //     <p className="Post-Header-AsdList-Item2" key={e}>
  //       {e}
  //     </p>
  //   )
  //   //todo : extracte the data from the textarea
  // );

  // const listItems2 = user.interests.map((e) => (
  //   <p className="Post-Header-AsdList-Item2" key={e}>
  //     {e}
  //   </p>
  // ));

  return (
    <div className="Account">
      <div className="Account-Header">
        <img src={user.empty ? AccountImg : Image} alt="" className="Account-Image" />
        <div>
          <p className="Account-Header-Names">{user.username}</p>
          {/* <div className="Tag-traits">{listItems}</div> */}
        </div>
        <button className="ModifyProfile">Modifier le profile</button>
      </div>
      <div className="Account-sub">
        {Object.keys(user).length !== 0 && (
          <div className="Follow">
            <FontAwesomeIcon icon={farUsers} />
            <p className="Follow-text">
              {user.followers.length} abonné(e)s - {user.following.length} Suivi(e)s
            </p>
          </div>
        )}
        <div className="header-Bio">
          <div className="Bio">
            <p className="Bio-Title">Bio</p>
            <p className="Bio-text">{user.biography}</p>
          </div>
          {Object.keys(user).length !== 0 && (
            <div className="Interest">
              <p className="Interest-Title">Centre d&apos;intérêt</p>
              {/* <div className="Interest-List">{listItems2}</div> */}
            </div>
          )}
        </div>
        <div className="Activities">
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
                  {/* <div className="Post-Header-AsdList">{listItems3}</div> */}
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
                  {/* <div className="Event-Header-AsdList">{listItems3}</div> */}
                </div>
              </div>
              <p className="Event-text">{user.Bio}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
