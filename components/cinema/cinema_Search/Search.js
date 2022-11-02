import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "../cinemaSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faSpinner } from "@fortawesome/free-solid-svg-icons";

const Search = () => {
    const dispatch = useDispatch();

    const movies = useSelector(state => state.cinemaSlice.movies);
    const loading = useSelector(state => state.cinemaSlice.moviesLoading);

    const [searchValue, setSearchValue] = useState("");

    const handleKey = e => {
        if (e.key === "Enter") {
            dispatch(fetchMovies(searchValue));
        }
    };

    return (
        <div className='movies-search-inpWrapper'>
            <video className='video' autoPlay muted loop>
                <source
                    src={require("../../../src/imgs/Frustrated fans watching a football game.mp4")}
                    type='video/mp4'
                />
            </video>
            <div className='movies-search-inp'>
                <input
                    value={searchValue}
                    onKeyDown={e => handleKey(e)}
                    onChange={e => setSearchValue(e.target.value)}
                    type='text'
                    className='browser-default'
                />
                <FontAwesomeIcon
                    icon={loading ? faSpinner : faSearch}
                    className={loading ? 'fa fa-spinner fa-spin movies-search-logo' : 'movies-search-logo'}
                    onClick={() => dispatch(fetchMovies(searchValue))}
                    style={{ color: "white" }}></FontAwesomeIcon>
            </div>
            {movies.Response === "False" ? <div className='movies-search-notFound'>movie not found</div> : ""}
        </div>
    );
};

export default Search;
