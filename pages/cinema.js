import Search from "../components/pages/cinema/cinema_Search/Search";
import Movies from "../components/pages/cinema/cinema_MoviesList/Movies";

// export const getStaticProps = async () => {
//     const res = await fetch("https://www.omdbapi.com/?apikey=e8ceae38&s=arsenal");
//     const data = await res.json();

//     return {
//         props: { cards: data },
//     };
// };

const Cinema = ({ cards }) => {
    return (
        <section className='cinema'>
            <Search />
            {/* <Movies preLoadedMovies={cards.Search} /> */}
            <Movies />
        </section>
    );
};

export default Cinema;
