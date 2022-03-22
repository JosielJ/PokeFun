import React, {useState, useEffect} from "react";

import Pokemon from "./PokemonGenerated";

import "./RandomPokemon.css";

import { motion } from "framer-motion";

import { getrandomPokemons } from '../components/api';

function RandomPokemon () {

    const [empty, setEmpty] = useState(true);
    const [loading, setLoading] = useState(true);
    const [pokemon, setPokemon] = useState([]);
    const [pokemonTwo, setPokemonTwo] = useState([]);
    const [pokemonThree, setPokemonThree] = useState([]);
    const [pokemonFour, setPokemonFour] = useState([]);
    const [pokemonFive, setPokemonFive] = useState([]);
    const [pokemonSix, setPokemonSix] = useState([]);
    const [teamPokemon, setTeamPokemon] = useState("1");

    const teamSizeHandlerOne = (e) => {
        setTeamPokemon("1")
    };

    const teamSizeHandlerTwo = (e) => {
        setTeamPokemon("2")
    };

    const teamSizeHandlerThree = (e) => {
        setTeamPokemon("3")
    };

    const teamSizeHandlerFour = (e) => {
        setTeamPokemon("4")
    };

    const teamSizeHandlerFive = (e) => {
        setTeamPokemon("5")
    };

    const teamSizeHandlerSix = (e) => {
        setTeamPokemon("6")
    };

    const fetchrandomPokemon = async (pokemonID) => {
        try{            
            setLoading(true)
            const data = await getrandomPokemons(pokemonID);
            console.log(data);
            setPokemon(data);
            setLoading(false);
        } catch (error) {
            console.log("fetchPokemons erro: ", error);
        }
    };
    const fetchrandomPokemonTwo = async (pokemonID) => {
        try{
            setLoading(true)
            const data = await getrandomPokemons(pokemonID);
            console.log(data)
            setPokemonTwo(data);
            setLoading(false);
        } catch (error) {
            console.log("fetchPokemons erro: ", error);
        }
    };
    const fetchrandomPokemonThree = async (pokemonID) => {
        try{
            setLoading(true)
            const data = await getrandomPokemons(pokemonID);
            console.log(data)
            setPokemonThree(data);
            setLoading(false);
        } catch (error) {
            console.log("fetchPokemons erro: ", error);
        }
    };
    const fetchrandomPokemonFour = async (pokemonID) => {
        try{
            setLoading(true)
            const data = await getrandomPokemons(pokemonID);
            console.log(data)
            setPokemonFour(data);
            setLoading(false);
        } catch (error) {
            console.log("fetchPokemons erro: ", error);
        }
    };

    const fetchrandomPokemonFive = async (pokemonID) => {
        try{
            setLoading(true)
            const data = await getrandomPokemons(pokemonID);
            console.log(data)
            setPokemonFive(data);
            setLoading(false);
        } catch (error) {
            console.log("fetchPokemons erro: ", error);
        }
    };

    const fetchrandomPokemonSix = async (pokemonID) => {
        try{
            setLoading(true)
            const data = await getrandomPokemons(pokemonID);
            console.log(data)
            setPokemonSix(data);
            setLoading(false);
        } catch (error) {
            console.log("fetchPokemons erro: ", error);
        }
    };

    const generatePokemonHandler = () => {
        console.log("pokemon gerado")
        console.log(teamPokemon)
        let idAmount = teamPokemon
        let pokemonIDOne = 1
        let pokemonIDTwo = 2
        let pokemonIDThree = 3
        let pokemonIDFour = 4
        let pokemonIDFive = 5
        let pokemonIDSix = 2
        if (idAmount === "1") {
            pokemonIDOne = Math.floor(Math.random() * 898)
            console.log("ID 1 =", pokemonIDOne);
            fetchrandomPokemon(pokemonIDOne);
        }
        if (idAmount === "2") {
            pokemonIDOne = Math.floor(Math.random() * 898)
            console.log("ID 1 =", pokemonIDOne);
            fetchrandomPokemon(pokemonIDOne);
            pokemonIDTwo = Math.floor(Math.random() * 898)
            console.log("ID 2 =", pokemonIDTwo);
            fetchrandomPokemonTwo(pokemonIDTwo);
        }
        if (idAmount === "3") {
            pokemonIDOne = Math.floor(Math.random() * 898)
            console.log("ID 1 =", pokemonIDOne);
            fetchrandomPokemon(pokemonIDOne);
            pokemonIDTwo = Math.floor(Math.random() * 898)
            console.log("ID 2 =", pokemonIDTwo);
            fetchrandomPokemonTwo(pokemonIDTwo);
            pokemonIDThree = Math.floor(Math.random() * 898)
            console.log("ID 3 =", pokemonIDThree);
            fetchrandomPokemonThree(pokemonIDThree);
        }
        if (idAmount === "4") {
            pokemonIDOne = Math.floor(Math.random() * 898)
            console.log("ID 1 =", pokemonIDOne);
            fetchrandomPokemon(pokemonIDOne);
            pokemonIDTwo = Math.floor(Math.random() * 898)
            console.log("ID 2 =", pokemonIDTwo);
            fetchrandomPokemonTwo(pokemonIDTwo);
            pokemonIDThree = Math.floor(Math.random() * 898)
            console.log("ID 3 =", pokemonIDThree);
            fetchrandomPokemonThree(pokemonIDThree);
            pokemonIDFour = Math.floor(Math.random() * 898)
            console.log("ID 4 =", pokemonIDFour);
            fetchrandomPokemonFour(pokemonIDFour);
        }
        if (idAmount === "5") {
            pokemonIDOne = Math.floor(Math.random() * 898)
            console.log("ID 1 =", pokemonIDOne);
            fetchrandomPokemon(pokemonIDOne);
            pokemonIDTwo = Math.floor(Math.random() * 898)
            console.log("ID 2 =", pokemonIDTwo);
            fetchrandomPokemonTwo(pokemonIDTwo);
            pokemonIDThree = Math.floor(Math.random() * 898)
            console.log("ID 3 =", pokemonIDThree);
            fetchrandomPokemonThree(pokemonIDThree);
            pokemonIDFour = Math.floor(Math.random() * 898)
            console.log("ID 4 =", pokemonIDFour);
            fetchrandomPokemonFour(pokemonIDFour);
            pokemonIDFive = Math.floor(Math.random() * 898)
            console.log("ID 5 =", pokemonIDFive);
            fetchrandomPokemonFive(pokemonIDFive);
        }
        if (idAmount === "6") {
            pokemonIDOne = Math.floor(Math.random() * 898)
            console.log("ID 1 =", pokemonIDOne);
            fetchrandomPokemon(pokemonIDOne);
            pokemonIDTwo = Math.floor(Math.random() * 898)
            console.log("ID 2 =", pokemonIDTwo);
            fetchrandomPokemonTwo(pokemonIDTwo);
            pokemonIDThree = Math.floor(Math.random() * 898)
            console.log("ID 3 =", pokemonIDThree);
            fetchrandomPokemonThree(pokemonIDThree);
            pokemonIDFour = Math.floor(Math.random() * 898)
            console.log("ID 4 =", pokemonIDFour);
            fetchrandomPokemonFour(pokemonIDFour);
            pokemonIDFive = Math.floor(Math.random() * 898)
            console.log("ID 5 =", pokemonIDFive);
            fetchrandomPokemonFive(pokemonIDFive);
            pokemonIDSix = Math.floor(Math.random() * 898)
            console.log("ID 6 =", pokemonIDSix);
            fetchrandomPokemonSix(pokemonIDSix);
        }
    };

    function firstRandom () {
        let idAmount = teamPokemon
        let pokemonIDOne = 1
        let pokemonIDTwo = 2
        let pokemonIDThree = 3
        let pokemonIDFour = 4
        let pokemonIDFive = 5
        let pokemonIDSix = 2
        if (idAmount === "1") {
            pokemonIDOne = Math.floor(Math.random() * 898)
            console.log("ID 1 =", pokemonIDOne);
            fetchrandomPokemon(pokemonIDOne)
            pokemonIDTwo = Math.floor(Math.random() * 898)
            console.log("ID 2 =", pokemonIDTwo);
            fetchrandomPokemonTwo(pokemonIDTwo);
            pokemonIDThree = Math.floor(Math.random() * 898)
            console.log("ID 3 =", pokemonIDThree);
            fetchrandomPokemonThree(pokemonIDThree);
            pokemonIDFour = Math.floor(Math.random() * 898)
            console.log("ID 4 =", pokemonIDFour);
            fetchrandomPokemonFour(pokemonIDFour);
            pokemonIDFive = Math.floor(Math.random() * 898)
            console.log("ID 5 =", pokemonIDFive);
            fetchrandomPokemonFive(pokemonIDFive);
            pokemonIDSix = Math.floor(Math.random() * 898)
            console.log("ID 6 =", pokemonIDSix);
            fetchrandomPokemonSix(pokemonIDSix);
        }
    };

    async function startRandom () {
        await firstRandom ()
        setTimeout(function() {
            setEmpty(false);
        }, 500)
    };

    function firstRandomFinish () {
        return (
            loading ? (<h1 className="randompokemon-container-list-loading">loading...</h1>) : 
                    (teamSize())
        )
    }

    function teamSize () {
        if (teamPokemon === "1") {
            return (
            <div className="randompokemon-container-grid"> 
                <Pokemon pokemon={pokemon}/>
            </div>)
        }
        if (teamPokemon === "2") {
            return (
            <div className="randompokemon-container-grid"> 
                <Pokemon pokemon={pokemon}/>
                <Pokemon pokemon={pokemonTwo}/>
            </div>)
        }
        if (teamPokemon === "3") {
            return (
            <div className="randompokemon-container-grid"> 
                <Pokemon pokemon={pokemon}/>
                <Pokemon pokemon={pokemonTwo}/>
                <Pokemon pokemon={pokemonThree}/>
            </div>)
        }
        if (teamPokemon === "4") {
            return (
            <div className="randompokemon-container-grid"> 
                <Pokemon pokemon={pokemon}/>
                <Pokemon pokemon={pokemonTwo}/>
                <Pokemon pokemon={pokemonThree}/>
                <Pokemon pokemon={pokemonFour}/>
            </div>)
        }
        if (teamPokemon === "5") {
            return (
            <div className="randompokemon-container-grid"> 
                <Pokemon pokemon={pokemon}/>
                <Pokemon pokemon={pokemonTwo}/>
                <Pokemon pokemon={pokemonThree}/>
                <Pokemon pokemon={pokemonFour}/>
                <Pokemon pokemon={pokemonFive}/>
            </div>)
        }
        if (teamPokemon === "6") {
            return (
            <div className="randompokemon-container-grid"> 
                <Pokemon pokemon={pokemon}/>
                <Pokemon pokemon={pokemonTwo}/>
                <Pokemon pokemon={pokemonThree}/>
                <Pokemon pokemon={pokemonFour}/>
                <Pokemon pokemon={pokemonFive}/>
                <Pokemon pokemon={pokemonSix}/>
            </div>)
        }
    };

    useEffect(() => {
        startRandom();
    }, []);

    return (
        <div className="randompokemon-container">
            <div className="randompokemon-container-title">
                <h1>Random Pokémon</h1>
            </div>
            <div className="randompokemon-container-filter">
                <form className="randompokemon-container-filter-teamsize">
                    <input type="radio" id="teamsizeone" name="teamsize" onChange={teamSizeHandlerOne} />
                    <label htmlFor="teamsizeone">1</label>
                    <input type="radio" id="teamsizetwo" name="teamsize" onChange={teamSizeHandlerTwo} />
                    <label htmlFor="teamsizetwo">2</label>
                    <input type="radio" id="teamsizethree" name="teamsize" onChange={teamSizeHandlerThree} />
                    <label htmlFor="teamsizethree">3</label>
                    <input type="radio" id="teamsizefour" name="teamsize" onChange={teamSizeHandlerFour} />
                    <label htmlFor="teamsizefour">4</label>
                    <input type="radio" id="teamsizefive" name="teamsize" onChange={teamSizeHandlerFive} />
                    <label htmlFor="teamsizefive">5</label>
                    <input type="radio" id="teamsizesix" name="teamsize" onChange={teamSizeHandlerSix} />
                    <label htmlFor="teamsizesix">6</label>
                </form>
            </div>
            <div className="randompokemon-container-list">
                <div className="randompokemon-container-list-buttom">
                    <motion.button onClick={generatePokemonHandler} whileHover={{scale: 0.98}} whileTap={{scale: 0.94}}>Gerar Pokémon aleatório</motion.button>
                </div>
                {empty ? (<h1 className="randompokemon-container-list-loading">loading...</h1>) : (firstRandomFinish())
                }
            </div>
        </div>
    )
}

export default RandomPokemon;
