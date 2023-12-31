import React, { createContext, useContext, useEffect, useState } from 'react';
import http from '../http';
const GameContext = createContext();

export const useGameContext = () => {
    return useContext(GameContext);
};

export const GameProvider = ({ children }) => {
    const [games, setGames] = useState("");
    const [nav_value, set_nav_value] = useState("GameList");
    const [gameId, setGameId] = useState("");
    const [game, setGame] = useState("");

    // add new game
    const createNewGame = async (data) => {
        await http.post("/api/games", data);
    };
    // update a game entry
    const updateGame = async (gameId, data) => {
        await http.put(`/api/games/${gameId}`, data);
    };
    // delete a game entry
    const deleteGame = async (gameId) => {
        await http.delete(`/api/games/${gameId}`);
    };
    // change navigation value
    const changeNavValue = (value) => {
        set_nav_value(value);
    };
    // get game id value
    const getGameId = (id) => {
        setGameId(id);
    };

    useEffect(() => {
        const readAllGames = async () => {
            const response = await http.get("/api/games?populate[awayTeam][fields][0]=displayName&populate[homeTeam][fields][0]=displayName");
            const responseArr = Object.values(response.data.data);
            setGames(responseArr);
        };
        return readAllGames;
    }, []);

    const value = {
        createNewGame,
        games,
        updateGame,
        deleteGame,
        changeNavValue,
        nav_value,
        getGameId,
        setGame,
        game,
        gameId
    };

    // context provider
    return (
        <GameContext.Provider value={value}>
            {children}
        </GameContext.Provider>
    )
}; 