export default function Hero() {
  return (
    <section className="relative mb-10 rounded-xl p-6 bg-gradient-to-br from-slate-800 to-[#020617] border border-slate-700">
      <div className="relative z-10 max-w-xl">
        <span className="inline-flex items-center gap-2 text-xs px-3 py-1 rounded-full border border-slate-600 text-gray-300 mb-3">
          <span className="h-2 w-2 bg-yellow-400 rounded-full"></span>
          Today’s lightning picks
        </span>

        <h1 className="text-2xl font-extrabold text-white">
          Shop in <span className="text-yellow-400">dark mode luxury</span>
        </h1>

        <p className="text-gray-400 text-sm mt-2">
          Products streamed live from your Node + MongoDB backend.
        </p>

        <div className="flex flex-wrap gap-2 mt-4 text-xs text-gray-300">
          <span className="px-3 py-1 rounded-full border border-slate-600">
            Live API
          </span>
          <span className="px-3 py-1 rounded-full border border-slate-600">
            JWT Ready
          </span>
          <span className="px-3 py-1 rounded-full border border-slate-600">
            Responsive
          </span>
        </div>
      </div>
    </section>
  );
}
