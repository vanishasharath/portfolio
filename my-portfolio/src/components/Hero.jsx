
import { useState } from 'react'

function Hero() {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText('vsharath260505@gmail.com')
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      window.location.href = 'mailto:vsharath260505@gmail.com'
    }
  }

  return (
    <section
      id="home"
      className="floral-pattern relative flex min-h-screen scroll-mt-20 items-center overflow-hidden px-6 pb-16 pt-28 md:px-12"
    >
      {/* Decorative botanical-inspired details */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-16 top-32 h-64 w-64 rounded-full border border-[#e9c9c8]/60"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-8 top-40 h-48 w-48 rounded-full border border-[#d8c0b4]/50"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-28 text-6xl text-[#bd8588]/25 md:right-12 md:text-8xl"
      >
        ❀
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-16">
        {/* Illustration */}
        <div className="animate-fade-up flex justify-center">
          <div className="relative flex aspect-square w-full max-w-[340px] items-center justify-center rounded-t-full rounded-b-[46%] border border-[#dfc4b9] bg-[#f2e2d9] shadow-[0_20px_60px_rgba(139,103,91,0.10)] md:max-w-[400px]">
            <div className="absolute inset-4 rounded-t-full rounded-b-[46%] border border-[#fffaf6]/80" />

            <div className="animate-float relative flex flex-col items-center">
              <span className="text-8xl md:text-9xl" role="img" aria-label="Developer illustration">
                👩🏻‍💻
              </span>
              <span className="mt-5 rounded-full border border-[#dfc4b9] bg-[#fffaf6]/80 px-5 py-2 text-xs tracking-[0.18em] text-[#98666a]">
                CREATING WITH PURPOSE
              </span>
            </div>

            <span aria-hidden="true" className="absolute left-5 top-16 text-3xl text-[#bd8588]">
              ✿
            </span>
            <span aria-hidden="true" className="absolute bottom-16 right-5 text-3xl text-[#a3a994]">
              ❋
            </span>
            <span aria-hidden="true" className="absolute right-8 top-10 text-2xl text-[#bd8588]/70">
              ✧
            </span>
          </div>
        </div>

        {/* Introduction */}
        <div className="animate-fade-up text-center md:text-left">
          <p className="eyebrow mb-5">
            Available for Opportunities
          </p>

          <h1 className="mb-6 text-5xl font-medium leading-tight tracking-tight text-[#59453f] md:text-6xl lg:text-7xl">
            Hi, I'm
            <br />
            <span className="italic text-[#bd8588]">Vanisha.</span>
          </h1>

          <p className="section-description mx-auto mb-8 max-w-lg text-base md:mx-0 md:text-lg">
            Computer Science student building AI-powered products and
            full-stack applications that solve real problems.
          </p>

          <div className="flex flex-wrap justify-center gap-3 md:justify-start">
            <a href="#projects" className="btn-primary">
              View My Work <span aria-hidden="true">↗</span>
            </a>

            <button
              type="button"
              onClick={handleCopy}
              className="btn-secondary"
            >
              {copied ? '✓ Email Copied!' : 'Copy Email'}
            </button>
          </div>

          <p className="mt-7 text-sm text-[#9b8980]">
            Java · Artificial Intelligence · Software Development
          </p>
        </div>
      </div>
    </section>
  )
}

export default Hero
