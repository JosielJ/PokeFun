import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import { HiMenu } from "react-icons/hi"

import logo from "../components/assets/logo.png"

import "./Navbar.css"

export default function Navbar(){

    const [menuVisibility, setmenuVisibility] = useState(true);

    function menuClick(){
        setmenuVisibility(!menuVisibility)
    }

    useEffect(() => {
        let windowWidth = window.screen.width;
        console.log(windowWidth)
        if (windowWidth > 999) {
            setmenuVisibility(true)
        } else {
            setmenuVisibility(true)
        }
    }, []);

        return(
            <div className="container-navbar">
                <nav>
                    <motion.img src={logo} alt="logo"/>
                    <div onClick={menuClick} className="container-navbar-resposive">
                        <HiMenu />
                    </div>
                    <motion.ul className={menuVisibility ? "container-navbar-navlist" : "container-navbar-navlist-active"}>
                        <li>
                        <Link to={"/"}>Home</Link>
                        </li>
                        <li>
                        <Link to={"/guess"}>Guess Pokemon</Link>
                        </li>
                        <li>
                        <Link to={"/random"}>Random Pokemon</Link>
                        </li>
                        <li>
                        <Link to={"/pokedex"}>Pokedex</Link>
                        </li>
                    </motion.ul>
                </nav>
            </div>
    );
};

/*<motion.ul className={menuVisibility ? "container-navbar-navlist" : "container-navbar-navlist-active"}>

<motion.ul className="container-navbar-navlist">*/