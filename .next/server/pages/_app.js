(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 7146:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ layout_Layout)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./public/imgs/logo.svg
var logo = __webpack_require__(5106);
;// CONCATENATED MODULE: ./public/imgs/adidas.png
/* harmony default export */ const adidas = ({"src":"/_next/static/media/adidas.0f65fd79.png","height":100,"width":182,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAYAAACzzX7wAAAASklEQVR42mMAgX///jECKRjbEIjXQNh/GdElA4B4LxA/BeJiuG4o7QPEM4F4HRB3AfFcIJaGKZIB4mYgrgPiBiCuBuKyf//+TQYA9VpNshmx3bkAAAAASUVORK5CYII=","blurWidth":8,"blurHeight":4});
;// CONCATENATED MODULE: ./public/imgs/emirates.png
/* harmony default export */ const emirates = ({"src":"/_next/static/media/emirates.12e376eb.png","height":100,"width":182,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAYAAACzzX7wAAAATklEQVR42k3KIQqAQABE0fX+lxCsnkERwWAUm0FsFs2C7NcfdmHDg2FmAsQAiEWfbp0pPw4xW2VJqxqz3jxWwKhDTbLpKg+dZg2a1AP7D6yDc04S+SdNAAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":4});
;// CONCATENATED MODULE: ./public/imgs/visit-rwanda.png
/* harmony default export */ const visit_rwanda = ({"src":"/_next/static/media/visit-rwanda.7e52488a.png","height":100,"width":182,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAQAAAAZxLZ7AAAAQUlEQVR42iXIQQpAQBhA4X9hJxEaR3EPV7BRFkqynpN/GU2vt/kiQmj0pUEn4gfJ7nBZK2yy1y17nAW0JnN5lCwfPHkhLAXvbAYAAAAASUVORK5CYII=","blurWidth":8,"blurHeight":4});
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./components/squad/data.js
var data = __webpack_require__(7669);
;// CONCATENATED MODULE: ./components/squad/Squad.js



const Squad = ()=>{
    const showData = (position)=>{
        const playersOnPosition = data/* players.filter */.F.filter((item)=>item.position === position);
        const showPlayers = playersOnPosition.map((item)=>{
            return /*#__PURE__*/ jsx_runtime_.jsx("li", {
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                    href: `/squad/${item.squadNumber}`,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            children: item.squadNumber
                        }),
                        item.name
                    ]
                })
            }, item.squadNumber);
        });
        return showPlayers;
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "header-tab-item",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        children: "GOALKEEPERS"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                        children: showData("goalkeepers")
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "header-tab-item",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        children: "DEFENDERS"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                        children: showData("defenders")
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "header-tab-item",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        children: "MIDFIELDERS"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                        children: showData("midfielders")
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "header-tab-item",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        children: "FORWARDS"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                        children: showData("forwards")
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const squad_Squad = (Squad);

;// CONCATENATED MODULE: ./components/layout/Header.js









const Header = ()=>{
    const [showBasket, setShowBasket] = (0,external_react_.useState)(false);
    // let location = useLocation();
    // useEffect(() => {
    //     location.pathname === "/shop" ? setShowBasket(true) : setShowBasket(false);
    // }, [location]);
    const [showTab, setShowTab] = (0,external_react_.useState)(false);
    const showBasketContent = showBasket ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "header__wrapper_brends",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {}),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {}),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {})
        ]
    }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "header__wrapper_brends",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                src: adidas,
                width: 60,
                alt: ""
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                src: emirates,
                width: 60,
                alt: ""
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                src: visit_rwanda,
                width: 60,
                alt: ""
            })
        ]
    });
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "header-container",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("header", {
                    className: "header",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "header__wrapper_top",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                className: "header__wrapper_top-list",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: "https://www.facebook.com/denis.rybachok",
                                            target: "_blank",
                                            children: "Facebook"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: "https://github.com/Denys1994q",
                                            target: "_blank",
                                            children: "GitHub"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: "https://t.me/drybachok",
                                            target: "_blank",
                                            children: "Telegram"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: "#",
                                            target: "_blank",
                                            children: "0975300083"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: "#",
                                            target: "_blank",
                                            children: "drybachok@gmail.com"
                                        })
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "header__wrapper",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "header__wrapper_Image",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "/",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                            className: "header__logo",
                                            src: logo/* default */.Z,
                                            width: 110,
                                            alt: ""
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "header__wrapper_list",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                        className: "header__box_list",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                onMouseEnter: ()=>setShowTab(true),
                                                className: "header-squad",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                        href: "/",
                                                        children: "Squad"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: showTab ? "header-squad-bef header-squad-bef-active" : "header-squad-bef"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        style: {
                                                            display: showTab ? "block" : "none"
                                                        },
                                                        className: "header-squad-fake"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: "/team",
                                                    children: "Create team"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: "/cinema",
                                                    children: "Cinema"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: "/shop",
                                                    children: "Shop"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: "/contacts",
                                                    children: "Contact us"
                                                })
                                            })
                                        ]
                                    })
                                }),
                                showBasketContent
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    style: {
                        display: showTab ? "flex" : "none"
                    },
                    className: "header-tab",
                    onMouseLeave: (e)=>setShowTab(false),
                    children: /*#__PURE__*/ jsx_runtime_.jsx(squad_Squad, {})
                })
            ]
        })
    });
};
/* harmony default export */ const layout_Header = (Header);

