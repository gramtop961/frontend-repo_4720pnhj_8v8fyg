import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const notes = [
  {
    title: 'You + Me',
    body:
      "In a world of billions, I found my favorite. Thank you for the quiet moments, the loud laughs, and the everyday magic.",
  },
  {
    title: 'Our Song',
    body:
      'Love sounds like your voice on a rainy day and the rhythm of your heartbeat when we hug a little longer.',
  },
  {
    title: 'Promise',
    body:
      'I promise to choose you in every universe, in every lifetime, in every ordinary Tuesday.',
  },
];

export default function LoveNotes() {
  return (
    <section id="notes" className="relative py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-rose-50 to-white" />
      <div className="relative max-w-5xl mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-rose-700">Love Notes</h2>
          <p className="text-rose-600 mt-2">A few pages from our heart diary.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {notes.map((note, idx) => (
            <motion.article
              key={note.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="rounded-2xl border border-rose-100 bg-white/80 backdrop-blur p-6 shadow-sm"
            >
              <div className="flex items-center gap-2 text-rose-600">
                <Heart className="h-4 w-4" />
                <h3 className="font-semibold text-rose-700">{note.title}</h3>
              </div>
              <p className="mt-3 text-rose-600 leading-relaxed">{note.body}</p>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-10 text-center"
        >
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-full bg-rose-600 px-6 py-3 text-white shadow-lg shadow-rose-300/50 transition hover:bg-rose-700"
          >
            Send a Love Note
          </a>
        </motion.div>
      </div>
    </section>
  );
}
