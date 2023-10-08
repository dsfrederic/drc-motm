import * as React from 'react';
    
// mui components
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import List from '@mui/material/List';
import Paper from '@mui/material/Paper';

// custom components
import GameListItem from './GameListItem';

// data
import { useGameContext } from '../contexts/GameContext';

// icons


export default function GameList() {
    const { games } = useGameContext();

    return (
        <Box sx={{ pb: 7 }}>
            <CssBaseline />
            <List>
                {
                    games && games.map(
                        ({id, attributes: {eventDate, homeTeam, awayTeam}}, i)=>(
                        <GameListItem
                            key={i}
                            id={id}
                            date={eventDate}
                            homeTeam={homeTeam.data.attributes.displayName}
                            awayTeam={awayTeam.data.attributes.displayName}
                        />
                    ))
                }
            </List>
            <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
            </Paper>
        </Box>
    );
};
