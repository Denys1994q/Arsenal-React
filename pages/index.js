import slider1 from "../public/imgs/slider-1.jpg";
import slider2 from "../public/imgs/slider-2.jpg";
import slider3 from "../public/imgs/slider-3.jpg";
import slider4 from "../public/imgs/slider-4.jpg";
import slider5 from "../public/imgs/slider-5.jpg";
import leicester_logo from "../public/imgs/leicester_logo.png";
import arsenal_logo from "../public/imgs/logo.svg";

// import Modal from "../common/modal/Modal";
import Slider from "../components/common/slider/Slider";
import InfoCard from "../components/main/infoCard/InfoCard";
import Weather from "../components/common/weather/Weather";

const Main = () => {
    const slideImages = [slider2, slider1, slider3, slider4, slider5];

    return (
        <div className='main'>
            <Slider imgs={slideImages} />
            <div className='main__right'>
                <InfoCard homeTeam={arsenal_logo} awayTeam={leicester_logo} dateOfTheMatch='2022-12-26T15:00:00' />
                <Weather city='London' />
            </div>
            {/* <Modal /> */}
        </div>
    );
};

export default Main;
