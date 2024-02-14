import React from "react";
import { useState } from "react";
import { MobileSidebar } from "../layout/MobileSidebar";
import InteretsMusique from "../../../assets/icons/InteretsMusique.png";
import InteretsCuisine from "../../../assets/icons/InteretsCuisine.png";
import InteretsDanse from "../../../assets/icons/InteretsDanse.png";
import InteretsGames from "../../../assets/icons/InteretsGames.png";
import InteretsMode from "../../../assets/icons/InteretsMode.png";
import InteretsArts from "../../../assets/icons/InteretsArts.png";
import { useNavigate } from "react-router-dom";

const interetsList = [
  { id: 1, name: "Musique", image: InteretsMusique },
  { id: 2, name: "Mode/Lifestyle", image: InteretsMode },
  { id: 3, name: "Cuisine", image: InteretsCuisine },
  { id: 4, name: "Art/Peinture", image: InteretsArts },
  { id: 5, name: "Jeux vidéos", image: InteretsGames },
  { id: 6, name: "Danse", image: InteretsDanse }
];
export const UserInterets = () => {
  const [selectedInterets, setSelectedInterets] = useState([]);

  const toggleSelection = (interetId) => {
    if (selectedInterets.includes(interetId)) {
      setSelectedInterets(selectedInterets.filter((id) => id !== interetId));
    } else {
      setSelectedInterets([...selectedInterets, interetId]);
    }
  };
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    navigate("/register/following");
  };

  return (
    <div className="login-page-container relative">
      <form className="form-container" onSubmit={handleSubmit}>
        <MobileSidebar link="/register" />
        <div className="login-container">
          <h1 className="login-header-title">Qu’est-ce qui vous anime dans la vie ?</h1>
          <h2 className="login-header-subtitle">Sélectionnez vos centres d’intérêt</h2>
          <input type="text" placeholder="Recherche" className="searchField" />
          <button type="submit" className="searchButton"></button>
          <div className="search">
            <ul className="categories">
              {interetsList.map((interet) => (
                <li
                  key={interet.id}
                  onClick={() => toggleSelection(interet.id)}
                  className={
                    selectedInterets.includes(interet.id) ? "interest selected" : "interest"
                  }>
                  <label>
                    <img
                      src={interet.image}
                      alt={`Logo ${interet.name}`}
                      className=""
                      title={`Interets-${interet.name}`}
                    />
                    <span>{interet.name}</span>
                  </label>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <button className="btn btn-plain form-submit" type="submit">
          Suivant
        </button>
        <button className="Bio-ignore-font" type="submit">
          Ignorer
        </button>
      </form>
    </div>
  );
};
