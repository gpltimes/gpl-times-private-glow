import { useState, useEffect } from 'react';

export const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date('2026-01-01T00:00:00').getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="max-w-4xl mx-auto mb-8 md:mb-12">
      <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 md:p-8 shadow-2xl">
        <div className="grid grid-cols-4 gap-4 text-center">
          <div className="bg-white/20 rounded-lg p-3 md:p-4">
            <div className="text-2xl md:text-3xl font-bold text-white">{timeLeft.days.toString().padStart(2, '0')}</div>
            <div className="text-xs md:text-sm text-white/80 uppercase tracking-wide">Days</div>
          </div>
          <div className="bg-white/20 rounded-lg p-3 md:p-4">
            <div className="text-2xl md:text-3xl font-bold text-white">{timeLeft.hours.toString().padStart(2, '0')}</div>
            <div className="text-xs md:text-sm text-white/80 uppercase tracking-wide">Hours</div>
          </div>
          <div className="bg-white/20 rounded-lg p-3 md:p-4">
            <div className="text-2xl md:text-3xl font-bold text-white">{timeLeft.minutes.toString().padStart(2, '0')}</div>
            <div className="text-xs md:text-sm text-white/80 uppercase tracking-wide">Minutes</div>
          </div>
          <div className="bg-white/20 rounded-lg p-3 md:p-4">
            <div className="text-2xl md:text-3xl font-bold text-white">{timeLeft.seconds.toString().padStart(2, '0')}</div>
            <div className="text-xs md:text-sm text-white/80 uppercase tracking-wide">Seconds</div>
          </div>
        </div>
      </div>
    </div>
  );
};