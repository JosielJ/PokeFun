import React from "react";

import "./Pokemon.css";

const Pokemon = (props) => {
    const {pokemon} = props

    const typeBackground = {
        normal: "a8a878",
        grass: "78c850",
        fire: "f08030",
        water: "6890f0",
        ice: "98d8d8",
        bug: "a8b820",
        poison: "a040a0",
        ground: "e0c068",
        rock: "b8a038",
        fighting: "c02038",
        steel: "b8b8d0",
        flying: "a890f0",
        electric: "f8d030",
        ghost: "705898",
        dark: "705848",
        psychic: "f85888",
        fairy: "ee99ac",
        dragon: "6f38f6",
    }

    return(
        <div className="pokemon-container">
            <div className="pokemon-container-card">
                <div className="pokemon-container-card-info">
                    <div className="pokemon-container-card-info-name">
                    {pokemon.name}
                        <div className="pokemon-container-card-info-name-id">
                            #{pokemon.id }
                        </div>
                    </div>
                    <div className="pokemon-container-card-info-type">
                        {pokemon.types.map((type, index) => {
                            return (
                                <div key={index} style={{backgroundColor: `#${typeBackground[type.type.name]}`}} className="pokemon-container-card-info-type-types">{type.type.name}</div>
                            )
                        })}
                    </div>
                </div>
                <div className="pokemon-container-card-image">
                    <img src={pokemon.sprites.front_default} alt={pokemon.name}/>
                </div>
            </div>
        </div>
    )
}

export default Pokemon;