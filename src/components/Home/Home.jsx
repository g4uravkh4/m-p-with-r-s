import React, { useEffect } from "react";
import MovieListing from "../MovieListing/MovieListing";
import { useDispatch } from "react-redux";
import {
  fetchAsyncMovies,
  fetchAsyncShows,
} from "../../features/movies/movieSlice";

function Home() {
  const dispatch = useDispatch();
  const movieTxt = "Harry Potter";
  const showTxt = "Game of Thrones";
  useEffect(() => {
    dispatch(fetchAsyncMovies(movieTxt));
    dispatch(fetchAsyncShows(showTxt));
  }, [dispatch]);
  return (
    <div>
      <div className="banner-img"></div>
      <MovieListing />
    </div>
  );
}

export default Home;
