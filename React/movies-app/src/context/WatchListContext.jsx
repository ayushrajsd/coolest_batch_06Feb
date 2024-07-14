import { createContext, useState, useEffect } from "react";

const WatchListContext = createContext();

export default function WatchListContextWrapper({ children }) {
  const [watchList, setWatchList] = useState([]);
  useEffect(() => {
    const moviesFromLocalStorage = JSON.parse(localStorage.getItem("movies"));
    if (moviesFromLocalStorage) {
      setWatchList(moviesFromLocalStorage);
    }
  }, []);
  const addToWatchList = (movieObj) => {
    const updatedWatchList = [...watchList, movieObj]; // watchList.concat(movieObj)
    setWatchList(updatedWatchList);
    localStorage.setItem("movies", JSON.stringify(updatedWatchList));
  };
  const removeFromWatchList = (movieObj) => {
    let filteredMovies = watchList.filter((movie) => {
      return movie.id != movieObj.id;
    }); // return all those movies whose id is not equal to movieObj.id
    setWatchList(filteredMovies);
    localStorage.setItem("movies", JSON.stringify(filteredMovies));
  };
  console.log("watchlist", watchList);

  return (
    <WatchListContext.Provider
      value={{ addToWatchList, removeFromWatchList, watchList, setWatchList }}
    >
      {children}
    </WatchListContext.Provider>
  );
}

export { WatchListContext };