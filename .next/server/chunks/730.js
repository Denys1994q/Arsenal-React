"use strict";
exports.id = 730;
exports.ids = [730];
exports.modules = {

/***/ 3730:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "v": () => (/* binding */ fetchMovies)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hooks_http_hook__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4457);


const initialState = {
    movies: [],
    moviesLoading: false,
    moviesError: false
};
const fetchMovies = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("cinema/fetchMovies", (filmName)=>{
    const { request  } = (0,_hooks_http_hook__WEBPACK_IMPORTED_MODULE_1__/* .useHttp */ .i)();
    return request(`https://www.omdbapi.com/?apikey=e8ceae38&s=${filmName}`, "GET", null, {});
});
const cinemaSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "cinema",
    initialState,
    reducers: {
        cinema: (state, action)=>{
            state.order.push(action.payload);
        }
    },
    extraReducers: (builder)=>{
        builder.addCase(fetchMovies.pending, (state)=>{
            state.moviesLoading = true;
            state.moviesError = false;
        }).addCase(fetchMovies.fulfilled, (state, action)=>{
            state.movies = action.payload;
            state.moviesLoading = false;
            state.moviesError = false;
        }).addCase(fetchMovies.rejected, (state)=>{
            state.moviesError = true;
            state.moviesLoading = false;
        }).addDefaultCase(()=>{});
    }
});
const { actions , reducer  } = cinemaSlice;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (reducer);
const {} = actions;


/***/ })

};
;