import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "../cinemaSlice";

import Movie from "./Movie";

const Movies = ({ preLoadedMovies }) => {
    const dispatch = useDispatch();

    const error = useSelector(state => state.cinemaSlice.moviesError);

    useEffect(() => {
        dispatch(fetchMovies("arsenal"));
    }, []);

    return (
        <ul className='cinemaList'>
            {/* <Movie preLoadedMovies={preLoadedMovies} /> */}
            {!error ? <Movie /> : <h4>Sorry, service unavailable</h4>}
        </ul>
    );
};

export default Movies;
