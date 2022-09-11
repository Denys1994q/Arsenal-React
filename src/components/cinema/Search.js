import video from '../../imgs/Frustrated fans watching a football game.mp4'

import { useState } from "react";

const Search = (props) => {
    const {getMovies, loading, movieNotFound} = props;

    const [searchValue, setSearchValue] = useState('');

    const handleKey = (e) => {
        if (e.key === "Enter") {
            getMovies(searchValue);
          }
    }

    const classesForSearch = loading ?
    "fa fa-spinner fa-spin movies-search-logo"
    : "fa fa-search movies-search-logo";
    
    return (
    <div className="movies-search-inpWrapper">
        <video className='video' autoPlay muted loop>
          <source src={video} type="video/mp4" />
        </video>
        <div className='movies-search-inp'>
            <input value={searchValue} onKeyDown={(e) => handleKey(e)} onChange={(e) => setSearchValue(e.target.value)} type="text" className="browser-default" placeholder="Enter movie title" />
            <i onClick={() => getMovies(searchValue)} className={classesForSearch}></i>
        </div>
        {movieNotFound ? <div className='movies-search-notFound'>movie not found</div> : ''}
        
    </div>
    )
}

export default Search;