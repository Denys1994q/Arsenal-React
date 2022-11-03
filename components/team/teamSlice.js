import emptyCard from "../../public/imgs/team-card-hulk.jpg";

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useHttp } from "../../hooks/http.hook";

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
    "Right forward",
];
for (let i = 0; i < 11; i++) {
    const hero = {
        img: emptyCard,
        num: i,
        loading: false,
        name: "  ",
        description: "",
        position: positionArr[i],
        captain: false,
    };
    heroesArr.push(hero);
}

const initialState = {
    heroes: heroesArr,
    heroLoading: false,
    heroError: false,
    activeHero: null,
    clikedHeroFromList: null,
};

export const fetchHero = createAsyncThunk("team/fetchHero", () => {
    const { request } = useHttp();
    const id = Math.floor(Math.random() * (1011400 - 1011000) + 1011000);
    return request(
        `https://gateway.marvel.com:443/v1/public/characters/${id}?apikey=d958623270bfcc1cdb0952691b682b77`,
        "GET",
        null,
        {}
    );
});

const teamSlice = createSlice({
    name: "team",
    initialState,
    reducers: {
        team_activeHero: (state, action) => {
            state.activeHero = action.payload;
        },
        team_makeSubstitution: (state, action) => {
            state.heroes = action.payload;
        },
        team_getClikedHeroFromList: (state, action) => {
            state.clikedHeroFromList = action.payload;
        },
        team_makeCaptain: (state, action) => {
            state.heroes.map(item => {
                item.captain = false;
            });
            state.heroes[action.payload].captain = true;
        },
    },
    extraReducers: builder => {
        builder
            .addCase(fetchHero.pending, state => {
                state.heroLoading = true;
                state.heroError = false;
            })
            .addCase(fetchHero.fulfilled, (state, action) => {
                state.heroLoading = false;
                state.heroError = false;

                const newHero = {
                    ...state.heroes[state.activeHero],
                    img:
                        action.payload.data.results[0].thumbnail.path +
                        "." +
                        action.payload.data.results[0].thumbnail.extension,
                    loading: false,
                    name: action.payload.data.results[0].name,
                    description: action.payload.data.results[0].description,
                    homepage: action.payload.data.results[0].urls[0].url,
                    wiki: action.payload.data.results[0].urls[1].url,
                };

                state.heroes[state.activeHero] = newHero;
            })
            .addCase(fetchHero.rejected, state => {
                state.heroError = true;
                state.heroLoading = false;
            })
            .addDefaultCase(() => {});
    },
});

const { actions, reducer } = teamSlice;

export default reducer;

export const {
    team_updateHeroInfo,
    team_activeHero,
    team_makeSubstitution,
    team_getClikedHeroFromList,
    team_makeCaptain,
} = actions;
