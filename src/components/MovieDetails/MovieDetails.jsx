import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from "axios";
import {Button} from '@material-ui/core';
import {Link} from "react-router-dom";

function MovieDetails( props ) {

    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);
    const genres = useSelector(store => store.genres);

    useEffect(() => {
    }, []);


    return (
        <main>
            <h1>MovieDetails</h1>
            <section className="movies">
                    <div key={movies[0].id} >
                        <h3>{movies[0].title}</h3>
                        <img src={movies[0].poster} alt={movies[0].title} />
                        <h5>{movies[0].description}</h5>
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
            <Button ><Link to="/" >Back to List</Link></Button>
        </main>
    );
}


export default MovieDetails;