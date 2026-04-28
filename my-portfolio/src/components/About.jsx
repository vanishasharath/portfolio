import React from 'react';

function About() {
  return (
    <section
      id="about"
      className="bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950 px-8 py-24"
    >
      <div className="mx-auto max-w-5xl">
        {/* Heading */}
        <p className="mb-3 text-center text-sm uppercase tracking-[0.35em] text-teal-400">
          About Me
        </p>

        <h2 className="mb-5 text-center text-4xl font-bold text-white md:text-5xl">
          CS Student. Developer. AI Builder.
        </h2>

        <p className="mx-auto mb-14 max-w-2xl text-center text-gray-400">
          Building practical software and AI systems with a focus on real-world
          impact, clean design, and scalable solutions.
        </p>

        {/* Main Card */}
        <div className="group relative overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900/80 p-10 backdrop-blur-sm transition-all duration-500 hover:border-teal-400 hover:shadow-2xl hover:shadow-teal-500/10 md:p-12">
          {/* Glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-teal-500/0 via-teal-500/5 to-cyan-500/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

          <div className="relative z-10 grid gap-10 md:grid-cols-2">
            {/* Left Content */}
            <div>
              <p className="mb-6 text-gray-400 leading-relaxed">
                I'm a <span className="font-medium text-white">Computer Science student</span> at
                JSS Academy of Technical Education, Bengaluru (2023–2027), with
                hands-on experience in full-stack development, Android apps, and
                AI systems.
              </p>

              <p className="mb-6 text-gray-400 leading-relaxed">
                My strongest interests are in{" "}
                <span className="text-teal-400">
                  NLP, Generative AI, and product building
                </span>{" "}
                — creating tools that solve practical problems and deliver strong
                user experiences.
              </p>

              <p className="text-gray-400 leading-relaxed">
                I enjoy taking projects from concept to deployment, combining
                engineering with design and business thinking.
              </p>
            </div>

            {/* Right Animated Build Box */}
            <div className="flex">
              <div className="group/build relative flex w-full flex-col justify-between overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-950 p-8 transition-all duration-500 hover:-translate-y-2 hover:border-teal-400 hover:shadow-xl hover:shadow-teal-500/10">
                {/* Animated Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-teal-500/0 via-teal-500/10 to-cyan-500/0 opacity-0 transition-opacity duration-500 group-hover/build:opacity-100" />

                {/* Floating Dot */}
                <div className="absolute right-6 top-6 h-3 w-3 animate-pulse rounded-full bg-teal-400" />

                <div className="relative z-10">
                  <h3 className="text-5xl font-bold text-white transition-colors duration-300 group-hover/build:text-teal-400">
                    Build
                  </h3>

                  <p className="mt-4 text-lg text-gray-400">
                    Learn • Improve • Create • Repeat
                  </p>
                </div>

                <div className="relative z-10 mt-10">
                  <div className="h-1 w-full overflow-hidden rounded-full bg-zinc-800">
                    <div className="h-full w-1/2 animate-[grow_2s_ease-in-out_infinite] rounded-full bg-teal-400" />
                  </div>

                  <p className="mt-4 text-sm uppercase tracking-widest text-gray-500">
                    Continuous Growth Mindset
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes grow {
          0% { width: 20%; }
          50% { width: 75%; }
          100% { width: 20%; }
        }
      `}</style>
    </section>
  );
}

export default About;