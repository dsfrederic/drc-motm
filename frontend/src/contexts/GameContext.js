import React, { createContext, useContext, useEffect, useState } from 'react';
    import http from '../http';
    const GameContext = createContext();
    
    export const useGameContext = () => {
        return useContext(GameContext);
    };
    
    export const GameProvider = ({children}) => {
        const [games, setGames] = useState("");
        const [nav_value, set_nav_value] = useState("GameList");
        const [gameId, setGameId] = useState("");
        
        // add new pet
        const createNewGame = async (data) => {
            await http.post("/api/games", data);
        };
        // update a pet entry
        const updateGame = async (gameId, data) => {
            await http.put(`/api/games/${gameId}`, data);
        };
        // delete a pet entry
        const deleteGame = async (gameId) => {
            await http.delete(`/api/games/${gameId}`);
        };
        // change navigation value
        const changeNavValue = (value) => {
            set_nav_value(value);
        };
        // get pet id value
        const getGameId = (id) => {
            setGameId(id);
        };
    
        useEffect(()=>{
            const readAllPets = async () => {
                const response = await http.get("/api/games");
                const responseArr = Object.values(response.data.data);
                setGames(responseArr);
            };
            return readAllPets;
        }, []);
    
        const value = {
            createNewGame,
            games,
            updateGame,
            deleteGame,
            changeNavValue,
            nav_value,
            getGameId,
            gameId
        };
    
        // context provider
        return(
            <GameContext.Provider value={value}>
                {children}
            </GameContext.Provider>
        )
    }; 