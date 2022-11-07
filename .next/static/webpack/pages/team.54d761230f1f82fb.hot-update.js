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

/***/ "./components/team/team_TeamList/TeamList.js":
/*!***************************************************!*\
  !*** ./components/team/team_TeamList/TeamList.js ***!
  \***************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/src/_sliced_to_array.mjs */ \"./node_modules/@swc/helpers/src/_sliced_to_array.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"./node_modules/@fortawesome/free-solid-svg-icons/index.mjs\");\n/* harmony import */ var _teamSlice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../teamSlice */ \"./components/team/teamSlice.js\");\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\nvar TeamList = function() {\n    _s();\n    var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();\n    var heroes = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function(state) {\n        return state.teamSlice.heroes;\n    });\n    var ref = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(useState(false), 2), show = ref[0], setHideTeamBoard = ref[1];\n    useEffect(function() {\n        if (window.innerWidth < 835) {\n            setHideTeamBoard(true);\n        }\n    }, []);\n    var showTeamSquad = heroes.map(function(item, i) {\n        var style = item.captain ? \"fa fa-star red-color\" : \"fa fa-star black-color\";\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {\n                    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__.faStar,\n                    className: style,\n                    onClick: function() {\n                        return makeCaptain(i);\n                    }\n                }, void 0, false, {\n                    fileName: \"C:\\\\react\\\\Arsenal\\\\my-app\\\\components\\\\team\\\\team_TeamList\\\\TeamList.js\",\n                    lineNumber: 23,\n                    columnNumber: 17\n                }, _this),\n                item.position,\n                \" - \",\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    onClick: function() {\n                        return makeActive(i);\n                    },\n                    children: heroes[i].name\n                }, void 0, false, {\n                    fileName: \"C:\\\\react\\\\Arsenal\\\\my-app\\\\components\\\\team\\\\team_TeamList\\\\TeamList.js\",\n                    lineNumber: 24,\n                    columnNumber: 35\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"btn\",\n                    children: \"Get random hero\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\react\\\\Arsenal\\\\my-app\\\\components\\\\team\\\\team_TeamList\\\\TeamList.js\",\n                    lineNumber: 25,\n                    columnNumber: 17\n                }, _this)\n            ]\n        }, item.num, true, {\n            fileName: \"C:\\\\react\\\\Arsenal\\\\my-app\\\\components\\\\team\\\\team_TeamList\\\\TeamList.js\",\n            lineNumber: 22,\n            columnNumber: 13\n        }, _this);\n    });\n    var makeCaptain = function(i) {\n        var checkPlayersChoosen = heroes.filter(function(item) {\n            return item.name === \"...\";\n        });\n        if (checkPlayersChoosen.length === 0) {\n            // ставимо всім гравцям статус капітана - false\n            dispatch((0,_teamSlice__WEBPACK_IMPORTED_MODULE_3__.team_makeCaptain)(i));\n        }\n    };\n    var makeActive = function(i) {\n        dispatch((0,_teamSlice__WEBPACK_IMPORTED_MODULE_3__.team_getClikedHeroFromList)(i));\n    };\n    return showTeamSquad;\n};\n_s(TeamList, \"KNMG1/Gn7jdlyBK1dbspPisSOIU=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch,\n        react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector\n    ];\n});\n_c = TeamList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TeamList);\nvar _c;\n$RefreshReg$(_c, \"TeamList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3RlYW0vdGVhbV9UZWFtTGlzdC9UZWFtTGlzdC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7O0FBQXVEO0FBQ1U7QUFDTjtBQUVpQjtBQUU1RSxJQUFNTSxXQUFXLFdBQU07O0lBQ25CLElBQU1DLFdBQVdOLHdEQUFXQTtJQUU1QixJQUFNTyxTQUFTUix3REFBV0EsQ0FBQ1MsU0FBQUE7ZUFBU0EsTUFBTUMsU0FBUyxDQUFDRixNQUFNOztJQUUxRCxJQUFpQ0csTUFBQUEsZ0ZBQUFBLENBQUFBLFNBQVMsS0FBSyxPQUF4Q0MsT0FBMEJELFFBQXBCRSxtQkFBb0JGO0lBQ2pDRyxVQUFVLFdBQU07UUFDWixJQUFJQyxPQUFPQyxVQUFVLEdBQUcsS0FBSztZQUN6QkgsaUJBQWlCLElBQUk7UUFDekIsQ0FBQztJQUNMLEdBQUcsRUFBRTtJQUVMLElBQU1JLGdCQUFnQlQsT0FBT1UsR0FBRyxDQUFDLFNBQUNDLE1BQU1DLEdBQU07UUFDMUMsSUFBTUMsUUFBUUYsS0FBS0csT0FBTyxHQUFHLHlCQUF5Qix3QkFBd0I7UUFDOUUscUJBQ0ksOERBQUNDOzs4QkFDRyw4REFBQ3JCLDJFQUFlQTtvQkFBQ3NCLE1BQU1yQixxRUFBTUE7b0JBQUVzQixXQUFXSjtvQkFBT0ssU0FBUzsrQkFBTUMsWUFBWVA7Ozs7Ozs7Z0JBQzNFRCxLQUFLUyxRQUFRO2dCQUFDOzhCQUFHLDhEQUFDQztvQkFBS0gsU0FBUzsrQkFBTUksV0FBV1Y7OzhCQUFLWixNQUFNLENBQUNZLEVBQUUsQ0FBQ1csSUFBSTs7Ozs7OzhCQUNyRSw4REFBQ0M7b0JBQU9QLFdBQVU7OEJBQU07Ozs7Ozs7V0FIbkJOLEtBQUtjLEdBQUc7Ozs7O0lBTXpCO0lBRUEsSUFBTU4sY0FBY1AsU0FBQUEsR0FBSztRQUNyQixJQUFNYyxzQkFBc0IxQixPQUFPMkIsTUFBTSxDQUFDaEIsU0FBQUE7bUJBQVFBLEtBQUtZLElBQUksS0FBSzs7UUFDaEUsSUFBSUcsb0JBQW9CRSxNQUFNLEtBQUssR0FBRztZQUNsQywrQ0FBK0M7WUFDL0M3QixTQUFTRiw0REFBZ0JBLENBQUNlO1FBQzlCLENBQUM7SUFDTDtJQUVBLElBQU1VLGFBQWFWLFNBQUFBLEdBQUs7UUFDcEJiLFNBQVNILHNFQUEwQkEsQ0FBQ2dCO0lBQ3hDO0lBRUEsT0FBT0g7QUFDWDtHQXBDTVg7O1FBQ2VMLG9EQUFXQTtRQUViRCxvREFBV0E7OztLQUh4Qk07QUFzQ04sK0RBQWVBLFFBQVFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy90ZWFtL3RlYW1fVGVhbUxpc3QvVGVhbUxpc3QuanM/MzhjYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTZWxlY3RvciwgdXNlRGlzcGF0Y2ggfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZVwiO1xyXG5pbXBvcnQgeyBmYVN0YXIgfSBmcm9tIFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zXCI7XHJcblxyXG5pbXBvcnQgeyB0ZWFtX2dldENsaWtlZEhlcm9Gcm9tTGlzdCwgdGVhbV9tYWtlQ2FwdGFpbiB9IGZyb20gXCIuLi90ZWFtU2xpY2VcIjtcclxuXHJcbmNvbnN0IFRlYW1MaXN0ID0gKCkgPT4ge1xyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG5cclxuICAgIGNvbnN0IGhlcm9lcyA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLnRlYW1TbGljZS5oZXJvZXMpO1xyXG5cclxuICAgIGNvbnN0IFtzaG93LCBzZXRIaWRlVGVhbUJvYXJkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoIDwgODM1KSB7XHJcbiAgICAgICAgICAgIHNldEhpZGVUZWFtQm9hcmQodHJ1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIGNvbnN0IHNob3dUZWFtU3F1YWQgPSBoZXJvZXMubWFwKChpdGVtLCBpKSA9PiB7XHJcbiAgICAgICAgY29uc3Qgc3R5bGUgPSBpdGVtLmNhcHRhaW4gPyBcImZhIGZhLXN0YXIgcmVkLWNvbG9yXCIgOiBcImZhIGZhLXN0YXIgYmxhY2stY29sb3JcIjtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8bGkga2V5PXtpdGVtLm51bX0+XHJcbiAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhU3Rhcn0gY2xhc3NOYW1lPXtzdHlsZX0gb25DbGljaz17KCkgPT4gbWFrZUNhcHRhaW4oaSl9PjwvRm9udEF3ZXNvbWVJY29uPlxyXG4gICAgICAgICAgICAgICAge2l0ZW0ucG9zaXRpb259IC0gPHNwYW4gb25DbGljaz17KCkgPT4gbWFrZUFjdGl2ZShpKX0+e2hlcm9lc1tpXS5uYW1lfTwvc3Bhbj4gXHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0blwiPkdldCByYW5kb20gaGVybzwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBtYWtlQ2FwdGFpbiA9IGkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGNoZWNrUGxheWVyc0Nob29zZW4gPSBoZXJvZXMuZmlsdGVyKGl0ZW0gPT4gaXRlbS5uYW1lID09PSBcIi4uLlwiKTtcclxuICAgICAgICBpZiAoY2hlY2tQbGF5ZXJzQ2hvb3Nlbi5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgLy8g0YHRgtCw0LLQuNC80L4g0LLRgdGW0Lwg0LPRgNCw0LLRhtGP0Lwg0YHRgtCw0YLRg9GBINC60LDQv9GW0YLQsNC90LAgLSBmYWxzZVxyXG4gICAgICAgICAgICBkaXNwYXRjaCh0ZWFtX21ha2VDYXB0YWluKGkpKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IG1ha2VBY3RpdmUgPSBpID0+IHtcclxuICAgICAgICBkaXNwYXRjaCh0ZWFtX2dldENsaWtlZEhlcm9Gcm9tTGlzdChpKSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiBzaG93VGVhbVNxdWFkO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGVhbUxpc3Q7XHJcbiJdLCJuYW1lcyI6WyJ1c2VTZWxlY3RvciIsInVzZURpc3BhdGNoIiwiRm9udEF3ZXNvbWVJY29uIiwiZmFTdGFyIiwidGVhbV9nZXRDbGlrZWRIZXJvRnJvbUxpc3QiLCJ0ZWFtX21ha2VDYXB0YWluIiwiVGVhbUxpc3QiLCJkaXNwYXRjaCIsImhlcm9lcyIsInN0YXRlIiwidGVhbVNsaWNlIiwidXNlU3RhdGUiLCJzaG93Iiwic2V0SGlkZVRlYW1Cb2FyZCIsInVzZUVmZmVjdCIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJzaG93VGVhbVNxdWFkIiwibWFwIiwiaXRlbSIsImkiLCJzdHlsZSIsImNhcHRhaW4iLCJsaSIsImljb24iLCJjbGFzc05hbWUiLCJvbkNsaWNrIiwibWFrZUNhcHRhaW4iLCJwb3NpdGlvbiIsInNwYW4iLCJtYWtlQWN0aXZlIiwibmFtZSIsImJ1dHRvbiIsIm51bSIsImNoZWNrUGxheWVyc0Nob29zZW4iLCJmaWx0ZXIiLCJsZW5ndGgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/team/team_TeamList/TeamList.js\n"));

/***/ })

});