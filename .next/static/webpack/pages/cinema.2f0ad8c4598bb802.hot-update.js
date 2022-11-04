"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/cinema",{

/***/ "./components/cinema/cinema_MoviesList/Movie.js":
/*!******************************************************!*\
  !*** ./components/cinema/cinema_MoviesList/Movie.js ***!
  \******************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _public_imgs_notFound_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../public/imgs/notFound.png */ \"./public/imgs/notFound.png\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\nvar Movie = function(param) {\n    var preLoadedMovies = param.preLoadedMovies;\n    _s();\n    var movies = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(function(state) {\n        return state.cinemaSlice.movies;\n    });\n    var preloadedListofMovies = preLoadedMovies.map(function(item) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"movies-list-item\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"movies-list-item-img\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                            src: item.Poster !== \"N/A\" ? item.Poster : _public_imgs_notFound_png__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n                            alt: \"image-not-found\",\n                            width: 300,\n                            height: 300\n                        }, void 0, false, {\n                            fileName: \"C:\\\\react\\\\Arsenal\\\\my-app\\\\components\\\\cinema\\\\cinema_MoviesList\\\\Movie.js\",\n                            lineNumber: 14,\n                            columnNumber: 25\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\react\\\\Arsenal\\\\my-app\\\\components\\\\cinema\\\\cinema_MoviesList\\\\Movie.js\",\n                        lineNumber: 13,\n                        columnNumber: 21\n                    }, _this),\n                    \"d\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"movies-list-item-title\",\n                        children: item.Title\n                    }, void 0, false, {\n                        fileName: \"C:\\\\react\\\\Arsenal\\\\my-app\\\\components\\\\cinema\\\\cinema_MoviesList\\\\Movie.js\",\n                        lineNumber: 22,\n                        columnNumber: 21\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: item.Year\n                    }, void 0, false, {\n                        fileName: \"C:\\\\react\\\\Arsenal\\\\my-app\\\\components\\\\cinema\\\\cinema_MoviesList\\\\Movie.js\",\n                        lineNumber: 23,\n                        columnNumber: 21\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\react\\\\Arsenal\\\\my-app\\\\components\\\\cinema\\\\cinema_MoviesList\\\\Movie.js\",\n                lineNumber: 12,\n                columnNumber: 17\n            }, _this)\n        }, item.imdbID, false, {\n            fileName: \"C:\\\\react\\\\Arsenal\\\\my-app\\\\components\\\\cinema\\\\cinema_MoviesList\\\\Movie.js\",\n            lineNumber: 11,\n            columnNumber: 13\n        }, _this);\n    });\n    var showMovies = movies.Search ? movies.Search.map(function(item) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"movies-list-item\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"movies-list-item-img\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                            src: item.Poster !== \"N/A\" ? item.Poster : _public_imgs_notFound_png__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n                            alt: \"image-not-found\",\n                            width: 300,\n                            height: 300\n                        }, void 0, false, {\n                            fileName: \"C:\\\\react\\\\Arsenal\\\\my-app\\\\components\\\\cinema\\\\cinema_MoviesList\\\\Movie.js\",\n                            lineNumber: 35,\n                            columnNumber: 31\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\react\\\\Arsenal\\\\my-app\\\\components\\\\cinema\\\\cinema_MoviesList\\\\Movie.js\",\n                        lineNumber: 34,\n                        columnNumber: 27\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"movies-list-item-title\",\n                        children: item.Title\n                    }, void 0, false, {\n                        fileName: \"C:\\\\react\\\\Arsenal\\\\my-app\\\\components\\\\cinema\\\\cinema_MoviesList\\\\Movie.js\",\n                        lineNumber: 42,\n                        columnNumber: 27\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: item.Year\n                    }, void 0, false, {\n                        fileName: \"C:\\\\react\\\\Arsenal\\\\my-app\\\\components\\\\cinema\\\\cinema_MoviesList\\\\Movie.js\",\n                        lineNumber: 43,\n                        columnNumber: 27\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\react\\\\Arsenal\\\\my-app\\\\components\\\\cinema\\\\cinema_MoviesList\\\\Movie.js\",\n                lineNumber: 33,\n                columnNumber: 23\n            }, _this)\n        }, item.imdbID, false, {\n            fileName: \"C:\\\\react\\\\Arsenal\\\\my-app\\\\components\\\\cinema\\\\cinema_MoviesList\\\\Movie.js\",\n            lineNumber: 32,\n            columnNumber: 19\n        }, _this);\n    }) : preloadedListofMovies;\n    return showMovies;\n};\n_s(Movie, \"eStvhP8slTt+s7x6M95dK6yXYA4=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector\n    ];\n});\n_c = Movie;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Movie);\nvar _c;\n$RefreshReg$(_c, \"Movie\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2NpbmVtYS9jaW5lbWFfTW92aWVzTGlzdC9Nb3ZpZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7OztBQUE4RDtBQUVwQjtBQUNYO0FBRS9CLElBQU1HLFFBQVEsZ0JBQXlCO1FBQXRCQyx3QkFBQUE7O0lBQ2IsSUFBTUMsU0FBU0osd0RBQVdBLENBQUNLLFNBQUFBO2VBQVNBLE1BQU1DLFdBQVcsQ0FBQ0YsTUFBTTs7SUFFNUQsSUFBTUcsd0JBQXdCSixnQkFBZ0JLLEdBQUcsQ0FBQ0MsU0FBQUEsTUFBUTtRQUN0RCxxQkFDSSw4REFBQ0M7c0JBQ0csNEVBQUNDO2dCQUFJQyxXQUFVOztrQ0FDWCw4REFBQ0Q7d0JBQUlDLFdBQVU7a0NBQ1gsNEVBQUNYLG1EQUFLQTs0QkFDRlksS0FBS0osS0FBS0ssTUFBTSxLQUFLLFFBQVFMLEtBQUtLLE1BQU0sR0FBR2YsaUVBQWE7NEJBQ3hEZ0IsS0FBSTs0QkFDSkMsT0FBTzs0QkFDUEMsUUFBUTs7Ozs7Ozs7Ozs7b0JBRVY7a0NBRU4sOERBQUNOO3dCQUFJQyxXQUFVO2tDQUEwQkgsS0FBS1MsS0FBSzs7Ozs7O2tDQUNuRCw4REFBQ1A7a0NBQUtGLEtBQUtVLElBQUk7Ozs7Ozs7Ozs7OztXQVpkVixLQUFLVyxNQUFNOzs7OztJQWdCNUI7SUFFQSxJQUFNQyxhQUFhakIsT0FBT2tCLE1BQU0sR0FDMUJsQixPQUFPa0IsTUFBTSxDQUFDZCxHQUFHLENBQUNDLFNBQUFBLE1BQVE7UUFDdEIscUJBQ0ksOERBQUNDO3NCQUNHLDRFQUFDQztnQkFBSUMsV0FBVTs7a0NBQ1gsOERBQUNEO3dCQUFJQyxXQUFVO2tDQUNYLDRFQUFDWCxtREFBS0E7NEJBQ0ZZLEtBQUtKLEtBQUtLLE1BQU0sS0FBSyxRQUFRTCxLQUFLSyxNQUFNLEdBQUdmLGlFQUFhOzRCQUN4RGdCLEtBQUk7NEJBQ0pDLE9BQU87NEJBQ1BDLFFBQVE7Ozs7Ozs7Ozs7O2tDQUdoQiw4REFBQ047d0JBQUlDLFdBQVU7a0NBQTBCSCxLQUFLUyxLQUFLOzs7Ozs7a0NBQ25ELDhEQUFDUDtrQ0FBS0YsS0FBS1UsSUFBSTs7Ozs7Ozs7Ozs7O1dBWGRWLEtBQUtXLE1BQU07Ozs7O0lBZTVCLEtBQ0FiLHFCQUFxQjtJQUUzQixPQUFPYztBQUNYO0dBN0NNbkI7O1FBQ2FGLG9EQUFXQTs7O0tBRHhCRTtBQStDTiwrREFBZUEsS0FBS0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2NpbmVtYS9jaW5lbWFfTW92aWVzTGlzdC9Nb3ZpZS5qcz8wZTJhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBpbWFnZU5vdEZvdW5kIGZyb20gXCIuLi8uLi8uLi9wdWJsaWMvaW1ncy9ub3RGb3VuZC5wbmdcIjtcclxuXHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5cclxuY29uc3QgTW92aWUgPSAoeyBwcmVMb2FkZWRNb3ZpZXMgfSkgPT4ge1xyXG4gICAgY29uc3QgbW92aWVzID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUuY2luZW1hU2xpY2UubW92aWVzKTtcclxuXHJcbiAgICBjb25zdCBwcmVsb2FkZWRMaXN0b2ZNb3ZpZXMgPSBwcmVMb2FkZWRNb3ZpZXMubWFwKGl0ZW0gPT4ge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxsaSBrZXk9e2l0ZW0uaW1kYklEfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtb3ZpZXMtbGlzdC1pdGVtJz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbW92aWVzLWxpc3QtaXRlbS1pbWcnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17aXRlbS5Qb3N0ZXIgIT09IFwiTi9BXCIgPyBpdGVtLlBvc3RlciA6IGltYWdlTm90Rm91bmR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9J2ltYWdlLW5vdC1mb3VuZCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXszMDB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezMwMH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICBkXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J21vdmllcy1saXN0LWl0ZW0tdGl0bGUnPntpdGVtLlRpdGxlfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+e2l0ZW0uWWVhcn08L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBzaG93TW92aWVzID0gbW92aWVzLlNlYXJjaFxyXG4gICAgICAgID8gbW92aWVzLlNlYXJjaC5tYXAoaXRlbSA9PiB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgPGxpIGtleT17aXRlbS5pbWRiSUR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J21vdmllcy1saXN0LWl0ZW0nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtb3ZpZXMtbGlzdC1pdGVtLWltZyc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtpdGVtLlBvc3RlciAhPT0gXCJOL0FcIiA/IGl0ZW0uUG9zdGVyIDogaW1hZ2VOb3RGb3VuZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD0naW1hZ2Utbm90LWZvdW5kJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezMwMH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD17MzAwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtb3ZpZXMtbGlzdC1pdGVtLXRpdGxlJz57aXRlbS5UaXRsZX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PntpdGVtLlllYXJ9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgfSlcclxuICAgICAgICA6IHByZWxvYWRlZExpc3RvZk1vdmllcztcclxuXHJcbiAgICByZXR1cm4gc2hvd01vdmllcztcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1vdmllO1xyXG4iXSwibmFtZXMiOlsiaW1hZ2VOb3RGb3VuZCIsInVzZVNlbGVjdG9yIiwiSW1hZ2UiLCJNb3ZpZSIsInByZUxvYWRlZE1vdmllcyIsIm1vdmllcyIsInN0YXRlIiwiY2luZW1hU2xpY2UiLCJwcmVsb2FkZWRMaXN0b2ZNb3ZpZXMiLCJtYXAiLCJpdGVtIiwibGkiLCJkaXYiLCJjbGFzc05hbWUiLCJzcmMiLCJQb3N0ZXIiLCJhbHQiLCJ3aWR0aCIsImhlaWdodCIsIlRpdGxlIiwiWWVhciIsImltZGJJRCIsInNob3dNb3ZpZXMiLCJTZWFyY2giXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/cinema/cinema_MoviesList/Movie.js\n"));

/***/ })

});