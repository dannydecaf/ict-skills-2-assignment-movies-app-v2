import React, { useState } from "react";

export const MoviesContext = React.createContext(null);

const MoviesContextProvider = (props) => {
  const [favourites, setFavourites] = useState([]);
  const [myReviews, setMyReviews] = useState([]);
  const [mustWatch, setMustWatch] = useState([]);
  const [tvFavs, setTvFavs] = useState([]);
  const [myTvReviews, setMyTvReviews] = useState([]);
  const [mustWatchTv, setMustWatchTv] = useState([]);


  const addToFavourites = (movie) => {
    if (!favourites.includes(movie.id)) {
      let newFavourites = [...favourites, movie.id];
      setFavourites(newFavourites);
      console.log(newFavourites[newFavourites.length-1]);
    }
  };

  const removeFromFavourites = (movie) => {
    setFavourites(favourites.filter((mId) => mId !== movie.id));
  };

  const addToTvFavs = (tv) => {
    if (!tvFavs.includes(tv.id)) {
      let newTvFavs = [...tvFavs, tv.id];
      setTvFavs(newTvFavs);
      console.log(newTvFavs[newTvFavs.length-1]);
    }
  };

  const removeFromTvFavs = (tv) => {
    setTvFavs(tvFavs.filter((tId) => tId !== tv.id));
  };

  const addToMustWatch = (movie) => {
    if (!mustWatch.includes(movie.id)) {
      let newMustWatch = [...mustWatch, movie.id];
      setMustWatch(newMustWatch);
      console.log(newMustWatch[newMustWatch.length-1]);
    }
  };

  const addTvToMustWatch = (tv) => {
    if (!mustWatchTv.includes(tv.id)) {
      let newMustWatchTv = [...mustWatchTv, tv.id];
      setMustWatchTv(newMustWatchTv);
      console.log(newMustWatchTv[newMustWatchTv.length-1]);
    }
  };

  const addReview = (movie, review) => {
    setMyReviews( {...myReviews, [movie.id]: review } )
  };

  const addTvReview = (tv, tvReview) => {
    setMyTvReviews( {...myTvReviews, [tv.id]: tvReview } )
  };

  return (
    <MoviesContext.Provider
      value={{
        favourites,
        addToFavourites,
        removeFromFavourites,
        addToTvFavs,
        removeFromTvFavs,
        addToMustWatch,
        addTvToMustWatch,
        addReview,
        addTvReview,
      }}
    >
      {props.children}
    </MoviesContext.Provider>
  );
};

export default MoviesContextProvider;