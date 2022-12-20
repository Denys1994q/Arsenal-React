import Image from "next/image";

import Timer from "../../../common/timer/Timer";

const InfoCard = ({ homeTeam, awayTeam, dateOfTheMatch }) => {
    return (
        <div className='infoCard'>
            <div className='infoCard__wrapper'>
                <div className='infoCard__dateAndStadium'>
                    <div className='infoCard__date'>Dec 26 - 15:00</div>
                    <div className='infoCard__stadium'>Emirates Stadium</div>
                </div>
                <div className='infoCard__league'>Premier League</div>
                <div className='infoCard__teams'>
                    <div className='infoCard__first-team'>
                        <div className='infoCard__teams-logo'>
                            <Image src={homeTeam} width={80} height={80} alt='arsenal-logo' />
                        </div>
                        <div className='infoCard__teams-text'>Arsenal</div>
                    </div>
                    <div className='infoCard__teams-sign'>V</div>
                    <div className='infoCard__second-team'>
                        <div className='infoCard__teams-logo'>
                            <Image src={awayTeam} width={80} height={80} alt='leicester-logo' />
                        </div>
                        <div className='infoCard__teams-text'>Leicester City</div>
                    </div>
                </div>
                <div>
                    <div>Match will start in:</div>
                    <div className='infoCard__time'>
                        <Timer deadline={dateOfTheMatch} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InfoCard;
