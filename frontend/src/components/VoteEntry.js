import React, { useState, useEffect } from 'react';

import http from '../http';

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
    const [loading, setLoading] = useState(true);

    // input data
    const [name, setName] = useState("");
    const [runnerUp, setRunnerUp] = useState("");
    const [playerOfTheMatch, setPlayerOfTheMatch] = useState("");

    // edit req
    const { gameId, setGame } = useGameContext();
    const data = JSON.stringify({
        "data": {
            "name": name,
            "playerOfTheMatch": playerOfTheMatch,
            "runnerUp": runnerUp,
        }
    });

    useEffect(()=>{
        const readGameDetails = async () => {
            const response = await http.get("/api/games/" + gameId + "?populate[awayTeam][fields][0]=displayName&populate[homeTeam][fields][0]=displayName&populate[homeLineup][populate][player01][fields][0]=firstName&populate[homeLineup][populate][player01][fields][1]=lastName&populate[homeLineup][populate][player02][fields][0]=firstName&populate[homeLineup][populate][player02][fields][1]=lastName&populate[homeLineup][populate][player03][fields][0]=firstName&populate[homeLineup][populate][player03][fields][1]=lastName&populate[homeLineup][populate][player04][fields][0]=firstName&populate[homeLineup][populate][player04][fields][1]=lastName&populate[homeLineup][populate][player05][fields][0]=firstName&populate[homeLineup][populate][player05][fields][1]=lastName&populate[homeLineup][populate][player06][fields][0]=firstName&populate[homeLineup][populate][player06][fields][1]=lastName&populate[homeLineup][populate][player07][fields][0]=firstName&populate[homeLineup][populate][player07][fields][1]=lastName&populate[homeLineup][populate][player08][fields][0]=firstName&populate[homeLineup][populate][player08][fields][1]=lastName&populate[homeLineup][populate][player09][fields][0]=firstName&populate[homeLineup][populate][player09][fields][1]=lastName&populate[homeLineup][populate][player10][fields][0]=firstName&populate[homeLineup][populate][player10][fields][1]=lastName&populate[homeLineup][populate][player11][fields][0]=firstName&populate[homeLineup][populate][player11][fields][1]=lastName&populate[homeLineup][populate][player12][fields][0]=firstName&populate[homeLineup][populate][player12][fields][1]=lastName&populate[homeLineup][populate][player13][fields][0]=firstName&populate[homeLineup][populate][player13][fields][1]=lastName&populate[homeLineup][populate][player14][fields][0]=firstName&populate[homeLineup][populate][player14][fields][1]=lastName&populate[homeLineup][populate][player15][fields][0]=firstName&populate[homeLineup][populate][player15][fields][1]=lastName&populate[homeLineup][populate][player16][fields][0]=firstName&populate[homeLineup][populate][player16][fields][1]=lastName&populate[homeLineup][populate][player17][fields][0]=firstName&populate[homeLineup][populate][player17][fields][1]=lastName&populate[homeLineup][populate][player18][fields][0]=firstName&populate[homeLineup][populate][player18][fields][1]=lastName&populate[homeLineup][populate][player19][fields][0]=firstName&populate[homeLineup][populate][player19][fields][1]=lastName&populate[homeLineup][populate][player20][fields][0]=firstName&populate[homeLineup][populate][player20][fields][1]=lastName&populate[homeLineup][populate][player21][fields][0]=firstName&populate[homeLineup][populate][player21][fields][1]=lastName&populate[homeLineup][populate][player22][fields][0]=firstName&populate[homeLineup][populate][player22][fields][1]=lastName&populate[homeLineup][populate][player23][fields][0]=firstName&populate[homeLineup][populate][player23][fields][1]=lastName&populate[homeLineup][populate][player24][fields][0]=firstName&populate[homeLineup][populate][player24][fields][1]=lastName&populate[awayLineup][populate][player01][fields][0]=firstName&populate[awayLineup][populate][player01][fields][1]=lastName&populate[awayLineup][populate][player02][fields][0]=firstName&populate[awayLineup][populate][player02][fields][1]=lastName&populate[awayLineup][populate][player03][fields][0]=firstName&populate[awayLineup][populate][player03][fields][1]=lastName&populate[awayLineup][populate][player04][fields][0]=firstName&populate[awayLineup][populate][player04][fields][1]=lastName&populate[awayLineup][populate][player05][fields][0]=firstName&populate[awayLineup][populate][player05][fields][1]=lastName&populate[awayLineup][populate][player06][fields][0]=firstName&populate[awayLineup][populate][player06][fields][1]=lastName&populate[awayLineup][populate][player07][fields][0]=firstName&populate[awayLineup][populate][player07][fields][1]=lastName&populate[awayLineup][populate][player08][fields][0]=firstName&populate[awayLineup][populate][player08][fields][1]=lastName&populate[awayLineup][populate][player09][fields][0]=firstName&populate[awayLineup][populate][player09][fields][1]=lastName&populate[awayLineup][populate][player10][fields][0]=firstName&populate[awayLineup][populate][player10][fields][1]=lastName&populate[awayLineup][populate][player11][fields][0]=firstName&populate[awayLineup][populate][player11][fields][1]=lastName&populate[awayLineup][populate][player12][fields][0]=firstName&populate[awayLineup][populate][player12][fields][1]=lastName&populate[awayLineup][populate][player13][fields][0]=firstName&populate[awayLineup][populate][player13][fields][1]=lastName&populate[awayLineup][populate][player14][fields][0]=firstName&populate[awayLineup][populate][player14][fields][1]=lastName&populate[awayLineup][populate][player15][fields][0]=firstName&populate[awayLineup][populate][player15][fields][1]=lastName&populate[awayLineup][populate][player16][fields][0]=firstName&populate[awayLineup][populate][player16][fields][1]=lastName&populate[awayLineup][populate][player17][fields][0]=firstName&populate[awayLineup][populate][player17][fields][1]=lastName&populate[awayLineup][populate][player18][fields][0]=firstName&populate[awayLineup][populate][player18][fields][1]=lastName&populate[awayLineup][populate][player19][fields][0]=firstName&populate[awayLineup][populate][player19][fields][1]=lastName&populate[awayLineup][populate][player20][fields][0]=firstName&populate[awayLineup][populate][player20][fields][1]=lastName&populate[awayLineup][populate][player21][fields][0]=firstName&populate[awayLineup][populate][player21][fields][1]=lastName&populate[awayLineup][populate][player22][fields][0]=firstName&populate[awayLineup][populate][player22][fields][1]=lastName&populate[awayLineup][populate][player23][fields][0]=firstName&populate[awayLineup][populate][player23][fields][1]=lastName&populate[awayLineup][populate][player24][fields][0]=firstName&populate[awayLineup][populate][player24][fields][1]=lastName");
            const responseArr = Object(response.data.data.attributes);
            console.log("test");
            console.log(responseArr);
            setGame(responseArr);
            setLoading(false);
        };
        return readGameDetails;
    }, [setGame, gameId]);

    const submitVote = () => {
        // updateGame(gameId, data);
        console.log("SUBMIT VOTE");  
    };



    const {game} = useGameContext();

    // console.log(gameId)
    // console.log(game)
    // console.log(game.homeLineup)
    // console.log(game.homeLineup.id)
    // console.log(game.homeLineup.player01)
    // console.log(game.homeLineup.player01.data.id)
    // console.log(game.homeLineup.player01.data.attributes.firstName)
    if (loading) {
        return <p>Loading...</p>;
    }

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
                        <MenuItem value={10}>{game.homeLineup.player01.data.attributes.firstName}</MenuItem>
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