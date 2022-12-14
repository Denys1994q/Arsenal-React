import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faExchange } from "@fortawesome/free-solid-svg-icons";

import { team_makeSubstitution } from "../teamSlice";

const TeamSubs = () => {
    const dispatch = useDispatch();
    const heroes = useSelector(state => state.teamSlice.heroes);

    const [searchHero1, setSearchHero1] = useState();
    const [searchHero2, setSearchHero2] = useState();
    const [searchHero3, setSearchHero3] = useState();

    const [searchedPlayers, setSearchedPlayers] = useState([
        { name: "", img: null, description: "", num: 0, value: searchHero1 },
        { name: "", img: null, description: "", num: 1, value: searchHero2 },
        { name: "", img: null, description: "", num: 2, value: searchHero3 },
    ]);

    const [heroToSub1, setHeroToSub1] = useState({ name: null, img: null });
    const [heroToSub2, setHeroToSub2] = useState({ name: null, img: null });
    const [heroToSub3, setHeroToSub3] = useState({ name: null, img: null });

    const [firstSubMade, setFirstSubMade] = useState(false);
    const [secondSubMade, setSecondSubMade] = useState(false);
    const [thirdSubMade, setThirdSubMade] = useState(false);

    const [loading1, setLoading1] = useState(false);
    const [loading2, setLoading2] = useState(false);
    const [loading3, setLoading3] = useState(false);

    const getValueFromSearch = (i, e) => {
        switch (i) {
            case 0:
                return setSearchHero1(e.target.value);
            case 1:
                return setSearchHero2(e.target.value);
            case 2:
                return setSearchHero3(e.target.value);
        }
    };

    const makeHeroToSub = (e, i) => {
        let selectedNameOfHero = e;
        let selectedIndex = heroes.findIndex(it => it.name === selectedNameOfHero);
        let selectedHeroImg = heroes[selectedIndex].img;

        if (i === 0) {
            setHeroToSub1({ name: e, img: selectedHeroImg });
        } else if (i === 1) {
            setHeroToSub2({ name: e, img: selectedHeroImg });
        } else if (i === 2) {
            setHeroToSub3({ name: e, img: selectedHeroImg });
        }
    };

    const getSearchedHeroData = (res, i) => {
        setLoading1(false);
        setLoading2(false);
        setLoading3(false);
        const index = searchedPlayers.findIndex(elem => elem.num === i); // ???????????? ????????????????, ???? ?????????? ????????????????
        const old = searchedPlayers[index]; // ?????????? ???????????????? ???????????? ?????? ???????????? ?? ??????
        const newItem = {
            ...old,
            name: res.data.results[0].name,
            description: res.data.results[0].description,
            img: res.data.results[0].thumbnail.path + "." + res.data.results[0].thumbnail.extension,
        }; // ?????????? ??????????????: ?????? ???????????????? ?????????????? + ???????????????? captain ????????????????
        const newArray = [...searchedPlayers.slice(0, index), newItem, ...searchedPlayers.slice(index + 1)]; // ?????????? ??????????, ?? ???????? ?????????????? ?????????? ??????????????
        setSearchedPlayers(newArray);
    };

    const changePlayer = i => {
        if (i === 0 && !firstSubMade) {
            if (heroToSub1.name === null || searchedPlayers[0].name === "") {
                return;
            }
            setFirstSubMade(true);
            // ???????? ???????????? (????'??)
            let nameHeroToSub = heroToSub1.name;
            const index = heroes.findIndex(item => item.name === nameHeroToSub);
            const old = heroes[index];
            const newItem = {
                ...old,
                name: searchedPlayers[0].name,
                img: searchedPlayers[0].img,
                description: searchedPlayers[0].description,
            };
            const newArray = [...heroes.slice(0, index), newItem, ...heroes.slice(index + 1)];
            dispatch(team_makeSubstitution(newArray));
        } else if (i === 1 && !secondSubMade) {
            if (heroToSub2.name === null || searchedPlayers[1].name === "") {
                return;
            }
            setSecondSubMade(true);
            // ???????? ???????????? (????'??)
            let nameHeroToSub = heroToSub2.name;
            const index = heroes.findIndex(item => item.name === nameHeroToSub);
            const old = heroes[index];
            const newItem = {
                ...old,
                name: searchedPlayers[1].name,
                img: searchedPlayers[1].img,
                description: searchedPlayers[1].description,
            };
            const newArray = [...heroes.slice(0, index), newItem, ...heroes.slice(index + 1)];
            dispatch(team_makeSubstitution(newArray));
        } else if (i === 2 && !thirdSubMade) {
            if (heroToSub3.name === null || searchedPlayers[2].name === "") {
                return;
            }
            setThirdSubMade(true);
            // ???????? ???????????? (????'??)
            let nameHeroToSub = heroToSub3.name;
            const index = heroes.findIndex(item => item.name === nameHeroToSub);
            const old = heroes[index];
            const newItem = {
                ...old,
                name: searchedPlayers[2].name,
                img: searchedPlayers[2].img,
                description: searchedPlayers[2].description,
            };
            const newArray = [...heroes.slice(0, index), newItem, ...heroes.slice(index + 1)];
            dispatch(team_makeSubstitution(newArray));
        }
    };

    // ?????????? ???? ????????????
    const getCharacterByName = i => {
        if (i === 0) {
            setLoading1(true);
            fetch(
                `https://gateway.marvel.com:443/v1/public/characters?name=${searchHero1}&ts=1&apikey=051fe2288253d927a7e0fa96c34fb4e3&hash=a062d7eb32dbb34a5b8d9df7c8b50086`
            )
                .then(data => data.json())
                .then(res => getSearchedHeroData(res, i));
        } else if (i === 1) {
            setLoading2(true);
            fetch(
                `https://gateway.marvel.com:443/v1/public/characters?name=${searchHero2}&ts=1&apikey=051fe2288253d927a7e0fa96c34fb4e3&hash=a062d7eb32dbb34a5b8d9df7c8b50086`
            )
                .then(data => data.json())
                .then(res => getSearchedHeroData(res, i));
        } else if (i === 2) {
            setLoading3(true);
            fetch(
                `https://gateway.marvel.com:443/v1/public/characters?name=${searchHero3}&ts=1&apikey=051fe2288253d927a7e0fa96c34fb4e3&hash=a062d7eb32dbb34a5b8d9df7c8b50086`
            )
                .then(data => data.json())
                .then(res => getSearchedHeroData(res, i));
        }
    };

    const selectedHeroes = heroes.map(item => {
        return <option value={item.name}>{item.name}</option>;
    });

    const showInputsSub = searchedPlayers.map((item, i) => {
        let heroToSub = null;
        let iconClass = null;
        let showBtn = null;
        let classesForSearch = null;
        if (i === 0) {
            classesForSearch = loading1
                ? "team-bottom-subs-icon white-color fa fa-spinner fa-spin"
                : "team-bottom-subs-icon white-color fa fa-search";
            heroToSub = heroToSub1.img;
            iconClass =
                heroToSub1.img !== null && searchedPlayers[0].name !== ""
                    ? "team-bottom-subs-imgsBox-middle fas fa-directions fa-lg white-color-back"
                    : "team-bottom-subs-imgsBox-middle fas fa-directions fa-2x";

            showBtn = heroToSub1.img === null || searchedPlayers[0].name === "" || firstSubMade ? "none" : "flex";
        } else if (i === 1) {
            classesForSearch = loading2
                ? "team-bottom-subs-icon white-color fa fa-spinner fa-spin"
                : "team-bottom-subs-icon white-color fa fa-search";
            heroToSub = heroToSub2.img;
            iconClass =
                heroToSub2.img !== null && searchedPlayers[1].name !== ""
                    ? "team-bottom-subs-imgsBox-middle fas fa-directions fa-lg white-color-back"
                    : "team-bottom-subs-imgsBox-middle fas fa-directions fa-2x";

            showBtn = heroToSub2.img === null || searchedPlayers[1].name === "" || secondSubMade ? "none" : "flex";
        } else if (i === 2) {
            classesForSearch = loading3
                ? "team-bottom-subs-icon white-color fa fa-spinner fa-spin"
                : "team-bottom-subs-icon white-color fa fa-search";
            heroToSub = heroToSub3.img;
            iconClass =
                heroToSub3.img !== null && searchedPlayers[2].name !== ""
                    ? "team-bottom-subs-imgsBox-middle fas fa-directions fa-lg white-color-back"
                    : "team-bottom-subs-imgsBox-middle fas fa-directions fa-2x";

            showBtn = heroToSub3.img === null || searchedPlayers[2].name === "" || thirdSubMade ? "none" : "flex";
        }

        return (
            <div key={item.num} className={`team-bottom-subs-${i + 1}`}>
                <div onClick={() => getCharacterByName(i)} className={classesForSearch}>
                    <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
                </div>
                <input
                    onChange={e => {
                        getValueFromSearch(i, e);
                    }}
                    value={item.value}
                    type='text'
                    placeholder='Marvel character'
                    className='team-bottom-subs-inp browser-default'
                />
                <div className='team-bottom-subs-imgsBox'>
                    <div className='team-bottom-subs-imgsBox-in'>
                        <div className='team-bottom-subs-imgsBox-title'>out</div>
                        <div>
                            <select
                                style={{
                                    marginBottom: "10px",
                                    width: "15rem",
                                    height: "3rem",
                                    background: "#222030",
                                    border: "none",
                                    color: "#fff",
                                }}
                                onChange={e => makeHeroToSub(e.target.value, i)}
                                name=''
                                id=''
                                className='browser-default'>
                                <option value=''></option>
                                {selectedHeroes}
                            </select>
                        </div>
                        <div className='team-bottom-subs-img'>
                            <img src={heroToSub} alt='' />
                        </div>
                    </div>

                    <div style={{ display: showBtn }} onClick={() => changePlayer(i)} className={iconClass}>
                        <FontAwesomeIcon icon={faExchange} width={40} className='fa spin'></FontAwesomeIcon>
                    </div>

                    <div className='team-bottom-subs-imgsBox-out'>
                        <div className='team-bottom-subs-imgsBox-title'>in</div>
                        <div className='team-bottom-subs-img'>
                            <img src={item.img} alt='' />
                        </div>
                    </div>
                </div>
            </div>
        );
    });

    return showInputsSub;
};

export default TeamSubs;
