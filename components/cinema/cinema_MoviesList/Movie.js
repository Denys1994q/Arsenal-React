import imageNotFound from "../../../public/imgs/notFound.png";

import { useSelector } from "react-redux";
import Image from "next/image";

const Movie = ({ preLoadedMovies }) => {
    const movies = useSelector(state => state.cinemaSlice.movies);

    const preloadedListofMovies = preLoadedMovies.map(item => {
        return (
            <li key={item.imdbID}>
                <div className='movies-list-item'>
                    <div className='movies-list-item-img'>
                        <Image
                            src={item.Poster !== "N/A" ? item.Poster : imageNotFound}
                            alt='image-not-found'
                            width={300}
                            height={300}
                        />
                    </div>
                    <div className='movies-list-item-box'>
                        <div className='movies-list-item-box-title'>{item.Title}</div>
                        <div>{item.Year}</div>
                    </div>
                </div>
            </li>
        );
    });

    const showMovies = movies.Search
        ? movies.Search.map(item => {
              return (
                  <li key={item.imdbID}>
                      <div className='movies-list-item'>
                          <div className='movies-list-item-img'>
                              <Image
                                  src={item.Poster !== "N/A" ? item.Poster : imageNotFound}
                                  alt='image-not-found'
                                  width={300}
                                  height={300}
                              />
                          </div>
                          <div className='movies-list-item-box'>
                              <div className='movies-list-item-box-title'>{item.Title}</div>
                              <div>{item.Year}</div>
                          </div>
                      </div>
                  </li>
              );
          })
        : preloadedListofMovies;

    return showMovies;
};

export default Movie;
