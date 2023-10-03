import React, { useState } from 'react';
    
// mui components
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';

// mui icons
import { IconButton, ListItem } from '@mui/material';
import {
    DeleteOutline,
    Edit,
    ExpandMore,
    ExpandLess,
    LabelImportantOutlined,
} from '@mui/icons-material';

// nav
import { useGameContext } from '../contexts/GameContext';

export default function GameListItem({ date, id, homeTeam, awayTeam}) {
    return (
        <List
            sx={{ width: '100%', bgcolor: 'background.paper' }}
        >
        <ListItem>
            <ListItemButton disableRipple>
                    <ListItemIcon>
                        <LabelImportantOutlined />
                    </ListItemIcon>
                    <ListItemText
                        primary={homeTeam} 
                        secondary={date}
                    />
            </ListItemButton>
        </ListItem>
        </List>
    );
};