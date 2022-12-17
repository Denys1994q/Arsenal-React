import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import Skeleton from "../components/common/skeleton/Skeleton";
import TeamSubs from "../components/team/team_TeamSubs/TeamSubs";
import TeamPlayersBoard from "../components/team/team_PlayersBoard/TeamPlayersBoard";
import TeamList from "../components/team/team_TeamList/TeamList";
import TeamPlayerDescription from "../components/team/team_TeamPlayerDescription/TeamPlayerDescription";

const Team = () => {
    const clikedHeroFromList = useSelector(state => state.teamSlice.clikedHeroFromList);

    // const [hideTeamBoard, setHideTeamBoard] = useState(false);
    // useEffect(() => {
    //     if (window.innerWidth < 435) {
    //         setHideTeamBoard(true);
    //     }
    // }, []);

    return (
        <section className='team'>
            <div className='team__left'>
                <TeamList />
            </div>
            <div className='team__right'>
                <TeamPlayersBoard />
            </div>
            <div className='team__bottom'>
                {clikedHeroFromList || clikedHeroFromList === 0 ? <TeamPlayerDescription /> : <Skeleton />}
                <div className='team__subs'>
                    <TeamSubs />
                </div>
            </div>
        </section>
    );
};

export default Team;
