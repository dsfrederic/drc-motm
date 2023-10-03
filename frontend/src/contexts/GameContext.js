import React, { createContext } from 'react';

const GameContext = createContext();

// create Pet Provider
export const GameProvider = ({ children }) => {
    const value = {};
    return (
        <GameContext.Provider value={value}>
            {children}
        </GameContext.Provider>
    )
};