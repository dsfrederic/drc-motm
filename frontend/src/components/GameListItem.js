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

// Time formats
import ReactTimeAgo from 'react-time-ago'

// nav
import { useGameContext } from '../contexts/GameContext';

export default function GameListItem({ date, id, homeTeam, awayTeam }) {
    const { changeNavValue, getGameId } = useGameContext();
    const handleEditButton = () => {
        getGameId(id);
        changeNavValue("Vote");
    };

    return (
        <List
            sx={{ width: '100%', bgcolor: 'background.paper' }}
        >
            <ListItem
                secondaryAction={
                    <>
                        <IconButton onClick={handleEditButton} edge="end" aria-label="edit">
                            <Edit sx={{ color: 'green' }} />
                        </IconButton>
                    </>
                }
            >
                <ListItemButton disableRipple>
                    <ListItemIcon>
                        <LabelImportantOutlined />
                    </ListItemIcon>
                    <ListItemText
                        primary={homeTeam + " vs. " + awayTeam}
                        secondary={date}
                    />
                    <ReactTimeAgo date={date} />
                </ListItemButton>
            </ListItem>
        </List>
    );
};