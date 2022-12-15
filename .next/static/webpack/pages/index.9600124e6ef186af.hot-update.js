"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/common/weather/Weather.js":
/*!**********************************************!*\
  !*** ./components/common/weather/Weather.js ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @swc/helpers/src/_sliced_to_array.mjs */ \"./node_modules/@swc/helpers/src/_sliced_to_array.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _public_imgs_weather_wet_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../public/imgs/weather-wet.png */ \"./public/imgs/weather-wet.png\");\n/* harmony import */ var _public_imgs_weather_sunny_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../public/imgs/weather-sunny.png */ \"./public/imgs/weather-sunny.png\");\n/* harmony import */ var _public_imgs_weather_cloud_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../public/imgs/weather-cloud.png */ \"./public/imgs/weather-cloud.png\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _main_mainPageSlice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../main/mainPageSlice */ \"./components/main/mainPageSlice.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"./node_modules/@fortawesome/free-solid-svg-icons/index.mjs\");\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nvar Weather = function(param) {\n    var city = param.city;\n    _s();\n    var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useDispatch)();\n    var weather = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useSelector)(function(state) {\n        return state.mainPageSlice.weather;\n    });\n    var weatherError = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useSelector)(function(state) {\n        return state.mainPageSlice.weatherError;\n    });\n    var ref = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_9__[\"default\"])((0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(null), 2), typeOfWeather = ref[0], setTypeOfWeather = ref[1];\n    var ref1 = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_9__[\"default\"])((0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(null), 2), weatherImg = ref1[0], setWeatherImg = ref1[1];\n    var month = new Date().toDateString();\n    var temp = weather.weather ? weather.main.temp : null;\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function() {\n        dispatch((0,_main_mainPageSlice__WEBPACK_IMPORTED_MODULE_5__.fetchWeatherForecast)(city));\n    }, []);\n    var getType = function() {\n        return weather.weather ? setTypeOfWeather(weather.weather[0].main) : null;\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function() {\n        getType();\n    }, [\n        weather\n    ]);\n    var getWeatherImg = function() {\n        switch(typeOfWeather){\n            case \"Rain\":\n                return setWeatherImg(_public_imgs_weather_wet_png__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n            case \"Clouds\":\n                return setWeatherImg(_public_imgs_weather_cloud_png__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\n            case \"Mist\":\n                return setWeatherImg(_public_imgs_weather_cloud_png__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\n            case \"Clear\":\n                return setWeatherImg(_public_imgs_weather_sunny_png__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n            default:\n                return null;\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function() {\n        getWeatherImg();\n    }, [\n        typeOfWeather\n    ]);\n    // useEffect(() => {\n    //     console.log(weatherError);\n    // }, []);\n    var content = weatherImg ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_7___default()), {\n                className: \"weatherСard__photo\",\n                src: weatherImg,\n                alt: \"weatherCard__photo\"\n            }, void 0, false, {\n                fileName: \"C:\\\\react\\\\Arsenal\\\\my-app\\\\components\\\\common\\\\weather\\\\Weather.js\",\n                lineNumber: 62,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"weatherСard__item\",\n                children: [\n                    \"Weather in \",\n                    city\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\react\\\\Arsenal\\\\my-app\\\\components\\\\common\\\\weather\\\\Weather.js\",\n                lineNumber: 63,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"C:\\\\react\\\\Arsenal\\\\my-app\\\\components\\\\common\\\\weather\\\\Weather.js\",\n                lineNumber: 64,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"weatherСard__item\",\n                children: month\n            }, void 0, false, {\n                fileName: \"C:\\\\react\\\\Arsenal\\\\my-app\\\\components\\\\common\\\\weather\\\\Weather.js\",\n                lineNumber: 65,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"C:\\\\react\\\\Arsenal\\\\my-app\\\\components\\\\common\\\\weather\\\\Weather.js\",\n                lineNumber: 66,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"weatherСard__item\",\n                children: [\n                    temp,\n                    \" C\"\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\react\\\\Arsenal\\\\my-app\\\\components\\\\common\\\\weather\\\\Weather.js\",\n                lineNumber: 67,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"C:\\\\react\\\\Arsenal\\\\my-app\\\\components\\\\common\\\\weather\\\\Weather.js\",\n                lineNumber: 68,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"weatherСard__item\",\n                children: typeOfWeather\n            }, void 0, false, {\n                fileName: \"C:\\\\react\\\\Arsenal\\\\my-app\\\\components\\\\common\\\\weather\\\\Weather.js\",\n                lineNumber: 69,\n                columnNumber: 13\n            }, _this),\n            \" \"\n        ]\n    }, void 0, true) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8__.FontAwesomeIcon, {\n        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_10__.faSpinner,\n        size: \"2x\",\n        color: \"red\",\n        className: \"fa fa-spinner fa-spin\"\n    }, void 0, false, {\n        fileName: \"C:\\\\react\\\\Arsenal\\\\my-app\\\\components\\\\common\\\\weather\\\\Weather.js\",\n        lineNumber: 72,\n        columnNumber: 9\n    }, _this);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"weatherСard\",\n        children: weatherError ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"weatherСard__error\",\n            children: '\"Sorry, something goes wrong...\"'\n        }, void 0, false, {\n            fileName: \"C:\\\\react\\\\Arsenal\\\\my-app\\\\components\\\\common\\\\weather\\\\Weather.js\",\n            lineNumber: 77,\n            columnNumber: 29\n        }, _this) : content\n    }, void 0, false, {\n        fileName: \"C:\\\\react\\\\Arsenal\\\\my-app\\\\components\\\\common\\\\weather\\\\Weather.js\",\n        lineNumber: 76,\n        columnNumber: 9\n    }, _this);\n};\n_s(Weather, \"3nPRDHspeVoYAcvdBoDMBFeq5y4=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_6__.useDispatch,\n        react_redux__WEBPACK_IMPORTED_MODULE_6__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_6__.useSelector\n    ];\n});\n_c = Weather;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Weather);\nvar _c;\n$RefreshReg$(_c, \"Weather\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2NvbW1vbi93ZWF0aGVyL1dlYXRoZXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFBZ0U7QUFDRztBQUNBO0FBRXZCO0FBQ29CO0FBQ1Q7QUFDeEI7QUFFa0M7QUFDSDtBQUU5RCxJQUFNVyxVQUFVLGdCQUFjO1FBQVhDLGFBQUFBOztJQUNmLElBQU1DLFdBQVdQLHdEQUFXQTtJQUU1QixJQUFNUSxVQUFVUCx3REFBV0EsQ0FBQ1EsU0FBQUE7ZUFBU0EsTUFBTUMsYUFBYSxDQUFDRixPQUFPOztJQUNoRSxJQUFNRyxlQUFlVix3REFBV0EsQ0FBQ1EsU0FBQUE7ZUFBU0EsTUFBTUMsYUFBYSxDQUFDQyxZQUFZOztJQUMxRSxJQUEwQ2QsTUFBQUEsZ0ZBQUFBLENBQUFBLCtDQUFRQSxDQUFDLElBQUksT0FBaERlLGdCQUFtQ2YsUUFBcEJnQixtQkFBb0JoQjtJQUMxQyxJQUFvQ0EsT0FBQUEsZ0ZBQUFBLENBQUFBLCtDQUFRQSxDQUFDLElBQUksT0FBMUNpQixhQUE2QmpCLFNBQWpCa0IsZ0JBQWlCbEI7SUFFcEMsSUFBTW1CLFFBQVEsSUFBSUMsT0FBT0MsWUFBWTtJQUVyQyxJQUFNQyxPQUFPWCxRQUFRQSxPQUFPLEdBQUdBLFFBQVFZLElBQUksQ0FBQ0QsSUFBSSxHQUFHLElBQUk7SUFFdkRyQixnREFBU0EsQ0FBQyxXQUFNO1FBQ1pTLFNBQVNSLHlFQUFvQkEsQ0FBQ087SUFDbEMsR0FBRyxFQUFFO0lBRUwsSUFBTWUsVUFBVSxXQUFNO1FBQ2xCLE9BQU9iLFFBQVFBLE9BQU8sR0FBR0ssaUJBQWlCTCxRQUFRQSxPQUFPLENBQUMsRUFBRSxDQUFDWSxJQUFJLElBQUksSUFBSTtJQUM3RTtJQUVBdEIsZ0RBQVNBLENBQUMsV0FBTTtRQUNadUI7SUFDSixHQUFHO1FBQUNiO0tBQVE7SUFFWixJQUFNYyxnQkFBZ0IsV0FBTTtRQUN4QixPQUFRVjtZQUNKLEtBQUs7Z0JBQ0QsT0FBT0csY0FBY3JCLG9FQUFZQTtZQUNyQyxLQUFLO2dCQUNELE9BQU9xQixjQUFjbkIsc0VBQWFBO1lBQ3RDLEtBQUs7Z0JBQ0QsT0FBT21CLGNBQWNuQixzRUFBYUE7WUFDdEMsS0FBSztnQkFDRCxPQUFPbUIsY0FBY3BCLHNFQUFhQTtZQUN0QztnQkFDSSxPQUFPLElBQUk7UUFDbkI7SUFDSjtJQUVBRyxnREFBU0EsQ0FBQyxXQUFNO1FBQ1p3QjtJQUNKLEdBQUc7UUFBQ1Y7S0FBYztJQUVsQixvQkFBb0I7SUFDcEIsaUNBQWlDO0lBQ2pDLFVBQVU7SUFFVixJQUFNVyxVQUFVVCwyQkFDWjs7MEJBQ0ksOERBQUNaLG1EQUFLQTtnQkFBQ3NCLFdBQVU7Z0JBQXFCQyxLQUFLWDtnQkFBWVksS0FBSTs7Ozs7OzBCQUMzRCw4REFBQ0M7Z0JBQUlILFdBQVU7O29CQUFvQjtvQkFBWWxCOzs7Ozs7OzBCQUMvQyw4REFBQ3NCOzs7OzswQkFDRCw4REFBQ0Q7Z0JBQUlILFdBQVU7MEJBQXFCUjs7Ozs7OzBCQUNwQyw4REFBQ1k7Ozs7OzBCQUNELDhEQUFDRDtnQkFBSUgsV0FBVTs7b0JBQXFCTDtvQkFBSzs7Ozs7OzswQkFDekMsOERBQUNTOzs7OzswQkFDRCw4REFBQ0Q7Z0JBQUlILFdBQVU7MEJBQXFCWjs7Ozs7O1lBQXFCOztxQ0FHN0QsOERBQUNULDJFQUFlQTtRQUFDMEIsTUFBTXpCLHlFQUFTQTtRQUFFMEIsTUFBSztRQUFLQyxPQUFNO1FBQU1QLFdBQVU7Ozs7O2FBQ3JFO0lBRUQscUJBQ0ksOERBQUNHO1FBQUlILFdBQVU7a0JBQ1ZiLDZCQUFlLDhEQUFDZ0I7WUFBSUgsV0FBVTtzQkFBcUI7Ozs7O29CQUF5Q0QsT0FBTzs7Ozs7O0FBR2hIO0dBbkVNbEI7O1FBQ2VMLG9EQUFXQTtRQUVaQyxvREFBV0E7UUFDTkEsb0RBQVdBOzs7S0FKOUJJO0FBcUVOLCtEQUFlQSxPQUFPQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvY29tbW9uL3dlYXRoZXIvV2VhdGhlci5qcz9lZWNiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB3ZWF0aGVyX3JhaW4gZnJvbSBcIi4uLy4uLy4uL3B1YmxpYy9pbWdzL3dlYXRoZXItd2V0LnBuZ1wiO1xyXG5pbXBvcnQgd2VhdGhlcl9zdW5ueSBmcm9tIFwiLi4vLi4vLi4vcHVibGljL2ltZ3Mvd2VhdGhlci1zdW5ueS5wbmdcIjtcclxuaW1wb3J0IHdlYXRoZXJfY2xvdWQgZnJvbSBcIi4uLy4uLy4uL3B1YmxpYy9pbWdzL3dlYXRoZXItY2xvdWQucG5nXCI7XHJcblxyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IGZldGNoV2VhdGhlckZvcmVjYXN0IH0gZnJvbSBcIi4uLy4uL21haW4vbWFpblBhZ2VTbGljZVwiO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XHJcblxyXG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tIFwiQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lXCI7XHJcbmltcG9ydCB7IGZhU3Bpbm5lciB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnNcIjtcclxuXHJcbmNvbnN0IFdlYXRoZXIgPSAoeyBjaXR5IH0pID0+IHtcclxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuXHJcbiAgICBjb25zdCB3ZWF0aGVyID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUubWFpblBhZ2VTbGljZS53ZWF0aGVyKTtcclxuICAgIGNvbnN0IHdlYXRoZXJFcnJvciA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLm1haW5QYWdlU2xpY2Uud2VhdGhlckVycm9yKTtcclxuICAgIGNvbnN0IFt0eXBlT2ZXZWF0aGVyLCBzZXRUeXBlT2ZXZWF0aGVyXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gICAgY29uc3QgW3dlYXRoZXJJbWcsIHNldFdlYXRoZXJJbWddID0gdXNlU3RhdGUobnVsbCk7XHJcblxyXG4gICAgY29uc3QgbW9udGggPSBuZXcgRGF0ZSgpLnRvRGF0ZVN0cmluZygpO1xyXG5cclxuICAgIGNvbnN0IHRlbXAgPSB3ZWF0aGVyLndlYXRoZXIgPyB3ZWF0aGVyLm1haW4udGVtcCA6IG51bGw7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBkaXNwYXRjaChmZXRjaFdlYXRoZXJGb3JlY2FzdChjaXR5KSk7XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgY29uc3QgZ2V0VHlwZSA9ICgpID0+IHtcclxuICAgICAgICByZXR1cm4gd2VhdGhlci53ZWF0aGVyID8gc2V0VHlwZU9mV2VhdGhlcih3ZWF0aGVyLndlYXRoZXJbMF0ubWFpbikgOiBudWxsO1xyXG4gICAgfTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGdldFR5cGUoKTtcclxuICAgIH0sIFt3ZWF0aGVyXSk7XHJcblxyXG4gICAgY29uc3QgZ2V0V2VhdGhlckltZyA9ICgpID0+IHtcclxuICAgICAgICBzd2l0Y2ggKHR5cGVPZldlYXRoZXIpIHtcclxuICAgICAgICAgICAgY2FzZSBcIlJhaW5cIjpcclxuICAgICAgICAgICAgICAgIHJldHVybiBzZXRXZWF0aGVySW1nKHdlYXRoZXJfcmFpbik7XHJcbiAgICAgICAgICAgIGNhc2UgXCJDbG91ZHNcIjpcclxuICAgICAgICAgICAgICAgIHJldHVybiBzZXRXZWF0aGVySW1nKHdlYXRoZXJfY2xvdWQpO1xyXG4gICAgICAgICAgICBjYXNlIFwiTWlzdFwiOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHNldFdlYXRoZXJJbWcod2VhdGhlcl9jbG91ZCk7XHJcbiAgICAgICAgICAgIGNhc2UgXCJDbGVhclwiOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHNldFdlYXRoZXJJbWcod2VhdGhlcl9zdW5ueSk7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgZ2V0V2VhdGhlckltZygpO1xyXG4gICAgfSwgW3R5cGVPZldlYXRoZXJdKTtcclxuXHJcbiAgICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgLy8gICAgIGNvbnNvbGUubG9nKHdlYXRoZXJFcnJvcik7XHJcbiAgICAvLyB9LCBbXSk7XHJcblxyXG4gICAgY29uc3QgY29udGVudCA9IHdlYXRoZXJJbWcgPyAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPEltYWdlIGNsYXNzTmFtZT0nd2VhdGhlctChYXJkX19waG90bycgc3JjPXt3ZWF0aGVySW1nfSBhbHQ9J3dlYXRoZXJDYXJkX19waG90bycgLz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3dlYXRoZXLQoWFyZF9faXRlbSc+V2VhdGhlciBpbiB7Y2l0eX08L2Rpdj5cclxuICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd3ZWF0aGVy0KFhcmRfX2l0ZW0nPnttb250aH08L2Rpdj5cclxuICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd3ZWF0aGVy0KFhcmRfX2l0ZW0nPnt0ZW1wfSBDPC9kaXY+XHJcbiAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nd2VhdGhlctChYXJkX19pdGVtJz57dHlwZU9mV2VhdGhlcn08L2Rpdj57XCIgXCJ9XHJcbiAgICAgICAgPC8+XHJcbiAgICApIDogKFxyXG4gICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFTcGlubmVyfSBzaXplPScyeCcgY29sb3I9J3JlZCcgY2xhc3NOYW1lPSdmYSBmYS1zcGlubmVyIGZhLXNwaW4nPjwvRm9udEF3ZXNvbWVJY29uPlxyXG4gICAgKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSd3ZWF0aGVy0KFhcmQnPlxyXG4gICAgICAgICAgICB7d2VhdGhlckVycm9yID8gPGRpdiBjbGFzc05hbWU9J3dlYXRoZXLQoWFyZF9fZXJyb3InPlwiU29ycnksIHNvbWV0aGluZyBnb2VzIHdyb25nLi4uXCI8L2Rpdj4gOiBjb250ZW50fVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFdlYXRoZXI7XHJcbiJdLCJuYW1lcyI6WyJ3ZWF0aGVyX3JhaW4iLCJ3ZWF0aGVyX3N1bm55Iiwid2VhdGhlcl9jbG91ZCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiZmV0Y2hXZWF0aGVyRm9yZWNhc3QiLCJ1c2VEaXNwYXRjaCIsInVzZVNlbGVjdG9yIiwiSW1hZ2UiLCJGb250QXdlc29tZUljb24iLCJmYVNwaW5uZXIiLCJXZWF0aGVyIiwiY2l0eSIsImRpc3BhdGNoIiwid2VhdGhlciIsInN0YXRlIiwibWFpblBhZ2VTbGljZSIsIndlYXRoZXJFcnJvciIsInR5cGVPZldlYXRoZXIiLCJzZXRUeXBlT2ZXZWF0aGVyIiwid2VhdGhlckltZyIsInNldFdlYXRoZXJJbWciLCJtb250aCIsIkRhdGUiLCJ0b0RhdGVTdHJpbmciLCJ0ZW1wIiwibWFpbiIsImdldFR5cGUiLCJnZXRXZWF0aGVySW1nIiwiY29udGVudCIsImNsYXNzTmFtZSIsInNyYyIsImFsdCIsImRpdiIsImJyIiwiaWNvbiIsInNpemUiLCJjb2xvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/common/weather/Weather.js\n"));

/***/ })

});