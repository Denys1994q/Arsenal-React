"use strict";
exports.id = 526;
exports.ids = [526];
exports.modules = {

/***/ 2363:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$Q": () => (/* binding */ cinema__getMoviesFromPrerender),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "ev": () => (/* binding */ cinema__sortMoviesFromOld),
/* harmony export */   "jA": () => (/* binding */ cinema__sortMoviesFromNew),
/* harmony export */   "vw": () => (/* binding */ fetchMovies)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5648);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hooks_http_hook__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4457);



const initialState = {
    movies: [],
    moviesLoading: false,
    moviesError: false
};
const fetchMovies = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("cinema/fetchMovies", (filmName)=>{
    const { request  } = (0,_hooks_http_hook__WEBPACK_IMPORTED_MODULE_2__/* .useHttp */ .i)();
    return request(`https://www.omdbapi.com/?apikey=e8ceae38&s=${filmName}`, "GET", null, {});
});
const cinemaSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "cinema",
    initialState,
    reducers: {
        cinema__sortMoviesFromNew: (state, action)=>{
            state.movies.sort((a, b)=>{
                return b.Year - a.Year;
            });
        },
        cinema__sortMoviesFromOld: (state, action)=>{
            state.movies.sort((a, b)=>{
                return a.Year - b.Year;
            });
        },
        cinema__getMoviesFromPrerender: (state, action)=>{
            state.movies = action.payload;
        }
    },
    extraReducers: (builder)=>{
        builder.addCase(fetchMovies.pending, (state)=>{
            state.moviesLoading = true;
            state.moviesError = false;
        }).addCase(fetchMovies.fulfilled, (state, action)=>{
            if (action.payload.Response === "False") {
                state.movies = [];
            }
            state.movies = action.payload.Search;
            state.moviesLoading = false;
            state.moviesError = false;
        }).addCase(fetchMovies.rejected, (state)=>{
            state.moviesError = true;
            state.moviesLoading = false;
        }).addCase(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__.HYDRATE, (state, action)=>{
            return state = {
                ...state,
                ...action.payload.cinemaSlice
            };
        }).addDefaultCase(()=>{});
    }
});
const { actions , reducer  } = cinemaSlice;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (reducer);
const { cinema__sortMoviesFromNew , cinema__sortMoviesFromOld , cinema__getMoviesFromPrerender  } = actions;


/***/ }),

/***/ 8665:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PG": () => (/* binding */ weather__getWeatherFromPrerender),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export fetchWeatherForecast */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hooks_http_hook__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4457);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5648);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__);



const initialState = {
    weather: {},
    weatherLoading: false,
    weatherError: false
};
const fetchWeatherForecast = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("mainPage/fetchWeatherForecast", (city)=>{
    const { request  } = (0,_hooks_http_hook__WEBPACK_IMPORTED_MODULE_2__/* .useHttp */ .i)();
    const formattedCity = city.toLowerCase();
    return request(`https://api.openweathermap.org/data/2.5/weather?q=${formattedCity}&units=metric&appid=${"cea91e10193139338f543bcc88a81974"}`, "GET", null, {});
});
const mainPageSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "mainPage",
    initialState,
    reducers: {
        weather__getWeatherFromPrerender: (state, action)=>{
            state.weather = action.payload;
        }
    },
    extraReducers: (builder)=>{
        builder.addCase(fetchWeatherForecast.pending, (state)=>{
            state.weatherLoading = true;
            state.weatherError = false;
        }).addCase(fetchWeatherForecast.fulfilled, (state, action)=>{
            state.weather = action.payload;
            state.weatherLoading = false;
            state.weatherError = false;
        }).addCase(fetchWeatherForecast.rejected, (state)=>{
            state.weatherError = true;
            state.weatherLoading = false;
        }).addCase(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__.HYDRATE, (state, action)=>{
            return state = {
                ...state,
                ...action.payload.mainPageSlice
            };
        }).addDefaultCase(()=>{});
    }
});
const { actions , reducer  } = mainPageSlice;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (reducer);
const { weather__getWeatherFromPrerender  } = actions;


/***/ }),

/***/ 1526:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Y": () => (/* binding */ wrapper)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_pages_main_mainPageSlice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8665);
/* harmony import */ var _components_pages_cinema_cinemaSlice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2363);
/* harmony import */ var _components_pages_team_teamSlice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2018);
/* harmony import */ var _components_pages_shop_shopSlice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1725);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5648);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_5__);






const store = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.configureStore)({
    reducer: {
        mainPageSlice: _components_pages_main_mainPageSlice__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP,
        cinemaSlice: _components_pages_cinema_cinemaSlice__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .ZP,
        teamSlice: _components_pages_team_teamSlice__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .ZP,
        shopSlice: _components_pages_shop_shopSlice__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .ZP
    },
    middleware: (getDefaultMiddleware)=>getDefaultMiddleware(),
    devTools: "production" !== "production"
});
const makeStore = ()=>store;
const wrapper = (0,next_redux_wrapper__WEBPACK_IMPORTED_MODULE_5__.createWrapper)(makeStore);


/***/ })

};
;