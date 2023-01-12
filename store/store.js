import { configureStore } from "@reduxjs/toolkit";

import mainPageSlice from "../components/pages/main/mainPageSlice";
import cinemaSlice from "../components/pages/cinema/cinemaSlice";
import teamSlice from "../components/pages/team/teamSlice";
import shopSlice from "../components/pages/shop/shopSlice";

import { createWrapper, HYDRATE } from "next-redux-wrapper";

const store = configureStore({
    reducer: {
        mainPageSlice,
        cinemaSlice,
        teamSlice,
        shopSlice,
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware(),
    devTools: process.env.NODE_ENV !== "production",
});

const makeStore = () => store;

export const wrapper = createWrapper(makeStore);
