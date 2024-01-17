import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerAccountAsync } from "../../../store/user/userSlice";
import { useNavigate } from "react-router-dom";
import {MobileSidebar} from "../layout/MobileSidebar";

export const UserBio = (props) => {
  const [biography, SetBio] = useState("");
  const { email, password, username, firstname, lastname, type } = useSelector(
    (state) => state.user
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const userData = { email, password, username, firstname, lastname, type, biography };
    const result = await dispatch(registerAccountAsync(userData));
    if (result.meta.requestStatus === "fulfilled") {
      navigate("/");
    }
  };

  return (
    <div className="login-page-container relative">
      <MobileSidebar link="/" />

      <div className="login-container">
        <h1 className="login-header-subtitle">Dites nous en plus sur vous</h1>

        <form className="form-container" onSubmit={handleSubmit}>
          <div className="form-input-container  form-input-container-regular">
            <textarea
              placeholder="écriver votre biographie"
              className="Bio-Text-box"
              onChange={(e) => {
                SetBio(e.target.value);
              }}
            />
          </div>

          <button className="btn btn-plain form-submit" type="submit">
            Suivant
          </button>
          <button className="Bio-ignore-font" type="submit" onClick={() => props.BioPage("")}>
            Ignorer
          </button>
        </form>
      </div>
    </div>
  );
};

/*import { Biography } from '../components/Biography';
   const BioPage = (BioEntry) => {
        //Todo check if the bio is ok with web rules
        DataForTheAccount.Bio = BioEntry
    }*/
