import React, { useState } from "react";

import { motion } from "framer-motion";

import "./Searchbar.css"

const Searchbar = (props) => {

    const {onSearch} = props

    const [search, setSearch] = useState();
    const onChangeHandler = (e) => {
        setSearch(e.target.value)
        if(e.target.value.length === 0) {
            onSearch(undefined)
        }
    }

    const onButtonClickHandler = () => {
        onSearch(search)
    }

    return (
        <div className="searchbar-container">
            <div className="searchbar-container-searchinput">
                <input placeholder="Buscar Pokemon" onChange={onChangeHandler} />
            </div>
            <div className="searchbar-container-button">
                <motion.button onClick={onButtonClickHandler} whileHover={{scale: 0.98}} whileTap={{scale: 0.94}}>Buscar</motion.button>
            </div>
        </div>
    );
};

export default Searchbar;
