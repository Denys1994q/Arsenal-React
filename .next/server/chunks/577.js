"use strict";
exports.id = 577;
exports.ids = [577];
exports.modules = {

/***/ 5106:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/logo.2181f787.svg","height":380,"width":323});

/***/ }),

/***/ 8040:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "_": () => (/* binding */ fetchWeatherForecast)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hooks_http_hook__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4457);


const initialState = {
    weather: {},
    weatherLoading: false,
    weatherError: false
};
const fetchWeatherForecast = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("mainPage/fetchWeatherForecast", ()=>{
    const { request  } = (0,_hooks_http_hook__WEBPACK_IMPORTED_MODULE_1__/* .useHttp */ .i)();
    return request(`https://api.openweathermap.org/data/2.5/weather?q=london&units=metric&appid=cea91e10193139338f543bcc88a81974`, "GET", null, {});
});
const mainPageSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "mainPage",
    initialState,
    reducers: {},
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
        }).addDefaultCase(()=>{});
    }
});
const { actions , reducer  } = mainPageSlice;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (reducer);
const {} = actions;


/***/ })

};
;