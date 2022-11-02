import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { useHttp } from "../../hooks/http.hook";

const initialState = {
    movies: [],
    moviesLoading: false,
    moviesError: false,
};

export const fetchMovies = createAsyncThunk("cinema/fetchMovies", filmName => {
    const { request } = useHttp();
    return request(`https://www.omdbapi.com/?apikey=e8ceae38&s=${filmName}`, "GET", null, {});
});

const cinemaSlice = createSlice({
    name: "cinema",
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchMovies.pending, state => {
                state.moviesLoading = true;
                state.moviesError = false;
            })
            .addCase(fetchMovies.fulfilled, (state, action) => {
                state.movies = action.payload;
                state.moviesLoading = false;
                state.moviesError = false;
            })
            .addCase(fetchMovies.rejected, state => {
                state.moviesError = true;
                state.moviesLoading = false;
            })
            .addDefaultCase(() => {});
    },
});

const { actions, reducer } = cinemaSlice;

export default reducer;

export const {} = actions;
