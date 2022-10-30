// картинки
import emptyCard from "../../../imgs/team-card-hulk.jpg";
import Spinner from "../../common/spinner/Spinner";

import { useSelector, useDispatch } from "react-redux";
import { fetchHero } from "../teamSlice";
import { team_activeHero } from "../teamSlice";

const TeamPlayersBoard = () => {
    const dispatch = useDispatch();

    const heroes = useSelector(state => state.teamSlice.heroes);
    const heroLoading = useSelector(state => state.teamSlice.heroLoading);

    const getHero = id => {
        if (heroes[id].img === emptyCard) {
            dispatch(fetchHero());
            dispatch(team_activeHero(id));
        }
    };

    const showCardImgs = heroes.map((item, i) => {
        const clazz = item.captain === true ? "active-img" : "";
        const activeCardClazz = item.captain === true ? "active-card" : "";

        return (
            <div
                key={item.num}
                onClick={() => getHero(i)}
                className={`item item-${i + 1} card-football ${activeCardClazz}`}>
                <div className='card-football__side card-football__side_front'>
                    <div>
                        <img className={clazz} src={item.img} alt='' />
                    </div>
                </div>
                <div className='card-football__side card-football__side_back'>
                    <div>
                        {heroLoading ? (
                            <div className='spinner'>
                                <Spinner />
                            </div>
                        ) : (
                            <img src={item.img} alt='' />
                        )}
                    </div>
                </div>
            </div>
        );
    });
    return showCardImgs;
};

export default TeamPlayersBoard;
