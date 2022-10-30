import leicester_logo from "../../imgs/leicester_logo.png";
import arsenal_logo from "../../imgs/logo.svg";
// компоненти
import Modal from "../common/modal/Modal";
import Slider from "../common/slider/Slider";
import Timer from "../common/timer/Timer";
import Weather from "../common/weather/Weather";

const Main = () => {
    return (
        <div className='slider-container'>
            <Slider />
            <div className='card'>
                <div className='card-wrapper'>
                    <div className='card-dateAndStadium'>
                        <div className='card-date'>Nov 23 Oct - 15:00</div>
                        <div className='card-stadium'>Emirates Stadium</div>
                    </div>
                    <div className='card-league'>Premier League</div>
                    <div className='card-teams'>
                        <div className='card-first-team'>
                            <div className='card-teams-logo'>
                                <img src={arsenal_logo} alt='' />
                            </div>
                            <div className='card-teams-text'>Arsenal</div>
                        </div>
                        <div className='card-teams-sign'>V</div>
                        <div className='card-second-team'>
                            <div className='card-teams-logo'>
                                <img src={leicester_logo} alt='' />
                            </div>
                            <div className='card-teams-text'>Leicester City</div>
                        </div>
                    </div>
                    <div>
                        <div>Match will start in:</div>
                        <div className='card-time'>
                            <Timer deadline='2022-11-26T15:00:00' />
                        </div>
                    </div>
                </div>
                <Weather />
            </div>
            {/* <Modal /> */}
        </div>
    );
};

export default Main;
