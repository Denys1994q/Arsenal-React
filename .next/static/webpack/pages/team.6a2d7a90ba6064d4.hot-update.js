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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_sliced_to_array.mjs */ \"./node_modules/@swc/helpers/src/_sliced_to_array.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"./node_modules/@fortawesome/free-solid-svg-icons/index.mjs\");\n/* harmony import */ var _teamSlice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../teamSlice */ \"./components/team/teamSlice.js\");\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nvar TeamList = function() {\n    _s();\n    var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();\n    var heroes = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(function(state) {\n        return state.teamSlice.heroes;\n    });\n    var ref = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), 2), showHeroBtns = ref[0], setShowHeroBtns = ref[1];\n    var ref1 = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), 2), clickedBtnIndex = ref1[0], setClickedBtnIndex = ref1[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        if (window.innerWidth < 835) {\n            setShowHeroBtns(true);\n        }\n    }, []);\n    var getHero = function(id) {\n        if (!heroes[id].name) {\n            dispatch((0,_teamSlice__WEBPACK_IMPORTED_MODULE_4__.fetchHero)());\n            dispatch((0,_teamSlice__WEBPACK_IMPORTED_MODULE_4__.team_activeHero)(id));\n        }\n        setClickedBtnIndex(function(id) {\n            return id + 1;\n        });\n    };\n    var showTeamSquad = heroes.map(function(item, i) {\n        var style = item.captain ? \"fa fa-star red-color\" : \"fa fa-star black-color\";\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n            className: \"teamList__item\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {\n                    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__.faStar,\n                    className: style,\n                    onClick: function() {\n                        return makeCaptain(i);\n                    }\n                }, void 0, false, {\n                    fileName: \"C:\\\\react\\\\Arsenal\\\\my-app\\\\components\\\\team\\\\team_TeamList\\\\TeamList.js\",\n                    lineNumber: 33,\n                    columnNumber: 17\n                }, _this),\n                item.position,\n                \" - \",\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    onClick: function() {\n                        return makeActive(i);\n                    },\n                    children: heroes[i].name\n                }, void 0, false, {\n                    fileName: \"C:\\\\react\\\\Arsenal\\\\my-app\\\\components\\\\team\\\\team_TeamList\\\\TeamList.js\",\n                    lineNumber: 34,\n                    columnNumber: 35\n                }, _this),\n                showHeroBtns && i === clickedBtnIndex ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"btn\",\n                    onClick: function() {\n                        return getHero(i);\n                    },\n                    children: \"Get random hero\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\react\\\\Arsenal\\\\my-app\\\\components\\\\team\\\\team_TeamList\\\\TeamList.js\",\n                    lineNumber: 36,\n                    columnNumber: 21\n                }, _this) : null\n            ]\n        }, item.num, true, {\n            fileName: \"C:\\\\react\\\\Arsenal\\\\my-app\\\\components\\\\team\\\\team_TeamList\\\\TeamList.js\",\n            lineNumber: 32,\n            columnNumber: 13\n        }, _this);\n    });\n    var makeCaptain = function(i) {\n        var checkPlayersChoosen = heroes.filter(function(item) {\n            return item.name === \"...\";\n        });\n        if (checkPlayersChoosen.length === 0) {\n            // ставимо всім гравцям статус капітана - false\n            dispatch((0,_teamSlice__WEBPACK_IMPORTED_MODULE_4__.team_makeCaptain)(i));\n        }\n    };\n    var makeActive = function(i) {\n        dispatch((0,_teamSlice__WEBPACK_IMPORTED_MODULE_4__.team_getClikedHeroFromList)(i));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"teamList\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                className: \"teamList__heading\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: \"Click on a card and get your random hero\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\react\\\\Arsenal\\\\my-app\\\\components\\\\team\\\\team_TeamList\\\\TeamList.js\",\n                        lineNumber: 59,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: \"Choose a captain\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\react\\\\Arsenal\\\\my-app\\\\components\\\\team\\\\team_TeamList\\\\TeamList.js\",\n                        lineNumber: 60,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: \"Make 3 substitutions if you need\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\react\\\\Arsenal\\\\my-app\\\\components\\\\team\\\\team_TeamList\\\\TeamList.js\",\n                        lineNumber: 61,\n                        columnNumber: 17\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\react\\\\Arsenal\\\\my-app\\\\components\\\\team\\\\team_TeamList\\\\TeamList.js\",\n                lineNumber: 58,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                className: \"teamList__squad\",\n                children: showTeamSquad\n            }, void 0, false, {\n                fileName: \"C:\\\\react\\\\Arsenal\\\\my-app\\\\components\\\\team\\\\team_TeamList\\\\TeamList.js\",\n                lineNumber: 63,\n                columnNumber: 13\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\react\\\\Arsenal\\\\my-app\\\\components\\\\team\\\\team_TeamList\\\\TeamList.js\",\n        lineNumber: 57,\n        columnNumber: 9\n    }, _this);\n};\n_s(TeamList, \"whxpH6NWkcipbZ50ay/TjC/h0Cg=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch,\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector\n    ];\n});\n_c = TeamList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TeamList);\nvar _c;\n$RefreshReg$(_c, \"TeamList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3RlYW0vdGVhbV9UZWFtTGlzdC9UZWFtTGlzdC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7Ozs7QUFBNEM7QUFDVztBQUNVO0FBQ047QUFFNkM7QUFFeEcsSUFBTVUsV0FBVyxXQUFNOztJQUNuQixJQUFNQyxXQUFXUix3REFBV0E7SUFFNUIsSUFBTVMsU0FBU1Ysd0RBQVdBLENBQUNXLFNBQUFBO2VBQVNBLE1BQU1DLFNBQVMsQ0FBQ0YsTUFBTTs7SUFFMUQsSUFBd0NaLE1BQUFBLGdGQUFBQSxDQUFBQSwrQ0FBUUEsQ0FBQyxLQUFLLE9BQS9DZSxlQUFpQ2YsUUFBbkJnQixrQkFBbUJoQjtJQUN4QyxJQUE4Q0EsT0FBQUEsZ0ZBQUFBLENBQUFBLCtDQUFRQSxDQUFDLFFBQWhEaUIsa0JBQXVDakIsU0FBdEJrQixxQkFBc0JsQjtJQUM5Q0MsZ0RBQVNBLENBQUMsV0FBTTtRQUNaLElBQUlrQixPQUFPQyxVQUFVLEdBQUcsS0FBSztZQUN6QkosZ0JBQWdCLElBQUk7UUFDeEIsQ0FBQztJQUNMLEdBQUcsRUFBRTtJQUVMLElBQU1LLFVBQVVDLFNBQUFBLElBQU07UUFDbEIsSUFBSSxDQUFDVixNQUFNLENBQUNVLEdBQUcsQ0FBQ0MsSUFBSSxFQUFFO1lBQ2xCWixTQUFTRixxREFBU0E7WUFDbEJFLFNBQVNILDJEQUFlQSxDQUFDYztRQUM3QixDQUFDO1FBQ0RKLG1CQUFtQkksU0FBQUE7bUJBQU1BLEtBQUs7O0lBQ2xDO0lBRUEsSUFBTUUsZ0JBQWdCWixPQUFPYSxHQUFHLENBQUMsU0FBQ0MsTUFBTUMsR0FBTTtRQUMxQyxJQUFNQyxRQUFRRixLQUFLRyxPQUFPLEdBQUcseUJBQXlCLHdCQUF3QjtRQUM5RSxxQkFDSSw4REFBQ0M7WUFBa0JDLFdBQVU7OzhCQUN6Qiw4REFBQzNCLDJFQUFlQTtvQkFBQzRCLE1BQU0zQixxRUFBTUE7b0JBQUUwQixXQUFXSDtvQkFBT0ssU0FBUzsrQkFBTUMsWUFBWVA7Ozs7Ozs7Z0JBQzNFRCxLQUFLUyxRQUFRO2dCQUFDOzhCQUFHLDhEQUFDQztvQkFBS0gsU0FBUzsrQkFBTUksV0FBV1Y7OzhCQUFLZixNQUFNLENBQUNlLEVBQUUsQ0FBQ0osSUFBSTs7Ozs7O2dCQUNwRVIsZ0JBQWdCWSxNQUFNVixnQ0FDbkIsOERBQUNxQjtvQkFBT1AsV0FBVTtvQkFBTUUsU0FBUzsrQkFBTVosUUFBUU07OzhCQUFJOzs7Ozs0QkFHbkQsSUFBSTs7V0FQSEQsS0FBS2EsR0FBRzs7Ozs7SUFVekI7SUFFQSxJQUFNTCxjQUFjUCxTQUFBQSxHQUFLO1FBQ3JCLElBQU1hLHNCQUFzQjVCLE9BQU82QixNQUFNLENBQUNmLFNBQUFBO21CQUFRQSxLQUFLSCxJQUFJLEtBQUs7O1FBQ2hFLElBQUlpQixvQkFBb0JFLE1BQU0sS0FBSyxHQUFHO1lBQ2xDLCtDQUErQztZQUMvQy9CLFNBQVNKLDREQUFnQkEsQ0FBQ29CO1FBQzlCLENBQUM7SUFDTDtJQUVBLElBQU1VLGFBQWFWLFNBQUFBLEdBQUs7UUFDcEJoQixTQUFTTCxzRUFBMEJBLENBQUNxQjtJQUN4QztJQUVBLHFCQUNJLDhEQUFDZ0I7UUFBSVosV0FBVTs7MEJBQ1gsOERBQUNhO2dCQUFHYixXQUFVOztrQ0FDViw4REFBQ0Q7a0NBQUc7Ozs7OztrQ0FDSiw4REFBQ0E7a0NBQUc7Ozs7OztrQ0FDSiw4REFBQ0E7a0NBQUc7Ozs7Ozs7Ozs7OzswQkFFUiw4REFBQ2M7Z0JBQUdiLFdBQVU7MEJBQW1CUDs7Ozs7Ozs7Ozs7O0FBRzdDO0dBMURNZDs7UUFDZVAsb0RBQVdBO1FBRWJELG9EQUFXQTs7O0tBSHhCUTtBQTRETiwrREFBZUEsUUFBUUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3RlYW0vdGVhbV9UZWFtTGlzdC9UZWFtTGlzdC5qcz8zOGNhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IsIHVzZURpc3BhdGNoIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWVcIjtcclxuaW1wb3J0IHsgZmFTdGFyIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29uc1wiO1xyXG5cclxuaW1wb3J0IHsgdGVhbV9nZXRDbGlrZWRIZXJvRnJvbUxpc3QsIHRlYW1fbWFrZUNhcHRhaW4sIHRlYW1fYWN0aXZlSGVybywgZmV0Y2hIZXJvIH0gZnJvbSBcIi4uL3RlYW1TbGljZVwiO1xyXG5cclxuY29uc3QgVGVhbUxpc3QgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcblxyXG4gICAgY29uc3QgaGVyb2VzID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUudGVhbVNsaWNlLmhlcm9lcyk7XHJcblxyXG4gICAgY29uc3QgW3Nob3dIZXJvQnRucywgc2V0U2hvd0hlcm9CdG5zXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtjbGlja2VkQnRuSW5kZXgsIHNldENsaWNrZWRCdG5JbmRleF0gPSB1c2VTdGF0ZSgwKTtcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoIDwgODM1KSB7XHJcbiAgICAgICAgICAgIHNldFNob3dIZXJvQnRucyh0cnVlKTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgY29uc3QgZ2V0SGVybyA9IGlkID0+IHtcclxuICAgICAgICBpZiAoIWhlcm9lc1tpZF0ubmFtZSkge1xyXG4gICAgICAgICAgICBkaXNwYXRjaChmZXRjaEhlcm8oKSk7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHRlYW1fYWN0aXZlSGVybyhpZCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzZXRDbGlja2VkQnRuSW5kZXgoaWQgPT4gaWQgKyAxKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3Qgc2hvd1RlYW1TcXVhZCA9IGhlcm9lcy5tYXAoKGl0ZW0sIGkpID0+IHtcclxuICAgICAgICBjb25zdCBzdHlsZSA9IGl0ZW0uY2FwdGFpbiA/IFwiZmEgZmEtc3RhciByZWQtY29sb3JcIiA6IFwiZmEgZmEtc3RhciBibGFjay1jb2xvclwiO1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxsaSBrZXk9e2l0ZW0ubnVtfSBjbGFzc05hbWU9J3RlYW1MaXN0X19pdGVtJz5cclxuICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFTdGFyfSBjbGFzc05hbWU9e3N0eWxlfSBvbkNsaWNrPXsoKSA9PiBtYWtlQ2FwdGFpbihpKX0+PC9Gb250QXdlc29tZUljb24+XHJcbiAgICAgICAgICAgICAgICB7aXRlbS5wb3NpdGlvbn0gLSA8c3BhbiBvbkNsaWNrPXsoKSA9PiBtYWtlQWN0aXZlKGkpfT57aGVyb2VzW2ldLm5hbWV9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAge3Nob3dIZXJvQnRucyAmJiBpID09PSBjbGlja2VkQnRuSW5kZXggPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J2J0bicgb25DbGljaz17KCkgPT4gZ2V0SGVybyhpKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEdldCByYW5kb20gaGVyb1xyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IG1ha2VDYXB0YWluID0gaSA9PiB7XHJcbiAgICAgICAgY29uc3QgY2hlY2tQbGF5ZXJzQ2hvb3NlbiA9IGhlcm9lcy5maWx0ZXIoaXRlbSA9PiBpdGVtLm5hbWUgPT09IFwiLi4uXCIpO1xyXG4gICAgICAgIGlmIChjaGVja1BsYXllcnNDaG9vc2VuLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICAvLyDRgdGC0LDQstC40LzQviDQstGB0ZbQvCDQs9GA0LDQstGG0Y/QvCDRgdGC0LDRgtGD0YEg0LrQsNC/0ZbRgtCw0L3QsCAtIGZhbHNlXHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHRlYW1fbWFrZUNhcHRhaW4oaSkpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgbWFrZUFjdGl2ZSA9IGkgPT4ge1xyXG4gICAgICAgIGRpc3BhdGNoKHRlYW1fZ2V0Q2xpa2VkSGVyb0Zyb21MaXN0KGkpKTtcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndGVhbUxpc3QnPlxyXG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPSd0ZWFtTGlzdF9faGVhZGluZyc+XHJcbiAgICAgICAgICAgICAgICA8bGk+Q2xpY2sgb24gYSBjYXJkIGFuZCBnZXQgeW91ciByYW5kb20gaGVybzwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGk+Q2hvb3NlIGEgY2FwdGFpbjwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGk+TWFrZSAzIHN1YnN0aXR1dGlvbnMgaWYgeW91IG5lZWQ8L2xpPlxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPSd0ZWFtTGlzdF9fc3F1YWQnPntzaG93VGVhbVNxdWFkfTwvdWw+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGVhbUxpc3Q7XHJcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVNlbGVjdG9yIiwidXNlRGlzcGF0Y2giLCJGb250QXdlc29tZUljb24iLCJmYVN0YXIiLCJ0ZWFtX2dldENsaWtlZEhlcm9Gcm9tTGlzdCIsInRlYW1fbWFrZUNhcHRhaW4iLCJ0ZWFtX2FjdGl2ZUhlcm8iLCJmZXRjaEhlcm8iLCJUZWFtTGlzdCIsImRpc3BhdGNoIiwiaGVyb2VzIiwic3RhdGUiLCJ0ZWFtU2xpY2UiLCJzaG93SGVyb0J0bnMiLCJzZXRTaG93SGVyb0J0bnMiLCJjbGlja2VkQnRuSW5kZXgiLCJzZXRDbGlja2VkQnRuSW5kZXgiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiZ2V0SGVybyIsImlkIiwibmFtZSIsInNob3dUZWFtU3F1YWQiLCJtYXAiLCJpdGVtIiwiaSIsInN0eWxlIiwiY2FwdGFpbiIsImxpIiwiY2xhc3NOYW1lIiwiaWNvbiIsIm9uQ2xpY2siLCJtYWtlQ2FwdGFpbiIsInBvc2l0aW9uIiwic3BhbiIsIm1ha2VBY3RpdmUiLCJidXR0b24iLCJudW0iLCJjaGVja1BsYXllcnNDaG9vc2VuIiwiZmlsdGVyIiwibGVuZ3RoIiwiZGl2IiwidWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/team/team_TeamList/TeamList.js\n"));

/***/ })

});