// додати редакс до некст https://medium.com/nextjs/how-to-use-redux-and-redux-tool-kit-in-nextjs-666a126b9703
// Yes you can but you won’t be able to use getServerSideProps, getStaticProps, getStaticPaths, or getInitialProps. Then you’ll need the wrapper.
import leicester_logo from "../src/imgs/leicester_logo.png";
import arsenal_logo from "../src/imgs/logo.svg";

import Image from "next/image";

// import Modal from "../common/modal/Modal";
import Slider from "../components/common/slider/Slider";
import Timer from "../components/common/timer/Timer";
import Weather from "../components/common/weather/Weather";

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
                                <Image src={arsenal_logo} width={80} height={80} alt='arsenal-logo' />
                            </div>
                            <div className='card-teams-text'>Arsenal</div>
                        </div>
                        <div className='card-teams-sign'>V</div>
                        <div className='card-second-team'>
                            <div className='card-teams-logo'>
                                <Image src={leicester_logo} width={80} height={80} alt='leicester-logo' />
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
    )
}

export default Main;
