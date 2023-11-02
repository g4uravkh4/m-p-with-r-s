import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
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

export const fetchAsyncMSDetail = createAsyncThunk(
  "movies/fetchAsyncMSDetail",
  async (id) => {
    const response = await MovieApi.get(`?APIKey=${APIKey}&i=${id}&Plot=full`);
    return response.data;
  }
);

const initialState = {
  movies: {},
  shows: {},
  selectedMS: {},
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    // addMovies: (state, { payload }) => {
    //   state.movies = payload;
    // },
    removeSelectedMS: (state) => {
      state.selectedMS = {};
    },
  },
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
      })
      .addCase(fetchAsyncMSDetail.fulfilled, (state, { payload }) => {
        console.log("details fetched successfully");
        return { ...state, selectedMS: payload };
      });
  },
});

export const { removeSelectedMS } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getAllShows = (state) => state.movies.shows;
export const getSelectedMS = (state) => state.movies.selectedMS;
export default movieSlice.reducer;
