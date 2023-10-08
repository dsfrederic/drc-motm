import React, { useState, useEffect } from 'react';

// mui components
import {
    Typography,
    TextField,
    Box,
    Button,
    Paper,
    FormControl,
    InputLabel,
    Select,
    MenuItem
} from '@mui/material';

// mui icons
import { Edit } from '@mui/icons-material';

// custom components
import { useGameContext } from '../contexts/GameContext';


export default function VoteEntry() {
    // input data
    const [name, setName] = useState("");
    const [runnerUp, setRunnerUp] = useState("");
    const [playerOfTheMatch, setPlayerOfTheMatch] = useState("");

    // edit req
    const { gameId, game, getGame } = useGameContext();
    const data = JSON.stringify({
        "data": {
            "name": name,
            "playerOfTheMatch": playerOfTheMatch,
            "runnerUp": runnerUp,
        }
    });

    const submitVote = () => {
        // updateGame(gameId, data);
        console.log("SUBMIT VOTE");  
    };

    console.log(gameId)
    console.log(game)
    // console.log(game.homeLineup.id)
    // console.log(game.homeLineup.player01)
    // console.log(game.homeLineup.player01.data.id)
    // console.log(game.homeLineup.player01.data.attributes.firstName)
    return (
        <Box
            component="form"
            sx={{
                '& .MuiFormControl-root': { m: 1, width: '50ch' },
                display: 'flex',
                flexDirection: 'column',
            }}
            noValidate
            autoComplete="off"
        >
            <div>
                <Typography variant="h3" gutterBottom component="div">
                    Submit your vote
                </Typography>

                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Player of the match</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={playerOfTheMatch}
                        label="Player of the match"
                    onChange={(e) => setPlayerOfTheMatch(e.target.value)}
                    >
                        <MenuItem value={10}>{game.eventDate}</MenuItem>
                        <MenuItem value={10}>{gameId}</MenuItem>
                
                    </Select>
                </FormControl>
                <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label-2">Runner-up of the match</InputLabel>
                    <Select
                        labelId="demo-simple-select-label-2"
                        id="demo-simple-select-2"
                        value={runnerUp}
                        label="Runner-up of the match"
                    onChange={(e) => setRunnerUp(e.target.value)}
                    >
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </FormControl>

                <TextField
                    required
                    id="filled-name"
                    label="Name"
                    variant="outlined"
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div>
                <Button variant="outlined" onClick={submitVote} startIcon={<Edit />}>
                    Submit vote
                </Button>
            </div>
            <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
            </Paper>
        </Box>
    );
}