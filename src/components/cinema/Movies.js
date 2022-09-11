import Movie from "./Movie";

const Movies = (props) => {
    const {movies} = props;

    return (
        <ul className="movies-list">
            <Movie movies={movies} />
        </ul>
    ) 
}

export default Movies;