import { useSelector, useDispatch } from "react-redux";
import { team_getClikedHeroFromList, team_makeCaptain } from "../teamSlice";

const TeamList = () => {
    const dispatch = useDispatch();

    const heroes = useSelector(state => state.teamSlice.heroes);

    const showTeamSquad = heroes.map((item, i) => {
        const style = item.captain ? "fa fa-star red-color" : "fa fa-star black-color";
        return (
            <li key={item.num}>
                <i onClick={() => makeCaptain(i)} className={style}></i>
                {item.position} -<span onClick={() => makeActive(i)}>{heroes[i].name}</span>
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
