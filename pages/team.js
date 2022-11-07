import team_header from "../public/imgs/team-header.jpg";

import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import Skeleton from "../components/common/skeleton/Skeleton";
import TeamSubs from "../components/team/team_TeamSubs/TeamSubs";
import TeamPlayersBoard from "../components/team/team_PlayersBoard/TeamPlayersBoard";
import TeamList from "../components/team/team_TeamList/TeamList";
import TeamPlayerDescription from "../components/team/team_TeamPlayerDescription/TeamPlayerDescription";

const Team = () => {
    const clikedHeroFromList = useSelector(state => state.teamSlice.clikedHeroFromList);

    const [hideTeamBoard, setHideTeamBoard] = useState(false);
    useEffect(() => {
        if (window.innerWidth < 835) {
            setHideTeamBoard(true);
        }
    }, []);

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
                <div style={{ display: hideTeamBoard ? "none" : "grid" }} className='team-right team-container'>
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
