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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/src/_sliced_to_array.mjs */ \"./node_modules/@swc/helpers/src/_sliced_to_array.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n// хуки\n// import { useParams } from 'react-router-dom';\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n// export const getStaticPaths = async () => {\n//     const res = await fetch(\"https://localhost:3000/squad\");\n//     const data = await res.json();\n//     const paths = data.map(item => {\n//         return {\n//             params: { id: item.id },\n//         };\n//     });\n//     return {\n//         paths,\n//         fallback: false,\n//     };\n// };\n// export const getStaticProps = async context => {\n//     const id = context.params.id;\n// };\nvar Player = function(props) {\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    var id = router.query.id;\n    // return (\n    //     <>\n    //     <div>{id}</div>\n    //     </>\n    // )\n    var players = props.players;\n    var ref = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), 2), allPlayers = ref[0], setAllPlayers = ref[1];\n    var ref1 = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), 2), selectedPlayer = ref1[0], setSelectedPlayer = ref1[1];\n    // const {id} = useParams();\n    var findPlayer = function() {\n        console.log(allPlayers);\n        var w = allPlayers.length > 0 ? allPlayers.filter(function(it) {\n            return it.squadNumber === +id;\n        }) : null;\n        setSelectedPlayer(w);\n    };\n    var makePlayersArr = function() {\n        var newArr = [];\n        return players ? players.map(function(item) {\n            //   const g = item.goalkeepers\n            //       ? item.goalkeepers.map(it => {\n            //             newArr.push(it);\n            //         })\n            //       : null;\n            //   const d = item.defenders\n            //       ? item.defenders.map(def => {\n            //             newArr.push(def);\n            //         })\n            //       : null;\n            //   const m = item.midfielders\n            //       ? item.midfielders.map(mid => {\n            //             newArr.push(mid);\n            //         })\n            //       : null;\n            //   const f = item.forwards\n            //       ? item.forwards.map(forw => {\n            //             newArr.push(forw);\n            //         })\n            //   : null;\n            newArr.push(item);\n            setAllPlayers(newArr);\n        }) : null;\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        makePlayersArr();\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        findPlayer();\n    }, [\n        allPlayers,\n        id\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"player\",\n        children: selectedPlayer !== null ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"player-title\",\n                    children: selectedPlayer[0].name\n                }, void 0, false, {\n                    fileName: \"C:\\\\react\\\\Arsenal\\\\my-app\\\\pages\\\\squad\\\\[id].js\",\n                    lineNumber: 91,\n                    columnNumber: 21\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"player-photo\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: selectedPlayer[0].img,\n                        alt: \"\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\react\\\\Arsenal\\\\my-app\\\\pages\\\\squad\\\\[id].js\",\n                        lineNumber: 93,\n                        columnNumber: 25\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\react\\\\Arsenal\\\\my-app\\\\pages\\\\squad\\\\[id].js\",\n                    lineNumber: 92,\n                    columnNumber: 21\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"player-info\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    children: \"Name:\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\react\\\\Arsenal\\\\my-app\\\\pages\\\\squad\\\\[id].js\",\n                                    lineNumber: 97,\n                                    columnNumber: 29\n                                }, _this),\n                                selectedPlayer[0].name\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\react\\\\Arsenal\\\\my-app\\\\pages\\\\squad\\\\[id].js\",\n                            lineNumber: 96,\n                            columnNumber: 25\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    children: \"Squad number:\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\react\\\\Arsenal\\\\my-app\\\\pages\\\\squad\\\\[id].js\",\n                                    lineNumber: 101,\n                                    columnNumber: 29\n                                }, _this),\n                                id\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\react\\\\Arsenal\\\\my-app\\\\pages\\\\squad\\\\[id].js\",\n                            lineNumber: 100,\n                            columnNumber: 25\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    children: \"Born:\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\react\\\\Arsenal\\\\my-app\\\\pages\\\\squad\\\\[id].js\",\n                                    lineNumber: 105,\n                                    columnNumber: 29\n                                }, _this),\n                                selectedPlayer[0].born\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\react\\\\Arsenal\\\\my-app\\\\pages\\\\squad\\\\[id].js\",\n                            lineNumber: 104,\n                            columnNumber: 25\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    children: \"Arsenal debut:\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\react\\\\Arsenal\\\\my-app\\\\pages\\\\squad\\\\[id].js\",\n                                    lineNumber: 109,\n                                    columnNumber: 29\n                                }, _this),\n                                selectedPlayer[0].arsenalDebut\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\react\\\\Arsenal\\\\my-app\\\\pages\\\\squad\\\\[id].js\",\n                            lineNumber: 108,\n                            columnNumber: 25\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    children: \"Previous clubs:\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\react\\\\Arsenal\\\\my-app\\\\pages\\\\squad\\\\[id].js\",\n                                    lineNumber: 113,\n                                    columnNumber: 29\n                                }, _this),\n                                selectedPlayer[0].previousClubs\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\react\\\\Arsenal\\\\my-app\\\\pages\\\\squad\\\\[id].js\",\n                            lineNumber: 112,\n                            columnNumber: 25\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\react\\\\Arsenal\\\\my-app\\\\pages\\\\squad\\\\[id].js\",\n                    lineNumber: 95,\n                    columnNumber: 21\n                }, _this)\n            ]\n        }, void 0, true) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: id\n        }, void 0, false, {\n            fileName: \"C:\\\\react\\\\Arsenal\\\\my-app\\\\pages\\\\squad\\\\[id].js\",\n            lineNumber: 119,\n            columnNumber: 17\n        }, _this)\n    }, void 0, false, {\n        fileName: \"C:\\\\react\\\\Arsenal\\\\my-app\\\\pages\\\\squad\\\\[id].js\",\n        lineNumber: 88,\n        columnNumber: 9\n    }, _this);\n};\n_s(Player, \"IJ+28pxRMuwl8I4JIM00CRCrlU8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Player;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Player);\nvar _c;\n$RefreshReg$(_c, \"Player\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Szs7Ozs7O2dDQUNMdkIsY0FBYyxDQUFDLEVBQUUsQ0FBQ3lCLFlBQVk7Ozs7Ozs7c0NBRW5DLDhEQUFDSDs7OENBQ0csOERBQUNDOzhDQUFLOzs7Ozs7Z0NBQ0x2QixjQUFjLENBQUMsRUFBRSxDQUFDMEIsYUFBYTs7Ozs7Ozs7Ozs7Ozs7eUNBSzVDLDhEQUFDWDtzQkFBS3BCOzs7OztpQkFDVDs7Ozs7O0FBR2I7R0FoR01IOztRQUNhRCxrREFBU0E7OztLQUR0QkM7QUFrR04sK0RBQWVBLE1BQU1BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc3F1YWQvW2lkXS5qcz9mZTE3Il0sInNvdXJjZXNDb250ZW50IjpbIi8vINGF0YPQutC4XHJcbi8vIGltcG9ydCB7IHVzZVBhcmFtcyB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcblxyXG4vLyBleHBvcnQgY29uc3QgZ2V0U3RhdGljUGF0aHMgPSBhc3luYyAoKSA9PiB7XHJcbi8vICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcImh0dHBzOi8vbG9jYWxob3N0OjMwMDAvc3F1YWRcIik7XHJcbi8vICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcclxuXHJcbi8vICAgICBjb25zdCBwYXRocyA9IGRhdGEubWFwKGl0ZW0gPT4ge1xyXG4vLyAgICAgICAgIHJldHVybiB7XHJcbi8vICAgICAgICAgICAgIHBhcmFtczogeyBpZDogaXRlbS5pZCB9LFxyXG4vLyAgICAgICAgIH07XHJcbi8vICAgICB9KTtcclxuXHJcbi8vICAgICByZXR1cm4ge1xyXG4vLyAgICAgICAgIHBhdGhzLFxyXG4vLyAgICAgICAgIGZhbGxiYWNrOiBmYWxzZSxcclxuLy8gICAgIH07XHJcbi8vIH07XHJcblxyXG4vLyBleHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHMgPSBhc3luYyBjb250ZXh0ID0+IHtcclxuLy8gICAgIGNvbnN0IGlkID0gY29udGV4dC5wYXJhbXMuaWQ7XHJcbi8vIH07XHJcblxyXG5jb25zdCBQbGF5ZXIgPSBwcm9wcyA9PiB7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICAgIGNvbnN0IHsgaWQgfSA9IHJvdXRlci5xdWVyeTtcclxuXHJcbiAgICAvLyByZXR1cm4gKFxyXG4gICAgLy8gICAgIDw+XHJcbiAgICAvLyAgICAgPGRpdj57aWR9PC9kaXY+XHJcbiAgICAvLyAgICAgPC8+XHJcbiAgICAvLyApXHJcblxyXG4gICAgY29uc3QgeyBwbGF5ZXJzIH0gPSBwcm9wcztcclxuICAgIGNvbnN0IFthbGxQbGF5ZXJzLCBzZXRBbGxQbGF5ZXJzXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFtzZWxlY3RlZFBsYXllciwgc2V0U2VsZWN0ZWRQbGF5ZXJdID0gdXNlU3RhdGUobnVsbCk7XHJcblxyXG4gICAgLy8gY29uc3Qge2lkfSA9IHVzZVBhcmFtcygpO1xyXG5cclxuICAgIGNvbnN0IGZpbmRQbGF5ZXIgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coYWxsUGxheWVycylcclxuICAgICAgICBjb25zdCB3ID0gYWxsUGxheWVycy5sZW5ndGggPiAwID8gYWxsUGxheWVycy5maWx0ZXIoaXQgPT4gaXQuc3F1YWROdW1iZXIgPT09ICtpZCkgOiBudWxsO1xyXG4gICAgICAgIHNldFNlbGVjdGVkUGxheWVyKHcpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBtYWtlUGxheWVyc0FyciA9ICgpID0+IHtcclxuICAgICAgICBsZXQgbmV3QXJyID0gW107XHJcbiAgICAgICAgcmV0dXJuIHBsYXllcnNcclxuICAgICAgICAgICAgPyBwbGF5ZXJzLm1hcChpdGVtID0+IHtcclxuICAgICAgICAgICAgICAgICAgLy8gICBjb25zdCBnID0gaXRlbS5nb2Fsa2VlcGVyc1xyXG4gICAgICAgICAgICAgICAgICAvLyAgICAgICA/IGl0ZW0uZ29hbGtlZXBlcnMubWFwKGl0ID0+IHtcclxuICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgbmV3QXJyLnB1c2goaXQpO1xyXG4gICAgICAgICAgICAgICAgICAvLyAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgIC8vICAgICAgIDogbnVsbDtcclxuICAgICAgICAgICAgICAgICAgLy8gICBjb25zdCBkID0gaXRlbS5kZWZlbmRlcnNcclxuICAgICAgICAgICAgICAgICAgLy8gICAgICAgPyBpdGVtLmRlZmVuZGVycy5tYXAoZGVmID0+IHtcclxuICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgbmV3QXJyLnB1c2goZGVmKTtcclxuICAgICAgICAgICAgICAgICAgLy8gICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAvLyAgICAgICA6IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgIC8vICAgY29uc3QgbSA9IGl0ZW0ubWlkZmllbGRlcnNcclxuICAgICAgICAgICAgICAgICAgLy8gICAgICAgPyBpdGVtLm1pZGZpZWxkZXJzLm1hcChtaWQgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBuZXdBcnIucHVzaChtaWQpO1xyXG4gICAgICAgICAgICAgICAgICAvLyAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgIC8vICAgICAgIDogbnVsbDtcclxuICAgICAgICAgICAgICAgICAgLy8gICBjb25zdCBmID0gaXRlbS5mb3J3YXJkc1xyXG4gICAgICAgICAgICAgICAgICAvLyAgICAgICA/IGl0ZW0uZm9yd2FyZHMubWFwKGZvcncgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBuZXdBcnIucHVzaChmb3J3KTtcclxuICAgICAgICAgICAgICAgICAgLy8gICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAvLyAgIDogbnVsbDtcclxuICAgICAgICAgICAgICAgICAgbmV3QXJyLnB1c2goaXRlbSk7XHJcbiAgICAgICAgICAgICAgICAgIHNldEFsbFBsYXllcnMobmV3QXJyKTtcclxuICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICA6IG51bGw7XHJcbiAgICB9O1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgbWFrZVBsYXllcnNBcnIoKTtcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGZpbmRQbGF5ZXIoKTtcclxuICAgIH0sIFthbGxQbGF5ZXJzLCBpZF0pO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3BsYXllcic+XHJcbiAgICAgICAgICAgIHtzZWxlY3RlZFBsYXllciAhPT0gbnVsbCA/IChcclxuICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT0ncGxheWVyLXRpdGxlJz57c2VsZWN0ZWRQbGF5ZXJbMF0ubmFtZX08L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwbGF5ZXItcGhvdG8nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17c2VsZWN0ZWRQbGF5ZXJbMF0uaW1nfSBhbHQ9JycgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncGxheWVyLWluZm8nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPk5hbWU6PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3NlbGVjdGVkUGxheWVyWzBdLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5TcXVhZCBudW1iZXI6PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2lkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+Qm9ybjo8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c2VsZWN0ZWRQbGF5ZXJbMF0uYm9ybn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPkFyc2VuYWwgZGVidXQ6PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3NlbGVjdGVkUGxheWVyWzBdLmFyc2VuYWxEZWJ1dH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlByZXZpb3VzIGNsdWJzOjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzZWxlY3RlZFBsYXllclswXS5wcmV2aW91c0NsdWJzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgIDxkaXY+e2lkfTwvZGl2PlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBsYXllcjtcclxuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlUm91dGVyIiwiUGxheWVyIiwicHJvcHMiLCJyb3V0ZXIiLCJpZCIsInF1ZXJ5IiwicGxheWVycyIsImFsbFBsYXllcnMiLCJzZXRBbGxQbGF5ZXJzIiwic2VsZWN0ZWRQbGF5ZXIiLCJzZXRTZWxlY3RlZFBsYXllciIsImZpbmRQbGF5ZXIiLCJjb25zb2xlIiwibG9nIiwidyIsImxlbmd0aCIsImZpbHRlciIsIml0Iiwic3F1YWROdW1iZXIiLCJtYWtlUGxheWVyc0FyciIsIm5ld0FyciIsIm1hcCIsIml0ZW0iLCJwdXNoIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJuYW1lIiwiaW1nIiwic3JjIiwiYWx0IiwicCIsInNwYW4iLCJib3JuIiwiYXJzZW5hbERlYnV0IiwicHJldmlvdXNDbHVicyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/squad/[id].js\n"));

/***/ })

});