import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { useHttp } from "../../../hooks/http.hook";

import { HYDRATE } from "next-redux-wrapper";

const initialState = {
    weather: null,
    weatherLoading: false,
    weatherError: false,
};

export const fetchWeatherForecast = createAsyncThunk("mainPage/fetchWeatherForecast", city => {
    const { request } = useHttp();
    const formattedCity = city.toLowerCase();
    return request(
        `https://api.openweathermap.org/data/2.5/weather?q=${formattedCity}&units=metric&appid=${process.env.NEXT_PUBLIC_WEATHER_API}`,
        "GET",
        null,
        {}
    );
});

const mainPageSlice = createSlice({
    name: "mainPage",
    initialState,
    reducers: {
        weather__getWeatherFromPrerender: (state, action) => {
            state.weather = action.payload;
        },
    },
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
            .addCase(HYDRATE, (state, action) => {
                return (state = {
                    ...state,
                    ...action.payload.mainPageSlice,
                });
            })
            .addDefaultCase(() => {});
    },
});

const { actions, reducer } = mainPageSlice;

export default reducer;

export const { weather__getWeatherFromPrerender } = actions;
