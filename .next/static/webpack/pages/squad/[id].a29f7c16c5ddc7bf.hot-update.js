"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/squad/[id]",{

/***/ "./pages/squad/[id].js":
/*!*****************************!*\
  !*** ./pages/squad/[id].js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/src/_sliced_to_array.mjs */ \"./node_modules/@swc/helpers/src/_sliced_to_array.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_pages_squad_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/pages/squad/data */ \"./components/pages/squad/data.js\");\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\nvar Player = function() {\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    var id = router.query.id;\n    var ref = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), 2), idFromUrl = ref[0], setIdFromUrl = ref[1];\n    var ref1 = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), 2), selectedPlayer = ref1[0], setSelectedPlayer = ref1[1];\n    var findPlayer = function() {\n        if (!id) {\n            var playerInfo = _components_pages_squad_data__WEBPACK_IMPORTED_MODULE_3__.players.length > 0 ? _components_pages_squad_data__WEBPACK_IMPORTED_MODULE_3__.players.filter(function(it) {\n                return it.squadNumber === +id;\n            }) : null;\n            setSelectedPlayer(playerInfo);\n        } else {\n            var playerInfo1 = _components_pages_squad_data__WEBPACK_IMPORTED_MODULE_3__.players.length > 0 ? _components_pages_squad_data__WEBPACK_IMPORTED_MODULE_3__.players.filter(function(it) {\n                return it.squadNumber === +id;\n            }) : null;\n            setSelectedPlayer(playerInfo1);\n            idFromUrl;\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        findPlayer();\n    }, [\n        id\n    ]);\n    var getIdFromUlr = function(url) {\n        var splitedArr = url.split(\"/\");\n        var id = splitedArr[splitedArr.length - 1];\n        setIdFromUrl(id);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        if (!id) {\n            getIdFromUlr(window.location.href);\n        }\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"player\",\n        children: selectedPlayer ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"player-title\",\n                    children: selectedPlayer[0].name\n                }, void 0, false, {\n                    fileName: \"C:\\\\react\\\\Arsenal\\\\my-app\\\\pages\\\\squad\\\\[id].js\",\n                    lineNumber: 44,\n                    columnNumber: 21\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"player-photo\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: selectedPlayer[0].img,\n                        alt: \"\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\react\\\\Arsenal\\\\my-app\\\\pages\\\\squad\\\\[id].js\",\n                        lineNumber: 46,\n                        columnNumber: 25\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\react\\\\Arsenal\\\\my-app\\\\pages\\\\squad\\\\[id].js\",\n                    lineNumber: 45,\n                    columnNumber: 21\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"player-info\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    children: \"Name:\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\react\\\\Arsenal\\\\my-app\\\\pages\\\\squad\\\\[id].js\",\n                                    lineNumber: 50,\n                                    columnNumber: 29\n                                }, _this),\n                                selectedPlayer[0].name\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\react\\\\Arsenal\\\\my-app\\\\pages\\\\squad\\\\[id].js\",\n                            lineNumber: 49,\n                            columnNumber: 25\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    children: \"Squad number:\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\react\\\\Arsenal\\\\my-app\\\\pages\\\\squad\\\\[id].js\",\n                                    lineNumber: 54,\n                                    columnNumber: 29\n                                }, _this),\n                                id\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\react\\\\Arsenal\\\\my-app\\\\pages\\\\squad\\\\[id].js\",\n                            lineNumber: 53,\n                            columnNumber: 25\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    children: \"Born:\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\react\\\\Arsenal\\\\my-app\\\\pages\\\\squad\\\\[id].js\",\n                                    lineNumber: 58,\n                                    columnNumber: 29\n                                }, _this),\n                                selectedPlayer[0].born\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\react\\\\Arsenal\\\\my-app\\\\pages\\\\squad\\\\[id].js\",\n                            lineNumber: 57,\n                            columnNumber: 25\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    children: \"Arsenal debut:\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\react\\\\Arsenal\\\\my-app\\\\pages\\\\squad\\\\[id].js\",\n                                    lineNumber: 62,\n                                    columnNumber: 29\n                                }, _this),\n                                selectedPlayer[0].arsenalDebut\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\react\\\\Arsenal\\\\my-app\\\\pages\\\\squad\\\\[id].js\",\n                            lineNumber: 61,\n                            columnNumber: 25\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    children: \"Previous clubs:\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\react\\\\Arsenal\\\\my-app\\\\pages\\\\squad\\\\[id].js\",\n                                    lineNumber: 66,\n                                    columnNumber: 29\n                                }, _this),\n                                selectedPlayer[0].previousClubs\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\react\\\\Arsenal\\\\my-app\\\\pages\\\\squad\\\\[id].js\",\n                            lineNumber: 65,\n                            columnNumber: 25\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\react\\\\Arsenal\\\\my-app\\\\pages\\\\squad\\\\[id].js\",\n                    lineNumber: 48,\n                    columnNumber: 21\n                }, _this)\n            ]\n        }, void 0, true) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: id\n        }, void 0, false, {\n            fileName: \"C:\\\\react\\\\Arsenal\\\\my-app\\\\pages\\\\squad\\\\[id].js\",\n            lineNumber: 72,\n            columnNumber: 17\n        }, _this)\n    }, void 0, false, {\n        fileName: \"C:\\\\react\\\\Arsenal\\\\my-app\\\\pages\\\\squad\\\\[id].js\",\n        lineNumber: 41,\n        columnNumber: 9\n    }, _this);\n};\n_s(Player, \"uc7eB3RGezkeEDeAjTAvEJ8xYpM=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Player;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Player);\nvar _c;\n$RefreshReg$(_c, \"Player\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9zcXVhZC9baWRdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOzs7O0FBQWtDO0FBQ0Q7QUFDTztBQUNvQjtBQUU1RCxJQUFNSSxTQUFTLFdBQU07O0lBQ2pCLElBQU1DLFNBQVNILHNEQUFTQTtJQUN4QixJQUFNLEtBQVNHLE9BQU9FLEtBQUssQ0FBbkJEO0lBRVIsSUFBa0NMLE1BQUFBLGdGQUFBQSxDQUFBQSwrQ0FBUUEsQ0FBQyxJQUFJLE9BQXhDTyxZQUEyQlAsUUFBaEJRLGVBQWdCUjtJQUNsQyxJQUE0Q0EsT0FBQUEsZ0ZBQUFBLENBQUFBLCtDQUFRQSxDQUFDLElBQUksT0FBbERTLGlCQUFxQ1QsU0FBckJVLG9CQUFxQlY7SUFFNUMsSUFBTVcsYUFBYSxXQUFNO1FBQ3JCLElBQUksQ0FBQ04sSUFBSTtZQUNMLElBQU1PLGFBQWFWLHdFQUFjLEdBQUcsSUFBSUEsd0VBQWMsQ0FBQ2EsU0FBQUE7dUJBQU1BLEdBQUdDLFdBQVcsS0FBSyxDQUFDWDtpQkFBTSxJQUFJO1lBQzNGSyxrQkFBa0JFO1FBQ3RCLE9BQU87WUFDSCxJQUFNQSxjQUFhVix3RUFBYyxHQUFHLElBQUlBLHdFQUFjLENBQUNhLFNBQUFBO3VCQUFNQSxHQUFHQyxXQUFXLEtBQUssQ0FBQ1g7aUJBQU0sSUFBSTtZQUMzRkssa0JBQWtCRTtZQUNsQkw7UUFDSixDQUFDO0lBQ0w7SUFFQVIsZ0RBQVNBLENBQUMsV0FBTTtRQUNaWTtJQUNKLEdBQUc7UUFBQ047S0FBRztJQUVQLElBQU1ZLGVBQWVDLFNBQUFBLEtBQU87UUFDeEIsSUFBTUMsYUFBYUQsSUFBSUUsS0FBSyxDQUFDO1FBQzdCLElBQU1mLEtBQUtjLFVBQVUsQ0FBQ0EsV0FBV04sTUFBTSxHQUFHLEVBQUU7UUFDNUNMLGFBQWFIO0lBQ2pCO0lBRUFOLGdEQUFTQSxDQUFDLFdBQU07UUFDWixJQUFJLENBQUNNLElBQUk7WUFDTFksYUFBYUksT0FBT0MsUUFBUSxDQUFDQyxJQUFJO1FBQ3JDLENBQUM7SUFDTCxHQUFHLEVBQUU7SUFFTCxxQkFDSSw4REFBQ0M7UUFBSUMsV0FBVTtrQkFDVmhCLCtCQUNHOzs4QkFDSSw4REFBQ2lCO29CQUFHRCxXQUFVOzhCQUFnQmhCLGNBQWMsQ0FBQyxFQUFFLENBQUNrQixJQUFJOzs7Ozs7OEJBQ3BELDhEQUFDSDtvQkFBSUMsV0FBVTs4QkFDWCw0RUFBQ0c7d0JBQUlDLEtBQUtwQixjQUFjLENBQUMsRUFBRSxDQUFDbUIsR0FBRzt3QkFBRUUsS0FBSTs7Ozs7Ozs7Ozs7OEJBRXpDLDhEQUFDTjtvQkFBSUMsV0FBVTs7c0NBQ1gsOERBQUNNOzs4Q0FDRyw4REFBQ0M7OENBQUs7Ozs7OztnQ0FDTHZCLGNBQWMsQ0FBQyxFQUFFLENBQUNrQixJQUFJOzs7Ozs7O3NDQUUzQiw4REFBQ0k7OzhDQUNHLDhEQUFDQzs4Q0FBSzs7Ozs7O2dDQUNMM0I7Ozs7Ozs7c0NBRUwsOERBQUMwQjs7OENBQ0csOERBQUNDOzhDQUFLOzs7Ozs7Z0NBQ0x2QixjQUFjLENBQUMsRUFBRSxDQUFDd0IsSUFBSTs7Ozs7OztzQ0FFM0IsOERBQUNGOzs4Q0FDRyw4REFBQ0M7OENBQUs7Ozs7OztnQ0FDTHZCLGNBQWMsQ0FBQyxFQUFFLENBQUN5QixZQUFZOzs7Ozs7O3NDQUVuQyw4REFBQ0g7OzhDQUNHLDhEQUFDQzs4Q0FBSzs7Ozs7O2dDQUNMdkIsY0FBYyxDQUFDLEVBQUUsQ0FBQzBCLGFBQWE7Ozs7Ozs7Ozs7Ozs7O3lDQUs1Qyw4REFBQ1g7c0JBQUtuQjs7Ozs7aUJBQ1Q7Ozs7OztBQUdiO0dBdEVNRjs7UUFDYUYsa0RBQVNBOzs7S0FEdEJFO0FBd0VOLCtEQUFlQSxNQUFNQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3NxdWFkL1tpZF0uanM/ZmUxNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7IHBsYXllcnMgfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9wYWdlcy9zcXVhZC9kYXRhXCI7XHJcblxyXG5jb25zdCBQbGF5ZXIgPSAoKSA9PiB7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICAgIGNvbnN0IHsgaWQgfSA9IHJvdXRlci5xdWVyeTtcclxuXHJcbiAgICBjb25zdCBbaWRGcm9tVXJsLCBzZXRJZEZyb21VcmxdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgICBjb25zdCBbc2VsZWN0ZWRQbGF5ZXIsIHNldFNlbGVjdGVkUGxheWVyXSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cclxuICAgIGNvbnN0IGZpbmRQbGF5ZXIgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYgKCFpZCkge1xyXG4gICAgICAgICAgICBjb25zdCBwbGF5ZXJJbmZvID0gcGxheWVycy5sZW5ndGggPiAwID8gcGxheWVycy5maWx0ZXIoaXQgPT4gaXQuc3F1YWROdW1iZXIgPT09ICtpZCkgOiBudWxsO1xyXG4gICAgICAgICAgICBzZXRTZWxlY3RlZFBsYXllcihwbGF5ZXJJbmZvKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zdCBwbGF5ZXJJbmZvID0gcGxheWVycy5sZW5ndGggPiAwID8gcGxheWVycy5maWx0ZXIoaXQgPT4gaXQuc3F1YWROdW1iZXIgPT09ICtpZCkgOiBudWxsO1xyXG4gICAgICAgICAgICBzZXRTZWxlY3RlZFBsYXllcihwbGF5ZXJJbmZvKTtcclxuICAgICAgICAgICAgaWRGcm9tVXJsO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBmaW5kUGxheWVyKCk7XHJcbiAgICB9LCBbaWRdKTtcclxuXHJcbiAgICBjb25zdCBnZXRJZEZyb21VbHIgPSB1cmwgPT4ge1xyXG4gICAgICAgIGNvbnN0IHNwbGl0ZWRBcnIgPSB1cmwuc3BsaXQoXCIvXCIpO1xyXG4gICAgICAgIGNvbnN0IGlkID0gc3BsaXRlZEFycltzcGxpdGVkQXJyLmxlbmd0aCAtIDFdO1xyXG4gICAgICAgIHNldElkRnJvbVVybChpZCk7XHJcbiAgICB9O1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKCFpZCkge1xyXG4gICAgICAgICAgICBnZXRJZEZyb21VbHIod2luZG93LmxvY2F0aW9uLmhyZWYpO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwbGF5ZXInPlxyXG4gICAgICAgICAgICB7c2VsZWN0ZWRQbGF5ZXIgPyAoXHJcbiAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9J3BsYXllci10aXRsZSc+e3NlbGVjdGVkUGxheWVyWzBdLm5hbWV9PC9oMT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncGxheWVyLXBob3RvJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3NlbGVjdGVkUGxheWVyWzBdLmltZ30gYWx0PScnIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3BsYXllci1pbmZvJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5OYW1lOjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzZWxlY3RlZFBsYXllclswXS5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+U3F1YWQgbnVtYmVyOjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPkJvcm46PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3NlbGVjdGVkUGxheWVyWzBdLmJvcm59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5BcnNlbmFsIGRlYnV0Ojwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzZWxlY3RlZFBsYXllclswXS5hcnNlbmFsRGVidXR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5QcmV2aW91cyBjbHViczo8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c2VsZWN0ZWRQbGF5ZXJbMF0ucHJldmlvdXNDbHVic31cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2PntpZH08L2Rpdj5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQbGF5ZXI7XHJcbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZVJvdXRlciIsInBsYXllcnMiLCJQbGF5ZXIiLCJyb3V0ZXIiLCJpZCIsInF1ZXJ5IiwiaWRGcm9tVXJsIiwic2V0SWRGcm9tVXJsIiwic2VsZWN0ZWRQbGF5ZXIiLCJzZXRTZWxlY3RlZFBsYXllciIsImZpbmRQbGF5ZXIiLCJwbGF5ZXJJbmZvIiwibGVuZ3RoIiwiZmlsdGVyIiwiaXQiLCJzcXVhZE51bWJlciIsImdldElkRnJvbVVsciIsInVybCIsInNwbGl0ZWRBcnIiLCJzcGxpdCIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwibmFtZSIsImltZyIsInNyYyIsImFsdCIsInAiLCJzcGFuIiwiYm9ybiIsImFyc2VuYWxEZWJ1dCIsInByZXZpb3VzQ2x1YnMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/squad/[id].js\n"));

/***/ })

});