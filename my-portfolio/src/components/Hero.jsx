import { useState } from 'react';

function Hero() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('vsharath260505@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-gradient-to-b from-black via-zinc-950 to-black px-8 pt-16">
      
      {/* Glow Background */}
      <div className="absolute left-1/4 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-teal-400/20 blur-3xl" />
      <div className="absolute right-1/4 top-1/3 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />

      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-14 md:grid-cols-2">
        
        {/* LEFT */}
        <div className="flex justify-center">
          <div className="group relative flex h-80 w-80 items-center justify-center rounded-3xl border border-zinc-800 bg-zinc-900/80 backdrop-blur-sm transition-all duration-500 hover:border-teal-400 hover:shadow-2xl hover:shadow-teal-500/10">
            
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-teal-500/10 to-cyan-500/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

            <span className="relative z-10 text-8xl">👩‍💻</span>
          </div>
        </div>

        {/* RIGHT */}
        <div>
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.35em] text-teal-400">
            Available for Opportunities
          </p>

          <h1 className="mb-5 text-5xl font-bold leading-tight text-white md:text-6xl">
            Hi, I'm <span className="text-teal-400">Vanisha</span>
          </h1>

          <p className="mb-8 max-w-xl text-lg leading-relaxed text-gray-400">
            Computer Science student building AI-powered products, full-stack
            applications, and solutions that go from idea to deployment.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-xl bg-teal-400 px-6 py-3 font-medium text-black transition-all duration-300 hover:scale-[1.03] hover:bg-teal-300"
            >
              View Projects
            </a>

            <button
              onClick={handleCopy}
              className={`rounded-xl border px-6 py-3 font-medium transition-all duration-300 ${
                copied
                  ? 'border-green-500 text-green-400'
                  : 'border-zinc-700 text-gray-300 hover:border-teal-400 hover:text-white'
              }`}
            >
              {copied ? '✓ Copied!' : 'Copy Email'}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;