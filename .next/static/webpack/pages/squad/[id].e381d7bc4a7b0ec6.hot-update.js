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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @swc/helpers/src/_sliced_to_array.mjs */ \"./node_modules/@swc/helpers/src/_sliced_to_array.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n// хуки\n// import { useParams } from 'react-router-dom';\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\nvar Player = function(props) {\n    _s();\n    var players = props.players;\n    var ref = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_2__[\"default\"])((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), 2), allPlayers = ref[0], setAllPlayers = ref[1];\n    var ref1 = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_2__[\"default\"])((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), 2), selectedPlayer = ref1[0], setSelectedPlayer = ref1[1];\n    // const {id} = useParams();\n    var findPlayer = function() {\n        var w = allPlayers.length > 0 ? allPlayers.filter(function(it) {\n            return it.squadNumber === +id;\n        }) : null;\n        setSelectedPlayer(w);\n    };\n    var makePlayersArr = function() {\n        var newArr = [];\n        return players ? players.map(function(item) {\n            var g = item.goalkeepers ? item.goalkeepers.map(function(it) {\n                newArr.push(it);\n            }) : null;\n            var d = item.defenders ? item.defenders.map(function(def) {\n                newArr.push(def);\n            }) : null;\n            var m = item.midfielders ? item.midfielders.map(function(mid) {\n                newArr.push(mid);\n            }) : null;\n            var f = item.forwards ? item.forwards.map(function(forw) {\n                newArr.push(forw);\n            }) : null;\n            setAllPlayers(newArr);\n        }) : null;\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        makePlayersArr();\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        findPlayer();\n    }, [\n        allPlayers,\n        id\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"player\",\n        children: selectedPlayer !== null ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"player-title\",\n                    children: selectedPlayer[0].name\n                }, void 0, false, {\n                    fileName: \"C:\\\\react\\\\Arsenal\\\\my-app\\\\pages\\\\squad\\\\[id].js\",\n                    lineNumber: 74,\n                    columnNumber: 21\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"player-photo\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: selectedPlayer[0].img,\n                        alt: \"\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\react\\\\Arsenal\\\\my-app\\\\pages\\\\squad\\\\[id].js\",\n                        lineNumber: 76,\n                        columnNumber: 25\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\react\\\\Arsenal\\\\my-app\\\\pages\\\\squad\\\\[id].js\",\n                    lineNumber: 75,\n                    columnNumber: 21\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"player-info\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    children: \"Name:\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\react\\\\Arsenal\\\\my-app\\\\pages\\\\squad\\\\[id].js\",\n                                    lineNumber: 80,\n                                    columnNumber: 29\n                                }, _this),\n                                selectedPlayer[0].name\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\react\\\\Arsenal\\\\my-app\\\\pages\\\\squad\\\\[id].js\",\n                            lineNumber: 79,\n                            columnNumber: 25\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    children: \"Squad number:\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\react\\\\Arsenal\\\\my-app\\\\pages\\\\squad\\\\[id].js\",\n                                    lineNumber: 84,\n                                    columnNumber: 29\n                                }, _this),\n                                id\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\react\\\\Arsenal\\\\my-app\\\\pages\\\\squad\\\\[id].js\",\n                            lineNumber: 83,\n                            columnNumber: 25\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    children: \"Born:\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\react\\\\Arsenal\\\\my-app\\\\pages\\\\squad\\\\[id].js\",\n                                    lineNumber: 88,\n                                    columnNumber: 29\n                                }, _this),\n                                selectedPlayer[0].born\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\react\\\\Arsenal\\\\my-app\\\\pages\\\\squad\\\\[id].js\",\n                            lineNumber: 87,\n                            columnNumber: 25\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    children: \"Arsenal debut:\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\react\\\\Arsenal\\\\my-app\\\\pages\\\\squad\\\\[id].js\",\n                                    lineNumber: 92,\n                                    columnNumber: 29\n                                }, _this),\n                                selectedPlayer[0].arsenalDebut\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\react\\\\Arsenal\\\\my-app\\\\pages\\\\squad\\\\[id].js\",\n                            lineNumber: 91,\n                            columnNumber: 25\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    children: \"Previous clubs:\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\react\\\\Arsenal\\\\my-app\\\\pages\\\\squad\\\\[id].js\",\n                                    lineNumber: 96,\n                                    columnNumber: 29\n                                }, _this),\n                                selectedPlayer[0].previousClubs\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\react\\\\Arsenal\\\\my-app\\\\pages\\\\squad\\\\[id].js\",\n                            lineNumber: 95,\n                            columnNumber: 25\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\react\\\\Arsenal\\\\my-app\\\\pages\\\\squad\\\\[id].js\",\n                    lineNumber: 78,\n                    columnNumber: 21\n                }, _this)\n            ]\n        }, void 0, true) : \"\"\n    }, void 0, false, {\n        fileName: \"C:\\\\react\\\\Arsenal\\\\my-app\\\\pages\\\\squad\\\\[id].js\",\n        lineNumber: 71,\n        columnNumber: 9\n    }, _this);\n};\n_s(Player, \"8XZE1PIrmT7HrRtWQeDWETtBtSg=\");\n_c = Player;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Player);\nvar _c;\n$RefreshReg$(_c, \"Player\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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MkJBSzVDLEVBQ0g7Ozs7OztBQUdiO0dBckZNekM7S0FBQUE7O0FBdUZOLCtEQUFlQSxNQUFNQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3NxdWFkL1tpZF0uanM/ZmUxNyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyDRhdGD0LrQuFxyXG4vLyBpbXBvcnQgeyB1c2VQYXJhbXMgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUGF0aHMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcImh0dHBzOi8vbG9jYWxob3N0OjMwMDAvc3F1YWRcIik7XHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcclxuXHJcbiAgICBjb25zdCBwYXRocyA9IGRhdGEubWFwKGl0ZW0gPT4ge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHBhcmFtczoge2lkOiBpdGVtfVxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBwYXRoczogW3twYXJhbXM6IHtpZDogMTIzfX1dXHJcbiAgICB9XHJcbn07XHJcblxyXG5jb25zdCBQbGF5ZXIgPSBwcm9wcyA9PiB7XHJcbiAgICBjb25zdCB7IHBsYXllcnMgfSA9IHByb3BzO1xyXG4gICAgY29uc3QgW2FsbFBsYXllcnMsIHNldEFsbFBsYXllcnNdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW3NlbGVjdGVkUGxheWVyLCBzZXRTZWxlY3RlZFBsYXllcl0gPSB1c2VTdGF0ZShudWxsKTtcclxuXHJcbiAgICAvLyBjb25zdCB7aWR9ID0gdXNlUGFyYW1zKCk7XHJcblxyXG4gICAgY29uc3QgZmluZFBsYXllciA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCB3ID0gYWxsUGxheWVycy5sZW5ndGggPiAwID8gYWxsUGxheWVycy5maWx0ZXIoaXQgPT4gaXQuc3F1YWROdW1iZXIgPT09ICtpZCkgOiBudWxsO1xyXG4gICAgICAgIHNldFNlbGVjdGVkUGxheWVyKHcpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBtYWtlUGxheWVyc0FyciA9ICgpID0+IHtcclxuICAgICAgICBsZXQgbmV3QXJyID0gW107XHJcbiAgICAgICAgcmV0dXJuIHBsYXllcnNcclxuICAgICAgICAgICAgPyBwbGF5ZXJzLm1hcChpdGVtID0+IHtcclxuICAgICAgICAgICAgICAgICAgY29uc3QgZyA9IGl0ZW0uZ29hbGtlZXBlcnNcclxuICAgICAgICAgICAgICAgICAgICAgID8gaXRlbS5nb2Fsa2VlcGVycy5tYXAoaXQgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3QXJyLnB1c2goaXQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgOiBudWxsO1xyXG4gICAgICAgICAgICAgICAgICBjb25zdCBkID0gaXRlbS5kZWZlbmRlcnNcclxuICAgICAgICAgICAgICAgICAgICAgID8gaXRlbS5kZWZlbmRlcnMubWFwKGRlZiA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdBcnIucHVzaChkZWYpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgOiBudWxsO1xyXG4gICAgICAgICAgICAgICAgICBjb25zdCBtID0gaXRlbS5taWRmaWVsZGVyc1xyXG4gICAgICAgICAgICAgICAgICAgICAgPyBpdGVtLm1pZGZpZWxkZXJzLm1hcChtaWQgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3QXJyLnB1c2gobWlkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgIDogbnVsbDtcclxuICAgICAgICAgICAgICAgICAgY29uc3QgZiA9IGl0ZW0uZm9yd2FyZHNcclxuICAgICAgICAgICAgICAgICAgICAgID8gaXRlbS5mb3J3YXJkcy5tYXAoZm9ydyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdBcnIucHVzaChmb3J3KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgIDogbnVsbDtcclxuICAgICAgICAgICAgICAgICAgc2V0QWxsUGxheWVycyhuZXdBcnIpO1xyXG4gICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIDogbnVsbDtcclxuICAgIH07XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBtYWtlUGxheWVyc0FycigpO1xyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgZmluZFBsYXllcigpO1xyXG4gICAgfSwgW2FsbFBsYXllcnMsIGlkXSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncGxheWVyJz5cclxuICAgICAgICAgICAge3NlbGVjdGVkUGxheWVyICE9PSBudWxsID8gKFxyXG4gICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPSdwbGF5ZXItdGl0bGUnPntzZWxlY3RlZFBsYXllclswXS5uYW1lfTwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3BsYXllci1waG90byc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtzZWxlY3RlZFBsYXllclswXS5pbWd9IGFsdD0nJyAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwbGF5ZXItaW5mbyc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+TmFtZTo8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c2VsZWN0ZWRQbGF5ZXJbMF0ubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlNxdWFkIG51bWJlcjo8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5Cb3JuOjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzZWxlY3RlZFBsYXllclswXS5ib3JufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+QXJzZW5hbCBkZWJ1dDo8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c2VsZWN0ZWRQbGF5ZXJbMF0uYXJzZW5hbERlYnV0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+UHJldmlvdXMgY2x1YnM6PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3NlbGVjdGVkUGxheWVyWzBdLnByZXZpb3VzQ2x1YnN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgXCJcIlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBsYXllcjtcclxuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiUGxheWVyIiwicHJvcHMiLCJwbGF5ZXJzIiwiYWxsUGxheWVycyIsInNldEFsbFBsYXllcnMiLCJzZWxlY3RlZFBsYXllciIsInNldFNlbGVjdGVkUGxheWVyIiwiZmluZFBsYXllciIsInciLCJsZW5ndGgiLCJmaWx0ZXIiLCJpdCIsInNxdWFkTnVtYmVyIiwiaWQiLCJtYWtlUGxheWVyc0FyciIsIm5ld0FyciIsIm1hcCIsIml0ZW0iLCJnIiwiZ29hbGtlZXBlcnMiLCJwdXNoIiwiZCIsImRlZmVuZGVycyIsImRlZiIsIm0iLCJtaWRmaWVsZGVycyIsIm1pZCIsImYiLCJmb3J3YXJkcyIsImZvcnciLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsIm5hbWUiLCJpbWciLCJzcmMiLCJhbHQiLCJwIiwic3BhbiIsImJvcm4iLCJhcnNlbmFsRGVidXQiLCJwcmV2aW91c0NsdWJzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/squad/[id].js\n"));

/***/ })

});