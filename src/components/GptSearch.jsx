import React from "react";
import GptMovieSuggetions from "./GptMovieSuggetions";
import GptSearchBar from "./GptSearchBar";
import { BG_URL } from "../utils/constant";

const GptSearch = () => {
  return (
    <div>
       <div className="fixed -z-10 inset-0 overflow-hidden">
        <img
          className="w-full h-full object-cover"
          src={BG_URL}
          alt="Netflix Background"
        />
      </div>
      <GptSearchBar />
      <GptMovieSuggetions />
    </div>
  );
};

export default GptSearch;
