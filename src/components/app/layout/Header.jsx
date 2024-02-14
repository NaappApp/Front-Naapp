import React from "react";
import SearchPicto from "../../../assets/icons/search-picto.svg";
import { AppNav } from "./AppNav";

export const Header = () => {
  return (
    <div className="flex justify-center content-center py-10 px-8">
      <div className="relative">
        <span className="absolute top-4 left-4">
          <img src={SearchPicto} alt="Search Picto" />
        </span>
        <input
          type="text"
          placeholder="Rechercher"
          className="w-full border border-solid bg-[#F3F3FC] rounded-full placeholder-[#322A42] py-2 px-4 pl-16 focus:outline-none focus:ring-2 focus:ring-[#322A42] focus:ring-opacity-50"
        />
      </div>
      <AppNav />
    </div>
  );
};
