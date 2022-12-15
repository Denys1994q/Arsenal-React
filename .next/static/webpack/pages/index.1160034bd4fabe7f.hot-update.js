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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @swc/helpers/src/_sliced_to_array.mjs */ \"./node_modules/@swc/helpers/src/_sliced_to_array.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _public_imgs_weather_wet_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../public/imgs/weather-wet.png */ \"./public/imgs/weather-wet.png\");\n/* harmony import */ var _public_imgs_weather_sunny_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../public/imgs/weather-sunny.png */ \"./public/imgs/weather-sunny.png\");\n/* harmony import */ var _public_imgs_weather_cloud_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../public/imgs/weather-cloud.png */ \"./public/imgs/weather-cloud.png\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _main_mainPageSlice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../main/mainPageSlice */ \"./components/main/mainPageSlice.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"./node_modules/@fortawesome/free-solid-svg-icons/index.mjs\");\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nvar Weather = function(param) {\n    var city = param.city;\n    _s();\n    var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useDispatch)();\n    var weather = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useSelector)(function(state) {\n        return state.mainPageSlice.weather;\n    });\n    var ref = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_9__[\"default\"])((0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(null), 2), typeOfWeather = ref[0], setTypeOfWeather = ref[1];\n    var ref1 = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_9__[\"default\"])((0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(null), 2), weatherImg = ref1[0], setWeatherImg = ref1[1];\n    var month = new Date().toDateString();\n    var temp = weather.weather ? weather.main.temp : null;\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function() {\n        dispatch((0,_main_mainPageSlice__WEBPACK_IMPORTED_MODULE_5__.fetchWeatherForecast)(city));\n    }, []);\n    var getType = function() {\n        return weather.weather ? setTypeOfWeather(weather.weather[0].main) : null;\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function() {\n        getType();\n    }, [\n        weather\n    ]);\n    var getWeatherImg = function() {\n        switch(typeOfWeather){\n            case \"Rain\":\n                return setWeatherImg(_public_imgs_weather_wet_png__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n            case \"Clouds\":\n                return setWeatherImg(_public_imgs_weather_cloud_png__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\n            case \"Mist\":\n                return setWeatherImg(_public_imgs_weather_cloud_png__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\n            case \"Clear\":\n                return setWeatherImg(_public_imgs_weather_sunny_png__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n            default:\n                return null;\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function() {\n        getWeatherImg();\n    }, [\n        typeOfWeather\n    ]);\n    var weatherContent = weatherImg ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_7___default()), {\n        className: \"weatherСard__photo\",\n        src: weatherImg,\n        alt: \"weatherCard__photo\"\n    }, void 0, false, {\n        fileName: \"C:\\\\react\\\\Arsenal\\\\my-app\\\\components\\\\common\\\\weather\\\\Weather.js\",\n        lineNumber: 56,\n        columnNumber: 9\n    }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8__.FontAwesomeIcon, {\n        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_10__.faSpinner,\n        className: \"fa fa-spinner fa-spin weatherCard__spinner\"\n    }, void 0, false, {\n        fileName: \"C:\\\\react\\\\Arsenal\\\\my-app\\\\components\\\\common\\\\weather\\\\Weather.js\",\n        lineNumber: 58,\n        columnNumber: 9\n    }, _this);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"weatherСard\",\n        children: [\n            weatherContent,\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"weatherСard__item\",\n                children: [\n                    \"Weather in \",\n                    city\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\react\\\\Arsenal\\\\my-app\\\\components\\\\common\\\\weather\\\\Weather.js\",\n                lineNumber: 64,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"C:\\\\react\\\\Arsenal\\\\my-app\\\\components\\\\common\\\\weather\\\\Weather.js\",\n                lineNumber: 65,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"weatherСard__item\",\n                children: month\n            }, void 0, false, {\n                fileName: \"C:\\\\react\\\\Arsenal\\\\my-app\\\\components\\\\common\\\\weather\\\\Weather.js\",\n                lineNumber: 66,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"C:\\\\react\\\\Arsenal\\\\my-app\\\\components\\\\common\\\\weather\\\\Weather.js\",\n                lineNumber: 67,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"weatherСard__item\",\n                children: [\n                    temp,\n                    \" C\"\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\react\\\\Arsenal\\\\my-app\\\\components\\\\common\\\\weather\\\\Weather.js\",\n                lineNumber: 68,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"C:\\\\react\\\\Arsenal\\\\my-app\\\\components\\\\common\\\\weather\\\\Weather.js\",\n                lineNumber: 69,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"weatherСard__item\",\n                children: typeOfWeather\n            }, void 0, false, {\n                fileName: \"C:\\\\react\\\\Arsenal\\\\my-app\\\\components\\\\common\\\\weather\\\\Weather.js\",\n                lineNumber: 70,\n                columnNumber: 13\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\react\\\\Arsenal\\\\my-app\\\\components\\\\common\\\\weather\\\\Weather.js\",\n        lineNumber: 62,\n        columnNumber: 9\n    }, _this);\n};\n_s(Weather, \"bL/s6Y4FPKgNpkVSp5jiiBBDL00=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_6__.useDispatch,\n        react_redux__WEBPACK_IMPORTED_MODULE_6__.useSelector\n    ];\n});\n_c = Weather;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Weather);\nvar _c;\n$RefreshReg$(_c, \"Weather\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2NvbW1vbi93ZWF0aGVyL1dlYXRoZXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFBZ0U7QUFDRztBQUNBO0FBRXZCO0FBQ29CO0FBQ1Q7QUFDeEI7QUFFa0M7QUFDSDtBQUU5RCxJQUFNVyxVQUFVLGdCQUFjO1FBQVhDLGFBQUFBOztJQUNmLElBQU1DLFdBQVdQLHdEQUFXQTtJQUU1QixJQUFNUSxVQUFVUCx3REFBV0EsQ0FBQ1EsU0FBQUE7ZUFBU0EsTUFBTUMsYUFBYSxDQUFDRixPQUFPOztJQUNoRSxJQUEwQ1gsTUFBQUEsZ0ZBQUFBLENBQUFBLCtDQUFRQSxDQUFDLElBQUksT0FBaERjLGdCQUFtQ2QsUUFBcEJlLG1CQUFvQmY7SUFDMUMsSUFBb0NBLE9BQUFBLGdGQUFBQSxDQUFBQSwrQ0FBUUEsQ0FBQyxJQUFJLE9BQTFDZ0IsYUFBNkJoQixTQUFqQmlCLGdCQUFpQmpCO0lBRXBDLElBQU1rQixRQUFRLElBQUlDLE9BQU9DLFlBQVk7SUFFckMsSUFBTUMsT0FBT1YsUUFBUUEsT0FBTyxHQUFHQSxRQUFRVyxJQUFJLENBQUNELElBQUksR0FBRyxJQUFJO0lBRXZEcEIsZ0RBQVNBLENBQUMsV0FBTTtRQUNaUyxTQUFTUix5RUFBb0JBLENBQUNPO0lBQ2xDLEdBQUcsRUFBRTtJQUVMLElBQU1jLFVBQVUsV0FBTTtRQUNsQixPQUFPWixRQUFRQSxPQUFPLEdBQUdJLGlCQUFpQkosUUFBUUEsT0FBTyxDQUFDLEVBQUUsQ0FBQ1csSUFBSSxJQUFJLElBQUk7SUFDN0U7SUFFQXJCLGdEQUFTQSxDQUFDLFdBQU07UUFDWnNCO0lBQ0osR0FBRztRQUFDWjtLQUFRO0lBRVosSUFBTWEsZ0JBQWdCLFdBQU07UUFDeEIsT0FBUVY7WUFDSixLQUFLO2dCQUNELE9BQU9HLGNBQWNwQixvRUFBWUE7WUFDckMsS0FBSztnQkFDRCxPQUFPb0IsY0FBY2xCLHNFQUFhQTtZQUN0QyxLQUFLO2dCQUNELE9BQU9rQixjQUFjbEIsc0VBQWFBO1lBQ3RDLEtBQUs7Z0JBQ0QsT0FBT2tCLGNBQWNuQixzRUFBYUE7WUFDdEM7Z0JBQ0ksT0FBTyxJQUFJO1FBQ25CO0lBQ0o7SUFFQUcsZ0RBQVNBLENBQUMsV0FBTTtRQUNadUI7SUFDSixHQUFHO1FBQUNWO0tBQWM7SUFFbEIsSUFBTVcsaUJBQWlCVCwyQkFDbkIsOERBQUNYLG1EQUFLQTtRQUFDcUIsV0FBVTtRQUFxQkMsS0FBS1g7UUFBWVksS0FBSTs7Ozs7OEJBRTNELDhEQUFDdEIsMkVBQWVBO1FBQUN1QixNQUFNdEIseUVBQVNBO1FBQUVtQixXQUFVOzs7OzthQUMvQztJQUVELHFCQUNJLDhEQUFDSTtRQUFJSixXQUFVOztZQUNWRDswQkFDRCw4REFBQ0s7Z0JBQUlKLFdBQVU7O29CQUFvQjtvQkFBWWpCOzs7Ozs7OzBCQUMvQyw4REFBQ3NCOzs7OzswQkFDRCw4REFBQ0Q7Z0JBQUlKLFdBQVU7MEJBQXFCUjs7Ozs7OzBCQUNwQyw4REFBQ2E7Ozs7OzBCQUNELDhEQUFDRDtnQkFBSUosV0FBVTs7b0JBQXFCTDtvQkFBSzs7Ozs7OzswQkFDekMsOERBQUNVOzs7OzswQkFDRCw4REFBQ0Q7Z0JBQUlKLFdBQVU7MEJBQXFCWjs7Ozs7Ozs7Ozs7O0FBR2hEO0dBNURNTjs7UUFDZUwsb0RBQVdBO1FBRVpDLG9EQUFXQTs7O0tBSHpCSTtBQThETiwrREFBZUEsT0FBT0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2NvbW1vbi93ZWF0aGVyL1dlYXRoZXIuanM/ZWVjYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgd2VhdGhlcl9yYWluIGZyb20gXCIuLi8uLi8uLi9wdWJsaWMvaW1ncy93ZWF0aGVyLXdldC5wbmdcIjtcclxuaW1wb3J0IHdlYXRoZXJfc3VubnkgZnJvbSBcIi4uLy4uLy4uL3B1YmxpYy9pbWdzL3dlYXRoZXItc3VubnkucG5nXCI7XHJcbmltcG9ydCB3ZWF0aGVyX2Nsb3VkIGZyb20gXCIuLi8uLi8uLi9wdWJsaWMvaW1ncy93ZWF0aGVyLWNsb3VkLnBuZ1wiO1xyXG5cclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBmZXRjaFdlYXRoZXJGb3JlY2FzdCB9IGZyb20gXCIuLi8uLi9tYWluL21haW5QYWdlU2xpY2VcIjtcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5cclxuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZVwiO1xyXG5pbXBvcnQgeyBmYVNwaW5uZXIgfSBmcm9tIFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zXCI7XHJcblxyXG5jb25zdCBXZWF0aGVyID0gKHsgY2l0eSB9KSA9PiB7XHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcblxyXG4gICAgY29uc3Qgd2VhdGhlciA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLm1haW5QYWdlU2xpY2Uud2VhdGhlcik7XHJcbiAgICBjb25zdCBbdHlwZU9mV2VhdGhlciwgc2V0VHlwZU9mV2VhdGhlcl0gPSB1c2VTdGF0ZShudWxsKTtcclxuICAgIGNvbnN0IFt3ZWF0aGVySW1nLCBzZXRXZWF0aGVySW1nXSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cclxuICAgIGNvbnN0IG1vbnRoID0gbmV3IERhdGUoKS50b0RhdGVTdHJpbmcoKTtcclxuXHJcbiAgICBjb25zdCB0ZW1wID0gd2VhdGhlci53ZWF0aGVyID8gd2VhdGhlci5tYWluLnRlbXAgOiBudWxsO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2goZmV0Y2hXZWF0aGVyRm9yZWNhc3QoY2l0eSkpO1xyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIGNvbnN0IGdldFR5cGUgPSAoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHdlYXRoZXIud2VhdGhlciA/IHNldFR5cGVPZldlYXRoZXIod2VhdGhlci53ZWF0aGVyWzBdLm1haW4pIDogbnVsbDtcclxuICAgIH07XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBnZXRUeXBlKCk7XHJcbiAgICB9LCBbd2VhdGhlcl0pO1xyXG5cclxuICAgIGNvbnN0IGdldFdlYXRoZXJJbWcgPSAoKSA9PiB7XHJcbiAgICAgICAgc3dpdGNoICh0eXBlT2ZXZWF0aGVyKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJSYWluXCI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gc2V0V2VhdGhlckltZyh3ZWF0aGVyX3JhaW4pO1xyXG4gICAgICAgICAgICBjYXNlIFwiQ2xvdWRzXCI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gc2V0V2VhdGhlckltZyh3ZWF0aGVyX2Nsb3VkKTtcclxuICAgICAgICAgICAgY2FzZSBcIk1pc3RcIjpcclxuICAgICAgICAgICAgICAgIHJldHVybiBzZXRXZWF0aGVySW1nKHdlYXRoZXJfY2xvdWQpO1xyXG4gICAgICAgICAgICBjYXNlIFwiQ2xlYXJcIjpcclxuICAgICAgICAgICAgICAgIHJldHVybiBzZXRXZWF0aGVySW1nKHdlYXRoZXJfc3VubnkpO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGdldFdlYXRoZXJJbWcoKTtcclxuICAgIH0sIFt0eXBlT2ZXZWF0aGVyXSk7XHJcblxyXG4gICAgY29uc3Qgd2VhdGhlckNvbnRlbnQgPSB3ZWF0aGVySW1nID8gKFxyXG4gICAgICAgIDxJbWFnZSBjbGFzc05hbWU9J3dlYXRoZXLQoWFyZF9fcGhvdG8nIHNyYz17d2VhdGhlckltZ30gYWx0PSd3ZWF0aGVyQ2FyZF9fcGhvdG8nIC8+XHJcbiAgICApIDogKFxyXG4gICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFTcGlubmVyfSBjbGFzc05hbWU9J2ZhIGZhLXNwaW5uZXIgZmEtc3BpbiAgd2VhdGhlckNhcmRfX3NwaW5uZXInPjwvRm9udEF3ZXNvbWVJY29uPlxyXG4gICAgKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSd3ZWF0aGVy0KFhcmQnPlxyXG4gICAgICAgICAgICB7d2VhdGhlckNvbnRlbnR9XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd3ZWF0aGVy0KFhcmRfX2l0ZW0nPldlYXRoZXIgaW4ge2NpdHl9PC9kaXY+XHJcbiAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nd2VhdGhlctChYXJkX19pdGVtJz57bW9udGh9PC9kaXY+XHJcbiAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nd2VhdGhlctChYXJkX19pdGVtJz57dGVtcH0gQzwvZGl2PlxyXG4gICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3dlYXRoZXLQoWFyZF9faXRlbSc+e3R5cGVPZldlYXRoZXJ9PC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgV2VhdGhlcjtcclxuIl0sIm5hbWVzIjpbIndlYXRoZXJfcmFpbiIsIndlYXRoZXJfc3VubnkiLCJ3ZWF0aGVyX2Nsb3VkIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJmZXRjaFdlYXRoZXJGb3JlY2FzdCIsInVzZURpc3BhdGNoIiwidXNlU2VsZWN0b3IiLCJJbWFnZSIsIkZvbnRBd2Vzb21lSWNvbiIsImZhU3Bpbm5lciIsIldlYXRoZXIiLCJjaXR5IiwiZGlzcGF0Y2giLCJ3ZWF0aGVyIiwic3RhdGUiLCJtYWluUGFnZVNsaWNlIiwidHlwZU9mV2VhdGhlciIsInNldFR5cGVPZldlYXRoZXIiLCJ3ZWF0aGVySW1nIiwic2V0V2VhdGhlckltZyIsIm1vbnRoIiwiRGF0ZSIsInRvRGF0ZVN0cmluZyIsInRlbXAiLCJtYWluIiwiZ2V0VHlwZSIsImdldFdlYXRoZXJJbWciLCJ3ZWF0aGVyQ29udGVudCIsImNsYXNzTmFtZSIsInNyYyIsImFsdCIsImljb24iLCJkaXYiLCJiciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/common/weather/Weather.js\n"));

/***/ })

});