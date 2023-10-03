import React from 'react';
    
// custom component
import GameList from '../components/GameList';
import CreateGameEntry from '../components/CreateGameEntry';
import EditGameEntry from '../components/EditGameEntry';

// contexts
import { useGameContext } from '../contexts/GameContext';
const Interface = () => {
    const { nav_value } = useGameContext();
    
    switch (nav_value) {
        case "GameList":
            return <GameList/>
        case "AddGame":
            return <CreateGameEntry/>
        case "EditGame":
            return <EditGameEntry/>
        default:
            return <GameList/>
    };
};
export default Interface;