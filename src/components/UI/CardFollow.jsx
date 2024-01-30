import React, { useState, useEffect } from "react";
import profile from "../../assets/icons/profile.svg";

export const CardFollow = async () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 767);
  const [isFollow, setIsFollow] = useState("+");

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 767);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="form-container-follow">
      <div className="div1">
        <img className="profile" src={profile} alt="profile" />
      </div>
      <div className="div2">
        <h1 className="">Loélia Galliez</h1>
        <br />
        <span className="">Maman d’un enfant TDAH avec des TSA</span>
      </div>
      <div className="div3">
        {!isMobile && (
          <button className="btn btn-plain form-submit" type="submit">
            S&apos;abonner
          </button>
        )}
        {isMobile && (
          <button
            onClick={() => {
              setIsFollow("V");
            }}
            className="btn btn-plain form-submit"
            type="submit">
            {isFollow}
          </button>
        )}
      </div>
    </div>
  );
};
