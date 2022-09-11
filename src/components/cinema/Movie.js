const Movie = (props) => {
  const { movies } = props;

  const showMovies = movies ? movies.map((item) => {
    return (
        <li key={item.imdbID}>
            <div className="movies-list-item">
                <div className="movies-list-item-img"><img src={item.Poster} alt="" /></div>
                <div>{item.Title}</div>
                <div>{item.Year}</div>
            </div>
        </li>
    );
  }) : null

  return showMovies;
};

export default Movie;