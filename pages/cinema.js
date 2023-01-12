import Search from "../components/pages/cinema/cinema_Search/Search";
import Movies from "../components/pages/cinema/cinema_MoviesList/Movies";

import { cinema__getMoviesFromPrerender } from "../components/pages/cinema/cinemaSlice";
import { wrapper } from "../store/store";

export const getStaticProps = wrapper.getStaticProps(wrapper => async () => {
    const res = await fetch("https://www.omdbapi.com/?apikey=e8ceae38&s=arsenal");
    const data = await res.json();
    wrapper.dispatch(cinema__getMoviesFromPrerender(data.Search));
});

const Cinema = () => {
    return (
        <section className='cinema'>
            <Search />
            <Movies />
        </section>
    );
};

export default Cinema;
