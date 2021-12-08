import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './MovieList.css'
import axios from "axios";
import {Link} from "react-router-dom"

function MovieList() {

    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);


    return (
        <main>
            <h1>MovieList</h1>
            <section className="movies">
                {movies.map(movie => {
                    return (
                        <div key={movie.id} >
                            <h3>{movie.title}</h3>
                            <Link to="/details" ><img src={movie.poster} alt={movie.title} onClick={()=>{dispatch({type: 'SET_MOVIE', payload:movie})}} /></Link>
                        </div>
                    );
                })}
            </section>
        </main>

    );
}

export default MovieList;