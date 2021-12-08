import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from "axios";
import {Button} from '@material-ui/core';

function MovieDetails() {

    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);
    const genres = useSelector(store => store.genres);

    useEffect(() => {
        dispatch({ type: 'FETCH_GENRES', payload: movies.id });
    }, []);


    return (
        <main>
            <h1>MovieDetails</h1>
            <section className="movies">
                    <div key={movies.id} >
                        <h3>{movies.title}</h3>
                        <img src={movies.poster} alt={movies.title} />
                        <h5>{movies.description}</h5>
                    </div>
            </section>
            <section className="genres">
                <h3>Genres</h3>
                {genres.map(genre => {
                    return (
                        <div>
                            <h5>{genre.name}</h5>
                        </div>
                    );
                })}
            </section>
            <Button>Back to List</Button>
        </main>
    );
}


export default MovieDetails;