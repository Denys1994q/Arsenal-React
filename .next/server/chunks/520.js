"use strict";
exports.id = 520;
exports.ids = [520];
exports.modules = {

/***/ 7599:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/team-card-hulk.644d1009.jpg","height":600,"width":506,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgABwMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABgEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEAMQAAAApgf/xAAcEAABBAMBAAAAAAAAAAAAAAACAQQGEgADBRP/2gAIAQEAAT8AayiPDIXRn029FU67fUqEKCOf/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAgEBPwB//8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAwEBPwB//9k=","blurWidth":7,"blurHeight":8});

/***/ }),

/***/ 8520:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JH": () => (/* binding */ fetchHero),
/* harmony export */   "LI": () => (/* binding */ team_activeHero),
/* harmony export */   "SV": () => (/* binding */ team_makeSubstitution),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "q": () => (/* binding */ team_getClikedHeroFromList),
/* harmony export */   "q8": () => (/* binding */ team_makeCaptain)
/* harmony export */ });
/* unused harmony export team_updateHeroInfo */
/* harmony import */ var _public_imgs_team_card_hulk_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7599);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hooks_http_hook__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4457);



let heroesArr = [];
const positionArr = [
    "Goalkeeper",
    "Left Back",
    "Center Back",
    "Center Back",
    "Right Back",
    "Left midfielder",
    "Center midfielder",
    "Right midfielder",
    "Left forward",
    "Center forward",
    "Right forward"
];
for(let i = 0; i < 11; i++){
    const hero = {
        img: _public_imgs_team_card_hulk_jpg__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z,
        num: i,
        loading: false,
        name: "  ",
        description: "",
        position: positionArr[i],
        captain: false
    };
    heroesArr.push(hero);
}
const initialState = {
    heroes: heroesArr,
    heroLoading: false,
    heroError: false,
    activeHero: null,
    clikedHeroFromList: null
};
const fetchHero = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createAsyncThunk)("team/fetchHero", ()=>{
    const { request  } = (0,_hooks_http_hook__WEBPACK_IMPORTED_MODULE_2__/* .useHttp */ .i)();
    const id = Math.floor(Math.random() * (1011400 - 1011000) + 1011000);
    return request(`https://gateway.marvel.com:443/v1/public/characters/${id}?apikey=d958623270bfcc1cdb0952691b682b77`, "GET", null, {});
});
const teamSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createSlice)({
    name: "team",
    initialState,
    reducers: {
        team_activeHero: (state, action)=>{
            state.activeHero = action.payload;
        },
        team_makeSubstitution: (state, action)=>{
            state.heroes = action.payload;
        },
        team_getClikedHeroFromList: (state, action)=>{
            state.clikedHeroFromList = action.payload;
        },
        team_makeCaptain: (state, action)=>{
            state.heroes.map((item)=>{
                item.captain = false;
            });
            state.heroes[action.payload].captain = true;
        }
    },
    extraReducers: (builder)=>{
        builder.addCase(fetchHero.pending, (state)=>{
            state.heroLoading = true;
            state.heroError = false;
        }).addCase(fetchHero.fulfilled, (state, action)=>{
            state.heroLoading = false;
            state.heroError = false;
            const newHero = {
                ...state.heroes[state.activeHero],
                img: action.payload.data.results[0].thumbnail.path + "." + action.payload.data.results[0].thumbnail.extension,
                loading: false,
                name: action.payload.data.results[0].name,
                description: action.payload.data.results[0].description,
                homepage: action.payload.data.results[0].urls[0].url,
                wiki: action.payload.data.results[0].urls[1].url
            };
            state.heroes[state.activeHero] = newHero;
        }).addCase(fetchHero.rejected, (state)=>{
            state.heroError = true;
            state.heroLoading = false;
        }).addDefaultCase(()=>{});
    }
});
const { actions , reducer  } = teamSlice;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (reducer);
const { team_updateHeroInfo , team_activeHero , team_makeSubstitution , team_getClikedHeroFromList , team_makeCaptain  } = actions;


/***/ }),

/***/ 4457:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "i": () => (/* binding */ useHttp)
/* harmony export */ });
const useHttp = ()=>{
    const request = async (url, method = "GET", body = null, headers = {
        "Content-Type": "application/json"
    })=>{
        try {
            const response = await fetch(url, {
                method,
                body,
                headers
            });
            if (!response.ok) {
                throw new Error(`Could not fetch ${url}, status: ${response.status}`);
            }
            const data = await response.json();
            return data;
        } catch (e) {
            throw e;
        }
    };
    return {
        request
    };
};


/***/ })

};
;