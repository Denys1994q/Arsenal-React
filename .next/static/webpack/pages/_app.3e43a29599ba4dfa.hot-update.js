"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/main/mainPageSlice.js":
/*!******************************************!*\
  !*** ./components/main/mainPageSlice.js ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"actions\": function() { return /* binding */ actions; },\n/* harmony export */   \"fetchWeatherForecast\": function() { return /* binding */ fetchWeatherForecast; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_throw_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @swc/helpers/src/_throw.mjs */ \"./node_modules/@swc/helpers/src/_throw.mjs\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @reduxjs/toolkit */ \"./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js\");\n/* harmony import */ var _hooks_http_hook__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../hooks/http.hook */ \"./hooks/http.hook.js\");\n\nvar _s = $RefreshSig$();\n\n\nvar initialState = {\n    weather: {},\n    weatherLoading: false,\n    weatherError: false\n};\nvar fetchWeatherForecast = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createAsyncThunk)(\"mainPage/fetchWeatherForecast\", _s(function(city) {\n    _s();\n    var request = (0,_hooks_http_hook__WEBPACK_IMPORTED_MODULE_0__.useHttp)().request;\n    var formattedCity = city.toL;\n    return request(\"https://api.openweathermap.org/data/2.5/weather?q=\".concat(city, \"&units=metric&appid=cea91e10193139338f543bcc88a81974\"), \"GET\", null, {});\n}, \"RW8wnHyYfz8NPGbFIKoeRRKoej8=\", false, function() {\n    return [\n        _hooks_http_hook__WEBPACK_IMPORTED_MODULE_0__.useHttp\n    ];\n}));\nvar mainPageSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createSlice)({\n    name: \"mainPage\",\n    initialState: initialState,\n    reducers: {},\n    extraReducers: function(builder) {\n        builder.addCase(fetchWeatherForecast.pending, function(state) {\n            state.weatherLoading = true;\n            state.weatherError = false;\n        }).addCase(fetchWeatherForecast.fulfilled, function(state, action) {\n            state.weather = action.payload;\n            state.weatherLoading = false;\n            state.weatherError = false;\n        }).addCase(fetchWeatherForecast.rejected, function(state) {\n            state.weatherError = true;\n            state.weatherLoading = false;\n        }).addDefaultCase(function() {});\n    }\n});\nvar actions = mainPageSlice.actions, reducer = mainPageSlice.reducer;\n/* harmony default export */ __webpack_exports__[\"default\"] = (reducer);\nvar actions = actions !== null ? actions : (0,_swc_helpers_src_throw_mjs__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(new TypeError(\"Cannot destructure undefined\"));\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL21haW4vbWFpblBhZ2VTbGljZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOztBQUFpRTtBQUVqQjtBQUVoRCxJQUFNRyxlQUFlO0lBQ2pCQyxTQUFTLENBQUM7SUFDVkMsZ0JBQWdCLEtBQUs7SUFDckJDLGNBQWMsS0FBSztBQUN2QjtBQUVPLElBQU1DLHVCQUF1Qk4sa0VBQWdCQSxDQUFDLG9DQUFpQ08sU0FBQUEsTUFBUTs7SUFDMUYsSUFBTSxVQUFjTix5REFBT0EsR0FBbkJPO0lBQ1IsSUFBTUMsZ0JBQWdCRixLQUFLRyxHQUFHO0lBQzlCLE9BQU9GLFFBQ0gscURBQTBELE9BQUxELE1BQUsseURBQzFELE9BQ0EsSUFBSSxFQUNKLENBQUM7QUFFVDs7UUFSd0JOLHFEQUFPQTs7SUFRNUI7QUFFSCxJQUFNVSxnQkFBZ0JaLDZEQUFXQSxDQUFDO0lBQzlCYSxNQUFNO0lBQ05WLGNBQUFBO0lBQ0FXLFVBQVUsQ0FBQztJQUNYQyxlQUFlQyxTQUFBQSxTQUFXO1FBQ3RCQSxRQUNLQyxPQUFPLENBQUNWLHFCQUFxQlcsT0FBTyxFQUFFQyxTQUFBQSxPQUFTO1lBQzVDQSxNQUFNZCxjQUFjLEdBQUcsSUFBSTtZQUMzQmMsTUFBTWIsWUFBWSxHQUFHLEtBQUs7UUFDOUIsR0FDQ1csT0FBTyxDQUFDVixxQkFBcUJhLFNBQVMsRUFBRSxTQUFDRCxPQUFPRSxRQUFXO1lBQ3hERixNQUFNZixPQUFPLEdBQUdpQixPQUFPQyxPQUFPO1lBQzlCSCxNQUFNZCxjQUFjLEdBQUcsS0FBSztZQUM1QmMsTUFBTWIsWUFBWSxHQUFHLEtBQUs7UUFDOUIsR0FDQ1csT0FBTyxDQUFDVixxQkFBcUJnQixRQUFRLEVBQUVKLFNBQUFBLE9BQVM7WUFDN0NBLE1BQU1iLFlBQVksR0FBRyxJQUFJO1lBQ3pCYSxNQUFNZCxjQUFjLEdBQUcsS0FBSztRQUNoQyxHQUNDbUIsY0FBYyxDQUFDLFdBQU0sQ0FBQztJQUMvQjtBQUNKO0FBRUEsSUFBUUMsVUFBcUJiLGNBQXJCYSxTQUFTQyxVQUFZZCxjQUFaYztBQUVqQiwrREFBZUEsT0FBT0EsRUFBQztBQUVoQixJQUFNLFVBRVRELG1CQUFBQSxVQUFBQSxzRUFBQUEsZ0RBQVEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9tYWluL21haW5QYWdlU2xpY2UuanM/ODM1NCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTbGljZSwgY3JlYXRlQXN5bmNUaHVuayB9IGZyb20gXCJAcmVkdXhqcy90b29sa2l0XCI7XHJcblxyXG5pbXBvcnQgeyB1c2VIdHRwIH0gZnJvbSBcIi4uLy4uL2hvb2tzL2h0dHAuaG9va1wiO1xyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gICAgd2VhdGhlcjoge30sXHJcbiAgICB3ZWF0aGVyTG9hZGluZzogZmFsc2UsXHJcbiAgICB3ZWF0aGVyRXJyb3I6IGZhbHNlLFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGZldGNoV2VhdGhlckZvcmVjYXN0ID0gY3JlYXRlQXN5bmNUaHVuayhcIm1haW5QYWdlL2ZldGNoV2VhdGhlckZvcmVjYXN0XCIsIGNpdHkgPT4ge1xyXG4gICAgY29uc3QgeyByZXF1ZXN0IH0gPSB1c2VIdHRwKCk7XHJcbiAgICBjb25zdCBmb3JtYXR0ZWRDaXR5ID0gY2l0eS50b0xcclxuICAgIHJldHVybiByZXF1ZXN0KFxyXG4gICAgICAgIGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9xPSR7Y2l0eX0mdW5pdHM9bWV0cmljJmFwcGlkPWNlYTkxZTEwMTkzMTM5MzM4ZjU0M2JjYzg4YTgxOTc0YCxcclxuICAgICAgICBcIkdFVFwiLFxyXG4gICAgICAgIG51bGwsXHJcbiAgICAgICAge31cclxuICAgICk7XHJcbn0pO1xyXG5cclxuY29uc3QgbWFpblBhZ2VTbGljZSA9IGNyZWF0ZVNsaWNlKHtcclxuICAgIG5hbWU6IFwibWFpblBhZ2VcIixcclxuICAgIGluaXRpYWxTdGF0ZSxcclxuICAgIHJlZHVjZXJzOiB7fSxcclxuICAgIGV4dHJhUmVkdWNlcnM6IGJ1aWxkZXIgPT4ge1xyXG4gICAgICAgIGJ1aWxkZXJcclxuICAgICAgICAgICAgLmFkZENhc2UoZmV0Y2hXZWF0aGVyRm9yZWNhc3QucGVuZGluZywgc3RhdGUgPT4ge1xyXG4gICAgICAgICAgICAgICAgc3RhdGUud2VhdGhlckxvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgc3RhdGUud2VhdGhlckVycm9yID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5hZGRDYXNlKGZldGNoV2VhdGhlckZvcmVjYXN0LmZ1bGZpbGxlZCwgKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgICAgICAgICAgICAgIHN0YXRlLndlYXRoZXIgPSBhY3Rpb24ucGF5bG9hZDtcclxuICAgICAgICAgICAgICAgIHN0YXRlLndlYXRoZXJMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBzdGF0ZS53ZWF0aGVyRXJyb3IgPSBmYWxzZTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmFkZENhc2UoZmV0Y2hXZWF0aGVyRm9yZWNhc3QucmVqZWN0ZWQsIHN0YXRlID0+IHtcclxuICAgICAgICAgICAgICAgIHN0YXRlLndlYXRoZXJFcnJvciA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBzdGF0ZS53ZWF0aGVyTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuYWRkRGVmYXVsdENhc2UoKCkgPT4ge30pO1xyXG4gICAgfSxcclxufSk7XHJcblxyXG5jb25zdCB7IGFjdGlvbnMsIHJlZHVjZXIgfSA9IG1haW5QYWdlU2xpY2U7XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyO1xyXG5cclxuZXhwb3J0IGNvbnN0IHtcclxuICAgIC8vIHJhbmRvbVBva2Vtb25zX2dldFBva2Vtb25zLFxyXG59ID0gYWN0aW9ucztcclxuIl0sIm5hbWVzIjpbImNyZWF0ZVNsaWNlIiwiY3JlYXRlQXN5bmNUaHVuayIsInVzZUh0dHAiLCJpbml0aWFsU3RhdGUiLCJ3ZWF0aGVyIiwid2VhdGhlckxvYWRpbmciLCJ3ZWF0aGVyRXJyb3IiLCJmZXRjaFdlYXRoZXJGb3JlY2FzdCIsImNpdHkiLCJyZXF1ZXN0IiwiZm9ybWF0dGVkQ2l0eSIsInRvTCIsIm1haW5QYWdlU2xpY2UiLCJuYW1lIiwicmVkdWNlcnMiLCJleHRyYVJlZHVjZXJzIiwiYnVpbGRlciIsImFkZENhc2UiLCJwZW5kaW5nIiwic3RhdGUiLCJmdWxmaWxsZWQiLCJhY3Rpb24iLCJwYXlsb2FkIiwicmVqZWN0ZWQiLCJhZGREZWZhdWx0Q2FzZSIsImFjdGlvbnMiLCJyZWR1Y2VyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/main/mainPageSlice.js\n"));

/***/ })

});