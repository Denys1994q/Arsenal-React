import {  useSelector } from "react-redux";

import Movie from "./Movie";

const Movies = () => {
    const error = useSelector(state => state.cinemaSlice.moviesError);

    return <ul className='cinemaList'>{!error ? <Movie /> : <h4>Sorry, service unavailable</h4>}</ul>;
};

export default Movies;
