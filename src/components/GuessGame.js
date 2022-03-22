import React, {useState, useEffect} from "react";

import "./GuessGame.css"

import { getrandomPokemons } from '../components/api';
import { motion } from "framer-motion";

function GuessGame() {

    const [empty, setEmpty] = useState(true);
    const [point, setPoint] = useState(0);
    const [time, setTime] = useState(60);
    const [loseGame, setLoseGame] = useState("continue")
    const [pokemon, setPokemon] = useState([]);
    const [pokemonGuess, setPokemonGuess] = useState("a")
    const [loading, setLoading] = useState(true);

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

    const onChangeHandler = (e) => {
        setPokemonGuess(e.target.value)
    }

    const restartButtonHandler = () => {
        restartGame()
    }

    const nextButtonHandler = () => {
        nextPokemon()
    }

    function restartGame () {
        startRandom();
        setTime(60);
        setLoseGame("continue")
    }

    function nextPokemon () {
        randomPokemon();
        setLoseGame("continue")
    }

    function randomPokemon () {
        let idAmount = "1"
        let pokemonID = 1
        if (idAmount === "1") {
            pokemonID = Math.floor(Math.random() * 898)
            console.log("ID 1 =", pokemonID);
            fetchrandomPokemon(pokemonID)
        }
    };

    function firstRandom () {
        let idAmount = "1"
        let pokemonID = 1
        if (idAmount === "1") {
            pokemonID = Math.floor(Math.random() * 898)
            console.log("ID 1 =", pokemonID);
            fetchrandomPokemon(pokemonID)
        }
    };

    async function startRandom () {
        await firstRandom ()
        setTimeout(function() {
            setEmpty(false);
        }, 100)
    };

    function firstRandomFinish () {
        return (
            loading ? (<h1 className="randompokemon-container-list-loading">loading...</h1>) : 
                    (teamSize())
        )
    }

    function gameStatus (Status) {
        let game = Status
        if( game === "lose"){
            return(
                <div className="guessgame-conteiner-body-card-input">
                    <input placeholder="Nome do Pokémon" onChange={onChangeHandler} disabled/>
                    <motion.button onClick={restartButtonHandler} whileHover={{scale: 0.98}} whileTap={{scale: 0.94}}>Recomeçar</motion.button>
                </div>
            )
        }
        if (game === "continue"){
            return(
                <div className="guessgame-conteiner-body-card-input">
                    <input placeholder="Nome do Pokémon" onChange={onChangeHandler}/>
                </div>
            )
        }
        if (game === "nearend"){
            return(
                <div className="guessgame-conteiner-body-card-input">
                    <input placeholder="Nome do Pokémon" onChange={onChangeHandler}/>
                    <motion.button onClick={nextButtonHandler} whileHover={{scale: 0.98}} whileTap={{scale: 0.94}}>Pular</motion.button>
                </div>
            )
        }
    }

    function teamSize () {
            return (
            <div className="guessgame-conteiner-body-pokemon-image"> 
                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${pokemon.id}.png`} alt={pokemon.name}/>
            </div>)
    };

    useEffect(() => {
        startRandom();
    }, []);

    useEffect(() => {
        time > 0 && setTimeout(() => setTime(time - 1), 1000);
        if (pokemonGuess === pokemon.name) {
            setTime(60)
            randomPokemon();
            setPokemonGuess("")
            setPoint(point+1)
        }

        if (time < 20) {
            setLoseGame("nearend")
        }

        if (time === 0) {
            setPoint(0)
            setLoseGame("lose")
        }

    }, [time]);

    return(
        <div className="guessgame-container">
            <div className="guessgame-container-title">
                <h1>Adivinhe o Pokémon!</h1>
            </div>
            <div className="guessgame-conteiner-body">
                <div className="guessgame-conteiner-body-card">
                    <div className="guessgame-conteiner-body-card-top">
                        <div className="guessgame-conteiner-body-card-points">
                            <h1>Pontos: {point}</h1>
                        </div>
                        <div className="guessgame-conteiner-body-card-time">
                            <h1>Tempo: {time}</h1>
                        </div>
                    </div>
                    <div className="guessgame-conteiner-body-card-pokemon">
                    {empty ? (<h1 className="guessgame-conteiner-body-card-pokemon-loading">loading...</h1>) : (firstRandomFinish())
                    }
                    </div>
                    {gameStatus(loseGame)}
                </div>
            </div>
        </div>
    )
}

export default GuessGame;