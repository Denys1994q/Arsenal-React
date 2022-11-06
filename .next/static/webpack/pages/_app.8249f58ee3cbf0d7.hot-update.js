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

/***/ "./components/squad/Squad.js":
/*!***********************************!*\
  !*** ./components/squad/Squad.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data */ \"./components/squad/data.js\");\nvar _this = undefined;\n\n\n\nvar Squad = function(param) {\n    var setCloseTab = param.setCloseTab;\n    var showData = function(position) {\n        var playersOnPosition = _data__WEBPACK_IMPORTED_MODULE_2__.players.filter(function(item) {\n            return item.position === position;\n        });\n        var showPlayers = playersOnPosition.map(function(item) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                onCl: true,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    href: \"/squad/\".concat(item.squadNumber),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            children: item.squadNumber\n                        }, void 0, false, {\n                            fileName: \"C:\\\\react\\\\Arsenal\\\\my-app\\\\components\\\\squad\\\\Squad.js\",\n                            lineNumber: 13,\n                            columnNumber: 25\n                        }, _this),\n                        item.name\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\react\\\\Arsenal\\\\my-app\\\\components\\\\squad\\\\Squad.js\",\n                    lineNumber: 12,\n                    columnNumber: 21\n                }, _this)\n            }, item.squadNumber, false, {\n                fileName: \"C:\\\\react\\\\Arsenal\\\\my-app\\\\components\\\\squad\\\\Squad.js\",\n                lineNumber: 11,\n                columnNumber: 17\n            }, _this);\n        });\n        return showPlayers;\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"header-tab-item\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"GOALKEEPERS\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\react\\\\Arsenal\\\\my-app\\\\components\\\\squad\\\\Squad.js\",\n                        lineNumber: 26,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        children: showData(\"goalkeepers\")\n                    }, void 0, false, {\n                        fileName: \"C:\\\\react\\\\Arsenal\\\\my-app\\\\components\\\\squad\\\\Squad.js\",\n                        lineNumber: 27,\n                        columnNumber: 17\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\react\\\\Arsenal\\\\my-app\\\\components\\\\squad\\\\Squad.js\",\n                lineNumber: 25,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"header-tab-item\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"DEFENDERS\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\react\\\\Arsenal\\\\my-app\\\\components\\\\squad\\\\Squad.js\",\n                        lineNumber: 30,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        children: showData(\"defenders\")\n                    }, void 0, false, {\n                        fileName: \"C:\\\\react\\\\Arsenal\\\\my-app\\\\components\\\\squad\\\\Squad.js\",\n                        lineNumber: 31,\n                        columnNumber: 17\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\react\\\\Arsenal\\\\my-app\\\\components\\\\squad\\\\Squad.js\",\n                lineNumber: 29,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"header-tab-item\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"MIDFIELDERS\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\react\\\\Arsenal\\\\my-app\\\\components\\\\squad\\\\Squad.js\",\n                        lineNumber: 34,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        children: showData(\"midfielders\")\n                    }, void 0, false, {\n                        fileName: \"C:\\\\react\\\\Arsenal\\\\my-app\\\\components\\\\squad\\\\Squad.js\",\n                        lineNumber: 35,\n                        columnNumber: 17\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\react\\\\Arsenal\\\\my-app\\\\components\\\\squad\\\\Squad.js\",\n                lineNumber: 33,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"header-tab-item\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"FORWARDS\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\react\\\\Arsenal\\\\my-app\\\\components\\\\squad\\\\Squad.js\",\n                        lineNumber: 38,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        children: showData(\"forwards\")\n                    }, void 0, false, {\n                        fileName: \"C:\\\\react\\\\Arsenal\\\\my-app\\\\components\\\\squad\\\\Squad.js\",\n                        lineNumber: 39,\n                        columnNumber: 17\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\react\\\\Arsenal\\\\my-app\\\\components\\\\squad\\\\Squad.js\",\n                lineNumber: 37,\n                columnNumber: 13\n            }, _this)\n        ]\n    }, void 0, true);\n};\n_c = Squad;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Squad);\nvar _c;\n$RefreshReg$(_c, \"Squad\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3NxdWFkL1NxdWFkLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOztBQUE2QjtBQUVJO0FBRWpDLElBQU1FLFFBQVEsZ0JBQW1CO1FBQWpCQyxvQkFBQUE7SUFDWixJQUFNQyxXQUFXQyxTQUFBQSxVQUFZO1FBQ3pCLElBQU1DLG9CQUFvQkwsaURBQWMsQ0FBQ08sU0FBQUE7bUJBQVFBLEtBQUtILFFBQVEsS0FBS0E7O1FBRW5FLElBQU1JLGNBQWNILGtCQUFrQkksR0FBRyxDQUFDRixTQUFBQSxNQUFRO1lBQzlDLHFCQUNJLDhEQUFDRztnQkFBR0MsSUFBSTswQkFDSiw0RUFBQ1osa0RBQUlBO29CQUFDYSxNQUFNLFVBQTJCLE9BQWpCTCxLQUFLTSxXQUFXOztzQ0FDbEMsOERBQUNDO3NDQUFNUCxLQUFLTSxXQUFXOzs7Ozs7d0JBQ3RCTixLQUFLUSxJQUFJOzs7Ozs7O2VBSEpSLEtBQUtNLFdBQVc7Ozs7O1FBT3RDO1FBRUEsT0FBT0w7SUFDWDtJQUVBLHFCQUNJOzswQkFDSSw4REFBQ1E7Z0JBQUlDLFdBQVU7O2tDQUNYLDhEQUFDQztrQ0FBRTs7Ozs7O2tDQUNILDhEQUFDQztrQ0FBSWhCLFNBQVM7Ozs7Ozs7Ozs7OzswQkFFbEIsOERBQUNhO2dCQUFJQyxXQUFVOztrQ0FDWCw4REFBQ0M7a0NBQUU7Ozs7OztrQ0FDSCw4REFBQ0M7a0NBQUloQixTQUFTOzs7Ozs7Ozs7Ozs7MEJBRWxCLDhEQUFDYTtnQkFBSUMsV0FBVTs7a0NBQ1gsOERBQUNDO2tDQUFFOzs7Ozs7a0NBQ0gsOERBQUNDO2tDQUFJaEIsU0FBUzs7Ozs7Ozs7Ozs7OzBCQUVsQiw4REFBQ2E7Z0JBQUlDLFdBQVU7O2tDQUNYLDhEQUFDQztrQ0FBRTs7Ozs7O2tDQUNILDhEQUFDQztrQ0FBSWhCLFNBQVM7Ozs7Ozs7Ozs7Ozs7O0FBSTlCO0tBdENNRjtBQXdDTiwrREFBZUEsS0FBS0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3NxdWFkL1NxdWFkLmpzP2Y2ZjgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5cclxuaW1wb3J0IHsgcGxheWVycyB9IGZyb20gXCIuL2RhdGFcIjtcclxuXHJcbmNvbnN0IFNxdWFkID0gKHtzZXRDbG9zZVRhYn0pID0+IHtcclxuICAgIGNvbnN0IHNob3dEYXRhID0gcG9zaXRpb24gPT4ge1xyXG4gICAgICAgIGNvbnN0IHBsYXllcnNPblBvc2l0aW9uID0gcGxheWVycy5maWx0ZXIoaXRlbSA9PiBpdGVtLnBvc2l0aW9uID09PSBwb3NpdGlvbik7XHJcblxyXG4gICAgICAgIGNvbnN0IHNob3dQbGF5ZXJzID0gcGxheWVyc09uUG9zaXRpb24ubWFwKGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPGxpIG9uQ2wga2V5PXtpdGVtLnNxdWFkTnVtYmVyfT5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgL3NxdWFkLyR7aXRlbS5zcXVhZE51bWJlcn1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e2l0ZW0uc3F1YWROdW1iZXJ9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiBzaG93UGxheWVycztcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naGVhZGVyLXRhYi1pdGVtJz5cclxuICAgICAgICAgICAgICAgIDxwPkdPQUxLRUVQRVJTPC9wPlxyXG4gICAgICAgICAgICAgICAgPHVsPntzaG93RGF0YShcImdvYWxrZWVwZXJzXCIpfTwvdWw+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naGVhZGVyLXRhYi1pdGVtJz5cclxuICAgICAgICAgICAgICAgIDxwPkRFRkVOREVSUzwvcD5cclxuICAgICAgICAgICAgICAgIDx1bD57c2hvd0RhdGEoXCJkZWZlbmRlcnNcIil9PC91bD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdoZWFkZXItdGFiLWl0ZW0nPlxyXG4gICAgICAgICAgICAgICAgPHA+TUlERklFTERFUlM8L3A+XHJcbiAgICAgICAgICAgICAgICA8dWw+e3Nob3dEYXRhKFwibWlkZmllbGRlcnNcIil9PC91bD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdoZWFkZXItdGFiLWl0ZW0nPlxyXG4gICAgICAgICAgICAgICAgPHA+Rk9SV0FSRFM8L3A+XHJcbiAgICAgICAgICAgICAgICA8dWw+e3Nob3dEYXRhKFwiZm9yd2FyZHNcIil9PC91bD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3F1YWQ7XHJcbiJdLCJuYW1lcyI6WyJMaW5rIiwicGxheWVycyIsIlNxdWFkIiwic2V0Q2xvc2VUYWIiLCJzaG93RGF0YSIsInBvc2l0aW9uIiwicGxheWVyc09uUG9zaXRpb24iLCJmaWx0ZXIiLCJpdGVtIiwic2hvd1BsYXllcnMiLCJtYXAiLCJsaSIsIm9uQ2wiLCJocmVmIiwic3F1YWROdW1iZXIiLCJzcGFuIiwibmFtZSIsImRpdiIsImNsYXNzTmFtZSIsInAiLCJ1bCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/squad/Squad.js\n"));

/***/ })

});