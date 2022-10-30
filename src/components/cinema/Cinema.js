import Search from "./cinema_Search/Search";
import Movies from "./cinema_MoviesList/Movies";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchMovies } from "./cinemaSlice";

const Cinema = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchMovies("arsenal"));
    }, []);

    return (
        <div className='cinema'>
            <Search />
            <Movies />
        </div>
    );
};

export default Cinema;
