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

        // get game id value
        const getGame = async (id) => {
            console.log("set game with id: " + id);
            const response = await http.get("/api/games/" + id + "?populate[awayTeam][fields][0]=displayName&populate[homeTeam][fields][0]=displayName&populate[homeLineup][populate][player01][fields][0]=firstName&populate[homeLineup][populate][player01][fields][1]=lastName&populate[homeLineup][populate][player02][fields][0]=firstName&populate[homeLineup][populate][player02][fields][1]=lastName&populate[homeLineup][populate][player03][fields][0]=firstName&populate[homeLineup][populate][player03][fields][1]=lastName&populate[homeLineup][populate][player04][fields][0]=firstName&populate[homeLineup][populate][player04][fields][1]=lastName&populate[homeLineup][populate][player05][fields][0]=firstName&populate[homeLineup][populate][player05][fields][1]=lastName&populate[homeLineup][populate][player06][fields][0]=firstName&populate[homeLineup][populate][player06][fields][1]=lastName&populate[homeLineup][populate][player07][fields][0]=firstName&populate[homeLineup][populate][player07][fields][1]=lastName&populate[homeLineup][populate][player08][fields][0]=firstName&populate[homeLineup][populate][player08][fields][1]=lastName&populate[homeLineup][populate][player09][fields][0]=firstName&populate[homeLineup][populate][player09][fields][1]=lastName&populate[homeLineup][populate][player10][fields][0]=firstName&populate[homeLineup][populate][player10][fields][1]=lastName&populate[homeLineup][populate][player11][fields][0]=firstName&populate[homeLineup][populate][player11][fields][1]=lastName&populate[homeLineup][populate][player12][fields][0]=firstName&populate[homeLineup][populate][player12][fields][1]=lastName&populate[homeLineup][populate][player13][fields][0]=firstName&populate[homeLineup][populate][player13][fields][1]=lastName&populate[homeLineup][populate][player14][fields][0]=firstName&populate[homeLineup][populate][player14][fields][1]=lastName&populate[homeLineup][populate][player15][fields][0]=firstName&populate[homeLineup][populate][player15][fields][1]=lastName&populate[homeLineup][populate][player16][fields][0]=firstName&populate[homeLineup][populate][player16][fields][1]=lastName&populate[homeLineup][populate][player17][fields][0]=firstName&populate[homeLineup][populate][player17][fields][1]=lastName&populate[homeLineup][populate][player18][fields][0]=firstName&populate[homeLineup][populate][player18][fields][1]=lastName&populate[homeLineup][populate][player19][fields][0]=firstName&populate[homeLineup][populate][player19][fields][1]=lastName&populate[homeLineup][populate][player20][fields][0]=firstName&populate[homeLineup][populate][player20][fields][1]=lastName&populate[homeLineup][populate][player21][fields][0]=firstName&populate[homeLineup][populate][player21][fields][1]=lastName&populate[homeLineup][populate][player22][fields][0]=firstName&populate[homeLineup][populate][player22][fields][1]=lastName&populate[homeLineup][populate][player23][fields][0]=firstName&populate[homeLineup][populate][player23][fields][1]=lastName&populate[homeLineup][populate][player24][fields][0]=firstName&populate[homeLineup][populate][player24][fields][1]=lastName&populate[awayLineup][populate][player01][fields][0]=firstName&populate[awayLineup][populate][player01][fields][1]=lastName&populate[awayLineup][populate][player02][fields][0]=firstName&populate[awayLineup][populate][player02][fields][1]=lastName&populate[awayLineup][populate][player03][fields][0]=firstName&populate[awayLineup][populate][player03][fields][1]=lastName&populate[awayLineup][populate][player04][fields][0]=firstName&populate[awayLineup][populate][player04][fields][1]=lastName&populate[awayLineup][populate][player05][fields][0]=firstName&populate[awayLineup][populate][player05][fields][1]=lastName&populate[awayLineup][populate][player06][fields][0]=firstName&populate[awayLineup][populate][player06][fields][1]=lastName&populate[awayLineup][populate][player07][fields][0]=firstName&populate[awayLineup][populate][player07][fields][1]=lastName&populate[awayLineup][populate][player08][fields][0]=firstName&populate[awayLineup][populate][player08][fields][1]=lastName&populate[awayLineup][populate][player09][fields][0]=firstName&populate[awayLineup][populate][player09][fields][1]=lastName&populate[awayLineup][populate][player10][fields][0]=firstName&populate[awayLineup][populate][player10][fields][1]=lastName&populate[awayLineup][populate][player11][fields][0]=firstName&populate[awayLineup][populate][player11][fields][1]=lastName&populate[awayLineup][populate][player12][fields][0]=firstName&populate[awayLineup][populate][player12][fields][1]=lastName&populate[awayLineup][populate][player13][fields][0]=firstName&populate[awayLineup][populate][player13][fields][1]=lastName&populate[awayLineup][populate][player14][fields][0]=firstName&populate[awayLineup][populate][player14][fields][1]=lastName&populate[awayLineup][populate][player15][fields][0]=firstName&populate[awayLineup][populate][player15][fields][1]=lastName&populate[awayLineup][populate][player16][fields][0]=firstName&populate[awayLineup][populate][player16][fields][1]=lastName&populate[awayLineup][populate][player17][fields][0]=firstName&populate[awayLineup][populate][player17][fields][1]=lastName&populate[awayLineup][populate][player18][fields][0]=firstName&populate[awayLineup][populate][player18][fields][1]=lastName&populate[awayLineup][populate][player19][fields][0]=firstName&populate[awayLineup][populate][player19][fields][1]=lastName&populate[awayLineup][populate][player20][fields][0]=firstName&populate[awayLineup][populate][player20][fields][1]=lastName&populate[awayLineup][populate][player21][fields][0]=firstName&populate[awayLineup][populate][player21][fields][1]=lastName&populate[awayLineup][populate][player22][fields][0]=firstName&populate[awayLineup][populate][player22][fields][1]=lastName&populate[awayLineup][populate][player23][fields][0]=firstName&populate[awayLineup][populate][player23][fields][1]=lastName&populate[awayLineup][populate][player24][fields][0]=firstName&populate[awayLineup][populate][player24][fields][1]=lastName");
            console.log(response)
            const responseData = Object(response.data.data.attributes);
            console.log(responseData);
            setGame(responseData);
        };

        useEffect(()=>{
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
            getGame,
            game,
            gameId
        };
    
        // context provider
        return(
            <GameContext.Provider value={value}>
                {children}
            </GameContext.Provider>
        )
    }; 