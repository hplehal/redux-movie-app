import React from "react";
import "./Movie.css";

const Movie = ({title, overview, poster_path}) =>{
    const src = `https://image.tmdb.org/t/p/w600_and_h900_bestv2/${poster_path}`
    return <li className="card">
        <img src={src} alt="" />
        <h1>{title}</h1>
        <p>{overview}</p>
      </li>;
}

export default Movie;