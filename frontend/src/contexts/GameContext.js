import React, { createContext } from 'react';

const GameContext = createContext({ children });

// create Pet Provider
export const GameProvider = () => {
    const value = {};
    return (
        <GameContext.Provider value={value}>
            {children}
        </GameContext.Provider>
    )
};