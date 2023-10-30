import { createAction, createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import MovieApi from "../../common/api/MovieApi";
import { APIKey } from "../../common/api/MovieApiKey";

export const fetchAsyncMovies = createAsyncThunk(
  "movies/fetchAsyncMovies",
  async () => {
    const movieText = "Avengers";
    const response = await MovieApi.get(
      `?APIKey=${APIKey}&s=${movieText}&type=movie`
    );
    return response.data;
  }
);

export const fetchAsyncShows = createAsyncThunk(
  "movies/fetchAsyncShows",
  async () => {
    const seriesText = "Friends";
    const response = await MovieApi.get(
      `?APIKey=${APIKey}&s=${seriesText}&type=series`
    );
    return response.data;
  }
);

const initialState = {
  movies: {},
  shows: {},
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addMovies: (state, { payload }) => {
      state.movies = payload;
    },
  },
  // extraReducers: {
  //   [fetchAsyncMovies.pending]: () => {
  //     console.log("pending");
  //   },
  //   [fetchAsyncMovies.fulfilled]: (state, payload) => {
  //     console.log("fetched successfully");
  //     return { ...state, movies: payload };
  //   },
  //   [fetchAsyncMovies.rejected]: () => {
  //     console.log("reject");
  //   },
  //   [fetchAsyncShows.fulfilled]: (state, payload) => {
  //     console.log("fetched successfully");
  //     return { ...state, shows: payload };
  //   },
  // },

  extraReducers: (builder) => {
    builder
      .addCase(fetchAsyncMovies.pending, () => {
        console.log("pending");
      })
      .addCase(fetchAsyncMovies.fulfilled, (state, { payload }) => {
        console.log("fetched successfully");
        return { ...state, movies: payload };
      })
      .addCase(fetchAsyncMovies.rejected, () => {
        console.log("reject");
      })
      .addCase(fetchAsyncShows.fulfilled, (state, { payload }) => {
        console.log("fetched successfully");
        return { ...state, shows: payload };
      });
  },
});

export const { addMovies } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getAllShows = (state) => state.movies.shows;
export default movieSlice.reducer;
