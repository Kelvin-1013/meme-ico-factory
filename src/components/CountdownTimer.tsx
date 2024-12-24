import { useEffect, useState } from "react";

interface CountdownTimerProps {
  endDate: Date;
}

export const CountdownTimer = ({ endDate }: CountdownTimerProps) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = endDate.getTime() - now;

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [endDate]);

  return (
    <div className="grid grid-cols-4 gap-4 text-center">
      {Object.entries(timeLeft).map(([key, value]) => (
        <div key={key} className="flex flex-col items-center">
          <div className="text-4xl font-bold font-space">{value}</div>
          <div className="text-sm text-muted-foreground capitalize">{key}</div>
        </div>
      ))}
    </div>
  );
};