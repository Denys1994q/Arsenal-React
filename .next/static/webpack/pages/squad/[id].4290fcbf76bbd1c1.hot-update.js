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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/src/_sliced_to_array.mjs */ \"./node_modules/@swc/helpers/src/_sliced_to_array.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n// хуки\n// import { useParams } from 'react-router-dom';\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n// export const getStaticPaths = async () => {\n//     const res = await fetch(\"https://localhost:3000/squad\");\n//     const data = await res.json();\n//     const paths = data.map(item => {\n//         return {\n//             params: { id: item.id },\n//         };\n//     });\n//     return {\n//         paths,\n//         fallback: false,\n//     };\n// };\n// export const getStaticProps = async context => {\n//     const id = context.params.id;\n// };\nvar Player = function(props) {\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    var id = router.query.id;\n    return div;\n    var players = props.players;\n    var ref = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), 2), allPlayers = ref[0], setAllPlayers = ref[1];\n    var ref1 = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), 2), selectedPlayer = ref1[0], setSelectedPlayer = ref1[1];\n    // const {id} = useParams();\n    var findPlayer = function() {\n        var w = allPlayers.length > 0 ? allPlayers.filter(function(it) {\n            return it.squadNumber === +id;\n        }) : null;\n        setSelectedPlayer(w);\n    };\n    var makePlayersArr = function() {\n        var newArr = [];\n        return players ? players.map(function(item) {\n            var g = item.goalkeepers ? item.goalkeepers.map(function(it) {\n                newArr.push(it);\n            }) : null;\n            var d = item.defenders ? item.defenders.map(function(def) {\n                newArr.push(def);\n            }) : null;\n            var m = item.midfielders ? item.midfielders.map(function(mid) {\n                newArr.push(mid);\n            }) : null;\n            var f = item.forwards ? item.forwards.map(function(forw) {\n                newArr.push(forw);\n            }) : null;\n            setAllPlayers(newArr);\n        }) : null;\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        makePlayersArr();\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        findPlayer();\n    }, [\n        allPlayers,\n        id\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"player\",\n        children: selectedPlayer !== null ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"player-title\",\n                    children: selectedPlayer[0].name\n                }, void 0, false, {\n                    fileName: \"C:\\\\react\\\\Arsenal\\\\my-app\\\\pages\\\\squad\\\\[id].js\",\n                    lineNumber: 87,\n                    columnNumber: 21\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"player-photo\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: selectedPlayer[0].img,\n                        alt: \"\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\react\\\\Arsenal\\\\my-app\\\\pages\\\\squad\\\\[id].js\",\n                        lineNumber: 89,\n                        columnNumber: 25\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\react\\\\Arsenal\\\\my-app\\\\pages\\\\squad\\\\[id].js\",\n                    lineNumber: 88,\n                    columnNumber: 21\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"player-info\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    children: \"Name:\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\react\\\\Arsenal\\\\my-app\\\\pages\\\\squad\\\\[id].js\",\n                                    lineNumber: 93,\n                                    columnNumber: 29\n                                }, _this),\n                                selectedPlayer[0].name\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\react\\\\Arsenal\\\\my-app\\\\pages\\\\squad\\\\[id].js\",\n                            lineNumber: 92,\n                            columnNumber: 25\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    children: \"Squad number:\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\react\\\\Arsenal\\\\my-app\\\\pages\\\\squad\\\\[id].js\",\n                                    lineNumber: 97,\n                                    columnNumber: 29\n                                }, _this),\n                                id\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\react\\\\Arsenal\\\\my-app\\\\pages\\\\squad\\\\[id].js\",\n                            lineNumber: 96,\n                            columnNumber: 25\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    children: \"Born:\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\react\\\\Arsenal\\\\my-app\\\\pages\\\\squad\\\\[id].js\",\n                                    lineNumber: 101,\n                                    columnNumber: 29\n                                }, _this),\n                                selectedPlayer[0].born\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\react\\\\Arsenal\\\\my-app\\\\pages\\\\squad\\\\[id].js\",\n                            lineNumber: 100,\n                            columnNumber: 25\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    children: \"Arsenal debut:\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\react\\\\Arsenal\\\\my-app\\\\pages\\\\squad\\\\[id].js\",\n                                    lineNumber: 105,\n                                    columnNumber: 29\n                                }, _this),\n                                selectedPlayer[0].arsenalDebut\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\react\\\\Arsenal\\\\my-app\\\\pages\\\\squad\\\\[id].js\",\n                            lineNumber: 104,\n                            columnNumber: 25\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    children: \"Previous clubs:\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\react\\\\Arsenal\\\\my-app\\\\pages\\\\squad\\\\[id].js\",\n                                    lineNumber: 109,\n                                    columnNumber: 29\n                                }, _this),\n                                selectedPlayer[0].previousClubs\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\react\\\\Arsenal\\\\my-app\\\\pages\\\\squad\\\\[id].js\",\n                            lineNumber: 108,\n                            columnNumber: 25\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\react\\\\Arsenal\\\\my-app\\\\pages\\\\squad\\\\[id].js\",\n                    lineNumber: 91,\n                    columnNumber: 21\n                }, _this)\n            ]\n        }, void 0, true) : \"\"\n    }, void 0, false, {\n        fileName: \"C:\\\\react\\\\Arsenal\\\\my-app\\\\pages\\\\squad\\\\[id].js\",\n        lineNumber: 84,\n        columnNumber: 9\n    }, _this);\n};\n_s(Player, \"IJ+28pxRMuwl8I4JIM00CRCrlU8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Player;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Player);\nvar _c;\n$RefreshReg$(_c, \"Player\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9zcXVhZC9baWRdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsT0FBTztBQUNQLGdEQUFnRDtBQUNoRDs7OztBQUFrQztBQUNEO0FBQ087QUFFeEMsOENBQThDO0FBQzlDLCtEQUErRDtBQUMvRCxxQ0FBcUM7QUFFckMsdUNBQXVDO0FBQ3ZDLG1CQUFtQjtBQUNuQix1Q0FBdUM7QUFDdkMsYUFBYTtBQUNiLFVBQVU7QUFFVixlQUFlO0FBQ2YsaUJBQWlCO0FBQ2pCLDJCQUEyQjtBQUMzQixTQUFTO0FBQ1QsS0FBSztBQUVMLG1EQUFtRDtBQUNuRCxvQ0FBb0M7QUFDcEMsS0FBSztBQUVMLElBQU1HLFNBQVNDLFNBQUFBLE9BQVM7O0lBQ3BCLElBQU1DLFNBQVNILHNEQUFTQTtJQUN4QixJQUFNLEtBQVNHLE9BQU9FLEtBQUssQ0FBbkJEO0lBRVIsT0FDSUU7SUFHSixJQUFNLFVBQWNKLE1BQVpLO0lBQ1IsSUFBb0NSLE1BQUFBLGdGQUFBQSxDQUFBQSwrQ0FBUUEsQ0FBQyxFQUFFLE9BQXhDUyxhQUE2QlQsUUFBakJVLGdCQUFpQlY7SUFDcEMsSUFBNENBLE9BQUFBLGdGQUFBQSxDQUFBQSwrQ0FBUUEsQ0FBQyxJQUFJLE9BQWxEVyxpQkFBcUNYLFNBQXJCWSxvQkFBcUJaO0lBRTVDLDRCQUE0QjtJQUU1QixJQUFNYSxhQUFhLFdBQU07UUFDckIsSUFBTUMsSUFBSUwsV0FBV00sTUFBTSxHQUFHLElBQUlOLFdBQVdPLE1BQU0sQ0FBQ0MsU0FBQUE7bUJBQU1BLEdBQUdDLFdBQVcsS0FBSyxDQUFDYjthQUFNLElBQUk7UUFDeEZPLGtCQUFrQkU7SUFDdEI7SUFFQSxJQUFNSyxpQkFBaUIsV0FBTTtRQUN6QixJQUFJQyxTQUFTLEVBQUU7UUFDZixPQUFPWixVQUNEQSxRQUFRYSxHQUFHLENBQUNDLFNBQUFBLE1BQVE7WUFDaEIsSUFBTUMsSUFBSUQsS0FBS0UsV0FBVyxHQUNwQkYsS0FBS0UsV0FBVyxDQUFDSCxHQUFHLENBQUNKLFNBQUFBLElBQU07Z0JBQ3ZCRyxPQUFPSyxJQUFJLENBQUNSO1lBQ2hCLEtBQ0EsSUFBSTtZQUNWLElBQU1TLElBQUlKLEtBQUtLLFNBQVMsR0FDbEJMLEtBQUtLLFNBQVMsQ0FBQ04sR0FBRyxDQUFDTyxTQUFBQSxLQUFPO2dCQUN0QlIsT0FBT0ssSUFBSSxDQUFDRztZQUNoQixLQUNBLElBQUk7WUFDVixJQUFNQyxJQUFJUCxLQUFLUSxXQUFXLEdBQ3BCUixLQUFLUSxXQUFXLENBQUNULEdBQUcsQ0FBQ1UsU0FBQUEsS0FBTztnQkFDeEJYLE9BQU9LLElBQUksQ0FBQ007WUFDaEIsS0FDQSxJQUFJO1lBQ1YsSUFBTUMsSUFBSVYsS0FBS1csUUFBUSxHQUNqQlgsS0FBS1csUUFBUSxDQUFDWixHQUFHLENBQUNhLFNBQUFBLE1BQVE7Z0JBQ3RCZCxPQUFPSyxJQUFJLENBQUNTO1lBQ2hCLEtBQ0EsSUFBSTtZQUNWeEIsY0FBY1U7UUFDbEIsS0FDQSxJQUFJO0lBQ2Q7SUFFQXJCLGdEQUFTQSxDQUFDLFdBQU07UUFDWm9CO0lBQ0osR0FBRyxFQUFFO0lBRUxwQixnREFBU0EsQ0FBQyxXQUFNO1FBQ1pjO0lBQ0osR0FBRztRQUFDSjtRQUFZSjtLQUFHO0lBRW5CLHFCQUNJLDhEQUFDRTtRQUFJNEIsV0FBVTtrQkFDVnhCLG1CQUFtQixJQUFJLGlCQUNwQjs7OEJBQ0ksOERBQUN5QjtvQkFBR0QsV0FBVTs4QkFBZ0J4QixjQUFjLENBQUMsRUFBRSxDQUFDMEIsSUFBSTs7Ozs7OzhCQUNwRCw4REFBQzlCO29CQUFJNEIsV0FBVTs4QkFDWCw0RUFBQ0c7d0JBQUlDLEtBQUs1QixjQUFjLENBQUMsRUFBRSxDQUFDMkIsR0FBRzt3QkFBRUUsS0FBSTs7Ozs7Ozs7Ozs7OEJBRXpDLDhEQUFDakM7b0JBQUk0QixXQUFVOztzQ0FDWCw4REFBQ007OzhDQUNHLDhEQUFDQzs4Q0FBSzs7Ozs7O2dDQUNML0IsY0FBYyxDQUFDLEVBQUUsQ0FBQzBCLElBQUk7Ozs7Ozs7c0NBRTNCLDhEQUFDSTs7OENBQ0csOERBQUNDOzhDQUFLOzs7Ozs7Z0NBQ0xyQzs7Ozs7OztzQ0FFTCw4REFBQ29DOzs4Q0FDRyw4REFBQ0M7OENBQUs7Ozs7OztnQ0FDTC9CLGNBQWMsQ0FBQyxFQUFFLENBQUNnQyxJQUFJOzs7Ozs7O3NDQUUzQiw4REFBQ0Y7OzhDQUNHLDhEQUFDQzs4Q0FBSzs7Ozs7O2dDQUNML0IsY0FBYyxDQUFDLEVBQUUsQ0FBQ2lDLFlBQVk7Ozs7Ozs7c0NBRW5DLDhEQUFDSDs7OENBQ0csOERBQUNDOzhDQUFLOzs7Ozs7Z0NBQ0wvQixjQUFjLENBQUMsRUFBRSxDQUFDa0MsYUFBYTs7Ozs7Ozs7Ozs7Ozs7MkJBSzVDLEVBQ0g7Ozs7OztBQUdiO0dBNUZNM0M7O1FBQ2FELGtEQUFTQTs7O0tBRHRCQztBQThGTiwrREFBZUEsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9zcXVhZC9baWRdLmpzP2ZlMTciXSwic291cmNlc0NvbnRlbnQiOlsiLy8g0YXRg9C60LhcclxuLy8gaW1wb3J0IHsgdXNlUGFyYW1zIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuXHJcbi8vIGV4cG9ydCBjb25zdCBnZXRTdGF0aWNQYXRocyA9IGFzeW5jICgpID0+IHtcclxuLy8gICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFwiaHR0cHM6Ly9sb2NhbGhvc3Q6MzAwMC9zcXVhZFwiKTtcclxuLy8gICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xyXG5cclxuLy8gICAgIGNvbnN0IHBhdGhzID0gZGF0YS5tYXAoaXRlbSA9PiB7XHJcbi8vICAgICAgICAgcmV0dXJuIHtcclxuLy8gICAgICAgICAgICAgcGFyYW1zOiB7IGlkOiBpdGVtLmlkIH0sXHJcbi8vICAgICAgICAgfTtcclxuLy8gICAgIH0pO1xyXG5cclxuLy8gICAgIHJldHVybiB7XHJcbi8vICAgICAgICAgcGF0aHMsXHJcbi8vICAgICAgICAgZmFsbGJhY2s6IGZhbHNlLFxyXG4vLyAgICAgfTtcclxuLy8gfTtcclxuXHJcbi8vIGV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wcyA9IGFzeW5jIGNvbnRleHQgPT4ge1xyXG4vLyAgICAgY29uc3QgaWQgPSBjb250ZXh0LnBhcmFtcy5pZDtcclxuLy8gfTtcclxuXHJcbmNvbnN0IFBsYXllciA9IHByb3BzID0+IHtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gICAgY29uc3QgeyBpZCB9ID0gcm91dGVyLnF1ZXJ5O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgZGl2XHJcbiAgICApXHJcblxyXG4gICAgY29uc3QgeyBwbGF5ZXJzIH0gPSBwcm9wcztcclxuICAgIGNvbnN0IFthbGxQbGF5ZXJzLCBzZXRBbGxQbGF5ZXJzXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFtzZWxlY3RlZFBsYXllciwgc2V0U2VsZWN0ZWRQbGF5ZXJdID0gdXNlU3RhdGUobnVsbCk7XHJcblxyXG4gICAgLy8gY29uc3Qge2lkfSA9IHVzZVBhcmFtcygpO1xyXG5cclxuICAgIGNvbnN0IGZpbmRQbGF5ZXIgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgdyA9IGFsbFBsYXllcnMubGVuZ3RoID4gMCA/IGFsbFBsYXllcnMuZmlsdGVyKGl0ID0+IGl0LnNxdWFkTnVtYmVyID09PSAraWQpIDogbnVsbDtcclxuICAgICAgICBzZXRTZWxlY3RlZFBsYXllcih3KTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgbWFrZVBsYXllcnNBcnIgPSAoKSA9PiB7XHJcbiAgICAgICAgbGV0IG5ld0FyciA9IFtdO1xyXG4gICAgICAgIHJldHVybiBwbGF5ZXJzXHJcbiAgICAgICAgICAgID8gcGxheWVycy5tYXAoaXRlbSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIGNvbnN0IGcgPSBpdGVtLmdvYWxrZWVwZXJzXHJcbiAgICAgICAgICAgICAgICAgICAgICA/IGl0ZW0uZ29hbGtlZXBlcnMubWFwKGl0ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld0Fyci5wdXNoKGl0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgIDogbnVsbDtcclxuICAgICAgICAgICAgICAgICAgY29uc3QgZCA9IGl0ZW0uZGVmZW5kZXJzXHJcbiAgICAgICAgICAgICAgICAgICAgICA/IGl0ZW0uZGVmZW5kZXJzLm1hcChkZWYgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3QXJyLnB1c2goZGVmKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgIDogbnVsbDtcclxuICAgICAgICAgICAgICAgICAgY29uc3QgbSA9IGl0ZW0ubWlkZmllbGRlcnNcclxuICAgICAgICAgICAgICAgICAgICAgID8gaXRlbS5taWRmaWVsZGVycy5tYXAobWlkID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld0Fyci5wdXNoKG1pZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICA6IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgIGNvbnN0IGYgPSBpdGVtLmZvcndhcmRzXHJcbiAgICAgICAgICAgICAgICAgICAgICA/IGl0ZW0uZm9yd2FyZHMubWFwKGZvcncgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3QXJyLnB1c2goZm9ydyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICA6IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgIHNldEFsbFBsYXllcnMobmV3QXJyKTtcclxuICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICA6IG51bGw7XHJcbiAgICB9O1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgbWFrZVBsYXllcnNBcnIoKTtcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGZpbmRQbGF5ZXIoKTtcclxuICAgIH0sIFthbGxQbGF5ZXJzLCBpZF0pO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3BsYXllcic+XHJcbiAgICAgICAgICAgIHtzZWxlY3RlZFBsYXllciAhPT0gbnVsbCA/IChcclxuICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT0ncGxheWVyLXRpdGxlJz57c2VsZWN0ZWRQbGF5ZXJbMF0ubmFtZX08L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwbGF5ZXItcGhvdG8nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17c2VsZWN0ZWRQbGF5ZXJbMF0uaW1nfSBhbHQ9JycgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncGxheWVyLWluZm8nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPk5hbWU6PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3NlbGVjdGVkUGxheWVyWzBdLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5TcXVhZCBudW1iZXI6PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2lkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+Qm9ybjo8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c2VsZWN0ZWRQbGF5ZXJbMF0uYm9ybn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPkFyc2VuYWwgZGVidXQ6PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3NlbGVjdGVkUGxheWVyWzBdLmFyc2VuYWxEZWJ1dH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlByZXZpb3VzIGNsdWJzOjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzZWxlY3RlZFBsYXllclswXS5wcmV2aW91c0NsdWJzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgIFwiXCJcclxuICAgICAgICAgICAgKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQbGF5ZXI7XHJcbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZVJvdXRlciIsIlBsYXllciIsInByb3BzIiwicm91dGVyIiwiaWQiLCJxdWVyeSIsImRpdiIsInBsYXllcnMiLCJhbGxQbGF5ZXJzIiwic2V0QWxsUGxheWVycyIsInNlbGVjdGVkUGxheWVyIiwic2V0U2VsZWN0ZWRQbGF5ZXIiLCJmaW5kUGxheWVyIiwidyIsImxlbmd0aCIsImZpbHRlciIsIml0Iiwic3F1YWROdW1iZXIiLCJtYWtlUGxheWVyc0FyciIsIm5ld0FyciIsIm1hcCIsIml0ZW0iLCJnIiwiZ29hbGtlZXBlcnMiLCJwdXNoIiwiZCIsImRlZmVuZGVycyIsImRlZiIsIm0iLCJtaWRmaWVsZGVycyIsIm1pZCIsImYiLCJmb3J3YXJkcyIsImZvcnciLCJjbGFzc05hbWUiLCJoMSIsIm5hbWUiLCJpbWciLCJzcmMiLCJhbHQiLCJwIiwic3BhbiIsImJvcm4iLCJhcnNlbmFsRGVidXQiLCJwcmV2aW91c0NsdWJzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/squad/[id].js\n"));

/***/ })

});