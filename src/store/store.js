import { configureStore } from "@reduxjs/toolkit";

import mainPageSlice from "../components/main/mainPageSlice";
import cinemaSlice from "../components/cinema/cinemaSlice";
import teamSlice from "../components/team/teamSlice";
import shopSlice from "../components/shop/shopSlice";

export const store = configureStore({
    reducer: {
        mainPageSlice,
        cinemaSlice,
        teamSlice,
        shopSlice,
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware(),
    devTools: process.env.NODE_ENV !== "production",
});
