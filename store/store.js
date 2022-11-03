import { configureStore } from "@reduxjs/toolkit";

import mainPageSlice from "../components/main/mainPageSlice";
import cinemaSlice from "../components/cinema/cinemaSlice";
import teamSlice from "../components/team/teamSlice";
import shopSlice from "../components/shop/shopSlice";

import { createWrapper, HYDRATE } from "next-redux-wrapper";
// рендеринг на сервері - getServerSideProps. Сторінка з усіма даними створюється на сервері
// генерація статичного контенту, всі сторінки створюються один раз в момент зборки приложения. Для більш статичного контенту підходить, де не потрібно щоразу оновлювати сторінки (карточки товарів). getStaticProps

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









// import { configureStore } from "@reduxjs/toolkit";

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
