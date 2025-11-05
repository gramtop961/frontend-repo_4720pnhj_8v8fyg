import { motion } from 'framer-motion';
import { Heart, Sparkles } from 'lucide-react';

const FloatingHeart = ({ delay, x, y, size = 16 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{
      opacity: [0, 1, 1, 0],
      y: [0, -40, -80, -120],
      x: [0, 10, -10, 0],
      scale: [1, 1.1, 1],
    }}
    transition={{ duration: 8, repeat: Infinity, delay }}
    className="absolute text-rose-400/70"
    style={{ left: x, top: y }}
  >
    <Heart size={size} />
  </motion.div>
);

export default function RomanticHero() {
  return (
    <section className="relative min-h-[80vh] overflow-hidden flex items-center justify-center">
      {/* Ambient gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-rose-50 via-pink-50 to-white" />

      {/* Soft glow orbs */}
      <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-rose-300/30 blur-3xl" />
      <div className="absolute -bottom-24 -right-10 h-80 w-80 rounded-full bg-pink-400/20 blur-3xl" />

      {/* Floating hearts */}
      <div className="pointer-events-none absolute inset-0">
        {Array.from({ length: 14 }).map((_, i) => (
          <FloatingHeart
            key={i}
            delay={i * 0.4}
            x={`${(i * 7) % 100}%`}
            y={`${(i * 13) % 100}%`}
            size={12 + ((i * 3) % 14)}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="inline-flex items-center gap-2 rounded-full border border-rose-200 bg-white/60 px-4 py-2 text-rose-600 backdrop-blur"
        >
          <Sparkles className="h-4 w-4" />
          <span className="text-sm font-medium">Valentine's Day Special</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mt-6 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-rose-700"
        >
          A Love Letter on the Web
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-4 text-lg md:text-xl text-rose-600"
        >
          Celebrate your story with heartfelt words, a dreamy gallery, and a magical countdown to your next romantic moment.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#gallery"
            className="inline-flex items-center gap-2 rounded-full bg-rose-600 px-6 py-3 text-white shadow-lg shadow-rose-300/50 transition hover:bg-rose-700"
          >
            <Heart className="h-5 w-5 fill-current" /> View Memories
          </a>
          <a
            href="#notes"
            className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-rose-600 border border-rose-200 transition hover:bg-rose-50"
          >
            <Sparkles className="h-5 w-5" /> Read Love Notes
          </a>
        </motion.div>
      </div>
    </section>
  );
}
