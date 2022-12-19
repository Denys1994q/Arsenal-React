import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "../cinemaSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faSpinner } from "@fortawesome/free-solid-svg-icons";

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

    return (
        <div className='cinemaSearch'>
            {!hideVideoOnMobile ? (
                <video className='cinemaSearch__video' autoPlay muted loop>
                    <source
                        src={require("../../../public/imgs/Frustrated fans watching a football game.mp4")}
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
                {movies.Response === "False" ? <div className='cinemaSearch__status'>movie not found</div> : ""}
            </div>
        </div>
    );
};

export default Search;
