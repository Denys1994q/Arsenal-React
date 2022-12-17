"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/team",{

/***/ "./pages/team.js":
/*!***********************!*\
  !*** ./pages/team.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @swc/helpers/src/_sliced_to_array.mjs */ \"./node_modules/@swc/helpers/src/_sliced_to_array.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _components_common_skeleton_Skeleton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/common/skeleton/Skeleton */ \"./components/common/skeleton/Skeleton.js\");\n/* harmony import */ var _components_team_team_TeamSubs_TeamSubs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/team/team_TeamSubs/TeamSubs */ \"./components/team/team_TeamSubs/TeamSubs.js\");\n/* harmony import */ var _components_team_team_PlayersBoard_TeamPlayersBoard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/team/team_PlayersBoard/TeamPlayersBoard */ \"./components/team/team_PlayersBoard/TeamPlayersBoard.js\");\n/* harmony import */ var _components_team_team_TeamList_TeamList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/team/team_TeamList/TeamList */ \"./components/team/team_TeamList/TeamList.js\");\n/* harmony import */ var _components_team_team_TeamPlayerDescription_TeamPlayerDescription__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/team/team_TeamPlayerDescription/TeamPlayerDescription */ \"./components/team/team_TeamPlayerDescription/TeamPlayerDescription.js\");\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nvar Team = function() {\n    _s();\n    var clikedHeroFromList = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(function(state) {\n        return state.teamSlice.clikedHeroFromList;\n    });\n    var ref = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), 2), hideTeamBoard = ref[0], setHideTeamBoard = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        if (window.innerWidth < 835) {\n            setHideTeamBoard(true);\n        }\n    }, []);\n    var content = clikedHeroFromList || clikedHeroFromList === 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"char__info-box\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_team_team_TeamPlayerDescription_TeamPlayerDescription__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n            fileName: \"C:\\\\react\\\\Arsenal\\\\my-app\\\\pages\\\\team.js\",\n            lineNumber: 23,\n            columnNumber: 17\n        }, _this)\n    }, void 0, false, {\n        fileName: \"C:\\\\react\\\\Arsenal\\\\my-app\\\\pages\\\\team.js\",\n        lineNumber: 22,\n        columnNumber: 13\n    }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_common_skeleton_Skeleton__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n        fileName: \"C:\\\\react\\\\Arsenal\\\\my-app\\\\pages\\\\team.js\",\n        lineNumber: 26,\n        columnNumber: 13\n    }, _this);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"team\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"team__left\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_team_team_TeamList_TeamList__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                    fileName: \"C:\\\\react\\\\Arsenal\\\\my-app\\\\pages\\\\team.js\",\n                    lineNumber: 32,\n                    columnNumber: 17\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\react\\\\Arsenal\\\\my-app\\\\pages\\\\team.js\",\n                lineNumber: 31,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    display: hideTeamBoard ? \"none\" : \"grid\"\n                },\n                className: \"team__right\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_team_team_PlayersBoard_TeamPlayersBoard__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                    fileName: \"C:\\\\react\\\\Arsenal\\\\my-app\\\\pages\\\\team.js\",\n                    lineNumber: 35,\n                    columnNumber: 17\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\react\\\\Arsenal\\\\my-app\\\\pages\\\\team.js\",\n                lineNumber: 34,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"team-bottom\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"char__info\",\n                        children: content\n                    }, void 0, false, {\n                        fileName: \"C:\\\\react\\\\Arsenal\\\\my-app\\\\pages\\\\team.js\",\n                        lineNumber: 38,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"team-bottom-subs\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_team_team_TeamSubs_TeamSubs__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                            fileName: \"C:\\\\react\\\\Arsenal\\\\my-app\\\\pages\\\\team.js\",\n                            lineNumber: 40,\n                            columnNumber: 21\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\react\\\\Arsenal\\\\my-app\\\\pages\\\\team.js\",\n                        lineNumber: 39,\n                        columnNumber: 17\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\react\\\\Arsenal\\\\my-app\\\\pages\\\\team.js\",\n                lineNumber: 37,\n                columnNumber: 13\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\react\\\\Arsenal\\\\my-app\\\\pages\\\\team.js\",\n        lineNumber: 30,\n        columnNumber: 9\n    }, _this);\n};\n_s(Team, \"/c3xJgwSLuEpj3RucldjA8iEAdU=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector\n    ];\n});\n_c = Team;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Team);\nvar _c;\n$RefreshReg$(_c, \"Team\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy90ZWFtLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQTRDO0FBQ0Y7QUFFb0I7QUFDRztBQUNvQjtBQUNwQjtBQUN1QztBQUV4RyxJQUFNUSxPQUFPLFdBQU07O0lBQ2YsSUFBTUMscUJBQXFCUCx3REFBV0EsQ0FBQ1EsU0FBQUE7ZUFBU0EsTUFBTUMsU0FBUyxDQUFDRixrQkFBa0I7O0lBRWxGLElBQTBDUixNQUFBQSxnRkFBQUEsQ0FBQUEsK0NBQVFBLENBQUMsS0FBSyxPQUFqRFcsZ0JBQW1DWCxRQUFwQlksbUJBQW9CWjtJQUMxQ0QsZ0RBQVNBLENBQUMsV0FBTTtRQUNaLElBQUljLE9BQU9DLFVBQVUsR0FBRyxLQUFLO1lBQ3pCRixpQkFBaUIsSUFBSTtRQUN6QixDQUFDO0lBQ0wsR0FBRyxFQUFFO0lBRUwsSUFBTUcsVUFDRlAsc0JBQXNCQSx1QkFBdUIsa0JBQ3pDLDhEQUFDUTtRQUFJQyxXQUFVO2tCQUNYLDRFQUFDWCx5R0FBcUJBOzs7Ozs7Ozs7OEJBRzFCLDhEQUFDSiw0RUFBUUE7Ozs7YUFDWjtJQUVMLHFCQUNJLDhEQUFDZ0I7UUFBUUQsV0FBVTs7MEJBQ2YsOERBQUNEO2dCQUFJQyxXQUFVOzBCQUNYLDRFQUFDWiwrRUFBUUE7Ozs7Ozs7Ozs7MEJBRWIsOERBQUNXO2dCQUFJRyxPQUFPO29CQUFFQyxTQUFTVCxnQkFBZ0IsU0FBUyxNQUFNO2dCQUFDO2dCQUFHTSxXQUFVOzBCQUNoRSw0RUFBQ2IsMkZBQWdCQTs7Ozs7Ozs7OzswQkFFckIsOERBQUNZO2dCQUFJQyxXQUFVOztrQ0FDWCw4REFBQ0Q7d0JBQUlDLFdBQVU7a0NBQWNGOzs7Ozs7a0NBQzdCLDhEQUFDQzt3QkFBSUMsV0FBVTtrQ0FDWCw0RUFBQ2QsK0VBQVFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSzdCO0dBbkNNSTs7UUFDeUJOLG9EQUFXQTs7O0tBRHBDTTtBQXFDTiwrREFBZUEsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy90ZWFtLmpzPzBjMTEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5cclxuaW1wb3J0IFNrZWxldG9uIGZyb20gXCIuLi9jb21wb25lbnRzL2NvbW1vbi9za2VsZXRvbi9Ta2VsZXRvblwiO1xyXG5pbXBvcnQgVGVhbVN1YnMgZnJvbSBcIi4uL2NvbXBvbmVudHMvdGVhbS90ZWFtX1RlYW1TdWJzL1RlYW1TdWJzXCI7XHJcbmltcG9ydCBUZWFtUGxheWVyc0JvYXJkIGZyb20gXCIuLi9jb21wb25lbnRzL3RlYW0vdGVhbV9QbGF5ZXJzQm9hcmQvVGVhbVBsYXllcnNCb2FyZFwiO1xyXG5pbXBvcnQgVGVhbUxpc3QgZnJvbSBcIi4uL2NvbXBvbmVudHMvdGVhbS90ZWFtX1RlYW1MaXN0L1RlYW1MaXN0XCI7XHJcbmltcG9ydCBUZWFtUGxheWVyRGVzY3JpcHRpb24gZnJvbSBcIi4uL2NvbXBvbmVudHMvdGVhbS90ZWFtX1RlYW1QbGF5ZXJEZXNjcmlwdGlvbi9UZWFtUGxheWVyRGVzY3JpcHRpb25cIjtcclxuXHJcbmNvbnN0IFRlYW0gPSAoKSA9PiB7XHJcbiAgICBjb25zdCBjbGlrZWRIZXJvRnJvbUxpc3QgPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS50ZWFtU2xpY2UuY2xpa2VkSGVyb0Zyb21MaXN0KTtcclxuXHJcbiAgICBjb25zdCBbaGlkZVRlYW1Cb2FyZCwgc2V0SGlkZVRlYW1Cb2FyZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA8IDgzNSkge1xyXG4gICAgICAgICAgICBzZXRIaWRlVGVhbUJvYXJkKHRydWUpO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICBjb25zdCBjb250ZW50ID1cclxuICAgICAgICBjbGlrZWRIZXJvRnJvbUxpc3QgfHwgY2xpa2VkSGVyb0Zyb21MaXN0ID09PSAwID8gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2hhcl9faW5mby1ib3gnPlxyXG4gICAgICAgICAgICAgICAgPFRlYW1QbGF5ZXJEZXNjcmlwdGlvbiAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApIDogKFxyXG4gICAgICAgICAgICA8U2tlbGV0b24gLz5cclxuICAgICAgICApO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPSd0ZWFtJz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3RlYW1fX2xlZnQnPlxyXG4gICAgICAgICAgICAgICAgPFRlYW1MaXN0IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6IGhpZGVUZWFtQm9hcmQgPyBcIm5vbmVcIiA6IFwiZ3JpZFwiIH19IGNsYXNzTmFtZT0ndGVhbV9fcmlnaHQnPlxyXG4gICAgICAgICAgICAgICAgPFRlYW1QbGF5ZXJzQm9hcmQgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd0ZWFtLWJvdHRvbSc+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2hhcl9faW5mbyc+e2NvbnRlbnR9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndGVhbS1ib3R0b20tc3Vicyc+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRlYW1TdWJzIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRlYW07XHJcbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZVNlbGVjdG9yIiwiU2tlbGV0b24iLCJUZWFtU3VicyIsIlRlYW1QbGF5ZXJzQm9hcmQiLCJUZWFtTGlzdCIsIlRlYW1QbGF5ZXJEZXNjcmlwdGlvbiIsIlRlYW0iLCJjbGlrZWRIZXJvRnJvbUxpc3QiLCJzdGF0ZSIsInRlYW1TbGljZSIsImhpZGVUZWFtQm9hcmQiLCJzZXRIaWRlVGVhbUJvYXJkIiwid2luZG93IiwiaW5uZXJXaWR0aCIsImNvbnRlbnQiLCJkaXYiLCJjbGFzc05hbWUiLCJzZWN0aW9uIiwic3R5bGUiLCJkaXNwbGF5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/team.js\n"));

/***/ })

});