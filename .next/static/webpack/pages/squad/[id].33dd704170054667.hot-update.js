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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/src/_sliced_to_array.mjs */ \"./node_modules/@swc/helpers/src/_sliced_to_array.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n// хуки\n// import { useParams } from 'react-router-dom';\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n// export const getStaticPaths = async () => {\n//     const res = await fetch(\"https://localhost:3000/squad\");\n//     const data = await res.json();\n//     const paths = data.map(item => {\n//         return {\n//             params: { id: item.id },\n//         };\n//     });\n//     return {\n//         paths,\n//         fallback: false,\n//     };\n// };\n// export const getStaticProps = async context => {\n//     const id = context.params.id;\n// };\nvar Player = function(props) {\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    var id = router.query.id;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"23123123123\"\n        }, void 0, false, {\n            fileName: \"C:\\\\react\\\\Arsenal\\\\my-app\\\\pages\\\\squad\\\\[id].js\",\n            lineNumber: 33,\n            columnNumber: 9\n        }, _this)\n    }, void 0, false);\n    var players = props.players;\n    var ref = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), 2), allPlayers = ref[0], setAllPlayers = ref[1];\n    var ref1 = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), 2), selectedPlayer = ref1[0], setSelectedPlayer = ref1[1];\n    // const {id} = useParams();\n    var findPlayer = function() {\n        var w = allPlayers.length > 0 ? allPlayers.filter(function(it) {\n            return it.squadNumber === +id;\n        }) : null;\n        setSelectedPlayer(w);\n    };\n    var makePlayersArr = function() {\n        var newArr = [];\n        return players ? players.map(function(item) {\n            var g = item.goalkeepers ? item.goalkeepers.map(function(it) {\n                newArr.push(it);\n            }) : null;\n            var d = item.defenders ? item.defenders.map(function(def) {\n                newArr.push(def);\n            }) : null;\n            var m = item.midfielders ? item.midfielders.map(function(mid) {\n                newArr.push(mid);\n            }) : null;\n            var f = item.forwards ? item.forwards.map(function(forw) {\n                newArr.push(forw);\n            }) : null;\n            setAllPlayers(newArr);\n        }) : null;\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        makePlayersArr();\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        findPlayer();\n    }, [\n        allPlayers,\n        id\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"player\",\n        children: selectedPlayer !== null ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"player-title\",\n                    children: selectedPlayer[0].name\n                }, void 0, false, {\n                    fileName: \"C:\\\\react\\\\Arsenal\\\\my-app\\\\pages\\\\squad\\\\[id].js\",\n                    lineNumber: 89,\n                    columnNumber: 21\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"player-photo\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: selectedPlayer[0].img,\n                        alt: \"\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\react\\\\Arsenal\\\\my-app\\\\pages\\\\squad\\\\[id].js\",\n                        lineNumber: 91,\n                        columnNumber: 25\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\react\\\\Arsenal\\\\my-app\\\\pages\\\\squad\\\\[id].js\",\n                    lineNumber: 90,\n                    columnNumber: 21\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"player-info\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    children: \"Name:\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\react\\\\Arsenal\\\\my-app\\\\pages\\\\squad\\\\[id].js\",\n                                    lineNumber: 95,\n                                    columnNumber: 29\n                                }, _this),\n                                selectedPlayer[0].name\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\react\\\\Arsenal\\\\my-app\\\\pages\\\\squad\\\\[id].js\",\n                            lineNumber: 94,\n                            columnNumber: 25\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    children: \"Squad number:\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\react\\\\Arsenal\\\\my-app\\\\pages\\\\squad\\\\[id].js\",\n                                    lineNumber: 99,\n                                    columnNumber: 29\n                                }, _this),\n                                id\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\react\\\\Arsenal\\\\my-app\\\\pages\\\\squad\\\\[id].js\",\n                            lineNumber: 98,\n                            columnNumber: 25\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    children: \"Born:\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\react\\\\Arsenal\\\\my-app\\\\pages\\\\squad\\\\[id].js\",\n                                    lineNumber: 103,\n                                    columnNumber: 29\n                                }, _this),\n                                selectedPlayer[0].born\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\react\\\\Arsenal\\\\my-app\\\\pages\\\\squad\\\\[id].js\",\n                            lineNumber: 102,\n                            columnNumber: 25\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    children: \"Arsenal debut:\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\react\\\\Arsenal\\\\my-app\\\\pages\\\\squad\\\\[id].js\",\n                                    lineNumber: 107,\n                                    columnNumber: 29\n                                }, _this),\n                                selectedPlayer[0].arsenalDebut\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\react\\\\Arsenal\\\\my-app\\\\pages\\\\squad\\\\[id].js\",\n                            lineNumber: 106,\n                            columnNumber: 25\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    children: \"Previous clubs:\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\react\\\\Arsenal\\\\my-app\\\\pages\\\\squad\\\\[id].js\",\n                                    lineNumber: 111,\n                                    columnNumber: 29\n                                }, _this),\n                                selectedPlayer[0].previousClubs\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\react\\\\Arsenal\\\\my-app\\\\pages\\\\squad\\\\[id].js\",\n                            lineNumber: 110,\n                            columnNumber: 25\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\react\\\\Arsenal\\\\my-app\\\\pages\\\\squad\\\\[id].js\",\n                    lineNumber: 93,\n                    columnNumber: 21\n                }, _this)\n            ]\n        }, void 0, true) : \"\"\n    }, void 0, false, {\n        fileName: \"C:\\\\react\\\\Arsenal\\\\my-app\\\\pages\\\\squad\\\\[id].js\",\n        lineNumber: 86,\n        columnNumber: 9\n    }, _this);\n};\n_s(Player, \"IJ+28pxRMuwl8I4JIM00CRCrlU8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Player;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Player);\nvar _c;\n$RefreshReg$(_c, \"Player\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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REFBQ0k7OzhDQUNHLDhEQUFDQzs4Q0FBSzs7Ozs7O2dDQUNMckM7Ozs7Ozs7c0NBRUwsOERBQUNvQzs7OENBQ0csOERBQUNDOzhDQUFLOzs7Ozs7Z0NBQ0wvQixjQUFjLENBQUMsRUFBRSxDQUFDZ0MsSUFBSTs7Ozs7OztzQ0FFM0IsOERBQUNGOzs4Q0FDRyw4REFBQ0M7OENBQUs7Ozs7OztnQ0FDTC9CLGNBQWMsQ0FBQyxFQUFFLENBQUNpQyxZQUFZOzs7Ozs7O3NDQUVuQyw4REFBQ0g7OzhDQUNHLDhEQUFDQzs4Q0FBSzs7Ozs7O2dDQUNML0IsY0FBYyxDQUFDLEVBQUUsQ0FBQ2tDLGFBQWE7Ozs7Ozs7Ozs7Ozs7OzJCQUs1QyxFQUNIOzs7Ozs7QUFHYjtHQTlGTTNDOztRQUNhRCxrREFBU0E7OztLQUR0QkM7QUFnR04sK0RBQWVBLE1BQU1BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc3F1YWQvW2lkXS5qcz9mZTE3Il0sInNvdXJjZXNDb250ZW50IjpbIi8vINGF0YPQutC4XHJcbi8vIGltcG9ydCB7IHVzZVBhcmFtcyB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcblxyXG4vLyBleHBvcnQgY29uc3QgZ2V0U3RhdGljUGF0aHMgPSBhc3luYyAoKSA9PiB7XHJcbi8vICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcImh0dHBzOi8vbG9jYWxob3N0OjMwMDAvc3F1YWRcIik7XHJcbi8vICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcclxuXHJcbi8vICAgICBjb25zdCBwYXRocyA9IGRhdGEubWFwKGl0ZW0gPT4ge1xyXG4vLyAgICAgICAgIHJldHVybiB7XHJcbi8vICAgICAgICAgICAgIHBhcmFtczogeyBpZDogaXRlbS5pZCB9LFxyXG4vLyAgICAgICAgIH07XHJcbi8vICAgICB9KTtcclxuXHJcbi8vICAgICByZXR1cm4ge1xyXG4vLyAgICAgICAgIHBhdGhzLFxyXG4vLyAgICAgICAgIGZhbGxiYWNrOiBmYWxzZSxcclxuLy8gICAgIH07XHJcbi8vIH07XHJcblxyXG4vLyBleHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHMgPSBhc3luYyBjb250ZXh0ID0+IHtcclxuLy8gICAgIGNvbnN0IGlkID0gY29udGV4dC5wYXJhbXMuaWQ7XHJcbi8vIH07XHJcblxyXG5jb25zdCBQbGF5ZXIgPSBwcm9wcyA9PiB7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICAgIGNvbnN0IHsgaWQgfSA9IHJvdXRlci5xdWVyeTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgPGRpdj4yMzEyMzEyMzEyMzwvZGl2PlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG5cclxuICAgIGNvbnN0IHsgcGxheWVycyB9ID0gcHJvcHM7XHJcbiAgICBjb25zdCBbYWxsUGxheWVycywgc2V0QWxsUGxheWVyc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbc2VsZWN0ZWRQbGF5ZXIsIHNldFNlbGVjdGVkUGxheWVyXSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cclxuICAgIC8vIGNvbnN0IHtpZH0gPSB1c2VQYXJhbXMoKTtcclxuXHJcbiAgICBjb25zdCBmaW5kUGxheWVyID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHcgPSBhbGxQbGF5ZXJzLmxlbmd0aCA+IDAgPyBhbGxQbGF5ZXJzLmZpbHRlcihpdCA9PiBpdC5zcXVhZE51bWJlciA9PT0gK2lkKSA6IG51bGw7XHJcbiAgICAgICAgc2V0U2VsZWN0ZWRQbGF5ZXIodyk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IG1ha2VQbGF5ZXJzQXJyID0gKCkgPT4ge1xyXG4gICAgICAgIGxldCBuZXdBcnIgPSBbXTtcclxuICAgICAgICByZXR1cm4gcGxheWVyc1xyXG4gICAgICAgICAgICA/IHBsYXllcnMubWFwKGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICAgICAgICBjb25zdCBnID0gaXRlbS5nb2Fsa2VlcGVyc1xyXG4gICAgICAgICAgICAgICAgICAgICAgPyBpdGVtLmdvYWxrZWVwZXJzLm1hcChpdCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdBcnIucHVzaChpdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICA6IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgIGNvbnN0IGQgPSBpdGVtLmRlZmVuZGVyc1xyXG4gICAgICAgICAgICAgICAgICAgICAgPyBpdGVtLmRlZmVuZGVycy5tYXAoZGVmID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld0Fyci5wdXNoKGRlZik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICA6IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgIGNvbnN0IG0gPSBpdGVtLm1pZGZpZWxkZXJzXHJcbiAgICAgICAgICAgICAgICAgICAgICA/IGl0ZW0ubWlkZmllbGRlcnMubWFwKG1pZCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdBcnIucHVzaChtaWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgOiBudWxsO1xyXG4gICAgICAgICAgICAgICAgICBjb25zdCBmID0gaXRlbS5mb3J3YXJkc1xyXG4gICAgICAgICAgICAgICAgICAgICAgPyBpdGVtLmZvcndhcmRzLm1hcChmb3J3ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld0Fyci5wdXNoKGZvcncpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgOiBudWxsO1xyXG4gICAgICAgICAgICAgICAgICBzZXRBbGxQbGF5ZXJzKG5ld0Fycik7XHJcbiAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgOiBudWxsO1xyXG4gICAgfTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIG1ha2VQbGF5ZXJzQXJyKCk7XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBmaW5kUGxheWVyKCk7XHJcbiAgICB9LCBbYWxsUGxheWVycywgaWRdKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwbGF5ZXInPlxyXG4gICAgICAgICAgICB7c2VsZWN0ZWRQbGF5ZXIgIT09IG51bGwgPyAoXHJcbiAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9J3BsYXllci10aXRsZSc+e3NlbGVjdGVkUGxheWVyWzBdLm5hbWV9PC9oMT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncGxheWVyLXBob3RvJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3NlbGVjdGVkUGxheWVyWzBdLmltZ30gYWx0PScnIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3BsYXllci1pbmZvJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5OYW1lOjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzZWxlY3RlZFBsYXllclswXS5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+U3F1YWQgbnVtYmVyOjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPkJvcm46PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3NlbGVjdGVkUGxheWVyWzBdLmJvcm59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5BcnNlbmFsIGRlYnV0Ojwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzZWxlY3RlZFBsYXllclswXS5hcnNlbmFsRGVidXR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5QcmV2aW91cyBjbHViczo8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c2VsZWN0ZWRQbGF5ZXJbMF0ucHJldmlvdXNDbHVic31cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICBcIlwiXHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGxheWVyO1xyXG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VSb3V0ZXIiLCJQbGF5ZXIiLCJwcm9wcyIsInJvdXRlciIsImlkIiwicXVlcnkiLCJkaXYiLCJwbGF5ZXJzIiwiYWxsUGxheWVycyIsInNldEFsbFBsYXllcnMiLCJzZWxlY3RlZFBsYXllciIsInNldFNlbGVjdGVkUGxheWVyIiwiZmluZFBsYXllciIsInciLCJsZW5ndGgiLCJmaWx0ZXIiLCJpdCIsInNxdWFkTnVtYmVyIiwibWFrZVBsYXllcnNBcnIiLCJuZXdBcnIiLCJtYXAiLCJpdGVtIiwiZyIsImdvYWxrZWVwZXJzIiwicHVzaCIsImQiLCJkZWZlbmRlcnMiLCJkZWYiLCJtIiwibWlkZmllbGRlcnMiLCJtaWQiLCJmIiwiZm9yd2FyZHMiLCJmb3J3IiwiY2xhc3NOYW1lIiwiaDEiLCJuYW1lIiwiaW1nIiwic3JjIiwiYWx0IiwicCIsInNwYW4iLCJib3JuIiwiYXJzZW5hbERlYnV0IiwicHJldmlvdXNDbHVicyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/squad/[id].js\n"));

/***/ })

});