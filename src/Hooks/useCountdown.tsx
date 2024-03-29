import { useEffect, useState } from "react";

const useCountdown = (targetDate: Date) => {
  const countDownDate = new Date().getTime();
  const [countDown, setCountDown] = useState(
    countDownDate - new Date().getTime()
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCountDown(countDownDate - new Date(targetDate).getTime());
    }, 1000);

    return () => clearInterval(interval);
  }, [countDownDate]);

  return getReturnValues(countDown);
};

const getReturnValues = (countDown: number) => {
  // calculate time left
  const days = Math.floor(countDown / (1000 * 60 * 60 * 24));
  const hours = Math.floor(countDown / (1000 * 60 * 60)) % 24;
  const minutes = Math.floor((countDown / 1000 / 60) % 60);
  const seconds = Math.floor((countDown / 1000) % 60);

  return [
    Math.abs(days),
    Math.abs(hours),
    Math.abs(minutes),
    Math.abs(seconds),
  ];
};

export { useCountdown };
