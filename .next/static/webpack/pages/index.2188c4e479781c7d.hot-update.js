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

/***/ "./components/common/slider/Slider.js":
/*!********************************************!*\
  !*** ./components/common/slider/Slider.js ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/src/_sliced_to_array.mjs */ \"./node_modules/@swc/helpers/src/_sliced_to_array.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\nvar Slider = function(param) {\n    var imgs = param.imgs;\n    _s();\n    var imgsArr = props.imgs;\n    var ref = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), 2), slide = ref[0], setSlide = ref[1];\n    var slidesAutoStart = function() {\n        setSlide(function(old) {\n            return old + 1;\n        });\n    };\n    // useEffect(() => {\n    //     const timer = setInterval(() => {\n    //         slidesAutoStart();\n    //     }, 5000);\n    //     return () => clearInterval(timer);\n    // }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        if (slide > imgsArr.length - 1) {\n            setSlide(0);\n        }\n    }, [\n        slide\n    ]);\n    var changeSlide = function(i) {\n        setSlide(i);\n    };\n    var dots = imgsArr.map(function(item, i) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n            onClick: function() {\n                return changeSlide(i);\n            },\n            className: slide == i ? \"slider__dot active\" : \"slider__dot\"\n        }, i, false, {\n            fileName: \"C:\\\\react\\\\Arsenal\\\\my-app\\\\components\\\\common\\\\slider\\\\Slider.js\",\n            lineNumber: 31,\n            columnNumber: 13\n        }, _this);\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"slider\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                className: \"slider__image\",\n                src: imgsArr[slide],\n                alt: \"slider__image\"\n            }, void 0, false, {\n                fileName: \"C:\\\\react\\\\Arsenal\\\\my-app\\\\components\\\\common\\\\slider\\\\Slider.js\",\n                lineNumber: 40,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"slider__dots\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    className: \"slider__dotsList\",\n                    children: dots\n                }, void 0, false, {\n                    fileName: \"C:\\\\react\\\\Arsenal\\\\my-app\\\\components\\\\common\\\\slider\\\\Slider.js\",\n                    lineNumber: 42,\n                    columnNumber: 17\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\react\\\\Arsenal\\\\my-app\\\\components\\\\common\\\\slider\\\\Slider.js\",\n                lineNumber: 41,\n                columnNumber: 13\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\react\\\\Arsenal\\\\my-app\\\\components\\\\common\\\\slider\\\\Slider.js\",\n        lineNumber: 39,\n        columnNumber: 9\n    }, _this);\n};\n_s(Slider, \"fSqGM/dCSZ72/ZdrnFGS7+klzWU=\");\n_c = Slider;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Slider);\nvar _c;\n$RefreshReg$(_c, \"Slider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2NvbW1vbi9zbGlkZXIvU2xpZGVyLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7QUFBNEM7QUFDYjtBQUUvQixJQUFNRyxTQUFTLGdCQUFZO1FBQVZDLGFBQUFBOztJQUNiLElBQU1DLFVBQVVDLE1BQU1GLElBQUk7SUFDMUIsSUFBMEJILE1BQUFBLGdGQUFBQSxDQUFBQSwrQ0FBUUEsQ0FBQyxRQUE1Qk0sUUFBbUJOLFFBQVpPLFdBQVlQO0lBRTFCLElBQU1RLGtCQUFrQixXQUFNO1FBQzFCRCxTQUFTRSxTQUFBQTttQkFBT0EsTUFBTTs7SUFDMUI7SUFFQSxvQkFBb0I7SUFDcEIsd0NBQXdDO0lBQ3hDLDZCQUE2QjtJQUM3QixnQkFBZ0I7SUFDaEIseUNBQXlDO0lBQ3pDLFVBQVU7SUFFVlYsZ0RBQVNBLENBQUMsV0FBTTtRQUNaLElBQUlPLFFBQVFGLFFBQVFNLE1BQU0sR0FBRyxHQUFHO1lBQzVCSCxTQUFTO1FBQ2IsQ0FBQztJQUNMLEdBQUc7UUFBQ0Q7S0FBTTtJQUVWLElBQU1LLGNBQWNDLFNBQUFBLEdBQUs7UUFDckJMLFNBQVNLO0lBQ2I7SUFFQSxJQUFNQyxPQUFPVCxRQUFRVSxHQUFHLENBQUMsU0FBQ0MsTUFBTUgsR0FBTTtRQUNsQyxxQkFDSSw4REFBQ0k7WUFFR0MsU0FBUzt1QkFBTU4sWUFBWUM7O1lBQzNCTSxXQUFXWixTQUFTTSxJQUFJLHVCQUF1QixhQUFhO1dBRnZEQTs7Ozs7SUFJakI7SUFFQSxxQkFDSSw4REFBQ087UUFBSUQsV0FBVTs7MEJBQ1gsOERBQUNqQixtREFBS0E7Z0JBQUNpQixXQUFVO2dCQUFnQkUsS0FBS2hCLE9BQU8sQ0FBQ0UsTUFBTTtnQkFBRWUsS0FBSTs7Ozs7OzBCQUMxRCw4REFBQ0Y7Z0JBQUlELFdBQVU7MEJBQ1gsNEVBQUNJO29CQUFHSixXQUFVOzhCQUFvQkw7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSWxEO0dBMUNNWDtLQUFBQTtBQTRDTiwrREFBZUEsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2NvbW1vbi9zbGlkZXIvU2xpZGVyLmpzP2QxOGQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcclxuXHJcbmNvbnN0IFNsaWRlciA9ICh7aW1nc30pID0+IHtcclxuICAgIGNvbnN0IGltZ3NBcnIgPSBwcm9wcy5pbWdzO1xyXG4gICAgY29uc3QgW3NsaWRlLCBzZXRTbGlkZV0gPSB1c2VTdGF0ZSgwKTtcclxuXHJcbiAgICBjb25zdCBzbGlkZXNBdXRvU3RhcnQgPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0U2xpZGUob2xkID0+IG9sZCArIDEpO1xyXG4gICAgfTtcclxuXHJcbiAgICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgLy8gICAgIGNvbnN0IHRpbWVyID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgLy8gICAgICAgICBzbGlkZXNBdXRvU3RhcnQoKTtcclxuICAgIC8vICAgICB9LCA1MDAwKTtcclxuICAgIC8vICAgICByZXR1cm4gKCkgPT4gY2xlYXJJbnRlcnZhbCh0aW1lcik7XHJcbiAgICAvLyB9LCBbXSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAoc2xpZGUgPiBpbWdzQXJyLmxlbmd0aCAtIDEpIHtcclxuICAgICAgICAgICAgc2V0U2xpZGUoMCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW3NsaWRlXSk7XHJcblxyXG4gICAgY29uc3QgY2hhbmdlU2xpZGUgPSBpID0+IHtcclxuICAgICAgICBzZXRTbGlkZShpKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgZG90cyA9IGltZ3NBcnIubWFwKChpdGVtLCBpKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGxpXHJcbiAgICAgICAgICAgICAgICBrZXk9e2l9XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBjaGFuZ2VTbGlkZShpKX1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c2xpZGUgPT0gaSA/IFwic2xpZGVyX19kb3QgYWN0aXZlXCIgOiBcInNsaWRlcl9fZG90XCJ9PjwvbGk+XHJcbiAgICAgICAgKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NsaWRlcic+XHJcbiAgICAgICAgICAgIDxJbWFnZSBjbGFzc05hbWU9J3NsaWRlcl9faW1hZ2UnIHNyYz17aW1nc0FycltzbGlkZV19IGFsdD0nc2xpZGVyX19pbWFnZScgLz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NsaWRlcl9fZG90cyc+XHJcbiAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPSdzbGlkZXJfX2RvdHNMaXN0Jz57ZG90c308L3VsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTbGlkZXI7XHJcbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkltYWdlIiwiU2xpZGVyIiwiaW1ncyIsImltZ3NBcnIiLCJwcm9wcyIsInNsaWRlIiwic2V0U2xpZGUiLCJzbGlkZXNBdXRvU3RhcnQiLCJvbGQiLCJsZW5ndGgiLCJjaGFuZ2VTbGlkZSIsImkiLCJkb3RzIiwibWFwIiwiaXRlbSIsImxpIiwib25DbGljayIsImNsYXNzTmFtZSIsImRpdiIsInNyYyIsImFsdCIsInVsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/common/slider/Slider.js\n"));

/***/ })

});