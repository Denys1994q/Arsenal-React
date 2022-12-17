import { useSelector } from "react-redux";

const TeamPlayerDescription = () => {
    const heroes = useSelector(state => state.teamSlice.heroes);
    const clikedHeroFromList = useSelector(state => state.teamSlice.clikedHeroFromList);

    return (
        <div className='selectedPlayer'>
            <div className='selectedPlayer__img'>
                <img src={heroes[clikedHeroFromList].img} alt='selectedPlayer' />
            </div>
            <div className='selectedPlayer__text'>
                <div className='selectedPlayer__title'>{heroes[clikedHeroFromList].name}</div>
                <div className='selectedPlayer__desc'>
                    {heroes[clikedHeroFromList].description !== ""
                        ? heroes[clikedHeroFromList].description
                        : "No description"}
                </div>
                <a
                    className='btn team-btn selectedPlayer__btn'
                    href={heroes[clikedHeroFromList].homepage}
                    target='_blank'>
                    homepage
                </a>
                <a className='btn team-btn' href={heroes[clikedHeroFromList].wiki} target='_blank'>
                    wiki
                </a>
            </div>
        </div>
    );
};

export default TeamPlayerDescription;
