import React from 'react';
    
// custom component
import GameList from '../components/GameList';
import VoteEntry from '../components/VoteEntry';
import SignIn from '../components/SignIn';

// contexts
import { useGameContext } from '../contexts/GameContext';
const Interface = () => {
    const { nav_value } = useGameContext();
    
    switch (nav_value) {
        case "GameList":
            return <GameList/>
        case "Vote":
            return <VoteEntry/>
        case "SignIn":
            return <SignIn/>
        default:
            return <GameList/>
    };
};
export default Interface;