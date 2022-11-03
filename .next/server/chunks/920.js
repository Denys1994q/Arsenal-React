"use strict";
exports.id = 920;
exports.ids = [920];
exports.modules = {

/***/ 9920:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$c": () => (/* binding */ shop_openBasket),
/* harmony export */   "H2": () => (/* binding */ shop_plusQuantity),
/* harmony export */   "Kg": () => (/* binding */ shop_clearOrder),
/* harmony export */   "Nf": () => (/* binding */ shop_showThanksMessage),
/* harmony export */   "VZ": () => (/* binding */ shop_showMessage),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "_Y": () => (/* binding */ shop_plusAmount),
/* harmony export */   "dg": () => (/* binding */ shop_addToOrder),
/* harmony export */   "i7": () => (/* binding */ shop_minusQuantity),
/* harmony export */   "sq": () => (/* binding */ shop_minusAmount),
/* harmony export */   "t6": () => (/* binding */ shop_clearAmount),
/* harmony export */   "wy": () => (/* binding */ shop_deleteFromOrder)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const initialState = {
    order: [],
    amount: 0,
    openedBasket: false,
    message: false,
    thanksMessage: false
};
const shopSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "shop",
    initialState,
    reducers: {
        shop_addToOrder: (state, action)=>{
            state.order.push(action.payload);
        },
        shop_deleteFromOrder: (state, action)=>{
            state.amount = state.amount - state.order[action.payload].quantity;
            state.order = state.order.filter((item, i)=>i !== action.payload);
        },
        shop_plusQuantity: (state, action)=>{
            state.order[action.payload].quantity = state.order[action.payload].quantity + 1;
        },
        shop_minusQuantity: (state, action)=>{
            state.order[action.payload].quantity = state.order[action.payload].quantity - 1;
        },
        shop_clearOrder: (state)=>{
            state.order = [];
        },
        shop_plusAmount: (state)=>{
            state.amount = state.amount + 1;
        },
        shop_minusAmount: (state)=>{
            state.amount = state.amount - 1;
        },
        shop_clearAmount: (state)=>{
            state.amount = 0;
        },
        shop_openBasket: (state, action)=>{
            state.openedBasket = action.payload;
        },
        shop_showMessage: (state, action)=>{
            state.message = action.payload;
        },
        shop_showThanksMessage: (state, action)=>{
            state.thanksMessage = action.payload;
        }
    }
});
const { actions , reducer  } = shopSlice;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (reducer);
const { shop_addToOrder , shop_deleteFromOrder , shop_plusQuantity , shop_minusQuantity , shop_clearOrder , shop_plusAmount , shop_minusAmount , shop_clearAmount , shop_openBasket , shop_showMessage , shop_showThanksMessage  } = actions;


/***/ })

};
;