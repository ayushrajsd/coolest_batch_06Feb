import React, { useState, useEffect } from "react";
import Pagination from "./Pagination";
import MovieCard from "./MovieCard";
import axios from "axios";

function Movies() {
  const [movies, setMovies] = useState([]);
  const [pageNo, setPageNo] = useState(1);
  const [watchList, setWatchList] = useState([]);

 useEffect(()=>{
  const moviesFromLocalStorage = JSON.parse(localStorage.getItem('movies'))
  if(moviesFromLocalStorage){
    setWatchList(moviesFromLocalStorage)
  }
 },[]) 

  const addToWatchList = (movieObj) => {
    const updatedWatchList = [...watchList, movieObj]; // watchList.concat(movieObj)
    setWatchList(updatedWatchList);
    localStorage.setItem('movies',JSON.stringify(updatedWatchList))
  }

  const removeFromWatchList = (movieObj)=>{
    let filteredMovies = watchList.filter((movie)=> {
      return movie.id != movieObj.id
     }) // return all those movies whose id is not equal to movieObj.id
    setWatchList(filteredMovies)
    localStorage.setItem('movies',JSON.stringify(filteredMovies))
  }
  console.log("watchlist",watchList)

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/trending/movie/day?api_key=60d18d673bedf3d701f305ef746f6eef&language=en-US&page=${pageNo}`
      )
      .then((response) => {
        console.log("Films", response.data.results);
        setMovies(response.data.results);
      });
  }, [pageNo]);

  const handleNext = () => {
    setPageNo(pageNo + 1);
  };

  const handlePrevious = () => {
    if (pageNo == 1) {
      setPageNo(1);
    } else {
      setPageNo(pageNo - 1);
    }
  };

  return (
    <div>
      <div className="text-2xl font-bold text-center m-5">
        <h1>Trending Movies</h1>
      </div>
      <div className="flex justify-evenly flex-wrap gap-8">
        {movies.map((movieObj) => {
          return <MovieCard movieObj={movieObj} addToWatchList={addToWatchList} watchList={watchList} removeFromWatchList={removeFromWatchList}/>;
        })}
      </div>
      <Pagination
        nextPageFn={handleNext}
        previousPageFn={handlePrevious}
        pageNumber={pageNo}
      />
    </div>
  );
}

export default Movies;
