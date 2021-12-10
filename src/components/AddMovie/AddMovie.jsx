import React, { useEffect, useState } from 'react';
import { TextField, Grid, Button, Box, Select, MenuItem, InputLabel, FormControl } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import {Link} from "react-router-dom";


const useStyles = makeStyles({
    input: {
      marginLeft: "25px",
      minWidth: 120,
    }
  }); 

function AddMovie() {
    const classes = useStyles();
    
    const[ newMovie, setNewMovie ] = useState( { } );

    const handleChange = ( event ) =>{
        setNewMovie( {...newMovie, [event.target.id] : event.target.value } );
        console.log(newMovie);
    }

    return (
        <div>
            <h1>Add Movie To Database</h1>
        {/* <p> props: { JSON.stringify( customer ) } </p> */}
        <div className="movie-input"></div>
        <Grid container>
            <Grid item xs={3}>
                <TextField
                    id={'movieTitle'}
                    variant={'outlined'}
                    label={'Title'}
                    margin={'normal'}
                    fullWidth
                    InputLabelProps={{ shrink: true }}
                    className={classes.input}
                    onChange={ (event ) =>handleChange ( event )}
                />
                <Box />
                <TextField
                    id={'moviePoster'}
                    variant={'outlined'}
                    label={'Poster URL'}
                    margin={'normal'}
                    fullWidth
                    InputLabelProps={{ shrink: true }}
                    className={classes.input}
                    onChange={ (event ) =>handleChange ( event )}
                />
                <Box />
                <TextField
                    id={'description'}
                    variant={'outlined'}
                    label={'Description'}
                    margin={'normal'}
                    multiline
                    rows={4}
                    fullWidth
                    InputLabelProps={{ shrink: true }}
                    className={classes.input}
                    onChange={ (event ) =>handleChange ( event )}
                />
                <Box />
                <FormControl style={{minWidth: 120}}>
                    <InputLabel>Genre</InputLabel>
                    <Select
                        className={classes.input}
                        value={"Adventure"}
                        label="Age"
                        onChange={ (event ) =>handleChange ( event )}>
                        <MenuItem id="movieGenre" value={"Adventure"}>Adventure</MenuItem>
                        <MenuItem id="movieGenre" value={"Animated"}>Animated</MenuItem>
                        <MenuItem id="movieGenre" value={"Biographical"}>Biographical</MenuItem>
                        <MenuItem id="movieGenre" value={"Comedy"}>Comedy</MenuItem>
                        <MenuItem id="movieGenre" value={"Disaster"}>Disaster</MenuItem>
                        <MenuItem id="movieGenre" value={"Drama"}>Drama</MenuItem>
                        <MenuItem id="movieGenre" value={"Epic"}>Epic</MenuItem>
                        <MenuItem id="movieGenre" value={"Fantasy"}>Fantasy</MenuItem>
                        <MenuItem id="movieGenre" value={"Musical"}>Musical</MenuItem>
                        <MenuItem id="movieGenre" value={"Romantic"}>Romantic</MenuItem>
                        <MenuItem id="movieGenre" value={"Science Fiction"}>Science Fiction</MenuItem>
                        <MenuItem id="movieGenre" value={"Space-Opera"}>Space-Opera</MenuItem>
                        <MenuItem id="movieGenre" value={"Superhero"}>Superhero</MenuItem>
                    </Select>
                </FormControl>                 
            </Grid>
            
      </Grid>
    </div>

    );
}

export default AddMovie;