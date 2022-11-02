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

/***/ "./components/cinema/cinema_Search/Search.js":
/*!***************************************************!*\
  !*** ./components/cinema/cinema_Search/Search.js ***!
  \***************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_sliced_to_array.mjs */ \"./node_modules/@swc/helpers/src/_sliced_to_array.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _cinemaSlice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../cinemaSlice */ \"./components/cinema/cinemaSlice.js\");\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"./node_modules/@fortawesome/free-solid-svg-icons/index.mjs\");\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nvar Search = function() {\n    _s();\n    var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();\n    var movies = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(function(state) {\n        return state.cinemaSlice.movies;\n    });\n    var loading = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(function(state) {\n        return state.cinemaSlice.moviesLoading;\n    });\n    var ref = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), 2), searchValue = ref[0], setSearchValue = ref[1];\n    var handleKey = function(e) {\n        if (e.key === \"Enter\") {\n            dispatch((0,_cinemaSlice__WEBPACK_IMPORTED_MODULE_3__.fetchMovies)(searchValue));\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"movies-search-inpWrapper\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"video\", {\n                className: \"video\",\n                autoPlay: true,\n                muted: true,\n                loop: true,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"source\", {\n                    src: __webpack_require__(/*! ../../../src/imgs/Frustrated fans watching a football game.mp4 */ \"./src/imgs/Frustrated fans watching a football game.mp4\"),\n                    type: \"video/mp4\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\react\\\\Arsenal\\\\my-app\\\\components\\\\cinema\\\\cinema_Search\\\\Search.js\",\n                    lineNumber: 24,\n                    columnNumber: 17\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\react\\\\Arsenal\\\\my-app\\\\components\\\\cinema\\\\cinema_Search\\\\Search.js\",\n                lineNumber: 23,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"movies-search-inp\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        value: searchValue,\n                        onKeyDown: function(e) {\n                            return handleKey(e);\n                        },\n                        onChange: function(e) {\n                            return setSearchValue(e.target.value);\n                        },\n                        type: \"text\",\n                        className: \"browser-default\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\react\\\\Arsenal\\\\my-app\\\\components\\\\cinema\\\\cinema_Search\\\\Search.js\",\n                        lineNumber: 30,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__.FontAwesomeIcon, {\n                        icon: loading ? _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__.faSpinner : _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__.faSearch,\n                        className: loading ? \"fa fa-spinner fa-spin movies-search-logo\" : \"movies-search-logo\",\n                        onClick: function() {\n                            return dispatch((0,_cinemaSlice__WEBPACK_IMPORTED_MODULE_3__.fetchMovies)(searchValue));\n                        },\n                        style: {\n                            color: \"white\"\n                        }\n                    }, void 0, false, {\n                        fileName: \"C:\\\\react\\\\Arsenal\\\\my-app\\\\components\\\\cinema\\\\cinema_Search\\\\Search.js\",\n                        lineNumber: 37,\n                        columnNumber: 17\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\react\\\\Arsenal\\\\my-app\\\\components\\\\cinema\\\\cinema_Search\\\\Search.js\",\n                lineNumber: 29,\n                columnNumber: 13\n            }, _this),\n            movies.Response === \"False\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"movies-search-notFound\",\n                children: \"movie not found\"\n            }, void 0, false, {\n                fileName: \"C:\\\\react\\\\Arsenal\\\\my-app\\\\components\\\\cinema\\\\cinema_Search\\\\Search.js\",\n                lineNumber: 43,\n                columnNumber: 44\n            }, _this) : \"\"\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\react\\\\Arsenal\\\\my-app\\\\components\\\\cinema\\\\cinema_Search\\\\Search.js\",\n        lineNumber: 22,\n        columnNumber: 9\n    }, _this);\n};\n_s(Search, \"LS8qGHJDLDxhdcRbII9R9FqKtkg=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch,\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector\n    ];\n});\n_c = Search;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Search);\nvar _c;\n$RefreshReg$(_c, \"Search\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2NpbmVtYS9jaW5lbWFfU2VhcmNoL1NlYXJjaC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7Ozs7QUFBaUM7QUFDc0I7QUFDVjtBQUNvQjtBQUNPO0FBRXhFLElBQU1PLFNBQVMsV0FBTTs7SUFDakIsSUFBTUMsV0FBV1Asd0RBQVdBO0lBRTVCLElBQU1RLFNBQVNQLHdEQUFXQSxDQUFDUSxTQUFBQTtlQUFTQSxNQUFNQyxXQUFXLENBQUNGLE1BQU07O0lBQzVELElBQU1HLFVBQVVWLHdEQUFXQSxDQUFDUSxTQUFBQTtlQUFTQSxNQUFNQyxXQUFXLENBQUNFLGFBQWE7O0lBRXBFLElBQXNDYixNQUFBQSxnRkFBQUEsQ0FBQUEsK0NBQVFBLENBQUMsU0FBeENjLGNBQStCZCxRQUFsQmUsaUJBQWtCZjtJQUV0QyxJQUFNZ0IsWUFBWUMsU0FBQUEsR0FBSztRQUNuQixJQUFJQSxFQUFFQyxHQUFHLEtBQUssU0FBUztZQUNuQlYsU0FBU0wseURBQVdBLENBQUNXO1FBQ3pCLENBQUM7SUFDTDtJQUVBLHFCQUNJLDhEQUFDSztRQUFJQyxXQUFVOzswQkFDWCw4REFBQ0M7Z0JBQU1ELFdBQVU7Z0JBQVFFLFFBQVE7Z0JBQUNDLEtBQUs7Z0JBQUNDLElBQUk7MEJBQ3hDLDRFQUFDQztvQkFDR0MsS0FBS0MsbUJBQU9BLENBQUMsK0hBQWdFO29CQUM3RUMsTUFBSzs7Ozs7Ozs7Ozs7MEJBR2IsOERBQUNUO2dCQUFJQyxXQUFVOztrQ0FDWCw4REFBQ1M7d0JBQ0dDLE9BQU9oQjt3QkFDUGlCLFdBQVdkLFNBQUFBO21DQUFLRCxVQUFVQzs7d0JBQzFCZSxVQUFVZixTQUFBQTttQ0FBS0YsZUFBZUUsRUFBRWdCLE1BQU0sQ0FBQ0gsS0FBSzs7d0JBQzVDRixNQUFLO3dCQUNMUixXQUFVOzs7Ozs7a0NBRWQsOERBQUNoQiwyRUFBZUE7d0JBQ1o4QixNQUFNdEIsVUFBVU4sd0VBQVNBLEdBQUdELHVFQUFRO3dCQUNwQ2UsV0FBV1IsVUFBVSw2Q0FBNkMsb0JBQW9CO3dCQUN0RnVCLFNBQVM7bUNBQU0zQixTQUFTTCx5REFBV0EsQ0FBQ1c7O3dCQUNwQ3NCLE9BQU87NEJBQUVDLE9BQU87d0JBQVE7Ozs7Ozs7Ozs7OztZQUUvQjVCLE9BQU82QixRQUFRLEtBQUssd0JBQVUsOERBQUNuQjtnQkFBSUMsV0FBVTswQkFBeUI7Ozs7O3dCQUF3QixFQUFFOzs7Ozs7O0FBRzdHO0dBdkNNYjs7UUFDZU4sb0RBQVdBO1FBRWJDLG9EQUFXQTtRQUNWQSxvREFBV0E7OztLQUp6Qks7QUF5Q04sK0RBQWVBLE1BQU1BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jaW5lbWEvY2luZW1hX1NlYXJjaC9TZWFyY2guanM/ZWY1NiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHsgZmV0Y2hNb3ZpZXMgfSBmcm9tIFwiLi4vY2luZW1hU2xpY2VcIjtcclxuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZVwiO1xyXG5pbXBvcnQgeyBmYVNlYXJjaCwgZmFTcGlubmVyIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29uc1wiO1xyXG5cclxuY29uc3QgU2VhcmNoID0gKCkgPT4ge1xyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG5cclxuICAgIGNvbnN0IG1vdmllcyA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLmNpbmVtYVNsaWNlLm1vdmllcyk7XHJcbiAgICBjb25zdCBsb2FkaW5nID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUuY2luZW1hU2xpY2UubW92aWVzTG9hZGluZyk7XHJcblxyXG4gICAgY29uc3QgW3NlYXJjaFZhbHVlLCBzZXRTZWFyY2hWYWx1ZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVLZXkgPSBlID0+IHtcclxuICAgICAgICBpZiAoZS5rZXkgPT09IFwiRW50ZXJcIikge1xyXG4gICAgICAgICAgICBkaXNwYXRjaChmZXRjaE1vdmllcyhzZWFyY2hWYWx1ZSkpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbW92aWVzLXNlYXJjaC1pbnBXcmFwcGVyJz5cclxuICAgICAgICAgICAgPHZpZGVvIGNsYXNzTmFtZT0ndmlkZW8nIGF1dG9QbGF5IG11dGVkIGxvb3A+XHJcbiAgICAgICAgICAgICAgICA8c291cmNlXHJcbiAgICAgICAgICAgICAgICAgICAgc3JjPXtyZXF1aXJlKFwiLi4vLi4vLi4vc3JjL2ltZ3MvRnJ1c3RyYXRlZCBmYW5zIHdhdGNoaW5nIGEgZm9vdGJhbGwgZ2FtZS5tcDRcIil9XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT0ndmlkZW8vbXA0J1xyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC92aWRlbz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J21vdmllcy1zZWFyY2gtaW5wJz5cclxuICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzZWFyY2hWYWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICBvbktleURvd249e2UgPT4gaGFuZGxlS2V5KGUpfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHNldFNlYXJjaFZhbHVlKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICB0eXBlPSd0ZXh0J1xyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nYnJvd3Nlci1kZWZhdWx0J1xyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb25cclxuICAgICAgICAgICAgICAgICAgICBpY29uPXtsb2FkaW5nID8gZmFTcGlubmVyIDogZmFTZWFyY2h9XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtsb2FkaW5nID8gJ2ZhIGZhLXNwaW5uZXIgZmEtc3BpbiBtb3ZpZXMtc2VhcmNoLWxvZ28nIDogJ21vdmllcy1zZWFyY2gtbG9nbyd9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gZGlzcGF0Y2goZmV0Y2hNb3ZpZXMoc2VhcmNoVmFsdWUpKX1cclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBjb2xvcjogXCJ3aGl0ZVwiIH19PjwvRm9udEF3ZXNvbWVJY29uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAge21vdmllcy5SZXNwb25zZSA9PT0gXCJGYWxzZVwiID8gPGRpdiBjbGFzc05hbWU9J21vdmllcy1zZWFyY2gtbm90Rm91bmQnPm1vdmllIG5vdCBmb3VuZDwvZGl2PiA6IFwiXCJ9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2VhcmNoO1xyXG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VEaXNwYXRjaCIsInVzZVNlbGVjdG9yIiwiZmV0Y2hNb3ZpZXMiLCJGb250QXdlc29tZUljb24iLCJmYVNlYXJjaCIsImZhU3Bpbm5lciIsIlNlYXJjaCIsImRpc3BhdGNoIiwibW92aWVzIiwic3RhdGUiLCJjaW5lbWFTbGljZSIsImxvYWRpbmciLCJtb3ZpZXNMb2FkaW5nIiwic2VhcmNoVmFsdWUiLCJzZXRTZWFyY2hWYWx1ZSIsImhhbmRsZUtleSIsImUiLCJrZXkiLCJkaXYiLCJjbGFzc05hbWUiLCJ2aWRlbyIsImF1dG9QbGF5IiwibXV0ZWQiLCJsb29wIiwic291cmNlIiwic3JjIiwicmVxdWlyZSIsInR5cGUiLCJpbnB1dCIsInZhbHVlIiwib25LZXlEb3duIiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJpY29uIiwib25DbGljayIsInN0eWxlIiwiY29sb3IiLCJSZXNwb25zZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/cinema/cinema_Search/Search.js\n"));

/***/ })

});