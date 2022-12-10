"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/layout/Header.js":
/*!*************************************!*\
  !*** ./components/layout/Header.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @swc/helpers/src/_sliced_to_array.mjs */ \"./node_modules/@swc/helpers/src/_sliced_to_array.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _public_imgs_logo_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../public/imgs/logo.svg */ \"./public/imgs/logo.svg\");\n/* harmony import */ var _public_imgs_adidas_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../public/imgs/adidas.png */ \"./public/imgs/adidas.png\");\n/* harmony import */ var _public_imgs_emirates_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../public/imgs/emirates.png */ \"./public/imgs/emirates.png\");\n/* harmony import */ var _public_imgs_visit_rwanda_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../public/imgs/visit-rwanda.png */ \"./public/imgs/visit-rwanda.png\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"./node_modules/@fortawesome/free-solid-svg-icons/index.mjs\");\n/* harmony import */ var _squad_Squad__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../squad/Squad */ \"./components/squad/Squad.js\");\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\nvar Header = function() {\n    _s();\n    var asPath = (0,next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter)().asPath;\n    // показує блок з гравцями\n    var ref = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_11__[\"default\"])((0,react__WEBPACK_IMPORTED_MODULE_8__.useState)(false), 2), showTab = ref[0], setShowTab = ref[1];\n    // показує бургер меню\n    var ref1 = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_11__[\"default\"])((0,react__WEBPACK_IMPORTED_MODULE_8__.useState)(true), 2), clickedBurger = ref1[0], setClickedBurger = ref1[1];\n    var links = [\n        {\n            to: \"team\",\n            title: \"Create team\"\n        },\n        {\n            to: \"cinema\",\n            title: \"Cinema\"\n        },\n        {\n            to: \"shop\",\n            title: \"Shop\"\n        },\n        {\n            to: \"contacts\",\n            title: \"Contact us\"\n        }\n    ];\n    var showLinks = links.map(function(item) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {\n                href: \"/\".concat(item.to),\n                onClick: function() {\n                    return closeMenu();\n                },\n                className: asPath === \"/\".concat(item.to) ? \"activeLink\" : \"\",\n                children: item.title\n            }, void 0, false, {\n                fileName: \"C:\\\\react\\\\Arsenal\\\\my-app\\\\components\\\\layout\\\\Header.js\",\n                lineNumber: 32,\n                columnNumber: 17\n            }, _this)\n        }, void 0, false, {\n            fileName: \"C:\\\\react\\\\Arsenal\\\\my-app\\\\components\\\\layout\\\\Header.js\",\n            lineNumber: 31,\n            columnNumber: 13\n        }, _this);\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_8__.useEffect)(function() {\n        if (window.innerWidth < 935) {\n            setClickedBurger(false);\n        }\n    }, []);\n    // відкривати закривати бургер меню\n    var toggleBurgerMenu = function() {\n        setClickedBurger(function(old) {\n            return !old;\n        });\n        // \n        setShowTab(false);\n    };\n    var toggleTab = function() {\n        setShowTab(function(old) {\n            return !old;\n        });\n    };\n    // закрити меню після кліку на його пункти\n    var closeMenu = function() {\n        setClickedBurger(false);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                className: \"header\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"header__top\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                            className: \"header__topList\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                        href: \"https://www.facebook.com/denis.rybachok\",\n                                        target: \"_blank\",\n                                        children: \"Facebook\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\react\\\\Arsenal\\\\my-app\\\\components\\\\layout\\\\Header.js\",\n                                        lineNumber: 68,\n                                        columnNumber: 29\n                                    }, _this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\react\\\\Arsenal\\\\my-app\\\\components\\\\layout\\\\Header.js\",\n                                    lineNumber: 67,\n                                    columnNumber: 25\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                        href: \"https://github.com/Denys1994q\",\n                                        target: \"_blank\",\n                                        children: \"GitHub\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\react\\\\Arsenal\\\\my-app\\\\components\\\\layout\\\\Header.js\",\n                                        lineNumber: 73,\n                                        columnNumber: 29\n                                    }, _this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\react\\\\Arsenal\\\\my-app\\\\components\\\\layout\\\\Header.js\",\n                                    lineNumber: 72,\n                                    columnNumber: 25\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                        href: \"https://t.me/drybachok\",\n                                        target: \"_blank\",\n                                        children: \"Telegram\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\react\\\\Arsenal\\\\my-app\\\\components\\\\layout\\\\Header.js\",\n                                        lineNumber: 78,\n                                        columnNumber: 29\n                                    }, _this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\react\\\\Arsenal\\\\my-app\\\\components\\\\layout\\\\Header.js\",\n                                    lineNumber: 77,\n                                    columnNumber: 25\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                        href: \"#\",\n                                        target: \"_blank\",\n                                        children: \"0975300083\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\react\\\\Arsenal\\\\my-app\\\\components\\\\layout\\\\Header.js\",\n                                        lineNumber: 83,\n                                        columnNumber: 29\n                                    }, _this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\react\\\\Arsenal\\\\my-app\\\\components\\\\layout\\\\Header.js\",\n                                    lineNumber: 82,\n                                    columnNumber: 25\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                        href: \"#\",\n                                        target: \"_blank\",\n                                        children: \"drybachok@gmail.com\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\react\\\\Arsenal\\\\my-app\\\\components\\\\layout\\\\Header.js\",\n                                        lineNumber: 88,\n                                        columnNumber: 29\n                                    }, _this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\react\\\\Arsenal\\\\my-app\\\\components\\\\layout\\\\Header.js\",\n                                    lineNumber: 87,\n                                    columnNumber: 25\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\react\\\\Arsenal\\\\my-app\\\\components\\\\layout\\\\Header.js\",\n                            lineNumber: 66,\n                            columnNumber: 21\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\react\\\\Arsenal\\\\my-app\\\\components\\\\layout\\\\Header.js\",\n                        lineNumber: 65,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"header__bottom\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {\n                                className: \"header__logoWrapper\",\n                                href: \"/\",\n                                onClick: function() {\n                                    return closeMenu();\n                                },\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_6___default()), {\n                                    className: \"header__logo\",\n                                    src: _public_imgs_logo_svg__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n                                    width: 110,\n                                    alt: \"\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\react\\\\Arsenal\\\\my-app\\\\components\\\\layout\\\\Header.js\",\n                                    lineNumber: 96,\n                                    columnNumber: 25\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\react\\\\Arsenal\\\\my-app\\\\components\\\\layout\\\\Header.js\",\n                                lineNumber: 95,\n                                columnNumber: 21\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                className: \"header__bottomList\",\n                                style: {\n                                    display: clickedBurger ? \"flex\" : \"none\"\n                                },\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        onClick: function() {\n                                            return toggleTab();\n                                        },\n                                        className: \"header-squad\",\n                                        children: \"Squad\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\react\\\\Arsenal\\\\my-app\\\\components\\\\layout\\\\Header.js\",\n                                        lineNumber: 99,\n                                        columnNumber: 25\n                                    }, _this),\n                                    showLinks\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\react\\\\Arsenal\\\\my-app\\\\components\\\\layout\\\\Header.js\",\n                                lineNumber: 98,\n                                columnNumber: 21\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"header__brends\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_6___default()), {\n                                        src: _public_imgs_adidas_png__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n                                        width: 50,\n                                        alt: \"\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\react\\\\Arsenal\\\\my-app\\\\components\\\\layout\\\\Header.js\",\n                                        lineNumber: 105,\n                                        columnNumber: 25\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_6___default()), {\n                                        src: _public_imgs_emirates_png__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n                                        width: 50,\n                                        alt: \"\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\react\\\\Arsenal\\\\my-app\\\\components\\\\layout\\\\Header.js\",\n                                        lineNumber: 106,\n                                        columnNumber: 25\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_6___default()), {\n                                        src: _public_imgs_visit_rwanda_png__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n                                        width: 50,\n                                        alt: \"\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\react\\\\Arsenal\\\\my-app\\\\components\\\\layout\\\\Header.js\",\n                                        lineNumber: 107,\n                                        columnNumber: 25\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\react\\\\Arsenal\\\\my-app\\\\components\\\\layout\\\\Header.js\",\n                                lineNumber: 104,\n                                columnNumber: 21\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\react\\\\Arsenal\\\\my-app\\\\components\\\\layout\\\\Header.js\",\n                        lineNumber: 94,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"burgerMenu\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_9__.FontAwesomeIcon, {\n                            icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_12__.faBars,\n                            className: \"fa fa-bars fa-2x\",\n                            onClick: function() {\n                                return toggleBurgerMenu();\n                            },\n                            style: {\n                                color: \"white\"\n                            }\n                        }, void 0, false, {\n                            fileName: \"C:\\\\react\\\\Arsenal\\\\my-app\\\\components\\\\layout\\\\Header.js\",\n                            lineNumber: 111,\n                            columnNumber: 21\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\react\\\\Arsenal\\\\my-app\\\\components\\\\layout\\\\Header.js\",\n                        lineNumber: 110,\n                        columnNumber: 17\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\react\\\\Arsenal\\\\my-app\\\\components\\\\layout\\\\Header.js\",\n                lineNumber: 64,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    display: showTab ? \"flex\" : \"none\"\n                },\n                className: \"players\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_squad_Squad__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                    setShowTab: setShowTab,\n                    setClickedBurger: setClickedBurger\n                }, void 0, false, {\n                    fileName: \"C:\\\\react\\\\Arsenal\\\\my-app\\\\components\\\\layout\\\\Header.js\",\n                    lineNumber: 119,\n                    columnNumber: 17\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\react\\\\Arsenal\\\\my-app\\\\components\\\\layout\\\\Header.js\",\n                lineNumber: 118,\n                columnNumber: 13\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\react\\\\Arsenal\\\\my-app\\\\components\\\\layout\\\\Header.js\",\n        lineNumber: 63,\n        columnNumber: 9\n    }, _this);\n};\n_s(Header, \"+heXwu3LGIbXXSg+rc6ydVHiFTk=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter\n    ];\n});\n_c = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUM7O2tEQUNqRiw4REFBQ1E7d0NBQUdFLFNBQVM7bURBQU1POzt3Q0FBYUwsV0FBVTtrREFBZTs7Ozs7O29DQUd4RFA7Ozs7Ozs7MENBRUwsOERBQUNhO2dDQUFJTixXQUFVOztrREFDWCw4REFBQ3ZCLG1EQUFLQTt3Q0FBQ2tDLEtBQUt0QywrREFBTUE7d0NBQUV1QyxPQUFPO3dDQUFJQyxLQUFJOzs7Ozs7a0RBQ25DLDhEQUFDcEMsbURBQUtBO3dDQUFDa0MsS0FBS3JDLGlFQUFRQTt3Q0FBRXNDLE9BQU87d0NBQUlDLEtBQUk7Ozs7OztrREFDckMsOERBQUNwQyxtREFBS0E7d0NBQUNrQyxLQUFLcEMscUVBQVdBO3dDQUFFcUMsT0FBTzt3Q0FBSUMsS0FBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQUdoRCw4REFBQ1A7d0JBQUlOLFdBQVU7a0NBQ1gsNEVBQUNuQiwyRUFBZUE7NEJBQ1ptQyxNQUFNbEMsc0VBQU1BOzRCQUNaa0IsV0FBVzs0QkFDWEYsU0FBUzt1Q0FBTUs7OzRCQUNmVyxPQUFPO2dDQUFFRyxPQUFPOzRCQUFROzs7Ozs7Ozs7Ozs7Ozs7OzswQkFHcEMsOERBQUNYO2dCQUFJUSxPQUFPO29CQUFFQyxTQUFTN0IsVUFBVSxTQUFTLE1BQU07Z0JBQUM7Z0JBQUdjLFdBQVU7MEJBQzFELDRFQUFDakIscURBQUtBO29CQUFDSSxZQUFZQTtvQkFBWUUsa0JBQWtCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJakU7R0E1R01MOztRQUNpQk4sa0RBQVNBOzs7S0FEMUJNO0FBOEdOLCtEQUFlQSxNQUFNQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvbGF5b3V0L0hlYWRlci5qcz81ZWVkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBsb2dvIGZyb20gXCIuLi8uLi9wdWJsaWMvaW1ncy9sb2dvLnN2Z1wiO1xyXG5pbXBvcnQgYWRpZGFzIGZyb20gXCIuLi8uLi9wdWJsaWMvaW1ncy9hZGlkYXMucG5nXCI7XHJcbmltcG9ydCBlbWlyYXRlcyBmcm9tIFwiLi4vLi4vcHVibGljL2ltZ3MvZW1pcmF0ZXMucG5nXCI7XHJcbmltcG9ydCB2aXNpdFJ3YW5kYSBmcm9tIFwiLi4vLi4vcHVibGljL2ltZ3MvdmlzaXQtcndhbmRhLnBuZ1wiO1xyXG5cclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZVwiO1xyXG5pbXBvcnQgeyBmYUJhcnMgfSBmcm9tIFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zXCI7XHJcblxyXG5pbXBvcnQgU3F1YWQgZnJvbSBcIi4uL3NxdWFkL1NxdWFkXCI7XHJcblxyXG5jb25zdCBIZWFkZXIgPSAoKSA9PiB7XHJcbiAgICBjb25zdCB7IGFzUGF0aCB9ID0gdXNlUm91dGVyKCk7XHJcbiAgICAvLyDQv9C+0LrQsNC30YPRlCDQsdC70L7QuiDQtyDQs9GA0LDQstGG0Y/QvNC4XHJcbiAgICBjb25zdCBbc2hvd1RhYiwgc2V0U2hvd1RhYl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICAvLyDQv9C+0LrQsNC30YPRlCDQsdGD0YDQs9C10YAg0LzQtdC90Y5cclxuICAgIGNvbnN0IFtjbGlja2VkQnVyZ2VyLCBzZXRDbGlja2VkQnVyZ2VyXSA9IHVzZVN0YXRlKHRydWUpO1xyXG5cclxuICAgIGNvbnN0IGxpbmtzID0gW1xyXG4gICAgICAgIHsgdG86IFwidGVhbVwiLCB0aXRsZTogXCJDcmVhdGUgdGVhbVwiIH0sXHJcbiAgICAgICAgeyB0bzogXCJjaW5lbWFcIiwgdGl0bGU6IFwiQ2luZW1hXCIgfSxcclxuICAgICAgICB7IHRvOiBcInNob3BcIiwgdGl0bGU6IFwiU2hvcFwiIH0sXHJcbiAgICAgICAgeyB0bzogXCJjb250YWN0c1wiLCB0aXRsZTogXCJDb250YWN0IHVzXCIgfSxcclxuICAgIF07XHJcblxyXG4gICAgY29uc3Qgc2hvd0xpbmtzID0gbGlua3MubWFwKGl0ZW0gPT4ge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgICAgICAgICAgaHJlZj17YC8ke2l0ZW0udG99YH1cclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBjbG9zZU1lbnUoKX1cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2FzUGF0aCA9PT0gYC8ke2l0ZW0udG99YCA/IFwiYWN0aXZlTGlua1wiIDogXCJcIn0+XHJcbiAgICAgICAgICAgICAgICAgICAge2l0ZW0udGl0bGV9XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoIDwgOTM1KSB7XHJcbiAgICAgICAgICAgIHNldENsaWNrZWRCdXJnZXIoZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFtdKTtcclxuICAgIC8vINCy0ZbQtNC60YDQuNCy0LDRgtC4INC30LDQutGA0LjQstCw0YLQuCDQsdGD0YDQs9C10YAg0LzQtdC90Y5cclxuICAgIGNvbnN0IHRvZ2dsZUJ1cmdlck1lbnUgPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0Q2xpY2tlZEJ1cmdlcihvbGQgPT4gIW9sZCk7XHJcbiAgICAgICAgLy8gXHJcbiAgICAgICAgc2V0U2hvd1RhYihmYWxzZSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHRvZ2dsZVRhYiA9ICgpID0+IHtcclxuICAgICAgICBzZXRTaG93VGFiKG9sZCA9PiAhb2xkKTtcclxuICAgIH07XHJcbiAgICAvLyDQt9Cw0LrRgNC40YLQuCDQvNC10L3RjiDQv9GW0YHQu9GPINC60LvRltC60YMg0L3QsCDQudC+0LPQviDQv9GD0L3QutGC0LhcclxuICAgIGNvbnN0IGNsb3NlTWVudSA9ICgpID0+IHtcclxuICAgICAgICBzZXRDbGlja2VkQnVyZ2VyKGZhbHNlKTtcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8aGVhZGVyIGNsYXNzTmFtZT0naGVhZGVyJz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdoZWFkZXJfX3RvcCc+XHJcbiAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT0naGVhZGVyX190b3BMaXN0Jz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj0naHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL2RlbmlzLnJ5YmFjaG9rJyB0YXJnZXQ9J19ibGFuayc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRmFjZWJvb2tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj0naHR0cHM6Ly9naXRodWIuY29tL0RlbnlzMTk5NHEnIHRhcmdldD0nX2JsYW5rJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBHaXRIdWJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj0naHR0cHM6Ly90Lm1lL2RyeWJhY2hvaycgdGFyZ2V0PSdfYmxhbmsnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRlbGVncmFtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9JyMnIHRhcmdldD0nX2JsYW5rJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAwOTc1MzAwMDgzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9JyMnIHRhcmdldD0nX2JsYW5rJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkcnliYWNob2tAZ21haWwuY29tXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2hlYWRlcl9fYm90dG9tJz5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBjbGFzc05hbWU9J2hlYWRlcl9fbG9nb1dyYXBwZXInIGhyZWY9Jy8nIG9uQ2xpY2s9eygpID0+IGNsb3NlTWVudSgpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIGNsYXNzTmFtZT0naGVhZGVyX19sb2dvJyBzcmM9e2xvZ299IHdpZHRoPXsxMTB9IGFsdD0nJyAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPSdoZWFkZXJfX2JvdHRvbUxpc3QnIHN0eWxlPXt7IGRpc3BsYXk6IGNsaWNrZWRCdXJnZXIgPyBcImZsZXhcIiA6IFwibm9uZVwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgb25DbGljaz17KCkgPT4gdG9nZ2xlVGFiKCl9IGNsYXNzTmFtZT0naGVhZGVyLXNxdWFkJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNxdWFkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtzaG93TGlua3N9XHJcbiAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naGVhZGVyX19icmVuZHMnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPXthZGlkYXN9IHdpZHRoPXs1MH0gYWx0PScnIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9e2VtaXJhdGVzfSB3aWR0aD17NTB9IGFsdD0nJyAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPXt2aXNpdFJ3YW5kYX0gd2lkdGg9ezUwfSBhbHQ9JycgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2J1cmdlck1lbnUnPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbj17ZmFCYXJzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1wiZmEgZmEtYmFycyBmYS0yeFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0b2dnbGVCdXJnZXJNZW51KCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGNvbG9yOiBcIndoaXRlXCIgfX0+PC9Gb250QXdlc29tZUljb24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9oZWFkZXI+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogc2hvd1RhYiA/IFwiZmxleFwiIDogXCJub25lXCIgfX0gY2xhc3NOYW1lPSdwbGF5ZXJzJz5cclxuICAgICAgICAgICAgICAgIDxTcXVhZCBzZXRTaG93VGFiPXtzZXRTaG93VGFifSBzZXRDbGlja2VkQnVyZ2VyPXtzZXRDbGlja2VkQnVyZ2VyfSAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XHJcbiJdLCJuYW1lcyI6WyJsb2dvIiwiYWRpZGFzIiwiZW1pcmF0ZXMiLCJ2aXNpdFJ3YW5kYSIsIkxpbmsiLCJJbWFnZSIsInVzZVJvdXRlciIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiRm9udEF3ZXNvbWVJY29uIiwiZmFCYXJzIiwiU3F1YWQiLCJIZWFkZXIiLCJhc1BhdGgiLCJzaG93VGFiIiwic2V0U2hvd1RhYiIsImNsaWNrZWRCdXJnZXIiLCJzZXRDbGlja2VkQnVyZ2VyIiwibGlua3MiLCJ0byIsInRpdGxlIiwic2hvd0xpbmtzIiwibWFwIiwiaXRlbSIsImxpIiwiaHJlZiIsIm9uQ2xpY2siLCJjbG9zZU1lbnUiLCJjbGFzc05hbWUiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwidG9nZ2xlQnVyZ2VyTWVudSIsIm9sZCIsInRvZ2dsZVRhYiIsImRpdiIsImhlYWRlciIsInVsIiwiYSIsInRhcmdldCIsInNyYyIsIndpZHRoIiwiYWx0Iiwic3R5bGUiLCJkaXNwbGF5IiwiaWNvbiIsImNvbG9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/layout/Header.js\n"));

/***/ })

});