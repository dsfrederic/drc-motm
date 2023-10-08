import * as React from 'react';
    
// mui components
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import List from '@mui/material/List';
import Paper from '@mui/material/Paper';

// custom components
import BottomNav from './BottomNav';
import GameListItem from './GameListItem';

// data
import { useGameContext } from '../contexts/GameContext';

// icons
import {
    PersonOutline,
    GamesOutlined,
    LocationOn,
    PunchClockOutlined,
    TransgenderOutlined,
} from '@mui/icons-material';

export default function GameList() {
    const { games } = useGameContext();

    console.log("GameList: games: ", games);
    console.log("GameList: games[0]: ", games[0]);

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
                <BottomNav/>
            </Paper>
        </Box>
    );
};
