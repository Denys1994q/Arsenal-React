// картинки 
import hulk from "../../imgs/team-card-hulk.jpg";
// клмпоненти
import Header from "../header/Header";
import Search from "./Search";
import Movies from "./Movies";
import { useState } from "react";
import { useEffect } from "react";

// сюди відео вставити на сторінку 
const Cinema = () => {

const [movies, setMovies] = useState([]);
const [loading, setLoading] = useState(false);
const [movieNotFound, setMovieNotFound] = useState(false);

const getMovies = (str = 'arsenal') => {
    setLoading(true)
    fetch(`https://www.omdbapi.com/?apikey=e8ceae38&s=${str}`)
    .then(response => response.json())
    .then(data => takeMovies(data))
    .catch((err) => {
        console.error(err);
        setLoading(false)
    })
}

const takeMovies = (data) => {
  if (data.Response === 'False') {
    setMovieNotFound(true) 
    setLoading(false)
  }
  else {
    setMovies(data.Search)
    setMovieNotFound(false)
    setLoading(false)
  }
}

useEffect(() => {
    getMovies();
}, [])

  return (
      <div className='cinema'>
        <Search getMovies={getMovies} loading={loading} movieNotFound={movieNotFound} />
        <Movies movies={movies} />
      </div>
  );
};

export default Cinema;
