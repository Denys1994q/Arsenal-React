import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { useHttp } from "../../hooks/http.hook";

const initialState = {
    weather: {},
    weatherLoading: false,
    weatherError: false,
};

export const fetchWeatherForecast = createAsyncThunk("mainPage/fetchWeatherForecast", () => {
    const { request } = useHttp();
    return request(
        `https://api.openweathermap.org/data/2.5/weather?q=london&units=metric&appid=cea91e10193139338f543bcc88a81974`,
        "GET",
        null,
        {}
    );
});

const mainPageSlice = createSlice({
    name: "mainPage",
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchWeatherForecast.pending, state => {
                state.weatherLoading = true;
                state.weatherError = false;
            })
            .addCase(fetchWeatherForecast.fulfilled, (state, action) => {
                state.weather = action.payload;
                state.weatherLoading = false;
                state.weatherError = false;
            })
            .addCase(fetchWeatherForecast.rejected, state => {
                state.weatherError = true;
                state.weatherLoading = false;
            })
            .addDefaultCase(() => {});
    },
});

const { actions, reducer } = mainPageSlice;

export default reducer;

export const {
    // randomPokemons_getPokemons,
} = actions;