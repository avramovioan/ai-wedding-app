import React from "react";
import { useCountdown } from "../Hooks/useCountdown";

function Timer(props: any){
    const [days, hours, minutes, seconds] = useCountdown(props.weddingDate);
    
    const daysWord = days !== 1 ? "дни" : "ден"
    const hoursWord = hours !== 1 ? "часа" : "час"
    const minutesWord = minutes !== 1 ? "минути" : "минута"
    const secondsWord = seconds !== 1 ? "секунди" : "секунда"
    
    return (
        <div className="flex h-screen justify-center text-white">
            <div className="pr-2"> {days} {daysWord} :</div>
            <div className="pr-2"> {hours} {hoursWord} :</div>
            <div className="pr-2"> {minutes} {minutesWord} :</div>
            <div > {seconds} {secondsWord} </div>
        </div>
    )
}

export default Timer;