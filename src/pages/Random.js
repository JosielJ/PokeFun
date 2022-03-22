import React from "react";

import "./Random.css";

import Navbar from "../components/Navbar";
import RandomPokemon from "../components/RandomPokemon";

function Random() {
    return (
        <div className="random-container">
        <Navbar />
        <RandomPokemon />
    </div>
    );
;}

export default Random;