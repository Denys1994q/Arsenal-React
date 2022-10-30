// картинки
import team_header from "../../imgs/team-header.jpg";
import Skeleton from "../common/skeleton/Skeleton";
// хуки
import { useSelector } from "react-redux";
// компоненти
import TeamSubs from "./team_TeamSubs/TeamSubs";
import TeamPlayersBoard from "./team_PlayersBoard/TeamPlayersBoard";
import TeamList from "./team_TeamList/TeamList";
import TeamPlayerDescription from "./team_TeamPlayerDescription/TeamPlayerDescription";

const Team = () => {
    const clikedHeroFromList = useSelector(state => state.teamSlice.clikedHeroFromList);

    const content =
        clikedHeroFromList || clikedHeroFromList === 0 ? (
            <div className='char__info-box'>
                <TeamPlayerDescription />
            </div>
        ) : (
            <Skeleton />
        );

    return (
        <>
            <div className='team'>
                <div className='team-left'>
                    <div className='team-left-img'>
                        <img src={team_header} alt='' />
                    </div>
                    <div className='team-left-text'>
                        <ol>
                            <li>Click on a card and get your random hero</li>
                            <li>Choose a captain</li>
                            <li>Make three substitutions if you need</li>
                        </ol>
                        <div className='team-left-squad'>
                            <ul>
                                <TeamList />
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='team-right team-container'>
                    <TeamPlayersBoard />
                </div>
                <div className='team-bottom'>
                    <div className='char__info'>{content}</div>
                    <div className='team-bottom-subs'>
                        <TeamSubs />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Team;
