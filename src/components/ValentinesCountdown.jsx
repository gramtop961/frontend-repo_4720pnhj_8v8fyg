import { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Heart } from 'lucide-react';

function getNextValentines(now = new Date()) {
  const year = now.getFullYear();
  const valentinesThisYear = new Date(year, 1, 14, 0, 0, 0); // Feb 14
  if (now <= valentinesThisYear) return valentinesThisYear;
  return new Date(year + 1, 1, 14, 0, 0, 0);
}

function useCountdown(targetDate) {
  const [timeLeft, setTimeLeft] = useState(targetDate.getTime() - Date.now());
  useEffect(() => {
    const id = setInterval(() => {
      setTimeLeft(targetDate.getTime() - Date.now());
    }, 1000);
    return () => clearInterval(id);
  }, [targetDate]);

  const parts = useMemo(() => {
    const total = Math.max(0, timeLeft);
    const days = Math.floor(total / (1000 * 60 * 60 * 24));
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((total / (1000 * 60)) % 60);
    const seconds = Math.floor((total / 1000) % 60);
    return { days, hours, minutes, seconds };
  }, [timeLeft]);

  return parts;
}

export default function ValentinesCountdown() {
  const target = useMemo(() => getNextValentines(new Date()), []);
  const { days, hours, minutes, seconds } = useCountdown(target);

  const items = [
    { label: 'Days', value: days },
    { label: 'Hours', value: hours },
    { label: 'Minutes', value: minutes },
    { label: 'Seconds', value: seconds },
  ];

  return (
    <section className="relative py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-pink-50 to-white" />
      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-rose-200 bg-white/70 px-4 py-2 text-rose-600 backdrop-blur">
          <Calendar className="h-4 w-4" />
          <span className="text-sm">Countdown to Valentine's Day</span>
        </div>
        <h2 className="mt-4 text-3xl md:text-4xl font-bold text-rose-700">
          Our next chapter begins in
        </h2>

        <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3">
          {items.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="rounded-2xl bg-white/80 backdrop-blur border border-rose-100 p-6 shadow-sm"
            >
              <div className="text-4xl font-extrabold text-rose-700">{String(item.value).padStart(2, '0')}</div>
              <div className="mt-1 text-sm uppercase tracking-wider text-rose-500">{item.label}</div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8 text-rose-600"
        >
          Can't wait to celebrate with you <Heart className="inline h-4 w-4 text-rose-500" />
        </motion.div>
      </div>
    </section>
  );
}
