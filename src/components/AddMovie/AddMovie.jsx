import React, { useEffect, useState } from 'react';
import { TextField, Grid, Button, Box, Select, MenuItem, InputLabel, FormControl } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";


const useStyles = makeStyles({
    input: {
      marginLeft: "75%",
      minWidth: 120,
    }
  }); 

function AddMovie() {

    const dispatch = useDispatch();
    const classes = useStyles();
    
    const[ newMovie, setNewMovie ] = useState( { } );

    const handleChange = ( event ) =>{
        setNewMovie( {...newMovie, [event.target.id] : event.target.value } );
        console.log(newMovie);
    }

    const handleGenreChange = ( event ) =>{
        setNewMovie( {...newMovie, genre_id : event.target.value } );
        console.log(event.target);
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
                    id={'title'}
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
                    id={'poster'}
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
                <FormControl style={{marginLeft: "75%", minWidth: 120}}>
                    <InputLabel>Genre</InputLabel>
                    <Select
                        id={'genre_id'}
                        className={classes.input}
                        label="Genre"
                        value={''}
                        onChange={ (event ) =>handleGenreChange ( event )}>
                        <MenuItem id="genre_id" value={1}>Adventure</MenuItem>
                        <MenuItem id="genre_id" value={2}>Animated</MenuItem>
                        <MenuItem id="genre_id" value={3}>Biographical</MenuItem>
                        <MenuItem id="genre_id" value={4}>Comedy</MenuItem>
                        <MenuItem id="genre_id" value={5}>Disaster</MenuItem>
                        <MenuItem id="genre_id" value={6}>Drama</MenuItem>
                        <MenuItem id="genre_id" value={7}>Epic</MenuItem>
                        <MenuItem id="genre_id" value={8}>Fantasy</MenuItem>
                        <MenuItem id="genre_id" value={9}>Musical</MenuItem>
                        <MenuItem id="genre_id" value={10}>Romantic</MenuItem>
                        <MenuItem id="genre_id" value={11}>Science Fiction</MenuItem>
                        <MenuItem id="genre_id" value={12}>Space-Opera</MenuItem>
                        <MenuItem id="genre_id" value={13}>Superhero</MenuItem>
                    </Select>
                </FormControl>                 
            </Grid>
            
      </Grid>
      <Button><Link to="/">CANCEL</Link></Button>
      <Button onClick={()=>{dispatch({type: 'ADD_MOVIE', payload:newMovie})}}><Link to="/">SAVE</Link></Button>
    </div>

    );
}

export default AddMovie;