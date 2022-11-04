import Movie from "./Movie";

const Movies = ({ preLoadedMovies }) => {
    return (
        <ul className='movies-list'>
            <Movie preLoadedMovies={preLoadedMovies} />
        </ul>
    );
};

export default Movies;
