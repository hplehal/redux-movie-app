import React from "react";
import Movie from "./Movie";
import "./MovieList.css"

const MovieList = ({movies})=>(
    <ul className="cardList">
    {movies.map(movie => {
        return <Movie key={movie.id} {...movie} />;
    })}
    </ul>
)

export default MovieList;