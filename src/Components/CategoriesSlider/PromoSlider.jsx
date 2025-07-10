import React, { useEffect, useState } from 'react';

export default function PromoSlider() {
  const [timeLeft, setTimeLeft] = useState({ hours: 0, minutes: 0, seconds: 0 });

  // تاريخ انتهاء العرض (مثال: بعد ساعة)
  const endTime = new Date().getTime() + 3600 * 1000;

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = endTime - now;

      if (distance < 0) {
        clearInterval(timer);
        setTimeLeft({ hours: 0, minutes: 0, seconds: 0 });
      } else {
        setTimeLeft({
          hours: Math.floor((distance / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((distance / (1000 * 60)) % 60),
          seconds: Math.floor((distance / 1000) % 60),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-gradient-to-r from-red-900 to-red-600 text-white py-6 px-4 text-center">
      <h2 className="text-2xl font-bold mb-2">⚡ Limited Time Offer!</h2>
      <p className="mb-3">Buy 2 Get 1 Free on All Disposables</p>
      <div className="flex justify-center gap-4 text-lg font-mono">
        <span>{timeLeft.hours.toString().padStart(2, '0')}h</span>
        <span>{timeLeft.minutes.toString().padStart(2, '0')}m</span>
        <span>{timeLeft.seconds.toString().padStart(2, '0')}s</span>
      </div>
    </section>
  );
}
