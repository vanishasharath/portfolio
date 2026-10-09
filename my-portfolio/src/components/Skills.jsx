
const skills = [
  {
    category: 'Languages',
    icon: '✿',
    items: ['Java', 'Python', 'HTML', 'CSS'],
  },
  {
    category: 'AI & ML',
    icon: '❋',
    items: [
      'Generative AI',
      'LLMs',
      'RAG',
      'NLP',
      'Deep Learning',
      'Embeddings',
      'Semantic Search',
    ],
  },
  {
    category: 'Frameworks & Libraries',
    icon: '❀',
    items: [
      'TensorFlow',
      'Keras',
      'Scikit-learn',
      'LangChain',
      'FAISS',
      'FastEmbed',
      'spaCy',
      'NumPy',
      'Sentence Transformers',
    ],
  },
  {
    category: 'Web & Mobile',
    icon: '◇',
    items: ['React', 'FastAPI', 'Streamlit', 'REST APIs', 'Android Studio'],
  },
  {
    category: 'Databases',
    icon: '❋',
    items: ['MySQL', 'Firebase / Firestore'],
  },
  {
    category: 'APIs & Services',
    icon: '✧',
    items: ['Groq API', 'Gemini API', 'Cohere API', 'CoinGecko API'],
  },
  {
    category: 'Tools & Deployment',
    icon: '✿',
    items: [
      'Git',
      'Maven',
      'JUnit',
      'JDBC',
      'Jupyter Notebook',
      'VS Code',
      'Vercel',
      'Render',
      'Streamlit Cloud',
    ],
  },
  {
    category: 'Core CS',
    icon: '◇',
    items: [
      'Data Structures & Algorithms',
      'OOP',
      'DBMS',
      'Operating Systems',
      'Computer Networks',
    ],
  },
]

function Skills() {
  return (
    <section
      id="skills"
      className="floral-pattern scroll-mt-20 px-6 py-24 md:px-12 md:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 text-center">
          <p className="eyebrow mb-3">My Toolkit</p>

          <h2 className="section-title mb-5">
            Skills & <span className="italic text-[#bd8588]">Expertise.</span>
          </h2>

          <p className="section-description mx-auto max-w-2xl">
            The languages, frameworks, and tools I use to build AI-powered
            applications and full-stack software.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((group, index) => (
            <article
              key={group.category}
              className="group relative overflow-hidden rounded-3xl border border-[#eadbd1] bg-[#fffaf6]/90 p-6 shadow-[0_8px_28px_rgba(139,103,91,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-[#d9b5b3] hover:shadow-[0_16px_35px_rgba(189,133,136,0.10)]"
              style={{
                animation: `fadeUp 0.5s ease ${index * 0.07}s both`,
              }}
            >
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-5 -top-5 text-6xl text-[#bd8588]/10 transition-transform duration-500 group-hover:rotate-12"
              >
                {group.icon}
              </div>

              <div className="relative z-10">
                <div className="mb-5 flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#f3e4df] text-xl text-[#98666a]">
                    {group.icon}
                  </span>

                  <h3 className="font-serif text-lg font-semibold text-[#59453f]">
                    {group.category}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-[#eadbd1] bg-[#fbf3ee] px-3 py-1.5 text-xs font-medium text-[#79655e] transition-colors duration-200 hover:border-[#bd8588] hover:bg-[#f3e2df] hover:text-[#80565a] sm:text-sm"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-8 text-center text-xs tracking-wide text-[#9b8980]">
          Always learning · Always building <span className="text-[#bd8588]">✿</span>
        </p>
      </div>
    </section>
  )
}

export default Skills
