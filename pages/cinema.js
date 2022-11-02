import Search from "../components/cinema/cinema_Search/Search";
import Movies from "../components/cinema/cinema_MoviesList/Movies";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchMovies } from "../components/cinema/cinemaSlice";

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
