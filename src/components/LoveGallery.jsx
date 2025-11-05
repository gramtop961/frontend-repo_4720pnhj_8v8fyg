import { motion } from 'framer-motion';
import { Camera } from 'lucide-react';

const photos = [
  'https://images.unsplash.com/photo-1516738901171-8eb4fc13bd20?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1498837167922-ddd27525d352?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1511688878353-3a2f5be94cd8?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1518199266791-5375a83190b7?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1471581528777-0b3b00cc1c9b?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1517816428104-797678c7cf0d?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1470364693235-a29e1c61f0a2?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1457296898342-cdd24585d095?q=80&w=1600&auto=format&fit=crop',
];

export default function LoveGallery() {
  return (
    <section id="gallery" className="relative py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-rose-50 to-white" />
      <div className="relative max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-rose-700">Our Photo Gallery</h2>
            <p className="text-rose-600 mt-1">Little frames of big feelings.</p>
          </div>
          <div className="hidden sm:flex items-center gap-2 text-rose-600">
            <Camera className="h-5 w-5" />
            <span className="text-sm">Captured moments</span>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-4">
          {photos.map((src, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="group relative overflow-hidden rounded-xl bg-rose-100"
            >
              <img
                src={src}
                alt={`Memory ${idx + 1}`}
                className="h-40 sm:h-48 md:h-56 w-full object-cover transition duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
