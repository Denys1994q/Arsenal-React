import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    order: [],
    amount: 0,
    openedBasket: false,
    message: false,
    thanksMessage: false
};

const shopSlice = createSlice({
    name: "shop",
    initialState,
    reducers: {
        shop_addToOrder: (state, action) => {
            state.order.push(action.payload);
        },
        shop_deleteFromOrder: (state, action) => {
            state.amount = state.amount - state.order[action.payload].quantity;
            state.order = state.order.filter((item, i) => i !== action.payload);
        },
        shop_plusQuantity: (state, action) => {
            state.order[action.payload].quantity = state.order[action.payload].quantity + 1;
        },
        shop_minusQuantity: (state, action) => {
            state.order[action.payload].quantity = state.order[action.payload].quantity - 1;
        },
        shop_clearOrder: state => {
            state.order = [];
        },
        shop_plusAmount: state => {
            state.amount = state.amount + 1;
        },
        shop_minusAmount: state => {
            state.amount = state.amount - 1;
        },
        shop_clearAmount: state => {
            state.amount = 0;
        },
        shop_openBasket: (state, action) => {
            state.openedBasket = action.payload;
        },
        shop_showMessage: (state, action) => {
            state.message = action.payload;
        },
        shop_showThanksMessage: (state, action) => {
            state.thanksMessage = action.payload;
        },
    },
});

const { actions, reducer } = shopSlice;

export default reducer;

export const {
    shop_addToOrder,
    shop_deleteFromOrder,
    shop_plusQuantity,
    shop_minusQuantity,
    shop_clearOrder,
    shop_plusAmount,
    shop_minusAmount,
    shop_clearAmount,
    shop_openBasket,
    shop_showMessage,
    shop_showThanksMessage
} = actions;
