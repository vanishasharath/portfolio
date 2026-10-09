
function About() {
  return (
    <section
      id="about"
      className="floral-pattern scroll-mt-20 px-6 py-24 md:px-12 md:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 text-center">
          <p className="eyebrow mb-3">A Little About Me</p>

          <h2 className="section-title mb-5">
            CS Student. Developer.
            <br className="hidden sm:block" />{' '}
            <span className="italic text-[#bd8588]">AI Builder.</span>
          </h2>

          <p className="section-description mx-auto max-w-2xl">
            I turn ideas into working products, combining full-stack
            engineering, applied AI, and thoughtful design.
          </p>
        </div>

        <div className="relative overflow-hidden rounded-[2rem] border border-[#eadbd1] bg-[#fffaf6]/90 p-7 shadow-[0_16px_50px_rgba(139,103,91,0.06)] md:p-12">
          {/* Decorative corner details */}
          <span
            aria-hidden="true"
            className="pointer-events-none absolute right-5 top-2 text-6xl text-[#bd8588]/20 md:right-10 md:top-4 md:text-8xl"
          >
            ❀
          </span>

          <div className="relative z-10 grid gap-12 md:grid-cols-2 md:gap-14">
            <div className="space-y-6 text-sm leading-8 text-[#79655e] md:text-base">
              <p>
                I'm a{' '}
                <span className="font-semibold text-[#59453f]">
                  Computer Science student
                </span>{' '}
                at JSS Academy of Technical Education, Bengaluru (2023–2027),
                with hands-on experience in full-stack development, Android
                apps, and AI systems.
              </p>

              <p>
                I'm most drawn to{' '}
                <span className="font-medium text-[#98666a]">
                  applied AI, Generative AI, and building products end to end
                </span>
                : turning smart systems into tools people actually want to use.
                I care as much about how a product feels as how it works under
                the hood.
              </p>

              <p>
                I'm part of a team developing an IoT and machine learning
                system that predicts refrigerant leaks in HVAC units. I also
                spent time working on applied AI with Python during my
                internship at SkillForge.
              </p>

              <p>
                I enjoy taking projects from concept to deployment, combining
                engineering with design and business thinking, so what I build
                is not just functional but genuinely useful. Open to
                internships and collaborations in software and AI.
              </p>
            </div>

            {/* Build card */}
            <div className="flex">
              <div className="group relative flex min-h-[330px] w-full flex-col justify-between overflow-hidden rounded-[1.75rem] border border-[#e7cbc4] bg-[#f5e8e0] p-8 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(189,133,136,0.15)] md:p-10">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-12 -top-12 h-48 w-48 rounded-full border border-[#bd8588]/20 transition-transform duration-700 group-hover:scale-110"
                />

                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-5 -top-5 h-32 w-32 rounded-full border border-[#bd8588]/20"
                />

                <div className="relative z-10">
                  <p className="eyebrow mb-4">My Philosophy</p>

                  <h3 className="text-5xl font-medium tracking-tight text-[#59453f] transition-colors duration-300 group-hover:text-[#98666a] md:text-6xl">
                    Build<span className="text-[#bd8588]">.</span>
                  </h3>

                  <p className="mt-5 text-base leading-7 text-[#79655e]">
                    Code <span className="text-[#bd8588]">✿</span> Data{' '}
                    <span className="text-[#bd8588]">✿</span> Design{' '}
                    <span className="text-[#bd8588]">✿</span> Deploy
                  </p>
                </div>

                <div className="relative z-10 mt-12">
                  <div className="h-1.5 overflow-hidden rounded-full bg-[#e5d0c7]">
                    <div className="h-full w-1/2 animate-[grow_2s_ease-in-out_infinite] rounded-full bg-[#bd8588]" />
                  </div>

                  <p className="mt-4 text-xs uppercase tracking-[0.2em] text-[#98666a]">
                    Continuous Growth Mindset
                  </p>
                </div>

                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute bottom-3 right-5 text-5xl text-[#bd8588]/25"
                >
                  ❋
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
