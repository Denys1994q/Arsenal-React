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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/src/_sliced_to_array.mjs */ \"./node_modules/@swc/helpers/src/_sliced_to_array.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_squad_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/squad/data */ \"./components/squad/data.js\");\n// хуки\n// import { useParams } from 'react-router-dom';\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n// export const getStaticPaths = async () => {\n//     const res = await fetch(\"https://localhost:3000/squad\");\n//     const data = await res.json();\n//     const paths = data.map(item => {\n//         return {\n//             params: { id: item.id },\n//         };\n//     });\n//     return {\n//         paths,\n//         fallback: false,\n//     };\n// };\n// export const getStaticProps = async context => {\n//     const id = context.params.id;\n// };\nvar Player = function(props) {\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    var id = router.query.id;\n    // return (\n    //     <>\n    //     <div>{id}</div>\n    //     </>\n    // )\n    var players = props.players;\n    var ref = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), 2), allPlayers = ref[0], setAllPlayers = ref[1];\n    var ref1 = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), 2), selectedPlayer = ref1[0], setSelectedPlayer = ref1[1];\n    // const {id} = useParams();\n    var findPlayer = function() {\n        console.log(allPlayers);\n        var w = allPlayers.length > 0 ? allPlayers.filter(function(it) {\n            return it.squadNumber === +id;\n        }) : null;\n        setSelectedPlayer(w);\n    };\n    // const makePlayersArr = () => {\n    //     let newArr = [];\n    //     return players\n    //         ? players.map(item => {\n    //               //   const g = item.goalkeepers\n    //               //       ? item.goalkeepers.map(it => {\n    //               //             newArr.push(it);\n    //               //         })\n    //               //       : null;\n    //               //   const d = item.defenders\n    //               //       ? item.defenders.map(def => {\n    //               //             newArr.push(def);\n    //               //         })\n    //               //       : null;\n    //               //   const m = item.midfielders\n    //               //       ? item.midfielders.map(mid => {\n    //               //             newArr.push(mid);\n    //               //         })\n    //               //       : null;\n    //               //   const f = item.forwards\n    //               //       ? item.forwards.map(forw => {\n    //               //             newArr.push(forw);\n    //               //         })\n    //               //   : null;\n    //               newArr.push(item);\n    //               setAllPlayers(newArr);\n    //           })\n    //         : null;\n    // };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        makePlayersArr();\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        findPlayer();\n    }, [\n        allPlayers,\n        id\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"player\",\n        children: selectedPlayer !== null ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"player-title\",\n                    children: selectedPlayer[0].name\n                }, void 0, false, {\n                    fileName: \"C:\\\\react\\\\Arsenal\\\\my-app\\\\pages\\\\squad\\\\[id].js\",\n                    lineNumber: 92,\n                    columnNumber: 21\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"player-photo\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: selectedPlayer[0].img,\n                        alt: \"\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\react\\\\Arsenal\\\\my-app\\\\pages\\\\squad\\\\[id].js\",\n                        lineNumber: 94,\n                        columnNumber: 25\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\react\\\\Arsenal\\\\my-app\\\\pages\\\\squad\\\\[id].js\",\n                    lineNumber: 93,\n                    columnNumber: 21\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"player-info\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    children: \"Name:\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\react\\\\Arsenal\\\\my-app\\\\pages\\\\squad\\\\[id].js\",\n                                    lineNumber: 98,\n                                    columnNumber: 29\n                                }, _this),\n                                selectedPlayer[0].name\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\react\\\\Arsenal\\\\my-app\\\\pages\\\\squad\\\\[id].js\",\n                            lineNumber: 97,\n                            columnNumber: 25\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    children: \"Squad number:\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\react\\\\Arsenal\\\\my-app\\\\pages\\\\squad\\\\[id].js\",\n                                    lineNumber: 102,\n                                    columnNumber: 29\n                                }, _this),\n                                id\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\react\\\\Arsenal\\\\my-app\\\\pages\\\\squad\\\\[id].js\",\n                            lineNumber: 101,\n                            columnNumber: 25\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    children: \"Born:\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\react\\\\Arsenal\\\\my-app\\\\pages\\\\squad\\\\[id].js\",\n                                    lineNumber: 106,\n                                    columnNumber: 29\n                                }, _this),\n                                selectedPlayer[0].born\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\react\\\\Arsenal\\\\my-app\\\\pages\\\\squad\\\\[id].js\",\n                            lineNumber: 105,\n                            columnNumber: 25\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    children: \"Arsenal debut:\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\react\\\\Arsenal\\\\my-app\\\\pages\\\\squad\\\\[id].js\",\n                                    lineNumber: 110,\n                                    columnNumber: 29\n                                }, _this),\n                                selectedPlayer[0].arsenalDebut\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\react\\\\Arsenal\\\\my-app\\\\pages\\\\squad\\\\[id].js\",\n                            lineNumber: 109,\n                            columnNumber: 25\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    children: \"Previous clubs:\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\react\\\\Arsenal\\\\my-app\\\\pages\\\\squad\\\\[id].js\",\n                                    lineNumber: 114,\n                                    columnNumber: 29\n                                }, _this),\n                                selectedPlayer[0].previousClubs\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\react\\\\Arsenal\\\\my-app\\\\pages\\\\squad\\\\[id].js\",\n                            lineNumber: 113,\n                            columnNumber: 25\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\react\\\\Arsenal\\\\my-app\\\\pages\\\\squad\\\\[id].js\",\n                    lineNumber: 96,\n                    columnNumber: 21\n                }, _this)\n            ]\n        }, void 0, true) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: id\n        }, void 0, false, {\n            fileName: \"C:\\\\react\\\\Arsenal\\\\my-app\\\\pages\\\\squad\\\\[id].js\",\n            lineNumber: 120,\n            columnNumber: 17\n        }, _this)\n    }, void 0, false, {\n        fileName: \"C:\\\\react\\\\Arsenal\\\\my-app\\\\pages\\\\squad\\\\[id].js\",\n        lineNumber: 89,\n        columnNumber: 9\n    }, _this);\n};\n_s(Player, \"IJ+28pxRMuwl8I4JIM00CRCrlU8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Player;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Player);\nvar _c;\n$RefreshReg$(_c, \"Player\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9zcXVhZC9baWRdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLE9BQU87QUFDUCxnREFBZ0Q7QUFDaEQ7Ozs7QUFBa0M7QUFDRDtBQUNPO0FBQ2M7QUFFdEQsOENBQThDO0FBQzlDLCtEQUErRDtBQUMvRCxxQ0FBcUM7QUFFckMsdUNBQXVDO0FBQ3ZDLG1CQUFtQjtBQUNuQix1Q0FBdUM7QUFDdkMsYUFBYTtBQUNiLFVBQVU7QUFFVixlQUFlO0FBQ2YsaUJBQWlCO0FBQ2pCLDJCQUEyQjtBQUMzQixTQUFTO0FBQ1QsS0FBSztBQUVMLG1EQUFtRDtBQUNuRCxvQ0FBb0M7QUFDcEMsS0FBSztBQUVMLElBQU1JLFNBQVNDLFNBQUFBLE9BQVM7O0lBQ3BCLElBQU1DLFNBQVNKLHNEQUFTQTtJQUN4QixJQUFNLEtBQVNJLE9BQU9FLEtBQUssQ0FBbkJEO0lBRVIsV0FBVztJQUNYLFNBQVM7SUFDVCxzQkFBc0I7SUFDdEIsVUFBVTtJQUNWLElBQUk7SUFFSixJQUFNLFVBQWNGLE1BQVpGO0lBQ1IsSUFBb0NGLE1BQUFBLGdGQUFBQSxDQUFBQSwrQ0FBUUEsQ0FBQyxFQUFFLE9BQXhDUSxhQUE2QlIsUUFBakJTLGdCQUFpQlQ7SUFDcEMsSUFBNENBLE9BQUFBLGdGQUFBQSxDQUFBQSwrQ0FBUUEsQ0FBQyxJQUFJLE9BQWxEVSxpQkFBcUNWLFNBQXJCVyxvQkFBcUJYO0lBRTVDLDRCQUE0QjtJQUU1QixJQUFNWSxhQUFhLFdBQU07UUFDckJDLFFBQVFDLEdBQUcsQ0FBQ047UUFDWixJQUFNTyxJQUFJUCxXQUFXUSxNQUFNLEdBQUcsSUFBSVIsV0FBV1MsTUFBTSxDQUFDQyxTQUFBQTttQkFBTUEsR0FBR0MsV0FBVyxLQUFLLENBQUNiO2FBQU0sSUFBSTtRQUN4Rkssa0JBQWtCSTtJQUN0QjtJQUVBLGlDQUFpQztJQUNqQyx1QkFBdUI7SUFDdkIscUJBQXFCO0lBQ3JCLGtDQUFrQztJQUNsQyxnREFBZ0Q7SUFDaEQsd0RBQXdEO0lBQ3hELGdEQUFnRDtJQUNoRCw4QkFBOEI7SUFDOUIsaUNBQWlDO0lBQ2pDLDhDQUE4QztJQUM5Qyx1REFBdUQ7SUFDdkQsaURBQWlEO0lBQ2pELDhCQUE4QjtJQUM5QixpQ0FBaUM7SUFDakMsZ0RBQWdEO0lBQ2hELHlEQUF5RDtJQUN6RCxpREFBaUQ7SUFDakQsOEJBQThCO0lBQzlCLGlDQUFpQztJQUNqQyw2Q0FBNkM7SUFDN0MsdURBQXVEO0lBQ3ZELGtEQUFrRDtJQUNsRCw4QkFBOEI7SUFDOUIsNkJBQTZCO0lBQzdCLG1DQUFtQztJQUNuQyx1Q0FBdUM7SUFDdkMsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixLQUFLO0lBRUxoQixnREFBU0EsQ0FBQyxXQUFNO1FBQ1pxQjtJQUNKLEdBQUcsRUFBRTtJQUVMckIsZ0RBQVNBLENBQUMsV0FBTTtRQUNaYTtJQUNKLEdBQUc7UUFBQ0o7UUFBWUY7S0FBRztJQUVuQixxQkFDSSw4REFBQ2U7UUFBSUMsV0FBVTtrQkFDVlosbUJBQW1CLElBQUksaUJBQ3BCOzs4QkFDSSw4REFBQ2E7b0JBQUdELFdBQVU7OEJBQWdCWixjQUFjLENBQUMsRUFBRSxDQUFDYyxJQUFJOzs7Ozs7OEJBQ3BELDhEQUFDSDtvQkFBSUMsV0FBVTs4QkFDWCw0RUFBQ0c7d0JBQUlDLEtBQUtoQixjQUFjLENBQUMsRUFBRSxDQUFDZSxHQUFHO3dCQUFFRSxLQUFJOzs7Ozs7Ozs7Ozs4QkFFekMsOERBQUNOO29CQUFJQyxXQUFVOztzQ0FDWCw4REFBQ007OzhDQUNHLDhEQUFDQzs4Q0FBSzs7Ozs7O2dDQUNMbkIsY0FBYyxDQUFDLEVBQUUsQ0FBQ2MsSUFBSTs7Ozs7OztzQ0FFM0IsOERBQUNJOzs4Q0FDRyw4REFBQ0M7OENBQUs7Ozs7OztnQ0FDTHZCOzs7Ozs7O3NDQUVMLDhEQUFDc0I7OzhDQUNHLDhEQUFDQzs4Q0FBSzs7Ozs7O2dDQUNMbkIsY0FBYyxDQUFDLEVBQUUsQ0FBQ29CLElBQUk7Ozs7Ozs7c0NBRTNCLDhEQUFDRjs7OENBQ0csOERBQUNDOzhDQUFLOzs7Ozs7Z0NBQ0xuQixjQUFjLENBQUMsRUFBRSxDQUFDcUIsWUFBWTs7Ozs7OztzQ0FFbkMsOERBQUNIOzs4Q0FDRyw4REFBQ0M7OENBQUs7Ozs7OztnQ0FDTG5CLGNBQWMsQ0FBQyxFQUFFLENBQUNzQixhQUFhOzs7Ozs7Ozs7Ozs7Ozt5Q0FLNUMsOERBQUNYO3NCQUFLZjs7Ozs7aUJBQ1Q7Ozs7OztBQUdiO0dBaEdNSDs7UUFDYUYsa0RBQVNBOzs7S0FEdEJFO0FBa0dOLCtEQUFlQSxNQUFNQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3NxdWFkL1tpZF0uanM/ZmUxNyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyDRhdGD0LrQuFxyXG4vLyBpbXBvcnQgeyB1c2VQYXJhbXMgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgeyBwbGF5ZXJzIH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvc3F1YWQvZGF0YVwiO1xyXG5cclxuLy8gZXhwb3J0IGNvbnN0IGdldFN0YXRpY1BhdGhzID0gYXN5bmMgKCkgPT4ge1xyXG4vLyAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXCJodHRwczovL2xvY2FsaG9zdDozMDAwL3NxdWFkXCIpO1xyXG4vLyAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcblxyXG4vLyAgICAgY29uc3QgcGF0aHMgPSBkYXRhLm1hcChpdGVtID0+IHtcclxuLy8gICAgICAgICByZXR1cm4ge1xyXG4vLyAgICAgICAgICAgICBwYXJhbXM6IHsgaWQ6IGl0ZW0uaWQgfSxcclxuLy8gICAgICAgICB9O1xyXG4vLyAgICAgfSk7XHJcblxyXG4vLyAgICAgcmV0dXJuIHtcclxuLy8gICAgICAgICBwYXRocyxcclxuLy8gICAgICAgICBmYWxsYmFjazogZmFsc2UsXHJcbi8vICAgICB9O1xyXG4vLyB9O1xyXG5cclxuLy8gZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzID0gYXN5bmMgY29udGV4dCA9PiB7XHJcbi8vICAgICBjb25zdCBpZCA9IGNvbnRleHQucGFyYW1zLmlkO1xyXG4vLyB9O1xyXG5cclxuY29uc3QgUGxheWVyID0gcHJvcHMgPT4ge1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgICBjb25zdCB7IGlkIH0gPSByb3V0ZXIucXVlcnk7XHJcblxyXG4gICAgLy8gcmV0dXJuIChcclxuICAgIC8vICAgICA8PlxyXG4gICAgLy8gICAgIDxkaXY+e2lkfTwvZGl2PlxyXG4gICAgLy8gICAgIDwvPlxyXG4gICAgLy8gKVxyXG5cclxuICAgIGNvbnN0IHsgcGxheWVycyB9ID0gcHJvcHM7XHJcbiAgICBjb25zdCBbYWxsUGxheWVycywgc2V0QWxsUGxheWVyc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbc2VsZWN0ZWRQbGF5ZXIsIHNldFNlbGVjdGVkUGxheWVyXSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cclxuICAgIC8vIGNvbnN0IHtpZH0gPSB1c2VQYXJhbXMoKTtcclxuXHJcbiAgICBjb25zdCBmaW5kUGxheWVyID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGFsbFBsYXllcnMpO1xyXG4gICAgICAgIGNvbnN0IHcgPSBhbGxQbGF5ZXJzLmxlbmd0aCA+IDAgPyBhbGxQbGF5ZXJzLmZpbHRlcihpdCA9PiBpdC5zcXVhZE51bWJlciA9PT0gK2lkKSA6IG51bGw7XHJcbiAgICAgICAgc2V0U2VsZWN0ZWRQbGF5ZXIodyk7XHJcbiAgICB9O1xyXG5cclxuICAgIC8vIGNvbnN0IG1ha2VQbGF5ZXJzQXJyID0gKCkgPT4ge1xyXG4gICAgLy8gICAgIGxldCBuZXdBcnIgPSBbXTtcclxuICAgIC8vICAgICByZXR1cm4gcGxheWVyc1xyXG4gICAgLy8gICAgICAgICA/IHBsYXllcnMubWFwKGl0ZW0gPT4ge1xyXG4gICAgLy8gICAgICAgICAgICAgICAvLyAgIGNvbnN0IGcgPSBpdGVtLmdvYWxrZWVwZXJzXHJcbiAgICAvLyAgICAgICAgICAgICAgIC8vICAgICAgID8gaXRlbS5nb2Fsa2VlcGVycy5tYXAoaXQgPT4ge1xyXG4gICAgLy8gICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBuZXdBcnIucHVzaChpdCk7XHJcbiAgICAvLyAgICAgICAgICAgICAgIC8vICAgICAgICAgfSlcclxuICAgIC8vICAgICAgICAgICAgICAgLy8gICAgICAgOiBudWxsO1xyXG4gICAgLy8gICAgICAgICAgICAgICAvLyAgIGNvbnN0IGQgPSBpdGVtLmRlZmVuZGVyc1xyXG4gICAgLy8gICAgICAgICAgICAgICAvLyAgICAgICA/IGl0ZW0uZGVmZW5kZXJzLm1hcChkZWYgPT4ge1xyXG4gICAgLy8gICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBuZXdBcnIucHVzaChkZWYpO1xyXG4gICAgLy8gICAgICAgICAgICAgICAvLyAgICAgICAgIH0pXHJcbiAgICAvLyAgICAgICAgICAgICAgIC8vICAgICAgIDogbnVsbDtcclxuICAgIC8vICAgICAgICAgICAgICAgLy8gICBjb25zdCBtID0gaXRlbS5taWRmaWVsZGVyc1xyXG4gICAgLy8gICAgICAgICAgICAgICAvLyAgICAgICA/IGl0ZW0ubWlkZmllbGRlcnMubWFwKG1pZCA9PiB7XHJcbiAgICAvLyAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIG5ld0Fyci5wdXNoKG1pZCk7XHJcbiAgICAvLyAgICAgICAgICAgICAgIC8vICAgICAgICAgfSlcclxuICAgIC8vICAgICAgICAgICAgICAgLy8gICAgICAgOiBudWxsO1xyXG4gICAgLy8gICAgICAgICAgICAgICAvLyAgIGNvbnN0IGYgPSBpdGVtLmZvcndhcmRzXHJcbiAgICAvLyAgICAgICAgICAgICAgIC8vICAgICAgID8gaXRlbS5mb3J3YXJkcy5tYXAoZm9ydyA9PiB7XHJcbiAgICAvLyAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIG5ld0Fyci5wdXNoKGZvcncpO1xyXG4gICAgLy8gICAgICAgICAgICAgICAvLyAgICAgICAgIH0pXHJcbiAgICAvLyAgICAgICAgICAgICAgIC8vICAgOiBudWxsO1xyXG4gICAgLy8gICAgICAgICAgICAgICBuZXdBcnIucHVzaChpdGVtKTtcclxuICAgIC8vICAgICAgICAgICAgICAgc2V0QWxsUGxheWVycyhuZXdBcnIpO1xyXG4gICAgLy8gICAgICAgICAgIH0pXHJcbiAgICAvLyAgICAgICAgIDogbnVsbDtcclxuICAgIC8vIH07XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBtYWtlUGxheWVyc0FycigpO1xyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgZmluZFBsYXllcigpO1xyXG4gICAgfSwgW2FsbFBsYXllcnMsIGlkXSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncGxheWVyJz5cclxuICAgICAgICAgICAge3NlbGVjdGVkUGxheWVyICE9PSBudWxsID8gKFxyXG4gICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPSdwbGF5ZXItdGl0bGUnPntzZWxlY3RlZFBsYXllclswXS5uYW1lfTwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3BsYXllci1waG90byc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtzZWxlY3RlZFBsYXllclswXS5pbWd9IGFsdD0nJyAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwbGF5ZXItaW5mbyc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+TmFtZTo8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c2VsZWN0ZWRQbGF5ZXJbMF0ubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlNxdWFkIG51bWJlcjo8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5Cb3JuOjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzZWxlY3RlZFBsYXllclswXS5ib3JufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+QXJzZW5hbCBkZWJ1dDo8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c2VsZWN0ZWRQbGF5ZXJbMF0uYXJzZW5hbERlYnV0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+UHJldmlvdXMgY2x1YnM6PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3NlbGVjdGVkUGxheWVyWzBdLnByZXZpb3VzQ2x1YnN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgPGRpdj57aWR9PC9kaXY+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGxheWVyO1xyXG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VSb3V0ZXIiLCJwbGF5ZXJzIiwiUGxheWVyIiwicHJvcHMiLCJyb3V0ZXIiLCJpZCIsInF1ZXJ5IiwiYWxsUGxheWVycyIsInNldEFsbFBsYXllcnMiLCJzZWxlY3RlZFBsYXllciIsInNldFNlbGVjdGVkUGxheWVyIiwiZmluZFBsYXllciIsImNvbnNvbGUiLCJsb2ciLCJ3IiwibGVuZ3RoIiwiZmlsdGVyIiwiaXQiLCJzcXVhZE51bWJlciIsIm1ha2VQbGF5ZXJzQXJyIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJuYW1lIiwiaW1nIiwic3JjIiwiYWx0IiwicCIsInNwYW4iLCJib3JuIiwiYXJzZW5hbERlYnV0IiwicHJldmlvdXNDbHVicyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/squad/[id].js\n"));

/***/ })

});