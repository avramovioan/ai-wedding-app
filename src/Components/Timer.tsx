import { useCountdown } from "../Hooks/useCountdown";

export default function Timer(props: { weddingDate: Date }) {
  const [days, hours, minutes, seconds] = useCountdown(props.weddingDate);

  const daysWord = days !== 1 ? "дни" : "ден";
  const hoursWord = hours !== 1 ? "часа" : "час";
  const minutesWord = minutes !== 1 ? "минути" : "минута";
  const secondsWord = seconds !== 1 ? "секунди" : "секунда";

  return (
    <div className="text-1xl flex justify-center p-2 text-center text-white sm:text-2xl md:text-5xl">
      <div className="flex-column px-2">
        <div>{days}</div>
        <div>{daysWord}</div>
      </div>
      <div className="flex-column px-2">
        <div>{hours}</div>
        <div>{hoursWord}</div>
      </div>
      <div className="flex-column px-2">
        <div>{minutes}</div>
        <div>{minutesWord}</div>
      </div>
      <div className="flex-column px-2">
        <div>{seconds}</div>
        <div>{secondsWord}</div>
      </div>
    </div>
  );
}

{
  /* {`${days} ${daysWord} : ${hours} ${hoursWord} : ${minutes} ${minutesWord} : ${seconds} ${secondsWord}`} */
}