;// CONCATENATED MODULE: ./components/layout/Footer.js


const Footer = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "footer",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                className: "footer-logos",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                            width: 80,
                            height: 40,
                            src: "/imgs/adidas.png",
                            alt: "adidas"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                            width: 80,
                            height: 40,
                            src: "/imgs/emirates.png",
                            alt: "emirates"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                            width: 80,
                            height: 40,
                            src: "/imgs/visit-rwanda.png",
                            alt: "visit-rwanda"
                        })
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const layout_Footer = (Footer);

;// CONCATENATED MODULE: ./components/layout/Layout.js



const Layout = ({ children  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(layout_Header, {}),
            children,
            /*#__PURE__*/ jsx_runtime_.jsx(layout_Footer, {})
        ]
    });
};
/* harmony default export */ const layout_Layout = (Layout);


/***/ }),

/***/ 8484:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_index_sass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6693);
/* harmony import */ var _styles_index_sass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_index_sass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fortawesome_fontawesome_svg_core_styles_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5800);
/* harmony import */ var _fortawesome_fontawesome_svg_core_styles_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_fontawesome_svg_core_styles_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(86);
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8873);
/* harmony import */ var _components_layout_Layout_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7146);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_3__]);
_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_3__.config.autoAddCss = false;


const MyApp = ({ Component , pageProps  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_layout_Layout_js__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
            ...pageProps
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_store_store__WEBPACK_IMPORTED_MODULE_4__/* .wrapper.withRedux */ .Y.withRedux(MyApp)); // import "../styles/index.sass";
 // import "@fortawesome/fontawesome-svg-core/styles.css";
 // import { config } from "@fortawesome/fontawesome-svg-core";
 // config.autoAddCss = false;
 // import { Provider } from "react-redux";
 // import { store } from "../store/store.js";
 // import Layout from "../components/layout/Layout.js";
 // const MyApp = ({ Component, pageProps }) => {
 //     return (
 //         <Provider store={store}>
 //             <Layout>
 //                 <Component {...pageProps} />
 //             </Layout>
 //         </Provider>
 //     );
 // };
 // export default MyApp;

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8873:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Y": () => (/* binding */ wrapper)
});

// EXTERNAL MODULE: external "@reduxjs/toolkit"
var toolkit_ = __webpack_require__(5184);
// EXTERNAL MODULE: ./components/main/mainPageSlice.js
var mainPageSlice = __webpack_require__(8040);
// EXTERNAL MODULE: ./components/cinema/cinemaSlice.js
var cinemaSlice = __webpack_require__(3730);
// EXTERNAL MODULE: ./components/team/teamSlice.js
var teamSlice = __webpack_require__(8520);
// EXTERNAL MODULE: ./components/shop/shopSlice.js
var shopSlice = __webpack_require__(9920);
;// CONCATENATED MODULE: external "next-redux-wrapper"
const external_next_redux_wrapper_namespaceObject = require("next-redux-wrapper");
;// CONCATENATED MODULE: ./store/store.js






// рендеринг на сервері - getServerSideProps. Сторінка з усіма даними створюється на сервері
// генерація статичного контенту, всі сторінки створюються один раз в момент зборки приложения. Для більш статичного контенту підходить, де не потрібно щоразу оновлювати сторінки (карточки товарів). getStaticProps
const store = (0,toolkit_.configureStore)({
    reducer: {
        mainPageSlice: mainPageSlice/* default */.Z,
        cinemaSlice: cinemaSlice/* default */.Z,
        teamSlice: teamSlice/* default */.ZP,
        shopSlice: shopSlice/* default */.ZP
    },
    middleware: (getDefaultMiddleware)=>getDefaultMiddleware(),
    devTools: "production" !== "production"
});
const makeStore = ()=>store;
const wrapper = (0,external_next_redux_wrapper_namespaceObject.createWrapper)(makeStore); // import { configureStore } from "@reduxjs/toolkit";
 // import mainPageSlice from "../components/main/mainPageSlice";
 // import cinemaSlice from "../components/cinema/cinemaSlice";
 // import teamSlice from "../components/team/teamSlice";
 // import shopSlice from "../components/shop/shopSlice";
 // // рендеринг на сервері - getServerSideProps. Сторінка з усіма даними створюється на сервері
 // // генерація статичного контенту, всі сторінки створюються один раз в момент зборки приложения. Для більш статичного контенту підходить, де не потрібно щоразу оновлювати сторінки (карточки товарів). getStaticProps
 // export const store = configureStore({
 //     reducer: {
 //         mainPageSlice,
 //         cinemaSlice,
 //         teamSlice,
 //         shopSlice,
 //     },
 //     middleware: getDefaultMiddleware => getDefaultMiddleware(),
 //     devTools: process.env.NODE_ENV !== "production",
 // });


/***/ }),

/***/ 6693:
/***/ (() => {



/***/ }),

/***/ 5184:
/***/ ((module) => {

"use strict";
module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9552:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 6405:
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 86:
/***/ ((module) => {

"use strict";
module.exports = import("@fortawesome/fontawesome-svg-core");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [675,676,783,669,520,920,577,730], () => (__webpack_exec__(8484)));
module.exports = __webpack_exports__;

})();