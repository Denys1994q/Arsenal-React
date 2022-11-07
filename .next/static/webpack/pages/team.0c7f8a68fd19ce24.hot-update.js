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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"./node_modules/@fortawesome/free-solid-svg-icons/index.mjs\");\n/* harmony import */ var _teamSlice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../teamSlice */ \"./components/team/teamSlice.js\");\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\nvar TeamList = function() {\n    _s();\n    var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();\n    var heroes = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function(state) {\n        return state.teamSlice.heroes;\n    });\n    var showTeamSquad = heroes.map(function(item, i) {\n        var style = item.captain ? \"fa fa-star red-color\" : \"fa fa-star black-color\";\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {\n                    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faStar,\n                    className: style,\n                    onClick: function() {\n                        return makeCaptain(i);\n                    }\n                }, void 0, false, {\n                    fileName: \"C:\\\\react\\\\Arsenal\\\\my-app\\\\components\\\\team\\\\team_TeamList\\\\TeamList.js\",\n                    lineNumber: 16,\n                    columnNumber: 17\n                }, _this),\n                item.position,\n                \" - \",\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    onClick: function() {\n                        return makeActive(i);\n                    },\n                    children: heroes[i].name\n                }, void 0, false, {\n                    fileName: \"C:\\\\react\\\\Arsenal\\\\my-app\\\\components\\\\team\\\\team_TeamList\\\\TeamList.js\",\n                    lineNumber: 17,\n                    columnNumber: 35\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"btn\",\n                    children: \"Get random hero\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\react\\\\Arsenal\\\\my-app\\\\components\\\\team\\\\team_TeamList\\\\TeamList.js\",\n                    lineNumber: 18,\n                    columnNumber: 17\n                }, _this)\n            ]\n        }, item.num, true, {\n            fileName: \"C:\\\\react\\\\Arsenal\\\\my-app\\\\components\\\\team\\\\team_TeamList\\\\TeamList.js\",\n            lineNumber: 15,\n            columnNumber: 13\n        }, _this);\n    });\n    var makeCaptain = function(i) {\n        var checkPlayersChoosen = heroes.filter(function(item) {\n            return item.name === \"...\";\n        });\n        if (checkPlayersChoosen.length === 0) {\n            // ставимо всім гравцям статус капітана - false\n            dispatch((0,_teamSlice__WEBPACK_IMPORTED_MODULE_3__.team_makeCaptain)(i));\n        }\n    };\n    var makeActive = function(i) {\n        dispatch((0,_teamSlice__WEBPACK_IMPORTED_MODULE_3__.team_getClikedHeroFromList)(i));\n    };\n    return showTeamSquad;\n};\n_s(TeamList, \"8QsbxKv1Qnwt0LZ41AZlChRHfMg=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch,\n        react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector\n    ];\n});\n_c = TeamList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TeamList);\nvar _c;\n$RefreshReg$(_c, \"TeamList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3RlYW0vdGVhbV9UZWFtTGlzdC9UZWFtTGlzdC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7OztBQUF1RDtBQUNVO0FBQ047QUFFaUI7QUFFNUUsSUFBTU0sV0FBVyxXQUFNOztJQUNuQixJQUFNQyxXQUFXTix3REFBV0E7SUFFNUIsSUFBTU8sU0FBU1Isd0RBQVdBLENBQUNTLFNBQUFBO2VBQVNBLE1BQU1DLFNBQVMsQ0FBQ0YsTUFBTTs7SUFFMUQsSUFBTUcsZ0JBQWdCSCxPQUFPSSxHQUFHLENBQUMsU0FBQ0MsTUFBTUMsR0FBTTtRQUMxQyxJQUFNQyxRQUFRRixLQUFLRyxPQUFPLEdBQUcseUJBQXlCLHdCQUF3QjtRQUM5RSxxQkFDSSw4REFBQ0M7OzhCQUNHLDhEQUFDZiwyRUFBZUE7b0JBQUNnQixNQUFNZixxRUFBTUE7b0JBQUVnQixXQUFXSjtvQkFBT0ssU0FBUzsrQkFBTUMsWUFBWVA7Ozs7Ozs7Z0JBQzNFRCxLQUFLUyxRQUFRO2dCQUFDOzhCQUFHLDhEQUFDQztvQkFBS0gsU0FBUzsrQkFBTUksV0FBV1Y7OzhCQUFLTixNQUFNLENBQUNNLEVBQUUsQ0FBQ1csSUFBSTs7Ozs7OzhCQUNyRSw4REFBQ0M7b0JBQU9QLFdBQVU7OEJBQU07Ozs7Ozs7V0FIbkJOLEtBQUtjLEdBQUc7Ozs7O0lBTXpCO0lBRUEsSUFBTU4sY0FBY1AsU0FBQUEsR0FBSztRQUNyQixJQUFNYyxzQkFBc0JwQixPQUFPcUIsTUFBTSxDQUFDaEIsU0FBQUE7bUJBQVFBLEtBQUtZLElBQUksS0FBSzs7UUFDaEUsSUFBSUcsb0JBQW9CRSxNQUFNLEtBQUssR0FBRztZQUNsQywrQ0FBK0M7WUFDL0N2QixTQUFTRiw0REFBZ0JBLENBQUNTO1FBQzlCLENBQUM7SUFDTDtJQUVBLElBQU1VLGFBQWFWLFNBQUFBLEdBQUs7UUFDcEJQLFNBQVNILHNFQUEwQkEsQ0FBQ1U7SUFDeEM7SUFFQSxPQUFPSDtBQUNYO0dBN0JNTDs7UUFDZUwsb0RBQVdBO1FBRWJELG9EQUFXQTs7O0tBSHhCTTtBQStCTiwrREFBZUEsUUFBUUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3RlYW0vdGVhbV9UZWFtTGlzdC9UZWFtTGlzdC5qcz8zOGNhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVNlbGVjdG9yLCB1c2VEaXNwYXRjaCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tIFwiQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lXCI7XHJcbmltcG9ydCB7IGZhU3RhciB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnNcIjtcclxuXHJcbmltcG9ydCB7IHRlYW1fZ2V0Q2xpa2VkSGVyb0Zyb21MaXN0LCB0ZWFtX21ha2VDYXB0YWluIH0gZnJvbSBcIi4uL3RlYW1TbGljZVwiO1xyXG5cclxuY29uc3QgVGVhbUxpc3QgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcblxyXG4gICAgY29uc3QgaGVyb2VzID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUudGVhbVNsaWNlLmhlcm9lcyk7XHJcblxyXG4gICAgY29uc3Qgc2hvd1RlYW1TcXVhZCA9IGhlcm9lcy5tYXAoKGl0ZW0sIGkpID0+IHtcclxuICAgICAgICBjb25zdCBzdHlsZSA9IGl0ZW0uY2FwdGFpbiA/IFwiZmEgZmEtc3RhciByZWQtY29sb3JcIiA6IFwiZmEgZmEtc3RhciBibGFjay1jb2xvclwiO1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxsaSBrZXk9e2l0ZW0ubnVtfT5cclxuICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFTdGFyfSBjbGFzc05hbWU9e3N0eWxlfSBvbkNsaWNrPXsoKSA9PiBtYWtlQ2FwdGFpbihpKX0+PC9Gb250QXdlc29tZUljb24+XHJcbiAgICAgICAgICAgICAgICB7aXRlbS5wb3NpdGlvbn0gLSA8c3BhbiBvbkNsaWNrPXsoKSA9PiBtYWtlQWN0aXZlKGkpfT57aGVyb2VzW2ldLm5hbWV9PC9zcGFuPiBcclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuXCI+R2V0IHJhbmRvbSBoZXJvPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IG1ha2VDYXB0YWluID0gaSA9PiB7XHJcbiAgICAgICAgY29uc3QgY2hlY2tQbGF5ZXJzQ2hvb3NlbiA9IGhlcm9lcy5maWx0ZXIoaXRlbSA9PiBpdGVtLm5hbWUgPT09IFwiLi4uXCIpO1xyXG4gICAgICAgIGlmIChjaGVja1BsYXllcnNDaG9vc2VuLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICAvLyDRgdGC0LDQstC40LzQviDQstGB0ZbQvCDQs9GA0LDQstGG0Y/QvCDRgdGC0LDRgtGD0YEg0LrQsNC/0ZbRgtCw0L3QsCAtIGZhbHNlXHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHRlYW1fbWFrZUNhcHRhaW4oaSkpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgbWFrZUFjdGl2ZSA9IGkgPT4ge1xyXG4gICAgICAgIGRpc3BhdGNoKHRlYW1fZ2V0Q2xpa2VkSGVyb0Zyb21MaXN0KGkpKTtcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIHNob3dUZWFtU3F1YWQ7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUZWFtTGlzdDtcclxuIl0sIm5hbWVzIjpbInVzZVNlbGVjdG9yIiwidXNlRGlzcGF0Y2giLCJGb250QXdlc29tZUljb24iLCJmYVN0YXIiLCJ0ZWFtX2dldENsaWtlZEhlcm9Gcm9tTGlzdCIsInRlYW1fbWFrZUNhcHRhaW4iLCJUZWFtTGlzdCIsImRpc3BhdGNoIiwiaGVyb2VzIiwic3RhdGUiLCJ0ZWFtU2xpY2UiLCJzaG93VGVhbVNxdWFkIiwibWFwIiwiaXRlbSIsImkiLCJzdHlsZSIsImNhcHRhaW4iLCJsaSIsImljb24iLCJjbGFzc05hbWUiLCJvbkNsaWNrIiwibWFrZUNhcHRhaW4iLCJwb3NpdGlvbiIsInNwYW4iLCJtYWtlQWN0aXZlIiwibmFtZSIsImJ1dHRvbiIsIm51bSIsImNoZWNrUGxheWVyc0Nob29zZW4iLCJmaWx0ZXIiLCJsZW5ndGgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/team/team_TeamList/TeamList.js\n"));

/***/ })

});