import { useCountdown } from "../Hooks/useCountdown";

export default function Timer(props: { weddingDate: Date }) {
  const [days, hours, minutes, seconds] = useCountdown(props.weddingDate);

  const daysWord = days !== 1 ? "дни" : "ден";
  const hoursWord = hours !== 1 ? "часа" : "час";
  const minutesWord = minutes !== 1 ? "минути" : "минута";
  const secondsWord = seconds !== 1 ? "секунди" : "секунда";

  return (
    <div className="text-1xl flex w-full justify-center text-center text-white md:w-[40rem]">
      <div className="flex-column mx-1 p-1 md:mx-2 md:mr-4 md:w-full md:pr-1">
        <div className="font-serif text-xl sm:text-2xl md:text-[2.5rem]">
          {days}
        </div>
        <div className="font-serif text-xl lowercase md:text-3xl">
          {daysWord}
        </div>
      </div>

      <div className="flex-column mx-1 p-1 md:mx-4  md:w-full">
        <div className="font-serif text-xl sm:text-2xl md:text-[2.5rem]">
          {hours}
        </div>
        <div className="font-serif text-xl lowercase md:text-3xl">
          {hoursWord}
        </div>
      </div>

      <div className="flex-column mx-1 p-1 md:mx-4 md:w-full">
        <div className=" font-serif  text-xl sm:text-2xl md:text-[2.5rem]">
          {minutes}
        </div>
        <div className="font-serif text-xl lowercase md:text-3xl">
          {minutesWord}
        </div>
      </div>

      <div className="flex-column mx-1 p-1 md:mx-4 md:w-full">
        <div className="font-serif  text-xl sm:text-2xl md:text-[2.5rem]">
          {seconds}
        </div>
        <div className="font-serif text-xl lowercase md:text-3xl">
          {secondsWord}
        </div>
      </div>
    </div>
  );
}

{
  /* {`${days} ${daysWord} : ${hours} ${hoursWord} : ${minutes} ${minutesWord} : ${seconds} ${secondsWord}`} */
}
