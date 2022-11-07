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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_sliced_to_array.mjs */ \"./node_modules/@swc/helpers/src/_sliced_to_array.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"./node_modules/@fortawesome/free-solid-svg-icons/index.mjs\");\n/* harmony import */ var _teamSlice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../teamSlice */ \"./components/team/teamSlice.js\");\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nvar TeamList = function() {\n    _s();\n    var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();\n    var heroes = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(function(state) {\n        return state.teamSlice.heroes;\n    });\n    var ref = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), 2), showHeroBtns = ref[0], setShowHeroBtns = ref[1];\n    var ref1 = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), 2), clickedBtnIndex = ref1[0], setClickedBtnIndex = ref1[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        if (window.innerWidth < 835) {\n            setShowHeroBtns(true);\n        }\n    }, []);\n    // клікнув і \n    var getHero = function(id) {\n        if (!heroes[id].name) {\n            dispatch((0,_teamSlice__WEBPACK_IMPORTED_MODULE_4__.fetchHero)());\n            dispatch((0,_teamSlice__WEBPACK_IMPORTED_MODULE_4__.team_activeHero)(id));\n        }\n        setClickedBtnIndex(id);\n    };\n    var showTeamSquad = heroes.map(function(item, i) {\n        var style = item.captain ? \"fa fa-star red-color\" : \"fa fa-star black-color\";\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {\n                    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__.faStar,\n                    className: style,\n                    onClick: function() {\n                        return makeCaptain(i);\n                    }\n                }, void 0, false, {\n                    fileName: \"C:\\\\react\\\\Arsenal\\\\my-app\\\\components\\\\team\\\\team_TeamList\\\\TeamList.js\",\n                    lineNumber: 34,\n                    columnNumber: 17\n                }, _this),\n                item.position,\n                \" - \",\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    onClick: function() {\n                        return makeActive(i);\n                    },\n                    children: heroes[i].name\n                }, void 0, false, {\n                    fileName: \"C:\\\\react\\\\Arsenal\\\\my-app\\\\components\\\\team\\\\team_TeamList\\\\TeamList.js\",\n                    lineNumber: 35,\n                    columnNumber: 35\n                }, _this),\n                showHeroBtns ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    style: {\n                        display: i === clickedBtnIndex ? \"none\" : \"block\"\n                    },\n                    className: \"btn\",\n                    onClick: function() {\n                        return getHero(i);\n                    },\n                    children: \"Get random hero\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\react\\\\Arsenal\\\\my-app\\\\components\\\\team\\\\team_TeamList\\\\TeamList.js\",\n                    lineNumber: 37,\n                    columnNumber: 21\n                }, _this) : null\n            ]\n        }, item.num, true, {\n            fileName: \"C:\\\\react\\\\Arsenal\\\\my-app\\\\components\\\\team\\\\team_TeamList\\\\TeamList.js\",\n            lineNumber: 33,\n            columnNumber: 13\n        }, _this);\n    });\n    var makeCaptain = function(i) {\n        var checkPlayersChoosen = heroes.filter(function(item) {\n            return item.name === \"...\";\n        });\n        if (checkPlayersChoosen.length === 0) {\n            // ставимо всім гравцям статус капітана - false\n            dispatch((0,_teamSlice__WEBPACK_IMPORTED_MODULE_4__.team_makeCaptain)(i));\n        }\n    };\n    var makeActive = function(i) {\n        dispatch((0,_teamSlice__WEBPACK_IMPORTED_MODULE_4__.team_getClikedHeroFromList)(i));\n    };\n    return showTeamSquad;\n};\n_s(TeamList, \"tm4Tcwl3bCVPkgHHWeB2wwv+xgQ=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch,\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector\n    ];\n});\n_c = TeamList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TeamList);\nvar _c;\n$RefreshReg$(_c, \"TeamList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3RlYW0vdGVhbV9UZWFtTGlzdC9UZWFtTGlzdC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7Ozs7QUFBNEM7QUFDVztBQUNVO0FBQ047QUFFNkM7QUFFeEcsSUFBTVUsV0FBVyxXQUFNOztJQUNuQixJQUFNQyxXQUFXUix3REFBV0E7SUFFNUIsSUFBTVMsU0FBU1Ysd0RBQVdBLENBQUNXLFNBQUFBO2VBQVNBLE1BQU1DLFNBQVMsQ0FBQ0YsTUFBTTs7SUFFMUQsSUFBd0NaLE1BQUFBLGdGQUFBQSxDQUFBQSwrQ0FBUUEsQ0FBQyxLQUFLLE9BQS9DZSxlQUFpQ2YsUUFBbkJnQixrQkFBbUJoQjtJQUN4QyxJQUE4Q0EsT0FBQUEsZ0ZBQUFBLENBQUFBLCtDQUFRQSxDQUFDLElBQUksT0FBcERpQixrQkFBdUNqQixTQUF0QmtCLHFCQUFzQmxCO0lBQzlDQyxnREFBU0EsQ0FBQyxXQUFNO1FBQ1osSUFBSWtCLE9BQU9DLFVBQVUsR0FBRyxLQUFLO1lBQ3pCSixnQkFBZ0IsSUFBSTtRQUN4QixDQUFDO0lBQ0wsR0FBRyxFQUFFO0lBRUwsYUFBYTtJQUNiLElBQU1LLFVBQVVDLFNBQUFBLElBQU07UUFDbEIsSUFBSSxDQUFDVixNQUFNLENBQUNVLEdBQUcsQ0FBQ0MsSUFBSSxFQUFFO1lBQ2xCWixTQUFTRixxREFBU0E7WUFDbEJFLFNBQVNILDJEQUFlQSxDQUFDYztRQUM3QixDQUFDO1FBQ0RKLG1CQUFtQkk7SUFDdkI7SUFFQSxJQUFNRSxnQkFBZ0JaLE9BQU9hLEdBQUcsQ0FBQyxTQUFDQyxNQUFNQyxHQUFNO1FBQzFDLElBQU1DLFFBQVFGLEtBQUtHLE9BQU8sR0FBRyx5QkFBeUIsd0JBQXdCO1FBQzlFLHFCQUNJLDhEQUFDQzs7OEJBQ0csOERBQUMxQiwyRUFBZUE7b0JBQUMyQixNQUFNMUIscUVBQU1BO29CQUFFMkIsV0FBV0o7b0JBQU9LLFNBQVM7K0JBQU1DLFlBQVlQOzs7Ozs7O2dCQUMzRUQsS0FBS1MsUUFBUTtnQkFBQzs4QkFBRyw4REFBQ0M7b0JBQUtILFNBQVM7K0JBQU1JLFdBQVdWOzs4QkFBS2YsTUFBTSxDQUFDZSxFQUFFLENBQUNKLElBQUk7Ozs7OztnQkFDcEVSLDZCQUNHLDhEQUFDdUI7b0JBQ0dWLE9BQU87d0JBQUVXLFNBQVNaLE1BQU1WLGtCQUFrQixTQUFTLE9BQU87b0JBQUM7b0JBQzNEZSxXQUFVO29CQUNWQyxTQUFTOytCQUFNWixRQUFRTTs7OEJBQUk7Ozs7OzRCQUcvQixJQUFJOztXQVZIRCxLQUFLYyxHQUFHOzs7OztJQWF6QjtJQUVBLElBQU1OLGNBQWNQLFNBQUFBLEdBQUs7UUFDckIsSUFBTWMsc0JBQXNCN0IsT0FBTzhCLE1BQU0sQ0FBQ2hCLFNBQUFBO21CQUFRQSxLQUFLSCxJQUFJLEtBQUs7O1FBQ2hFLElBQUlrQixvQkFBb0JFLE1BQU0sS0FBSyxHQUFHO1lBQ2xDLCtDQUErQztZQUMvQ2hDLFNBQVNKLDREQUFnQkEsQ0FBQ29CO1FBQzlCLENBQUM7SUFDTDtJQUVBLElBQU1VLGFBQWFWLFNBQUFBLEdBQUs7UUFDcEJoQixTQUFTTCxzRUFBMEJBLENBQUNxQjtJQUN4QztJQUVBLE9BQU9IO0FBQ1g7R0FyRE1kOztRQUNlUCxvREFBV0E7UUFFYkQsb0RBQVdBOzs7S0FIeEJRO0FBdUROLCtEQUFlQSxRQUFRQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvdGVhbS90ZWFtX1RlYW1MaXN0L1RlYW1MaXN0LmpzPzM4Y2EiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciwgdXNlRGlzcGF0Y2ggfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZVwiO1xyXG5pbXBvcnQgeyBmYVN0YXIgfSBmcm9tIFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zXCI7XHJcblxyXG5pbXBvcnQgeyB0ZWFtX2dldENsaWtlZEhlcm9Gcm9tTGlzdCwgdGVhbV9tYWtlQ2FwdGFpbiwgdGVhbV9hY3RpdmVIZXJvLCBmZXRjaEhlcm8gfSBmcm9tIFwiLi4vdGVhbVNsaWNlXCI7XHJcblxyXG5jb25zdCBUZWFtTGlzdCA9ICgpID0+IHtcclxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuXHJcbiAgICBjb25zdCBoZXJvZXMgPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS50ZWFtU2xpY2UuaGVyb2VzKTtcclxuXHJcbiAgICBjb25zdCBbc2hvd0hlcm9CdG5zLCBzZXRTaG93SGVyb0J0bnNdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW2NsaWNrZWRCdG5JbmRleCwgc2V0Q2xpY2tlZEJ0bkluZGV4XSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAod2luZG93LmlubmVyV2lkdGggPCA4MzUpIHtcclxuICAgICAgICAgICAgc2V0U2hvd0hlcm9CdG5zKHRydWUpO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICAvLyDQutC70ZbQutC90YPQsiDRliBcclxuICAgIGNvbnN0IGdldEhlcm8gPSBpZCA9PiB7XHJcbiAgICAgICAgaWYgKCFoZXJvZXNbaWRdLm5hbWUpIHtcclxuICAgICAgICAgICAgZGlzcGF0Y2goZmV0Y2hIZXJvKCkpO1xyXG4gICAgICAgICAgICBkaXNwYXRjaCh0ZWFtX2FjdGl2ZUhlcm8oaWQpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0Q2xpY2tlZEJ0bkluZGV4KGlkKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3Qgc2hvd1RlYW1TcXVhZCA9IGhlcm9lcy5tYXAoKGl0ZW0sIGkpID0+IHtcclxuICAgICAgICBjb25zdCBzdHlsZSA9IGl0ZW0uY2FwdGFpbiA/IFwiZmEgZmEtc3RhciByZWQtY29sb3JcIiA6IFwiZmEgZmEtc3RhciBibGFjay1jb2xvclwiO1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxsaSBrZXk9e2l0ZW0ubnVtfT5cclxuICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFTdGFyfSBjbGFzc05hbWU9e3N0eWxlfSBvbkNsaWNrPXsoKSA9PiBtYWtlQ2FwdGFpbihpKX0+PC9Gb250QXdlc29tZUljb24+XHJcbiAgICAgICAgICAgICAgICB7aXRlbS5wb3NpdGlvbn0gLSA8c3BhbiBvbkNsaWNrPXsoKSA9PiBtYWtlQWN0aXZlKGkpfT57aGVyb2VzW2ldLm5hbWV9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAge3Nob3dIZXJvQnRucyA/IChcclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGRpc3BsYXk6IGkgPT09IGNsaWNrZWRCdG5JbmRleCA/IFwibm9uZVwiIDogXCJibG9ja1wiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nYnRuJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBnZXRIZXJvKGkpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgR2V0IHJhbmRvbSBoZXJvXHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICApIDogbnVsbH1cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICApO1xyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgbWFrZUNhcHRhaW4gPSBpID0+IHtcclxuICAgICAgICBjb25zdCBjaGVja1BsYXllcnNDaG9vc2VuID0gaGVyb2VzLmZpbHRlcihpdGVtID0+IGl0ZW0ubmFtZSA9PT0gXCIuLi5cIik7XHJcbiAgICAgICAgaWYgKGNoZWNrUGxheWVyc0Nob29zZW4ubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIC8vINGB0YLQsNCy0LjQvNC+INCy0YHRltC8INCz0YDQsNCy0YbRj9C8INGB0YLQsNGC0YPRgSDQutCw0L/RltGC0LDQvdCwIC0gZmFsc2VcclxuICAgICAgICAgICAgZGlzcGF0Y2godGVhbV9tYWtlQ2FwdGFpbihpKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBtYWtlQWN0aXZlID0gaSA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2godGVhbV9nZXRDbGlrZWRIZXJvRnJvbUxpc3QoaSkpO1xyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gc2hvd1RlYW1TcXVhZDtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRlYW1MaXN0O1xyXG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VTZWxlY3RvciIsInVzZURpc3BhdGNoIiwiRm9udEF3ZXNvbWVJY29uIiwiZmFTdGFyIiwidGVhbV9nZXRDbGlrZWRIZXJvRnJvbUxpc3QiLCJ0ZWFtX21ha2VDYXB0YWluIiwidGVhbV9hY3RpdmVIZXJvIiwiZmV0Y2hIZXJvIiwiVGVhbUxpc3QiLCJkaXNwYXRjaCIsImhlcm9lcyIsInN0YXRlIiwidGVhbVNsaWNlIiwic2hvd0hlcm9CdG5zIiwic2V0U2hvd0hlcm9CdG5zIiwiY2xpY2tlZEJ0bkluZGV4Iiwic2V0Q2xpY2tlZEJ0bkluZGV4Iiwid2luZG93IiwiaW5uZXJXaWR0aCIsImdldEhlcm8iLCJpZCIsIm5hbWUiLCJzaG93VGVhbVNxdWFkIiwibWFwIiwiaXRlbSIsImkiLCJzdHlsZSIsImNhcHRhaW4iLCJsaSIsImljb24iLCJjbGFzc05hbWUiLCJvbkNsaWNrIiwibWFrZUNhcHRhaW4iLCJwb3NpdGlvbiIsInNwYW4iLCJtYWtlQWN0aXZlIiwiYnV0dG9uIiwiZGlzcGxheSIsIm51bSIsImNoZWNrUGxheWVyc0Nob29zZW4iLCJmaWx0ZXIiLCJsZW5ndGgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/team/team_TeamList/TeamList.js\n"));

/***/ })

});