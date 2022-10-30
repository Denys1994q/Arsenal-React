import imageNotFound from "../../../imgs/notFound.png";

import { useSelector } from "react-redux";

const Movie = () => {
    const movies = useSelector(state => state.cinemaSlice.movies);

    const showMovies = movies.Search
        ? movies.Search.map(item => {
              return (
                  <li key={item.imdbID}>
                      <div className='movies-list-item'>
                          <div className='movies-list-item-img'>
                              <img src={item.Poster !== "N/A" ? item.Poster : imageNotFound} alt='' />
                          </div>
                          <div>{item.Title}</div>
                          <div>{item.Year}</div>
                      </div>
                  </li>
              );
          })
        : null;

    return showMovies;
};

export default Movie;
