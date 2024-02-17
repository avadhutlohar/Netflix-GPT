import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="px-4 md:px-6 overflow-y-hidden">
      <h1 className="py-2 md:py-4 text-lg md:text-3xl text-white">{title}</h1>
      <div className="flex overflow-x-auto md:overflow-x-scroll">
        <div className="flex space-x-4 md:space-x-6">
          {movies?.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
