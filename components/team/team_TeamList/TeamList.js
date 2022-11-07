import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

import { team_getClikedHeroFromList, team_makeCaptain, fetchHero } from "../teamSlice";

const TeamList = () => {
    const dispatch = useDispatch();

    const heroes = useSelector(state => state.teamSlice.heroes);

    const [showHeroBtns, setShowHeroBtns] = useState(false);
    useEffect(() => {
        if (window.innerWidth < 835) {
            setShowHeroBtns(true);
        }
    }, []);

    const getHero = id => {
        if (!heroes[id].name) {
            dispatch(fetchHero());
            dispatch(team_activeHero(id));
        }
    };

    const showTeamSquad = heroes.map((item, i) => {
        const style = item.captain ? "fa fa-star red-color" : "fa fa-star black-color";
        return (
            <li key={item.num}>
                <FontAwesomeIcon icon={faStar} className={style} onClick={() => makeCaptain(i)}></FontAwesomeIcon>
                {item.position} - <span onClick={() => makeActive(i)}>{heroes[i].name}</span>
                {showHeroBtns ? (
                    <button className='btn' onClick={() => getHero(i)}>
                        Get random hero
                    </button>
                ) : null}
            </li>
        );
    });

    const makeCaptain = i => {
        const checkPlayersChoosen = heroes.filter(item => item.name === "...");
        if (checkPlayersChoosen.length === 0) {
            // ставимо всім гравцям статус капітана - false
            dispatch(team_makeCaptain(i));
        }
    };

    const makeActive = i => {
        dispatch(team_getClikedHeroFromList(i));
    };

    return showTeamSquad;
};

export default TeamList;
