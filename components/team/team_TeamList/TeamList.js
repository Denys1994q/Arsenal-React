import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

import { team_getClikedHeroFromList, team_makeCaptain, team_activeHero, fetchHero } from "../teamSlice";

const TeamList = () => {
    const dispatch = useDispatch();

    const heroes = useSelector(state => state.teamSlice.heroes);

    const [showHeroBtns, setShowHeroBtns] = useState(false);
    const [clickedBtnIndex, setClickedBtnIndex] = useState(0);
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
        setClickedBtnIndex(id => id + 1);
    };

    const sliceName = name => {
        if (name.length > 20) {
            return name.slice(0, 20) + "...";
        } else {
            return name;
        }
    };

    const showTeamSquad = heroes.map((item, i) => {
        const style = item.captain ? "fa fa-star red-color" : "fa fa-star black-color";
        return (
            <li key={item.num} className='teamList__item'>
                <FontAwesomeIcon icon={faStar} className={style} onClick={() => makeCaptain(i)}></FontAwesomeIcon>
                {item.position} - <span onClick={() => makeActive(i)}>{sliceName(heroes[i].name)}</span>
                {showHeroBtns && i === clickedBtnIndex ? (
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

    return (
        <div className='teamList'>
            <ul className='teamList__heading'>
                <li>Click on a card and get your random Marvel hero</li>
                <li>Choose a captain</li>
                <li>Make 3 substitutions if you need</li>
            </ul>
            <ul className='teamList__squad'>{showTeamSquad}</ul>
        </div>
    );
};

export default TeamList;
