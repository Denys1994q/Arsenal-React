import { useSelector } from "react-redux";

const TeamPlayerDescription = () => {
    const heroes = useSelector(state => state.teamSlice.heroes);
    const clikedHeroFromList = useSelector(state => state.teamSlice.clikedHeroFromList);

    const contentDescription =
        heroes[clikedHeroFromList].description === "" ? (
            <>
                <div className='char__info-img'>
                    <img src={heroes[clikedHeroFromList].img} alt='' />
                </div>
                <div className='char__info-text'>
                    <div className='char__info-text-title'>{heroes[clikedHeroFromList].name}</div>
                    <div>
                        No description for this character
                        <a className='btn team-btn' href={heroes[clikedHeroFromList].homepage} target='_blank'>
                            {" "}
                            homepage{" "}
                        </a>
                        <a className='btn team-btn' href={heroes[clikedHeroFromList].wiki} target='_blank'>
                            {" "}
                            wiki{" "}
                        </a>
                    </div>
                </div>
            </>
        ) : (
            <>
                <div className='char__info-img'>
                    <img src={heroes[clikedHeroFromList].img} alt='' />
                    <div>
                        <a className='btn team-btn' href={heroes[clikedHeroFromList].homepage} target='_blank'>
                            {" "}
                            homepage{" "}
                        </a>
                        <a className='btn team-btn' href={heroes[clikedHeroFromList].wiki} target='_blank'>
                            {" "}
                            wiki{" "}
                        </a>
                    </div>
                </div>
                <div className='char__info-text'>
                    <div className='char__info-text-title'>{heroes[clikedHeroFromList].name}</div>
                    <div>{heroes[clikedHeroFromList].description}</div>
                </div>
            </>
        );

    return contentDescription;
};

export default TeamPlayerDescription;
