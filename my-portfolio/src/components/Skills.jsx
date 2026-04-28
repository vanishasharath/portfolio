const skills = [
    {
      category: 'Languages',
      items: ['C', 'Java', 'React'],
    },
    {
      category: 'AI & ML',
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
      category: 'Frameworks & Tools',
      items: [
        'TensorFlow',
        'Keras',
        'NumPy',
        'Scikit-learn',
        'LangChain',
        'FAISS',
        'FastEmbed',
      ],
    },
    {
      category: 'APIs & Services',
      items: [
        'Groq API',
        'Gemini API',
        'Cohere API',
        'Firebase',
        'REST APIs',
      ],
    },
    {
      category: 'Dev Tools',
      items: [
        'Git',
        'Docker',
        'Streamlit',
        'Android Studio',
        'VS Code',
        'Jupyter',
      ],
    },
  ];
  
  function Skills() {
    return (
      <section
        id="skills"
        className="bg-gradient-to-b from-gray-950 via-zinc-950 to-gray-950 px-8 py-24"
      >
        <div className="mx-auto max-w-5xl">
          {/* Heading */}
          <p className="mb-3 text-center text-sm uppercase tracking-[0.35em] text-teal-400">
            What I Work With
          </p>
  
          <h2 className="mb-4 text-center text-4xl font-bold text-white md:text-5xl">
            Skills
          </h2>
  
          <p className="mx-auto mb-14 max-w-2xl text-center text-gray-400">
            Technologies and tools I use to build intelligent applications and
            scalable software.
          </p>
  
          {/* Main Card */}
          <div className="rounded-3xl border border-zinc-800 bg-zinc-900/70 p-8 backdrop-blur-sm md:p-10">
            <div className="space-y-8">
              {skills.map((group) => (
                <div
                  key={group.category}
                  className="grid gap-4 border-b border-zinc-800 pb-6 last:border-b-0 last:pb-0 md:grid-cols-[220px_1fr]"
                >
                  {/* Category */}
                  <div>
                    <h3 className="text-sm font-medium uppercase tracking-[0.3em] text-teal-400">
                      {group.category}
                    </h3>
                  </div>
  
                  {/* Skills Text */}
                  <div className="text-gray-300 leading-8">
                    {group.items.join('  •  ')}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }
  
  export default Skills;