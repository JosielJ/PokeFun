import React from "react";
import { motion } from "framer-motion";

import logo from "../components/assets/logo.png"

import "./HomeMenu.css";

import { useNavigate } from "react-router-dom";

export default function HomeMenu(){

    const navigate = useNavigate();

    const linkPokedex = () => {
        navigate("/pokedex");
    };
    const linkGuess = () => {
        navigate("/guess");
    };
    const linkRandom = () => {
        navigate("/random");
    };

    return (
        <div className="container-homemenu">
            <div className="container-homemenu-center">
                <div className="container-homemenu-center-logo">
                    <motion.img animate={{scale: [0.97, 1, 0.97]}} transition={{ ease: "easeInOut", duration: 2, repeat: Infinity }} src={logo} alt="logo"/>
                </div>
                <div className="container-homemenu-center-buttons">
                    <motion.button onClick={linkPokedex} whileHover={{scale: 0.98}} whileTap={{scale: 0.94}}>Pokédex</motion.button>
                    <motion.button onClick={linkGuess} whileHover={{scale: 0.98}} whileTap={{scale: 0.94}}> Guess Pokémon</motion.button>
                    <motion.button onClick={linkRandom} whileHover={{scale: 0.98}} whileTap={{scale: 0.94}}>Random Pokémon</motion.button>
                </div>
            </div>
        </div>
    );
};