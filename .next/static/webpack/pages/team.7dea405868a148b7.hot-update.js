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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_sliced_to_array.mjs */ \"./node_modules/@swc/helpers/src/_sliced_to_array.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"./node_modules/@fortawesome/free-solid-svg-icons/index.mjs\");\n/* harmony import */ var _teamSlice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../teamSlice */ \"./components/team/teamSlice.js\");\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nvar TeamList = function() {\n    _s();\n    var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();\n    var heroes = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(function(state) {\n        return state.teamSlice.heroes;\n    });\n    var ref = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), 2), showHeroBtns = ref[0], setShowHeroBtns = ref[1];\n    var ref1 = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), 2), clickedBtnIndex = ref1[0], setClickedBtnIndex = ref1[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        if (window.innerWidth < 835) {\n            setShowHeroBtns(true);\n        }\n    }, []);\n    var getHero = function(id) {\n        if (!heroes[id].name) {\n            dispatch((0,_teamSlice__WEBPACK_IMPORTED_MODULE_4__.fetchHero)());\n            dispatch((0,_teamSlice__WEBPACK_IMPORTED_MODULE_4__.team_activeHero)(id));\n        }\n        setClickedBtnIndex(function(id) {\n            return id + 1;\n        });\n    };\n    var sliceName = function(name) {\n        if (name.length > 20) {\n            return name.slice(0, 20);\n        }\n    };\n    var showTeamSquad = heroes.map(function(item, i) {\n        var style = item.captain ? \"fa fa-star red-color\" : \"fa fa-star black-color\";\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n            className: \"teamList__item\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {\n                    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__.faStar,\n                    className: style,\n                    onClick: function() {\n                        return makeCaptain(i);\n                    }\n                }, void 0, false, {\n                    fileName: \"C:\\\\react\\\\Arsenal\\\\my-app\\\\components\\\\team\\\\team_TeamList\\\\TeamList.js\",\n                    lineNumber: 39,\n                    columnNumber: 17\n                }, _this),\n                item.position,\n                \" - \",\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    onClick: function() {\n                        return makeActive(i);\n                    },\n                    children: heroes[i].name.slice(0, 22)\n                }, void 0, false, {\n                    fileName: \"C:\\\\react\\\\Arsenal\\\\my-app\\\\components\\\\team\\\\team_TeamList\\\\TeamList.js\",\n                    lineNumber: 40,\n                    columnNumber: 35\n                }, _this),\n                showHeroBtns && i === clickedBtnIndex ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"btn\",\n                    onClick: function() {\n                        return getHero(i);\n                    },\n                    children: \"Get random hero\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\react\\\\Arsenal\\\\my-app\\\\components\\\\team\\\\team_TeamList\\\\TeamList.js\",\n                    lineNumber: 42,\n                    columnNumber: 21\n                }, _this) : null\n            ]\n        }, item.num, true, {\n            fileName: \"C:\\\\react\\\\Arsenal\\\\my-app\\\\components\\\\team\\\\team_TeamList\\\\TeamList.js\",\n            lineNumber: 38,\n            columnNumber: 13\n        }, _this);\n    });\n    var makeCaptain = function(i) {\n        var checkPlayersChoosen = heroes.filter(function(item) {\n            return item.name === \"...\";\n        });\n        if (checkPlayersChoosen.length === 0) {\n            // ставимо всім гравцям статус капітана - false\n            dispatch((0,_teamSlice__WEBPACK_IMPORTED_MODULE_4__.team_makeCaptain)(i));\n        }\n    };\n    var makeActive = function(i) {\n        dispatch((0,_teamSlice__WEBPACK_IMPORTED_MODULE_4__.team_getClikedHeroFromList)(i));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"teamList\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                className: \"teamList__heading\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: \"Click on a card and get your random hero\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\react\\\\Arsenal\\\\my-app\\\\components\\\\team\\\\team_TeamList\\\\TeamList.js\",\n                        lineNumber: 65,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: \"Choose a captain\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\react\\\\Arsenal\\\\my-app\\\\components\\\\team\\\\team_TeamList\\\\TeamList.js\",\n                        lineNumber: 66,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: \"Make 3 substitutions if you need\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\react\\\\Arsenal\\\\my-app\\\\components\\\\team\\\\team_TeamList\\\\TeamList.js\",\n                        lineNumber: 67,\n                        columnNumber: 17\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\react\\\\Arsenal\\\\my-app\\\\components\\\\team\\\\team_TeamList\\\\TeamList.js\",\n                lineNumber: 64,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                className: \"teamList__squad\",\n                children: showTeamSquad\n            }, void 0, false, {\n                fileName: \"C:\\\\react\\\\Arsenal\\\\my-app\\\\components\\\\team\\\\team_TeamList\\\\TeamList.js\",\n                lineNumber: 69,\n                columnNumber: 13\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\react\\\\Arsenal\\\\my-app\\\\components\\\\team\\\\team_TeamList\\\\TeamList.js\",\n        lineNumber: 63,\n        columnNumber: 9\n    }, _this);\n};\n_s(TeamList, \"whxpH6NWkcipbZ50ay/TjC/h0Cg=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch,\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector\n    ];\n});\n_c = TeamList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TeamList);\nvar _c;\n$RefreshReg$(_c, \"TeamList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3RlYW0vdGVhbV9UZWFtTGlzdC9UZWFtTGlzdC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7Ozs7QUFBNEM7QUFDVztBQUNVO0FBQ047QUFFNkM7QUFFeEcsSUFBTVUsV0FBVyxXQUFNOztJQUNuQixJQUFNQyxXQUFXUix3REFBV0E7SUFFNUIsSUFBTVMsU0FBU1Ysd0RBQVdBLENBQUNXLFNBQUFBO2VBQVNBLE1BQU1DLFNBQVMsQ0FBQ0YsTUFBTTs7SUFFMUQsSUFBd0NaLE1BQUFBLGdGQUFBQSxDQUFBQSwrQ0FBUUEsQ0FBQyxLQUFLLE9BQS9DZSxlQUFpQ2YsUUFBbkJnQixrQkFBbUJoQjtJQUN4QyxJQUE4Q0EsT0FBQUEsZ0ZBQUFBLENBQUFBLCtDQUFRQSxDQUFDLFFBQWhEaUIsa0JBQXVDakIsU0FBdEJrQixxQkFBc0JsQjtJQUM5Q0MsZ0RBQVNBLENBQUMsV0FBTTtRQUNaLElBQUlrQixPQUFPQyxVQUFVLEdBQUcsS0FBSztZQUN6QkosZ0JBQWdCLElBQUk7UUFDeEIsQ0FBQztJQUNMLEdBQUcsRUFBRTtJQUVMLElBQU1LLFVBQVVDLFNBQUFBLElBQU07UUFDbEIsSUFBSSxDQUFDVixNQUFNLENBQUNVLEdBQUcsQ0FBQ0MsSUFBSSxFQUFFO1lBQ2xCWixTQUFTRixxREFBU0E7WUFDbEJFLFNBQVNILDJEQUFlQSxDQUFDYztRQUM3QixDQUFDO1FBQ0RKLG1CQUFtQkksU0FBQUE7bUJBQU1BLEtBQUs7O0lBQ2xDO0lBRUEsSUFBTUUsWUFBWSxTQUFDRCxNQUFTO1FBQ3hCLElBQUlBLEtBQUtFLE1BQU0sR0FBRyxJQUFJO1lBQ2xCLE9BQU9GLEtBQUtHLEtBQUssQ0FBQyxHQUFFO1FBQ3hCLENBQUM7SUFDTDtJQUVBLElBQU1DLGdCQUFnQmYsT0FBT2dCLEdBQUcsQ0FBQyxTQUFDQyxNQUFNQyxHQUFNO1FBQzFDLElBQU1DLFFBQVFGLEtBQUtHLE9BQU8sR0FBRyx5QkFBeUIsd0JBQXdCO1FBQzlFLHFCQUNJLDhEQUFDQztZQUFrQkMsV0FBVTs7OEJBQ3pCLDhEQUFDOUIsMkVBQWVBO29CQUFDK0IsTUFBTTlCLHFFQUFNQTtvQkFBRTZCLFdBQVdIO29CQUFPSyxTQUFTOytCQUFNQyxZQUFZUDs7Ozs7OztnQkFDM0VELEtBQUtTLFFBQVE7Z0JBQUM7OEJBQUcsOERBQUNDO29CQUFLSCxTQUFTOytCQUFNSSxXQUFXVjs7OEJBQUtsQixNQUFNLENBQUNrQixFQUFFLENBQUNQLElBQUksQ0FBQ0csS0FBSyxDQUFDLEdBQUc7Ozs7OztnQkFDOUVYLGdCQUFnQmUsTUFBTWIsZ0NBQ25CLDhEQUFDd0I7b0JBQU9QLFdBQVU7b0JBQU1FLFNBQVM7K0JBQU1mLFFBQVFTOzs4QkFBSTs7Ozs7NEJBR25ELElBQUk7O1dBUEhELEtBQUthLEdBQUc7Ozs7O0lBVXpCO0lBRUEsSUFBTUwsY0FBY1AsU0FBQUEsR0FBSztRQUNyQixJQUFNYSxzQkFBc0IvQixPQUFPZ0MsTUFBTSxDQUFDZixTQUFBQTttQkFBUUEsS0FBS04sSUFBSSxLQUFLOztRQUNoRSxJQUFJb0Isb0JBQW9CbEIsTUFBTSxLQUFLLEdBQUc7WUFDbEMsK0NBQStDO1lBQy9DZCxTQUFTSiw0REFBZ0JBLENBQUN1QjtRQUM5QixDQUFDO0lBQ0w7SUFFQSxJQUFNVSxhQUFhVixTQUFBQSxHQUFLO1FBQ3BCbkIsU0FBU0wsc0VBQTBCQSxDQUFDd0I7SUFDeEM7SUFFQSxxQkFDSSw4REFBQ2U7UUFBSVgsV0FBVTs7MEJBQ1gsOERBQUNZO2dCQUFHWixXQUFVOztrQ0FDViw4REFBQ0Q7a0NBQUc7Ozs7OztrQ0FDSiw4REFBQ0E7a0NBQUc7Ozs7OztrQ0FDSiw4REFBQ0E7a0NBQUc7Ozs7Ozs7Ozs7OzswQkFFUiw4REFBQ2E7Z0JBQUdaLFdBQVU7MEJBQW1CUDs7Ozs7Ozs7Ozs7O0FBRzdDO0dBaEVNakI7O1FBQ2VQLG9EQUFXQTtRQUViRCxvREFBV0E7OztLQUh4QlE7QUFrRU4sK0RBQWVBLFFBQVFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy90ZWFtL3RlYW1fVGVhbUxpc3QvVGVhbUxpc3QuanM/MzhjYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yLCB1c2VEaXNwYXRjaCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tIFwiQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lXCI7XHJcbmltcG9ydCB7IGZhU3RhciB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnNcIjtcclxuXHJcbmltcG9ydCB7IHRlYW1fZ2V0Q2xpa2VkSGVyb0Zyb21MaXN0LCB0ZWFtX21ha2VDYXB0YWluLCB0ZWFtX2FjdGl2ZUhlcm8sIGZldGNoSGVybyB9IGZyb20gXCIuLi90ZWFtU2xpY2VcIjtcclxuXHJcbmNvbnN0IFRlYW1MaXN0ID0gKCkgPT4ge1xyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG5cclxuICAgIGNvbnN0IGhlcm9lcyA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLnRlYW1TbGljZS5oZXJvZXMpO1xyXG5cclxuICAgIGNvbnN0IFtzaG93SGVyb0J0bnMsIHNldFNob3dIZXJvQnRuc10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbY2xpY2tlZEJ0bkluZGV4LCBzZXRDbGlja2VkQnRuSW5kZXhdID0gdXNlU3RhdGUoMCk7XHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA8IDgzNSkge1xyXG4gICAgICAgICAgICBzZXRTaG93SGVyb0J0bnModHJ1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIGNvbnN0IGdldEhlcm8gPSBpZCA9PiB7XHJcbiAgICAgICAgaWYgKCFoZXJvZXNbaWRdLm5hbWUpIHtcclxuICAgICAgICAgICAgZGlzcGF0Y2goZmV0Y2hIZXJvKCkpO1xyXG4gICAgICAgICAgICBkaXNwYXRjaCh0ZWFtX2FjdGl2ZUhlcm8oaWQpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0Q2xpY2tlZEJ0bkluZGV4KGlkID0+IGlkICsgMSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHNsaWNlTmFtZSA9IChuYW1lKSA9PiB7XHJcbiAgICAgICAgaWYgKG5hbWUubGVuZ3RoID4gMjApIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5hbWUuc2xpY2UoMCwyMCkgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHNob3dUZWFtU3F1YWQgPSBoZXJvZXMubWFwKChpdGVtLCBpKSA9PiB7XHJcbiAgICAgICAgY29uc3Qgc3R5bGUgPSBpdGVtLmNhcHRhaW4gPyBcImZhIGZhLXN0YXIgcmVkLWNvbG9yXCIgOiBcImZhIGZhLXN0YXIgYmxhY2stY29sb3JcIjtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8bGkga2V5PXtpdGVtLm51bX0gY2xhc3NOYW1lPSd0ZWFtTGlzdF9faXRlbSc+XHJcbiAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhU3Rhcn0gY2xhc3NOYW1lPXtzdHlsZX0gb25DbGljaz17KCkgPT4gbWFrZUNhcHRhaW4oaSl9PjwvRm9udEF3ZXNvbWVJY29uPlxyXG4gICAgICAgICAgICAgICAge2l0ZW0ucG9zaXRpb259IC0gPHNwYW4gb25DbGljaz17KCkgPT4gbWFrZUFjdGl2ZShpKX0+e2hlcm9lc1tpXS5uYW1lLnNsaWNlKDAsIDIyKX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICB7c2hvd0hlcm9CdG5zICYmIGkgPT09IGNsaWNrZWRCdG5JbmRleCA/IChcclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nYnRuJyBvbkNsaWNrPXsoKSA9PiBnZXRIZXJvKGkpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgR2V0IHJhbmRvbSBoZXJvXHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICApIDogbnVsbH1cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICApO1xyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgbWFrZUNhcHRhaW4gPSBpID0+IHtcclxuICAgICAgICBjb25zdCBjaGVja1BsYXllcnNDaG9vc2VuID0gaGVyb2VzLmZpbHRlcihpdGVtID0+IGl0ZW0ubmFtZSA9PT0gXCIuLi5cIik7XHJcbiAgICAgICAgaWYgKGNoZWNrUGxheWVyc0Nob29zZW4ubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIC8vINGB0YLQsNCy0LjQvNC+INCy0YHRltC8INCz0YDQsNCy0YbRj9C8INGB0YLQsNGC0YPRgSDQutCw0L/RltGC0LDQvdCwIC0gZmFsc2VcclxuICAgICAgICAgICAgZGlzcGF0Y2godGVhbV9tYWtlQ2FwdGFpbihpKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBtYWtlQWN0aXZlID0gaSA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2godGVhbV9nZXRDbGlrZWRIZXJvRnJvbUxpc3QoaSkpO1xyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSd0ZWFtTGlzdCc+XHJcbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9J3RlYW1MaXN0X19oZWFkaW5nJz5cclxuICAgICAgICAgICAgICAgIDxsaT5DbGljayBvbiBhIGNhcmQgYW5kIGdldCB5b3VyIHJhbmRvbSBoZXJvPC9saT5cclxuICAgICAgICAgICAgICAgIDxsaT5DaG9vc2UgYSBjYXB0YWluPC9saT5cclxuICAgICAgICAgICAgICAgIDxsaT5NYWtlIDMgc3Vic3RpdHV0aW9ucyBpZiB5b3UgbmVlZDwvbGk+XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9J3RlYW1MaXN0X19zcXVhZCc+e3Nob3dUZWFtU3F1YWR9PC91bD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUZWFtTGlzdDtcclxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlU2VsZWN0b3IiLCJ1c2VEaXNwYXRjaCIsIkZvbnRBd2Vzb21lSWNvbiIsImZhU3RhciIsInRlYW1fZ2V0Q2xpa2VkSGVyb0Zyb21MaXN0IiwidGVhbV9tYWtlQ2FwdGFpbiIsInRlYW1fYWN0aXZlSGVybyIsImZldGNoSGVybyIsIlRlYW1MaXN0IiwiZGlzcGF0Y2giLCJoZXJvZXMiLCJzdGF0ZSIsInRlYW1TbGljZSIsInNob3dIZXJvQnRucyIsInNldFNob3dIZXJvQnRucyIsImNsaWNrZWRCdG5JbmRleCIsInNldENsaWNrZWRCdG5JbmRleCIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJnZXRIZXJvIiwiaWQiLCJuYW1lIiwic2xpY2VOYW1lIiwibGVuZ3RoIiwic2xpY2UiLCJzaG93VGVhbVNxdWFkIiwibWFwIiwiaXRlbSIsImkiLCJzdHlsZSIsImNhcHRhaW4iLCJsaSIsImNsYXNzTmFtZSIsImljb24iLCJvbkNsaWNrIiwibWFrZUNhcHRhaW4iLCJwb3NpdGlvbiIsInNwYW4iLCJtYWtlQWN0aXZlIiwiYnV0dG9uIiwibnVtIiwiY2hlY2tQbGF5ZXJzQ2hvb3NlbiIsImZpbHRlciIsImRpdiIsInVsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/team/team_TeamList/TeamList.js\n"));

/***/ })

});