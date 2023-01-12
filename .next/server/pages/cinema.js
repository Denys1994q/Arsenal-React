(() => {
var exports = {};
exports.id = 915;
exports.ids = [915];
exports.modules = {

/***/ 2196:
/***/ ((module) => {

module.exports = "/_next/static/videos/Frustrated fans watching a football game-2348e909915243583561ae42ae15bfdd.mp4";

/***/ }),

/***/ 4372:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ cinema_MoviesList_Movies)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
;// CONCATENATED MODULE: ./public/imgs/notFound.png
/* harmony default export */ const notFound = ({"src":"/_next/static/media/notFound.5a5e5a63.png","height":416,"width":416,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAWlBMVEX////+///+/v79/f38/P38/Pz7+/v5+/z6+vr5+vr6+fn5+fn4+fv4+fr5+Pj4+Pn4+Pj59vb29vj29vf29vb19vj49fX19vf19fbz9ff07/D07u741M75zMTSbUOMAAAAP0lEQVR42g3ISQJAMBBFwee3JgQxz+5/TallISiEBNZOlSHUv9/eOFh47pSC4cNVl/PoWFy3bokCT+eRA0AS/EryAid0y0NoAAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":8});
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./components/pages/cinema/cinema_MoviesList/Movie.js




const Movie = ()=>{
    const movies = (0,external_react_redux_.useSelector)((state)=>state.cinemaSlice.movies);
    const showMovies = movies && movies.length > 0 ? movies.map((item)=>{
        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
            className: "movieCard",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                    src: item.Poster !== "N/A" ? item.Poster : notFound,
                    className: "movieCard__img",
                    alt: "image-not-found",
                    width: 310,
                    height: 310
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "movieCard__textbox",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "movieCard__title",
                            children: item.Title
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "movieCard__year",
                            children: item.Year
                        })
                    ]
                })
            ]
        }, item.imdbID);
    }) : null;
    return showMovies;
};
/* harmony default export */ const cinema_MoviesList_Movie = (Movie);

;// CONCATENATED MODULE: ./components/pages/cinema/cinema_MoviesList/Movies.js



const Movies = ()=>{
    const error = (0,external_react_redux_.useSelector)((state)=>state.cinemaSlice.moviesError);
    return /*#__PURE__*/ jsx_runtime_.jsx("ul", {
        className: "cinemaList",
        children: !error ? /*#__PURE__*/ jsx_runtime_.jsx(cinema_MoviesList_Movie, {}) : /*#__PURE__*/ jsx_runtime_.jsx("h4", {
            children: "Sorry, service unavailable"
        })
    });
};
/* harmony default export */ const cinema_MoviesList_Movies = (Movies);


/***/ }),

/***/ 641:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _cinemaSlice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2363);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7197);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4563);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__]);
_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];







const Search = ()=>{
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();
    const movies = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)((state)=>state.cinemaSlice.movies);
    const loading = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)((state)=>state.cinemaSlice.moviesLoading);
    const [hideVideoOnMobile, setHideVideoOnMobile] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [searchValue, setSearchValue] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const getMovies = ()=>{
        if (searchValue) {
            dispatch((0,_cinemaSlice__WEBPACK_IMPORTED_MODULE_3__/* .fetchMovies */ .vw)(searchValue));
            setSearchValue("");
        }
    };
    const handleKey = (e)=>{
        if (e.key === "Enter") {
            getMovies();
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (window.innerWidth < 701) {
            setHideVideoOnMobile(true);
        }
    }, []);
    const sortMovies = (e)=>{
        if (movies && !e.target.classList.contains("cinemaSearch__btnNewFirst-active")) {
            e.target.classList.add("cinemaSearch__btnNewFirst-active");
            dispatch((0,_cinemaSlice__WEBPACK_IMPORTED_MODULE_3__/* .cinema__sortMoviesFromNew */ .jA)());
        } else {
            e.target.classList.remove("cinemaSearch__btnNewFirst-active");
            dispatch((0,_cinemaSlice__WEBPACK_IMPORTED_MODULE_3__/* .cinema__sortMoviesFromOld */ .ev)());
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "cinemaSearch",
        children: [
            !hideVideoOnMobile ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("video", {
                className: "cinemaSearch__video",
                autoPlay: true,
                muted: true,
                loop: true,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("source", {
                    src: __webpack_require__(2196),
                    type: "video/mp4"
                })
            }) : null,
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "cinemaSearch__input",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        type: "text",
                        value: searchValue,
                        onKeyDown: (e)=>handleKey(e),
                        onChange: (e)=>setSearchValue(e.target.value),
                        className: "browser-default"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__.FontAwesomeIcon, {
                        icon: loading ? _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__.faSpinner : _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__.faSearch,
                        className: loading ? "fa fa-spinner fa-spin cinemaSearch__logo" : "cinemaSearch__logo",
                        onClick: ()=>getMovies()
                    }),
                    !movies ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "cinemaSearch__status",
                        children: "movie not found"
                    }) : "",
                    movies && movies.length > 0 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        className: "btn cinemaSearch__btnNewFirst",
                        onClick: (e)=>sortMovies(e),
                        children: "New movies first"
                    }) : null
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Search);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8744:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_pages_cinema_cinema_Search_Search__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(641);
/* harmony import */ var _components_pages_cinema_cinema_MoviesList_Movies__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4372);
/* harmony import */ var _components_pages_cinema_cinemaSlice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2363);
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1526);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_pages_cinema_cinema_Search_Search__WEBPACK_IMPORTED_MODULE_1__]);
_components_pages_cinema_cinema_Search_Search__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const getStaticProps = _store_store__WEBPACK_IMPORTED_MODULE_4__/* .wrapper.getStaticProps */ .Y.getStaticProps((wrapper)=>async ()=>{
        const res = await fetch("https://www.omdbapi.com/?apikey=e8ceae38&s=arsenal");
        const data = await res.json();
        wrapper.dispatch((0,_components_pages_cinema_cinemaSlice__WEBPACK_IMPORTED_MODULE_3__/* .cinema__getMoviesFromPrerender */ .$Q)(data.Search));
    });
const Cinema = ()=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
        className: "cinema",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_pages_cinema_cinema_Search_Search__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_pages_cinema_cinema_MoviesList_Movies__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {})
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Cinema);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7197:
/***/ ((module) => {

"use strict";
module.exports = require("@fortawesome/react-fontawesome");

/***/ }),

/***/ 5184:
/***/ ((module) => {

"use strict";
module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ 9295:
/***/ ((module) => {

"use strict";
module.exports = require("marvel-api-hash-generator");

/***/ }),

/***/ 5648:
/***/ ((module) => {

"use strict";
module.exports = require("next-redux-wrapper");

/***/ }),

/***/ 4957:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9552:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 6022:
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 4563:
/***/ ((module) => {

"use strict";
module.exports = import("@fortawesome/free-solid-svg-icons");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [675,18,725,526], () => (__webpack_exec__(8744)));
module.exports = __webpack_exports__;

})();