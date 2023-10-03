import * as React from 'react';
    
// core components
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';

// icons
import {
    GamesOutlined,
    AddCircleOutline,
} from '@mui/icons-material';

// contexts
import { useGameContext } from '../contexts/GameContext';

export default function LabelBottomNavigation() {
    const { nav_value, changeNavValue } = useGameContext();
    const handleChange = (event, newValue) => {
        changeNavValue(newValue);
    };
    return (
        <BottomNavigation showLabels value={nav_value} onChange={handleChange}>
            <BottomNavigationAction
                label="Games"
                value="GameList"
                icon={<GamesOutlined />}
            />
            <BottomNavigationAction
                label="Add Game"
                value="AddGame"
                icon={<AddCircleOutline />}
            />
        </BottomNavigation>
    );
};