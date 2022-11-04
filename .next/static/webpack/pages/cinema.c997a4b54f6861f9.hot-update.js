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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _public_imgs_notFound_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../public/imgs/notFound.png */ \"./public/imgs/notFound.png\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\nvar Movie = function(param) {\n    var preLoadedMovies = param.preLoadedMovies;\n    _s();\n    var movies = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(function(state) {\n        return state.cinemaSlice.movies;\n    });\n    var preloadedListofMovies = preLoadedMovies.map(function(item) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"movies-list-item\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"movies-list-item-img\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                            src: item.Poster !== \"N/A\" ? item.Poster : _public_imgs_notFound_png__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n                            alt: \"image-not-found\",\n                            width: 300,\n                            height: 300\n                        }, void 0, false, {\n                            fileName: \"C:\\\\react\\\\Arsenal\\\\my-app\\\\components\\\\cinema\\\\cinema_MoviesList\\\\Movie.js\",\n                            lineNumber: 14,\n                            columnNumber: 25\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\react\\\\Arsenal\\\\my-app\\\\components\\\\cinema\\\\cinema_MoviesList\\\\Movie.js\",\n                        lineNumber: 13,\n                        columnNumber: 21\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"movies-list-item-title\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: item.Title\n                            }, void 0, false, {\n                                fileName: \"C:\\\\react\\\\Arsenal\\\\my-app\\\\components\\\\cinema\\\\cinema_MoviesList\\\\Movie.js\",\n                                lineNumber: 22,\n                                columnNumber: 25\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: item.Year\n                            }, void 0, false, {\n                                fileName: \"C:\\\\react\\\\Arsenal\\\\my-app\\\\components\\\\cinema\\\\cinema_MoviesList\\\\Movie.js\",\n                                lineNumber: 23,\n                                columnNumber: 25\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\react\\\\Arsenal\\\\my-app\\\\components\\\\cinema\\\\cinema_MoviesList\\\\Movie.js\",\n                        lineNumber: 21,\n                        columnNumber: 21\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\react\\\\Arsenal\\\\my-app\\\\components\\\\cinema\\\\cinema_MoviesList\\\\Movie.js\",\n                lineNumber: 12,\n                columnNumber: 17\n            }, _this)\n        }, item.imdbID, false, {\n            fileName: \"C:\\\\react\\\\Arsenal\\\\my-app\\\\components\\\\cinema\\\\cinema_MoviesList\\\\Movie.js\",\n            lineNumber: 11,\n            columnNumber: 13\n        }, _this);\n    });\n    var showMovies = movies.Search ? movies.Search.map(function(item) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"movies-list-item\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"movies-list-item-img\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                            src: item.Poster !== \"N/A\" ? item.Poster : _public_imgs_notFound_png__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n                            alt: \"image-not-found\",\n                            width: 300,\n                            height: 300\n                        }, void 0, false, {\n                            fileName: \"C:\\\\react\\\\Arsenal\\\\my-app\\\\components\\\\cinema\\\\cinema_MoviesList\\\\Movie.js\",\n                            lineNumber: 36,\n                            columnNumber: 31\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\react\\\\Arsenal\\\\my-app\\\\components\\\\cinema\\\\cinema_MoviesList\\\\Movie.js\",\n                        lineNumber: 35,\n                        columnNumber: 27\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"movies-list-item-box\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"movies-list-item-title\",\n                                children: item.Title\n                            }, void 0, false, {\n                                fileName: \"C:\\\\react\\\\Arsenal\\\\my-app\\\\components\\\\cinema\\\\cinema_MoviesList\\\\Movie.js\",\n                                lineNumber: 44,\n                                columnNumber: 31\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: item.Year\n                            }, void 0, false, {\n                                fileName: \"C:\\\\react\\\\Arsenal\\\\my-app\\\\components\\\\cinema\\\\cinema_MoviesList\\\\Movie.js\",\n                                lineNumber: 45,\n                                columnNumber: 31\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\react\\\\Arsenal\\\\my-app\\\\components\\\\cinema\\\\cinema_MoviesList\\\\Movie.js\",\n                        lineNumber: 43,\n                        columnNumber: 27\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\react\\\\Arsenal\\\\my-app\\\\components\\\\cinema\\\\cinema_MoviesList\\\\Movie.js\",\n                lineNumber: 34,\n                columnNumber: 23\n            }, _this)\n        }, item.imdbID, false, {\n            fileName: \"C:\\\\react\\\\Arsenal\\\\my-app\\\\components\\\\cinema\\\\cinema_MoviesList\\\\Movie.js\",\n            lineNumber: 33,\n            columnNumber: 19\n        }, _this);\n    }) : preloadedListofMovies;\n    return showMovies;\n};\n_s(Movie, \"eStvhP8slTt+s7x6M95dK6yXYA4=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector\n    ];\n});\n_c = Movie;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Movie);\nvar _c;\n$RefreshReg$(_c, \"Movie\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2NpbmVtYS9jaW5lbWFfTW92aWVzTGlzdC9Nb3ZpZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7OztBQUE4RDtBQUVwQjtBQUNYO0FBRS9CLElBQU1HLFFBQVEsZ0JBQXlCO1FBQXRCQyx3QkFBQUE7O0lBQ2IsSUFBTUMsU0FBU0osd0RBQVdBLENBQUNLLFNBQUFBO2VBQVNBLE1BQU1DLFdBQVcsQ0FBQ0YsTUFBTTs7SUFFNUQsSUFBTUcsd0JBQXdCSixnQkFBZ0JLLEdBQUcsQ0FBQ0MsU0FBQUEsTUFBUTtRQUN0RCxxQkFDSSw4REFBQ0M7c0JBQ0csNEVBQUNDO2dCQUFJQyxXQUFVOztrQ0FDWCw4REFBQ0Q7d0JBQUlDLFdBQVU7a0NBQ1gsNEVBQUNYLG1EQUFLQTs0QkFDRlksS0FBS0osS0FBS0ssTUFBTSxLQUFLLFFBQVFMLEtBQUtLLE1BQU0sR0FBR2YsaUVBQWE7NEJBQ3hEZ0IsS0FBSTs0QkFDSkMsT0FBTzs0QkFDUEMsUUFBUTs7Ozs7Ozs7Ozs7a0NBR2hCLDhEQUFDTjt3QkFBSUMsV0FBVTs7MENBQ1gsOERBQUNEOzBDQUFLRixLQUFLUyxLQUFLOzs7Ozs7MENBQ2hCLDhEQUFDUDswQ0FBS0YsS0FBS1UsSUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7O1dBWmxCVixLQUFLVyxNQUFNOzs7OztJQWlCNUI7SUFFQSxJQUFNQyxhQUFhakIsT0FBT2tCLE1BQU0sR0FDMUJsQixPQUFPa0IsTUFBTSxDQUFDZCxHQUFHLENBQUNDLFNBQUFBLE1BQVE7UUFDdEIscUJBQ0ksOERBQUNDO3NCQUNHLDRFQUFDQztnQkFBSUMsV0FBVTs7a0NBQ1gsOERBQUNEO3dCQUFJQyxXQUFVO2tDQUNYLDRFQUFDWCxtREFBS0E7NEJBQ0ZZLEtBQUtKLEtBQUtLLE1BQU0sS0FBSyxRQUFRTCxLQUFLSyxNQUFNLEdBQUdmLGlFQUFhOzRCQUN4RGdCLEtBQUk7NEJBQ0pDLE9BQU87NEJBQ1BDLFFBQVE7Ozs7Ozs7Ozs7O2tDQUdoQiw4REFBQ047d0JBQUlDLFdBQVU7OzBDQUNYLDhEQUFDRDtnQ0FBSUMsV0FBVTswQ0FBMEJILEtBQUtTLEtBQUs7Ozs7OzswQ0FDbkQsOERBQUNQOzBDQUFLRixLQUFLVSxJQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7V0FabEJWLEtBQUtXLE1BQU07Ozs7O0lBaUI1QixLQUNBYixxQkFBcUI7SUFFM0IsT0FBT2M7QUFDWDtHQWhETW5COztRQUNhRixvREFBV0E7OztLQUR4QkU7QUFrRE4sK0RBQWVBLEtBQUtBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jaW5lbWEvY2luZW1hX01vdmllc0xpc3QvTW92aWUuanM/MGUyYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgaW1hZ2VOb3RGb3VuZCBmcm9tIFwiLi4vLi4vLi4vcHVibGljL2ltZ3Mvbm90Rm91bmQucG5nXCI7XHJcblxyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcclxuXHJcbmNvbnN0IE1vdmllID0gKHsgcHJlTG9hZGVkTW92aWVzIH0pID0+IHtcclxuICAgIGNvbnN0IG1vdmllcyA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLmNpbmVtYVNsaWNlLm1vdmllcyk7XHJcblxyXG4gICAgY29uc3QgcHJlbG9hZGVkTGlzdG9mTW92aWVzID0gcHJlTG9hZGVkTW92aWVzLm1hcChpdGVtID0+IHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8bGkga2V5PXtpdGVtLmltZGJJRH0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbW92aWVzLWxpc3QtaXRlbSc+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J21vdmllcy1saXN0LWl0ZW0taW1nJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2l0ZW0uUG9zdGVyICE9PSBcIk4vQVwiID8gaXRlbS5Qb3N0ZXIgOiBpbWFnZU5vdEZvdW5kfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PSdpbWFnZS1ub3QtZm91bmQnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17MzAwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXszMDB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J21vdmllcy1saXN0LWl0ZW0tdGl0bGUnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PntpdGVtLlRpdGxlfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PntpdGVtLlllYXJ9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICApO1xyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3Qgc2hvd01vdmllcyA9IG1vdmllcy5TZWFyY2hcclxuICAgICAgICA/IG1vdmllcy5TZWFyY2gubWFwKGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2l0ZW0uaW1kYklEfT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtb3ZpZXMtbGlzdC1pdGVtJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbW92aWVzLWxpc3QtaXRlbS1pbWcnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17aXRlbS5Qb3N0ZXIgIT09IFwiTi9BXCIgPyBpdGVtLlBvc3RlciA6IGltYWdlTm90Rm91bmR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9J2ltYWdlLW5vdC1mb3VuZCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXszMDB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezMwMH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbW92aWVzLWxpc3QtaXRlbS1ib3gnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbW92aWVzLWxpc3QtaXRlbS10aXRsZSc+e2l0ZW0uVGl0bGV9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+e2l0ZW0uWWVhcn08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIDogcHJlbG9hZGVkTGlzdG9mTW92aWVzO1xyXG5cclxuICAgIHJldHVybiBzaG93TW92aWVzO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTW92aWU7XHJcbiJdLCJuYW1lcyI6WyJpbWFnZU5vdEZvdW5kIiwidXNlU2VsZWN0b3IiLCJJbWFnZSIsIk1vdmllIiwicHJlTG9hZGVkTW92aWVzIiwibW92aWVzIiwic3RhdGUiLCJjaW5lbWFTbGljZSIsInByZWxvYWRlZExpc3RvZk1vdmllcyIsIm1hcCIsIml0ZW0iLCJsaSIsImRpdiIsImNsYXNzTmFtZSIsInNyYyIsIlBvc3RlciIsImFsdCIsIndpZHRoIiwiaGVpZ2h0IiwiVGl0bGUiLCJZZWFyIiwiaW1kYklEIiwic2hvd01vdmllcyIsIlNlYXJjaCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/cinema/cinema_MoviesList/Movie.js\n"));

/***/ })

});