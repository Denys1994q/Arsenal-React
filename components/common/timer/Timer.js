import { useState, useEffect } from "react";

const Timer = (props) => {
    const {deadline} = props;

    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    // timer
    const time = deadline => {
        const t = Date.parse(deadline) - Date.parse(new Date());
        const days = Math.floor(t / (1000 * 60 * 60 * 24));
        const hours = Math.floor((t / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((t / 1000 / 60) % 60);
        const seconds = Math.floor((t / 1000) % 60);

        setDays(days);
        setHours(hours);
        setMinutes(minutes);
        setSeconds(seconds);
    };

    useEffect(() => {
        const timer = setInterval(() => {
            time(deadline);
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <>
            <div>{days} days</div>
            <div>{hours} hours</div>
            <div>{minutes} minutes</div>
            <div>{seconds} seconds</div>
        </>
    );
};

export default Timer;
