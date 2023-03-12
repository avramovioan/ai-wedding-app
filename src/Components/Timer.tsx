import { useCountdown } from "../Hooks/useCountdown";

export default function Timer(props: { weddingDate: Date }) {
  const [days, hours, minutes, seconds] = useCountdown(props.weddingDate);

  const daysWord = days !== 1 ? "дни" : "ден";
  const hoursWord = hours !== 1 ? "часа" : "час";
  const minutesWord = minutes !== 1 ? "минути" : "минута";
  const secondsWord = seconds !== 1 ? "секунди" : "секунда";

  return (
    <div className="text-1xl p-2 text-center text-white md:text-5xl">
      {`${days} ${daysWord} : ${hours} ${hoursWord} : ${minutes} ${minutesWord} : ${seconds} ${secondsWord}`}
    </div>
  );
}
