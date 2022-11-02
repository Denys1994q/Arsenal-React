import imageNotFound from "../../../src/imgs/notFound.png";

import { useSelector } from "react-redux";
import Image from "next/image";

const Movie = () => {
    const movies = useSelector(state => state.cinemaSlice.movies);

    const showMovies = movies.Search
        ? movies.Search.map(item => {
              return (
                  <li key={item.imdbID}>
                      <div className='movies-list-item'>
                          <div className='movies-list-item-img'>
                              <Image src={item.Poster !== "N/A" ? item.Poster : imageNotFound} alt='image-not-found' width={300} height={300} />
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
