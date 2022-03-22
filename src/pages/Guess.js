import React from "react";

import "./Guess.css"

import Navbar from "../components/Navbar";
import GuessGame from "../components/GuessGame";

function Guess() {
    return (
        <div className="guess-container">
            <Navbar />
            <GuessGame />
        </div>
    );
};

export default Guess;