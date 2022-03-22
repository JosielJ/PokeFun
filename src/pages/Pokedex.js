import React, {useEffect, useState} from "react";

import Navbar from "../components/Navbar";
import Searchbar from "../components/Searchbar";
import Pokelist from "../components/Pokemonlist";
import { getPokemons, searchPokemon, getPokemonData } from '../components/api';

import "./Pokedex.css";

function Pokedex() {

    const [loading, setLoading] = useState(false);
    const [notFound, setNotFound] = useState(false);
    const [pokemons, setPokemons] = useState([]);

    const fetchPokemons = async () => {
        try{
            setLoading(true)
            setNotFound(false)
            const data = await getPokemons();
            const promises = data.results.map(async (pokemon) => {
                return await getPokemonData(pokemon.url)
            });
            const results = await Promise.all(promises);
            setPokemons(results);
            setLoading(false);
        } catch (error) {
            console.log("fetchPokemons erro: ", error);
        }
    }

    useEffect(() => {
        fetchPokemons();
    }, [])

    const onSearchHandler = async (pokemon) => {
        if(!pokemon) {
            return fetchPokemons()
        }
        setLoading(true)
        setNotFound(false)
        const result = await searchPokemon(pokemon)
        if(!result) {
            setLoading(false)
            setNotFound(true)
        } else {
            setPokemons([result])
        }
        setLoading(false)
    }

    return (
        <div className="pokedex-container">
            <Navbar />
            <Searchbar onSearch={onSearchHandler}/>
            {notFound ? (<div className="pokedex-containe-notfound">Nenhum pokémon encontrado!</div>) :
            <Pokelist pokemons={pokemons} loading={loading} />}
        </div>
    );
};

export default Pokedex;