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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/src/_sliced_to_array.mjs */ \"./node_modules/@swc/helpers/src/_sliced_to_array.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_pages_squad_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/pages/squad/data */ \"./components/pages/squad/data.js\");\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\nvar Player = function() {\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    var idM = router.query.idM;\n    // const [idFromUrl, setIdFromUrl] = useState(null);\n    var ref = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), 2), selectedPlayer = ref[0], setSelectedPlayer = ref[1];\n    var findPlayer = function(idFromUrl) {\n        var playerInfo = _components_pages_squad_data__WEBPACK_IMPORTED_MODULE_3__.players.length > 0 ? _components_pages_squad_data__WEBPACK_IMPORTED_MODULE_3__.players.filter(function(it) {\n            return it.squadNumber === +idFromUrl;\n        }) : null;\n        setSelectedPlayer(playerInfo);\n    // if (!id) {\n    //     const playerInfo = players.length > 0 ? players.filter(it => it.squadNumber === +id) : null;\n    //     setSelectedPlayer(playerInfo);\n    // } else {\n    //     const playerInfo = players.length > 0 ? players.filter(it => it.squadNumber === +idFromUrl) : null;\n    //     setSelectedPlayer(playerInfo);\n    // }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        findPlayer(idM);\n    }, [\n        idM\n    ]);\n    var getIdFromUlr = function(url) {\n        var splitedArr = url.split(\"/\");\n        var id = splitedArr[splitedArr.length - 1];\n        findPlayer(id);\n    // setIdFromUrl(id);\n    };\n    // useEffect(() => {\n    //     if (!idM) {\n    //         console.log(\"нема\");\n    //         getIdFromUlr(window.location.href);\n    //     }\n    // }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"player\",\n        children: selectedPlayer && idM ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"player-title\",\n                    children: selectedPlayer[0].name\n                }, void 0, false, {\n                    fileName: \"C:\\\\react\\\\Arsenal\\\\my-app\\\\pages\\\\squad\\\\[id].js\",\n                    lineNumber: 47,\n                    columnNumber: 21\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"player-photo\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: selectedPlayer[0].img,\n                        alt: \"\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\react\\\\Arsenal\\\\my-app\\\\pages\\\\squad\\\\[id].js\",\n                        lineNumber: 49,\n                        columnNumber: 25\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\react\\\\Arsenal\\\\my-app\\\\pages\\\\squad\\\\[id].js\",\n                    lineNumber: 48,\n                    columnNumber: 21\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"player-info\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    children: \"Name:\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\react\\\\Arsenal\\\\my-app\\\\pages\\\\squad\\\\[id].js\",\n                                    lineNumber: 53,\n                                    columnNumber: 29\n                                }, _this),\n                                selectedPlayer[0].name\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\react\\\\Arsenal\\\\my-app\\\\pages\\\\squad\\\\[id].js\",\n                            lineNumber: 52,\n                            columnNumber: 25\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    children: \"Squad number:\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\react\\\\Arsenal\\\\my-app\\\\pages\\\\squad\\\\[id].js\",\n                                    lineNumber: 57,\n                                    columnNumber: 29\n                                }, _this),\n                                idM\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\react\\\\Arsenal\\\\my-app\\\\pages\\\\squad\\\\[id].js\",\n                            lineNumber: 56,\n                            columnNumber: 25\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    children: \"Born:\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\react\\\\Arsenal\\\\my-app\\\\pages\\\\squad\\\\[id].js\",\n                                    lineNumber: 61,\n                                    columnNumber: 29\n                                }, _this),\n                                selectedPlayer[0].born\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\react\\\\Arsenal\\\\my-app\\\\pages\\\\squad\\\\[id].js\",\n                            lineNumber: 60,\n                            columnNumber: 25\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    children: \"Arsenal debut:\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\react\\\\Arsenal\\\\my-app\\\\pages\\\\squad\\\\[id].js\",\n                                    lineNumber: 65,\n                                    columnNumber: 29\n                                }, _this),\n                                selectedPlayer[0].arsenalDebut\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\react\\\\Arsenal\\\\my-app\\\\pages\\\\squad\\\\[id].js\",\n                            lineNumber: 64,\n                            columnNumber: 25\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    children: \"Previous clubs:\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\react\\\\Arsenal\\\\my-app\\\\pages\\\\squad\\\\[id].js\",\n                                    lineNumber: 69,\n                                    columnNumber: 29\n                                }, _this),\n                                selectedPlayer[0].previousClubs\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\react\\\\Arsenal\\\\my-app\\\\pages\\\\squad\\\\[id].js\",\n                            lineNumber: 68,\n                            columnNumber: 25\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\react\\\\Arsenal\\\\my-app\\\\pages\\\\squad\\\\[id].js\",\n                    lineNumber: 51,\n                    columnNumber: 21\n                }, _this)\n            ]\n        }, void 0, true) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: idM\n        }, void 0, false, {\n            fileName: \"C:\\\\react\\\\Arsenal\\\\my-app\\\\pages\\\\squad\\\\[id].js\",\n            lineNumber: 75,\n            columnNumber: 17\n        }, _this)\n    }, void 0, false, {\n        fileName: \"C:\\\\react\\\\Arsenal\\\\my-app\\\\pages\\\\squad\\\\[id].js\",\n        lineNumber: 44,\n        columnNumber: 9\n    }, _this);\n};\n_s(Player, \"Q7iARzTO4jZQ761nhlpaltdLX3g=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Player;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Player);\nvar _c;\n$RefreshReg$(_c, \"Player\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9zcXVhZC9baWRdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOzs7O0FBQWtDO0FBQ0Q7QUFDTztBQUNvQjtBQUU1RCxJQUFNSSxTQUFTLFdBQU07O0lBQ2pCLElBQU1DLFNBQVNILHNEQUFTQTtJQUN4QixJQUFNLE1BQVVHLE9BQU9FLEtBQUssQ0FBcEJEO0lBRVIsb0RBQW9EO0lBQ3BELElBQTRDTCxNQUFBQSxnRkFBQUEsQ0FBQUEsK0NBQVFBLENBQUMsSUFBSSxPQUFsRE8saUJBQXFDUCxRQUFyQlEsb0JBQXFCUjtJQUU1QyxJQUFNUyxhQUFhQyxTQUFBQSxXQUFhO1FBQzVCLElBQU1DLGFBQWFULHdFQUFjLEdBQUcsSUFBSUEsd0VBQWMsQ0FBQ1ksU0FBQUE7bUJBQU1BLEdBQUdDLFdBQVcsS0FBSyxDQUFDTDthQUFhLElBQUk7UUFDbEdGLGtCQUFrQkc7SUFDbEIsYUFBYTtJQUNiLG1HQUFtRztJQUNuRyxxQ0FBcUM7SUFDckMsV0FBVztJQUNYLDBHQUEwRztJQUMxRyxxQ0FBcUM7SUFDckMsSUFBSTtJQUNSO0lBRUFaLGdEQUFTQSxDQUFDLFdBQU07UUFDWlUsV0FBV0o7SUFDZixHQUFHO1FBQUNBO0tBQUk7SUFFUixJQUFNVyxlQUFlQyxTQUFBQSxLQUFPO1FBQ3hCLElBQU1DLGFBQWFELElBQUlFLEtBQUssQ0FBQztRQUM3QixJQUFNQyxLQUFLRixVQUFVLENBQUNBLFdBQVdOLE1BQU0sR0FBRyxFQUFFO1FBQzVDSCxXQUFXVztJQUNYLG9CQUFvQjtJQUN4QjtJQUVBLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsK0JBQStCO0lBQy9CLDhDQUE4QztJQUM5QyxRQUFRO0lBQ1IsVUFBVTtJQUVWLHFCQUNJLDhEQUFDQztRQUFJQyxXQUFVO2tCQUNWZixrQkFBa0JGLG9CQUNmOzs4QkFDSSw4REFBQ2tCO29CQUFHRCxXQUFVOzhCQUFnQmYsY0FBYyxDQUFDLEVBQUUsQ0FBQ2lCLElBQUk7Ozs7Ozs4QkFDcEQsOERBQUNIO29CQUFJQyxXQUFVOzhCQUNYLDRFQUFDRzt3QkFBSUMsS0FBS25CLGNBQWMsQ0FBQyxFQUFFLENBQUNrQixHQUFHO3dCQUFFRSxLQUFJOzs7Ozs7Ozs7Ozs4QkFFekMsOERBQUNOO29CQUFJQyxXQUFVOztzQ0FDWCw4REFBQ007OzhDQUNHLDhEQUFDQzs4Q0FBSzs7Ozs7O2dDQUNMdEIsY0FBYyxDQUFDLEVBQUUsQ0FBQ2lCLElBQUk7Ozs7Ozs7c0NBRTNCLDhEQUFDSTs7OENBQ0csOERBQUNDOzhDQUFLOzs7Ozs7Z0NBQ0x4Qjs7Ozs7OztzQ0FFTCw4REFBQ3VCOzs4Q0FDRyw4REFBQ0M7OENBQUs7Ozs7OztnQ0FDTHRCLGNBQWMsQ0FBQyxFQUFFLENBQUN1QixJQUFJOzs7Ozs7O3NDQUUzQiw4REFBQ0Y7OzhDQUNHLDhEQUFDQzs4Q0FBSzs7Ozs7O2dDQUNMdEIsY0FBYyxDQUFDLEVBQUUsQ0FBQ3dCLFlBQVk7Ozs7Ozs7c0NBRW5DLDhEQUFDSDs7OENBQ0csOERBQUNDOzhDQUFLOzs7Ozs7Z0NBQ0x0QixjQUFjLENBQUMsRUFBRSxDQUFDeUIsYUFBYTs7Ozs7Ozs7Ozs7Ozs7eUNBSzVDLDhEQUFDWDtzQkFBS2hCOzs7OztpQkFDVDs7Ozs7O0FBR2I7R0F6RU1GOztRQUNhRixrREFBU0E7OztLQUR0QkU7QUEyRU4sK0RBQWVBLE1BQU1BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc3F1YWQvW2lkXS5qcz9mZTE3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgcGxheWVycyB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3BhZ2VzL3NxdWFkL2RhdGFcIjtcclxuXHJcbmNvbnN0IFBsYXllciA9ICgpID0+IHtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gICAgY29uc3QgeyBpZE0gfSA9IHJvdXRlci5xdWVyeTtcclxuXHJcbiAgICAvLyBjb25zdCBbaWRGcm9tVXJsLCBzZXRJZEZyb21VcmxdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgICBjb25zdCBbc2VsZWN0ZWRQbGF5ZXIsIHNldFNlbGVjdGVkUGxheWVyXSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cclxuICAgIGNvbnN0IGZpbmRQbGF5ZXIgPSBpZEZyb21VcmwgPT4ge1xyXG4gICAgICAgIGNvbnN0IHBsYXllckluZm8gPSBwbGF5ZXJzLmxlbmd0aCA+IDAgPyBwbGF5ZXJzLmZpbHRlcihpdCA9PiBpdC5zcXVhZE51bWJlciA9PT0gK2lkRnJvbVVybCkgOiBudWxsO1xyXG4gICAgICAgIHNldFNlbGVjdGVkUGxheWVyKHBsYXllckluZm8pO1xyXG4gICAgICAgIC8vIGlmICghaWQpIHtcclxuICAgICAgICAvLyAgICAgY29uc3QgcGxheWVySW5mbyA9IHBsYXllcnMubGVuZ3RoID4gMCA/IHBsYXllcnMuZmlsdGVyKGl0ID0+IGl0LnNxdWFkTnVtYmVyID09PSAraWQpIDogbnVsbDtcclxuICAgICAgICAvLyAgICAgc2V0U2VsZWN0ZWRQbGF5ZXIocGxheWVySW5mbyk7XHJcbiAgICAgICAgLy8gfSBlbHNlIHtcclxuICAgICAgICAvLyAgICAgY29uc3QgcGxheWVySW5mbyA9IHBsYXllcnMubGVuZ3RoID4gMCA/IHBsYXllcnMuZmlsdGVyKGl0ID0+IGl0LnNxdWFkTnVtYmVyID09PSAraWRGcm9tVXJsKSA6IG51bGw7XHJcbiAgICAgICAgLy8gICAgIHNldFNlbGVjdGVkUGxheWVyKHBsYXllckluZm8pO1xyXG4gICAgICAgIC8vIH1cclxuICAgIH07XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBmaW5kUGxheWVyKGlkTSk7XHJcbiAgICB9LCBbaWRNXSk7XHJcblxyXG4gICAgY29uc3QgZ2V0SWRGcm9tVWxyID0gdXJsID0+IHtcclxuICAgICAgICBjb25zdCBzcGxpdGVkQXJyID0gdXJsLnNwbGl0KFwiL1wiKTtcclxuICAgICAgICBjb25zdCBpZCA9IHNwbGl0ZWRBcnJbc3BsaXRlZEFyci5sZW5ndGggLSAxXTtcclxuICAgICAgICBmaW5kUGxheWVyKGlkKTtcclxuICAgICAgICAvLyBzZXRJZEZyb21VcmwoaWQpO1xyXG4gICAgfTtcclxuXHJcbiAgICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgLy8gICAgIGlmICghaWRNKSB7XHJcbiAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKFwi0L3QtdC80LBcIik7XHJcbiAgICAvLyAgICAgICAgIGdldElkRnJvbVVscih3aW5kb3cubG9jYXRpb24uaHJlZik7XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gfSwgW10pO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3BsYXllcic+XHJcbiAgICAgICAgICAgIHtzZWxlY3RlZFBsYXllciAmJiBpZE0gPyAoXHJcbiAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9J3BsYXllci10aXRsZSc+e3NlbGVjdGVkUGxheWVyWzBdLm5hbWV9PC9oMT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncGxheWVyLXBob3RvJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3NlbGVjdGVkUGxheWVyWzBdLmltZ30gYWx0PScnIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3BsYXllci1pbmZvJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5OYW1lOjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzZWxlY3RlZFBsYXllclswXS5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+U3F1YWQgbnVtYmVyOjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpZE19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5Cb3JuOjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzZWxlY3RlZFBsYXllclswXS5ib3JufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+QXJzZW5hbCBkZWJ1dDo8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c2VsZWN0ZWRQbGF5ZXJbMF0uYXJzZW5hbERlYnV0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+UHJldmlvdXMgY2x1YnM6PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3NlbGVjdGVkUGxheWVyWzBdLnByZXZpb3VzQ2x1YnN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgPGRpdj57aWRNfTwvZGl2PlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBsYXllcjtcclxuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlUm91dGVyIiwicGxheWVycyIsIlBsYXllciIsInJvdXRlciIsImlkTSIsInF1ZXJ5Iiwic2VsZWN0ZWRQbGF5ZXIiLCJzZXRTZWxlY3RlZFBsYXllciIsImZpbmRQbGF5ZXIiLCJpZEZyb21VcmwiLCJwbGF5ZXJJbmZvIiwibGVuZ3RoIiwiZmlsdGVyIiwiaXQiLCJzcXVhZE51bWJlciIsImdldElkRnJvbVVsciIsInVybCIsInNwbGl0ZWRBcnIiLCJzcGxpdCIsImlkIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJuYW1lIiwiaW1nIiwic3JjIiwiYWx0IiwicCIsInNwYW4iLCJib3JuIiwiYXJzZW5hbERlYnV0IiwicHJldmlvdXNDbHVicyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/squad/[id].js\n"));

/***/ })

});