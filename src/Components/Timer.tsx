import { useCountdown } from "../Hooks/useCountdown";

export default function Timer(props: { weddingDate: Date }) {
  const [days, hours, minutes, seconds] = useCountdown(props.weddingDate);

  const daysWord = days !== 1 ? "дни" : "ден";
  const hoursWord = hours !== 1 ? "часа" : "час";
  const minutesWord = minutes !== 1 ? "минути" : "минута";
  const secondsWord = seconds !== 1 ? "секунди" : "секунда";

  return (
    <div className="text-1xl flex justify-center text-center text-white sm:text-2xl md:text-5xl">
      <div className="flex-column mx-2 p-2  md:mx-4">
        <div className="font-mono">{days}</div>
        <div className="font-mono text-sm uppercase">{daysWord}</div>
      </div>
      <div className="flex-column mx-2 p-2  md:mx-4">
        <div className="font-mono">{hours}</div>
        <div className="font-mono text-sm uppercase">{hoursWord}</div>
      </div>
      <div className="flex-column mx-2 p-2  md:mx-4">
        <div className="font-mono">{minutes}</div>
        <div className="font-mono text-sm uppercase">{minutesWord}</div>
      </div>
      <div className="flex-column mx-2 p-2  md:mx-4">
        <div className="font-mono">{seconds}</div>
        <div className="font-mono text-sm uppercase">{secondsWord}</div>
      </div>
    </div>
  );
}

{
  /* {`${days} ${daysWord} : ${hours} ${hoursWord} : ${minutes} ${minutesWord} : ${seconds} ${secondsWord}`} */
}
