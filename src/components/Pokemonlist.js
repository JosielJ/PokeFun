import React from "react";

import Pokemon from "./Pokemon";

import "./Pokemonlist.css";

const Pokelist = (props) => {

    const {pokemons, loading} = props;

    return (
        <div className="pokelist-container">
            <div className="pokelist-container-title">
                <h1>Pokédex</h1>
            </div>
            <div className="pokelist-container-filter">
            </div>
            <div className="pokelist-container-list">
                {loading ? (<h1 className="pokelist-container-list-loading">loading...</h1>) : 
                    (<div className="pokelist-container-grid"> 
                        {pokemons.map((pokemon, index) => {
                            return (<Pokemon key={index} pokemon={pokemon}/>)
                        })}
                    </div>)
                }
            </div>
        </div>
    )
}

export default Pokelist;