import RomanticHero from './components/RomanticHero';
import LoveGallery from './components/LoveGallery';
import ValentinesCountdown from './components/ValentinesCountdown';
import LoveNotes from './components/LoveNotes';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-rose-900">
      <RomanticHero />
      <LoveGallery />
      <ValentinesCountdown />
      <LoveNotes />

      <footer className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-pink-50 to-rose-100" />
        <div className="relative max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-rose-700">Made with love for Valentine's Day</p>
          <a
            href="#gallery"
            className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2 text-rose-600 border border-rose-200 transition hover:bg-rose-50"
          >
            Explore Memories
          </a>
        </div>
      </footer>
    </div>
  );
}
