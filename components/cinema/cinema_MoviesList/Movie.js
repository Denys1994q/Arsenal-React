import imageNotFound from "../../../public/imgs/notFound.png";

import { useSelector } from "react-redux";
import Image from "next/image";

const Movie = ({ preLoadedMovies }) => {
    const movies = useSelector(state => state.cinemaSlice.movies);

    // const preloadedListofMovies = preLoadedMovies
    //     ? preLoadedMovies.map(item => {
    //           return (
    //               <li key={item.imdbID} className='movieCard'>
    //                   <Image
    //                       className='movieCard__img'
    //                       src={item.Poster !== "N/A" ? item.Poster : imageNotFound}
    //                       alt='image-not-found'
    //                       width={300}
    //                       height={300}
    //                   />
    //                   <div className='movieCard__textbox'>
    //                       <div className='movieCard__title'>{item.Title}</div>
    //                       <div className='movieCard__year'>{item.Year}</div>
    //                   </div>
    //               </li>
    //           );
    //       })
    //     : null;

    const showMovies = movies.Search
        ? movies.Search.map(item => {
              return (
                  <li key={item.imdbID} className='movieCard'>
                      <Image
                          src={item.Poster !== "N/A" ? item.Poster : imageNotFound}
                          className='movieCard__img'
                          alt='image-not-found'
                          width={310}
                          height={310}
                      />
                      <div className='movieCard__textbox'>
                          <div className='movieCard__title'>{item.Title}</div>
                          <div className='movieCard__year'>{item.Year}</div>
                      </div>
                  </li>
              );
          })
        : null;

    return showMovies;
};

export default Movie;
