import AccountImg from "../../../assets/icons/account.svg";
import Image from "../../../assets/icons/Ellipse-temp1.svg";
import "../../../assets/scss/components/Mock/Event.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
export const Account = (props) => {
  const listItems = props.info.Data.NeuroBalises.map(
    (e) => (
      <p className="Post-Header-AsdList-Item2" key={e}>
        {e}
      </p>
    )
    //todo : extracte the data from the textarea
  );

  const listItems2 = props.info.Data.InterestCenter.map((e) => (
    <p className="Post-Header-AsdList-Item2" key={e}>
      {e}
    </p>
  ));

  const listItems3 = props.info.Data.NeuroBalises.map(
    (e) => (
      <p className="Post-Header-AsdList-Item" key={e}>
        {e}
      </p>
    )
    //todo : extracte the data from the textarea
  );
  return (
    <div className="Account">
      <div className="Account-Header">
        <img src={props.empty ? AccountImg : Image} alt="" className="Account-Image" />
        <div>
          <p className="Account-Header-Names">
            {props.info.Data.Name} {props.info.Data.FamilyName}
          </p>
          <div className="Tag-NeuroBalises">{listItems}</div>
        </div>
        <button className="ModifyProfile">Modifier le profile</button>
      </div>
      <div className="Account-sub">
        <div className="Follow">
          <FontAwesomeIcon icon={faUsers} />
          <p className="Follow-text">
            {props.info.Data.Follower} abonné(e)s - {props.info.Data.Following} Suivi(e)s
          </p>
        </div>
        <div className="InterestCenter">
          <p className="InterestCenter-Title">Centre d&apos;intérêt</p>
          <div className="InterestCenter-List">{listItems2}</div>
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
                <img src={props.empty ? AccountImg : Image} alt="" className="Post-Image" />
                <div className="Post-Header-Flex">
                  <p className="Post-Header-Names">
                    {props.info.Data.Name} {props.info.Data.FamilyName}
                  </p>
                  <div className="Post-Header-AsdList">{listItems3}</div>
                </div>
              </div>
              <p className="Post-text">{props.info.Data.Bio}</p>
            </div>
          </div>
          <div className="MyEvent" id="MyEvent">
            <div className="MyEvent-Header">
              <p className="CreateEvent">Créer un événement</p>
            </div>
            <div className="Event">
              <div className="Event-Header">
                <img src={props.empty ? AccountImg : Image} alt="" className="Event-Image" />
                <div className="Event-Header-Flex">
                  <p className="Event-Header-Names">Test</p>
                  <div className="Event-Header-AsdList">{listItems3}</div>
                </div>
              </div>
              <p className="Event-text">{props.info.Data.Bio}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
