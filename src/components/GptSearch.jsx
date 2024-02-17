import React from "react";
import GptMovieSuggetions from "./GptMovieSuggetions";
import GptSearchBar from "./GptSearchBar";
import { BG_URL } from "../utils/constant";

const GptSearch = () => {
  return (
    <>
      <div className="fixed -z-10 overflow-hidden">
        <img
          className=" w-screen  h-screen object-cover"
          src={BG_URL}
          alt="logo"
        />
      </div>
      <div className="">
        <GptSearchBar />
        <GptMovieSuggetions />
      </div>
    </>
  );
};

export default GptSearch;
