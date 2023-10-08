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
                    {game.homeTeam.data.attributes.displayName} vs. {game.awayTeam.data.attributes.displayName}
                </Typography>

                <Typography variant="h5" gutterBottom component="div">{game.homeTeam.data.attributes.displayName} </Typography>

                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Player of the match</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={playerOfTheMatch}
                        label="Player of the match"
                    onChange={(e) => setPlayerOfTheMatch(e.target.value)}
                    >
                        <MenuItem value={game.homeLineup.player01.id}>1 - {game.homeLineup.player01.data.attributes.firstName} {game.homeLineup.player01.data.attributes.lastName}</MenuItem>
                        <MenuItem value={game.homeLineup.player02.id}>2 - {game.homeLineup.player02.data.attributes.firstName} {game.homeLineup.player02.data.attributes.lastName}</MenuItem>
                        <MenuItem value={game.homeLineup.player03.id}>3 - {game.homeLineup.player03.data.attributes.firstName} {game.homeLineup.player03.data.attributes.lastName}</MenuItem>
                        <MenuItem value={game.homeLineup.player04.id}>4 - {game.homeLineup.player04.data.attributes.firstName} {game.homeLineup.player04.data.attributes.lastName}</MenuItem>
                        <MenuItem value={game.homeLineup.player05.id}>5 - {game.homeLineup.player05.data.attributes.firstName} {game.homeLineup.player05.data.attributes.lastName}</MenuItem>
                        <MenuItem value={game.homeLineup.player06.id}>6 - {game.homeLineup.player06.data.attributes.firstName} {game.homeLineup.player06.data.attributes.lastName}</MenuItem>
                        <MenuItem value={game.homeLineup.player07.id}>7 - {game.homeLineup.player07.data.attributes.firstName} {game.homeLineup.player07.data.attributes.lastName}</MenuItem>
                        <MenuItem value={game.homeLineup.player08.id}>8 - {game.homeLineup.player08.data.attributes.firstName} {game.homeLineup.player08.data.attributes.lastName}</MenuItem>
                        <MenuItem value={game.homeLineup.player09.id}>9 - {game.homeLineup.player09.data.attributes.firstName} {game.homeLineup.player09.data.attributes.lastName}</MenuItem>
                        <MenuItem value={game.homeLineup.player10.id}>10 - {game.homeLineup.player10.data.attributes.firstName} {game.homeLineup.player10.data.attributes.lastName}</MenuItem>
                        <MenuItem value={game.homeLineup.player11.id}>11 - {game.homeLineup.player11.data.attributes.firstName} {game.homeLineup.player11.data.attributes.lastName}</MenuItem>
                        <MenuItem value={game.homeLineup.player12.id}>12 - {game.homeLineup.player12.data.attributes.firstName} {game.homeLineup.player12.data.attributes.lastName}</MenuItem>
                        <MenuItem value={game.homeLineup.player13.id}>13 - {game.homeLineup.player13.data.attributes.firstName} {game.homeLineup.player13.data.attributes.lastName}</MenuItem>
                        <MenuItem value={game.homeLineup.player14.id}>14 - {game.homeLineup.player14.data.attributes.firstName} {game.homeLineup.player14.data.attributes.lastName}</MenuItem>
                        <MenuItem value={game.homeLineup.player15.id}>15 - {game.homeLineup.player15.data.attributes.firstName} {game.homeLineup.player15.data.attributes.lastName}</MenuItem>
                        <MenuItem value={game.homeLineup.player16.id}>16 - {game.homeLineup.player16.data.attributes.firstName} {game.homeLineup.player16.data.attributes.lastName}</MenuItem>
                        <MenuItem value={game.homeLineup.player17.id}>17 - {game.homeLineup.player17.data.attributes.firstName} {game.homeLineup.player17.data.attributes.lastName}</MenuItem>
                        <MenuItem value={game.homeLineup.player18.id}>18 - {game.homeLineup.player18.data.attributes.firstName} {game.homeLineup.player18.data.attributes.lastName}</MenuItem>
                        <MenuItem value={game.homeLineup.player19.id}>19 - {game.homeLineup.player19.data.attributes.firstName} {game.homeLineup.player19.data.attributes.lastName}</MenuItem>
                        <MenuItem value={game.homeLineup.player20.id}>20 - {game.homeLineup.player20.data.attributes.firstName} {game.homeLineup.player20.data.attributes.lastName}</MenuItem>
                        <MenuItem value={game.homeLineup.player21.id}>21 - {game.homeLineup.player21.data.attributes.firstName} {game.homeLineup.player21.data.attributes.lastName}</MenuItem>
                        <MenuItem value={game.homeLineup.player22.id}>22 - {game.homeLineup.player22.data.attributes.firstName} {game.homeLineup.player22.data.attributes.lastName}</MenuItem>
                        <MenuItem value={game.homeLineup.player23.id}>23 - {game.homeLineup.player23.data.attributes.firstName} {game.homeLineup.player23.data.attributes.lastName}</MenuItem>
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
                        <MenuItem value={game.homeLineup.player01.id}>1 - {game.homeLineup.player01.data.attributes.firstName} {game.homeLineup.player01.data.attributes.lastName}</MenuItem>
                        <MenuItem value={game.homeLineup.player02.id}>2 - {game.homeLineup.player02.data.attributes.firstName} {game.homeLineup.player02.data.attributes.lastName}</MenuItem>
                        <MenuItem value={game.homeLineup.player03.id}>3 - {game.homeLineup.player03.data.attributes.firstName} {game.homeLineup.player03.data.attributes.lastName}</MenuItem>
                        <MenuItem value={game.homeLineup.player04.id}>4 - {game.homeLineup.player04.data.attributes.firstName} {game.homeLineup.player04.data.attributes.lastName}</MenuItem>
                        <MenuItem value={game.homeLineup.player05.id}>5 - {game.homeLineup.player05.data.attributes.firstName} {game.homeLineup.player05.data.attributes.lastName}</MenuItem>
                        <MenuItem value={game.homeLineup.player06.id}>6 - {game.homeLineup.player06.data.attributes.firstName} {game.homeLineup.player06.data.attributes.lastName}</MenuItem>
                        <MenuItem value={game.homeLineup.player07.id}>7 - {game.homeLineup.player07.data.attributes.firstName} {game.homeLineup.player07.data.attributes.lastName}</MenuItem>
                        <MenuItem value={game.homeLineup.player08.id}>8 - {game.homeLineup.player08.data.attributes.firstName} {game.homeLineup.player08.data.attributes.lastName}</MenuItem>
                        <MenuItem value={game.homeLineup.player09.id}>9 - {game.homeLineup.player09.data.attributes.firstName} {game.homeLineup.player09.data.attributes.lastName}</MenuItem>
                        <MenuItem value={game.homeLineup.player10.id}>10 - {game.homeLineup.player10.data.attributes.firstName} {game.homeLineup.player10.data.attributes.lastName}</MenuItem>
                        <MenuItem value={game.homeLineup.player11.id}>11 - {game.homeLineup.player11.data.attributes.firstName} {game.homeLineup.player11.data.attributes.lastName}</MenuItem>
                        <MenuItem value={game.homeLineup.player12.id}>12 - {game.homeLineup.player12.data.attributes.firstName} {game.homeLineup.player12.data.attributes.lastName}</MenuItem>
                        <MenuItem value={game.homeLineup.player13.id}>13 - {game.homeLineup.player13.data.attributes.firstName} {game.homeLineup.player13.data.attributes.lastName}</MenuItem>
                        <MenuItem value={game.homeLineup.player14.id}>14 - {game.homeLineup.player14.data.attributes.firstName} {game.homeLineup.player14.data.attributes.lastName}</MenuItem>
                        <MenuItem value={game.homeLineup.player15.id}>15 - {game.homeLineup.player15.data.attributes.firstName} {game.homeLineup.player15.data.attributes.lastName}</MenuItem>
                        <MenuItem value={game.homeLineup.player16.id}>16 - {game.homeLineup.player16.data.attributes.firstName} {game.homeLineup.player16.data.attributes.lastName}</MenuItem>
                        <MenuItem value={game.homeLineup.player17.id}>17 - {game.homeLineup.player17.data.attributes.firstName} {game.homeLineup.player17.data.attributes.lastName}</MenuItem>
                        <MenuItem value={game.homeLineup.player18.id}>18 - {game.homeLineup.player18.data.attributes.firstName} {game.homeLineup.player18.data.attributes.lastName}</MenuItem>
                        <MenuItem value={game.homeLineup.player19.id}>19 - {game.homeLineup.player19.data.attributes.firstName} {game.homeLineup.player19.data.attributes.lastName}</MenuItem>
                        <MenuItem value={game.homeLineup.player20.id}>20 - {game.homeLineup.player20.data.attributes.firstName} {game.homeLineup.player20.data.attributes.lastName}</MenuItem>
                        <MenuItem value={game.homeLineup.player21.id}>21 - {game.homeLineup.player21.data.attributes.firstName} {game.homeLineup.player21.data.attributes.lastName}</MenuItem>
                        <MenuItem value={game.homeLineup.player22.id}>22 - {game.homeLineup.player22.data.attributes.firstName} {game.homeLineup.player22.data.attributes.lastName}</MenuItem>
                        <MenuItem value={game.homeLineup.player23.id}>23 - {game.homeLineup.player23.data.attributes.firstName} {game.homeLineup.player23.data.attributes.lastName}</MenuItem>
                    </Select>
                </FormControl>


                <Typography variant="h5" gutterBottom component="div">{game.awayTeam.data.attributes.displayName} </Typography>

                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Player of the match</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={playerOfTheMatch}
                        label="Player of the match"
                    onChange={(e) => setPlayerOfTheMatch(e.target.value)}
                    >
                        <MenuItem value={game.awayLineup.player01.id}>1 - {game.awayLineup.player01.data.attributes.firstName} {game.awayLineup.player01.data.attributes.lastName}</MenuItem>
                        <MenuItem value={game.awayLineup.player02.id}>2 - {game.awayLineup.player02.data.attributes.firstName} {game.awayLineup.player02.data.attributes.lastName}</MenuItem>
                        <MenuItem value={game.awayLineup.player03.id}>3 - {game.awayLineup.player03.data.attributes.firstName} {game.awayLineup.player03.data.attributes.lastName}</MenuItem>
                        <MenuItem value={game.awayLineup.player04.id}>4 - {game.awayLineup.player04.data.attributes.firstName} {game.awayLineup.player04.data.attributes.lastName}</MenuItem>
                        <MenuItem value={game.awayLineup.player05.id}>5 - {game.awayLineup.player05.data.attributes.firstName} {game.awayLineup.player05.data.attributes.lastName}</MenuItem>
                        <MenuItem value={game.awayLineup.player06.id}>6 - {game.awayLineup.player06.data.attributes.firstName} {game.awayLineup.player06.data.attributes.lastName}</MenuItem>
                        <MenuItem value={game.awayLineup.player07.id}>7 - {game.awayLineup.player07.data.attributes.firstName} {game.awayLineup.player07.data.attributes.lastName}</MenuItem>
                        <MenuItem value={game.awayLineup.player08.id}>8 - {game.awayLineup.player08.data.attributes.firstName} {game.awayLineup.player08.data.attributes.lastName}</MenuItem>
                        <MenuItem value={game.awayLineup.player09.id}>9 - {game.awayLineup.player09.data.attributes.firstName} {game.awayLineup.player09.data.attributes.lastName}</MenuItem>
                        <MenuItem value={game.awayLineup.player10.id}>10 - {game.awayLineup.player10.data.attributes.firstName} {game.awayLineup.player10.data.attributes.lastName}</MenuItem>
                        <MenuItem value={game.awayLineup.player11.id}>11 - {game.awayLineup.player11.data.attributes.firstName} {game.awayLineup.player11.data.attributes.lastName}</MenuItem>
                        <MenuItem value={game.awayLineup.player12.id}>12 - {game.awayLineup.player12.data.attributes.firstName} {game.awayLineup.player12.data.attributes.lastName}</MenuItem>
                        <MenuItem value={game.awayLineup.player13.id}>13 - {game.awayLineup.player13.data.attributes.firstName} {game.awayLineup.player13.data.attributes.lastName}</MenuItem>
                        <MenuItem value={game.awayLineup.player14.id}>14 - {game.awayLineup.player14.data.attributes.firstName} {game.awayLineup.player14.data.attributes.lastName}</MenuItem>
                        <MenuItem value={game.awayLineup.player15.id}>15 - {game.awayLineup.player15.data.attributes.firstName} {game.awayLineup.player15.data.attributes.lastName}</MenuItem>
                        <MenuItem value={game.awayLineup.player16.id}>16 - {game.awayLineup.player16.data.attributes.firstName} {game.awayLineup.player16.data.attributes.lastName}</MenuItem>
                        <MenuItem value={game.awayLineup.player17.id}>17 - {game.awayLineup.player17.data.attributes.firstName} {game.awayLineup.player17.data.attributes.lastName}</MenuItem>
                        <MenuItem value={game.awayLineup.player18.id}>18 - {game.awayLineup.player18.data.attributes.firstName} {game.awayLineup.player18.data.attributes.lastName}</MenuItem>
                        <MenuItem value={game.awayLineup.player19.id}>19 - {game.awayLineup.player19.data.attributes.firstName} {game.awayLineup.player19.data.attributes.lastName}</MenuItem>
                        <MenuItem value={game.awayLineup.player20.id}>20 - {game.awayLineup.player20.data.attributes.firstName} {game.awayLineup.player20.data.attributes.lastName}</MenuItem>
                        <MenuItem value={game.awayLineup.player21.id}>21 - {game.awayLineup.player21.data.attributes.firstName} {game.awayLineup.player21.data.attributes.lastName}</MenuItem>
                        <MenuItem value={game.awayLineup.player22.id}>22 - {game.awayLineup.player22.data.attributes.firstName} {game.awayLineup.player22.data.attributes.lastName}</MenuItem>
                        <MenuItem value={game.awayLineup.player23.id}>23 - {game.awayLineup.player23.data.attributes.firstName} {game.awayLineup.player23.data.attributes.lastName}</MenuItem>
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
                        <MenuItem value={game.awayLineup.player01.id}>1 - {game.awayLineup.player01.data.attributes.firstName} {game.awayLineup.player01.data.attributes.lastName}</MenuItem>
                        <MenuItem value={game.awayLineup.player02.id}>2 - {game.awayLineup.player02.data.attributes.firstName} {game.awayLineup.player02.data.attributes.lastName}</MenuItem>
                        <MenuItem value={game.awayLineup.player03.id}>3 - {game.awayLineup.player03.data.attributes.firstName} {game.awayLineup.player03.data.attributes.lastName}</MenuItem>
                        <MenuItem value={game.awayLineup.player04.id}>4 - {game.awayLineup.player04.data.attributes.firstName} {game.awayLineup.player04.data.attributes.lastName}</MenuItem>
                        <MenuItem value={game.awayLineup.player05.id}>5 - {game.awayLineup.player05.data.attributes.firstName} {game.awayLineup.player05.data.attributes.lastName}</MenuItem>
                        <MenuItem value={game.awayLineup.player06.id}>6 - {game.awayLineup.player06.data.attributes.firstName} {game.awayLineup.player06.data.attributes.lastName}</MenuItem>
                        <MenuItem value={game.awayLineup.player07.id}>7 - {game.awayLineup.player07.data.attributes.firstName} {game.awayLineup.player07.data.attributes.lastName}</MenuItem>
                        <MenuItem value={game.awayLineup.player08.id}>8 - {game.awayLineup.player08.data.attributes.firstName} {game.awayLineup.player08.data.attributes.lastName}</MenuItem>
                        <MenuItem value={game.awayLineup.player09.id}>9 - {game.awayLineup.player09.data.attributes.firstName} {game.awayLineup.player09.data.attributes.lastName}</MenuItem>
                        <MenuItem value={game.awayLineup.player10.id}>10 - {game.awayLineup.player10.data.attributes.firstName} {game.awayLineup.player10.data.attributes.lastName}</MenuItem>
                        <MenuItem value={game.awayLineup.player11.id}>11 - {game.awayLineup.player11.data.attributes.firstName} {game.awayLineup.player11.data.attributes.lastName}</MenuItem>
                        <MenuItem value={game.awayLineup.player12.id}>12 - {game.awayLineup.player12.data.attributes.firstName} {game.awayLineup.player12.data.attributes.lastName}</MenuItem>
                        <MenuItem value={game.awayLineup.player13.id}>13 - {game.awayLineup.player13.data.attributes.firstName} {game.awayLineup.player13.data.attributes.lastName}</MenuItem>
                        <MenuItem value={game.awayLineup.player14.id}>14 - {game.awayLineup.player14.data.attributes.firstName} {game.awayLineup.player14.data.attributes.lastName}</MenuItem>
                        <MenuItem value={game.awayLineup.player15.id}>15 - {game.awayLineup.player15.data.attributes.firstName} {game.awayLineup.player15.data.attributes.lastName}</MenuItem>
                        <MenuItem value={game.awayLineup.player16.id}>16 - {game.awayLineup.player16.data.attributes.firstName} {game.awayLineup.player16.data.attributes.lastName}</MenuItem>
                        <MenuItem value={game.awayLineup.player17.id}>17 - {game.awayLineup.player17.data.attributes.firstName} {game.awayLineup.player17.data.attributes.lastName}</MenuItem>
                        <MenuItem value={game.awayLineup.player18.id}>18 - {game.awayLineup.player18.data.attributes.firstName} {game.awayLineup.player18.data.attributes.lastName}</MenuItem>
                        <MenuItem value={game.awayLineup.player19.id}>19 - {game.awayLineup.player19.data.attributes.firstName} {game.awayLineup.player19.data.attributes.lastName}</MenuItem>
                        <MenuItem value={game.awayLineup.player20.id}>20 - {game.awayLineup.player20.data.attributes.firstName} {game.awayLineup.player20.data.attributes.lastName}</MenuItem>
                        <MenuItem value={game.awayLineup.player21.id}>21 - {game.awayLineup.player21.data.attributes.firstName} {game.awayLineup.player21.data.attributes.lastName}</MenuItem>
                        <MenuItem value={game.awayLineup.player22.id}>22 - {game.awayLineup.player22.data.attributes.firstName} {game.awayLineup.player22.data.attributes.lastName}</MenuItem>
                        <MenuItem value={game.awayLineup.player23.id}>23 - {game.awayLineup.player23.data.attributes.firstName} {game.awayLineup.player23.data.attributes.lastName}</MenuItem>
                    </Select>
                </FormControl>
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