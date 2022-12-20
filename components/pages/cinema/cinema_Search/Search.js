import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "../cinemaSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faSpinner } from "@fortawesome/free-solid-svg-icons";

import { cinema__sortMoviesFromNew, cinema__sortMoviesFromOld } from "../cinemaSlice";

const Search = () => {
    const dispatch = useDispatch();

    const movies = useSelector(state => state.cinemaSlice.movies);
    const loading = useSelector(state => state.cinemaSlice.moviesLoading);

    const [hideVideoOnMobile, setHideVideoOnMobile] = useState(false);
    const [searchValue, setSearchValue] = useState("");

    const getMovies = () => {
        if (searchValue) {
            dispatch(fetchMovies(searchValue));
            setSearchValue("");
        }
    };

    const handleKey = e => {
        if (e.key === "Enter") {
            getMovies();
        }
    };

    useEffect(() => {
        if (window.innerWidth < 701) {
            setHideVideoOnMobile(true);
        }
    }, []);

    const sortMovies = e => {
        if (movies && !e.target.classList.contains("cinemaSearch__btnNewFirst-active")) {
            e.target.classList.add("cinemaSearch__btnNewFirst-active");
            dispatch(cinema__sortMoviesFromNew());
        } else {
            e.target.classList.remove("cinemaSearch__btnNewFirst-active");
            dispatch(cinema__sortMoviesFromOld());
        }
    };

    return (
        <div className='cinemaSearch'>
            {!hideVideoOnMobile ? (
                <video className='cinemaSearch__video' autoPlay muted loop>
                    <source
                        src={require("../../../../public/imgs/Frustrated fans watching a football game.mp4")}
                        type='video/mp4'
                    />
                </video>
            ) : null}
            <div className='cinemaSearch__input'>
                <input
                    type='text'
                    value={searchValue}
                    onKeyDown={e => handleKey(e)}
                    onChange={e => setSearchValue(e.target.value)}
                    className='browser-default'
                />
                <FontAwesomeIcon
                    icon={loading ? faSpinner : faSearch}
                    className={loading ? "fa fa-spinner fa-spin cinemaSearch__logo" : "cinemaSearch__logo"}
                    onClick={() => getMovies()}></FontAwesomeIcon>
                {!movies ? <div className='cinemaSearch__status'>movie not found</div> : ""}
                {movies.length > 0 ? (
                    <button className='btn cinemaSearch__btnNewFirst' onClick={e => sortMovies(e)}>
                        New movies first
                    </button>
                ) : null}
            </div>
        </div>
    );
};

export default Search;
