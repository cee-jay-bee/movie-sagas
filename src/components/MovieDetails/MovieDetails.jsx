import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from "axios";

function MovieList() {

    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);


    return (
        <main>
            <h1>MovieList</h1>
            <section className="movies">
                    return (
                        <div key={movies.id} >
                            <h3>{movies.title}</h3>
                            <img src={movies.poster} alt={movies.title} />
                        </div>
                    );
            </section>
        </main>

    );
}


export default MovieList;