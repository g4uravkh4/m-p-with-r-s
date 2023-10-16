import React, { useEffect } from "react";
import MovieListing from "../MovieListing/MovieListing";
import MovieApi from "../../common/api/MovieApi";
import { APIKey } from "../../common/api/MovieApiKey";

function Home() {
  useEffect(() => {
    const fetchMovies = async () => {
      const response = await MovieApi.get(
        `?APIKey=${APIKey}&s=batman&type=movie`
      ).catch((err) => {
        console.log("Err: ", err);
      });
      console.log("Response: ", response);
    };

    fetchMovies();
  }, []);
  return (
    <div>
      <div className="banner-img"></div>
      <MovieListing />
    </div>
  );
}

export default Home;
