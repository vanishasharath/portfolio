import React from 'react';

const projects = [
  {
    title: 'Interview Coach',
    description:
      'Full-stack AI system that evaluates resume–JD alignment and conducts adaptive interviews. Identifies skill gaps, generates personalized questions, and scores candidates by category.',
    tech: [
      'FastAPI',
      'React',
      'spaCy',
      'Cohere API',
      'Sentence Transformers',
      'NumPy',
    ],
    live: 'https://ai-interview-coach-three-rosy.vercel.app/',
    github: null,
  },
  {
    title: 'Research Gap Finder',
    description:
      'RAG pipeline that ingests research papers, identifies knowledge gaps using vector search and knowledge graph generation. Deployed with Docker on Streamlit.',
    tech: [
      'Python',
      'LangChain',
      'FastEmbed',
      'FAISS',
      'Groq LLM',
      'Docker',
      'Streamlit',
    ],
    live: 'https://researchgapanalyzer-dmrz27egtrybwnzvmhkk4j.streamlit.app',
    github: null,
  },
  {
    title: 'Elderly Care App',
    description:
      'Conversational AI voice assistant for elderly users. Handles medical reminders, appointments, and emergency support with secure auth and real-time data storage.',
    tech: [
      'Java',
      'Android Studio',
      'Firebase',
      'Gemini API',
      'STT/TTS',
      'OkHttp',
    ],
    live: null,
    github:
      'https://github.com/vanishasarath/ElderlyCareApp/blob/main/README.md',
  },
];

function ProjectCard({ title, description, tech, live, github, index }) {
  const url = live || github;

  return (
    <a
      href={url || '#'}
      target="_blank"
      rel="noreferrer"
      className={`group relative rounded-2xl border border-gray-800 bg-gray-900/80 p-6 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:border-teal-400 hover:shadow-2xl hover:shadow-teal-500/10 ${
        url ? 'cursor-pointer' : 'pointer-events-none opacity-70'
      }`}
      style={{
        animation: `fadeUp 0.6s ease forwards`,
        animationDelay: `${index * 0.12}s`,
        opacity: 0,
      }}
    >
      {/* Glow */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-teal-500/0 via-teal-500/5 to-cyan-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative z-10">
        <div className="mb-3 flex items-start justify-between gap-4">
          <h3 className="text-xl font-semibold text-white group-hover:text-teal-400 transition-colors">
            {title}
          </h3>

          {url && (
            <span className="text-lg text-gray-600 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-teal-400">
              ↗
            </span>
          )}
        </div>

        <p className="mb-5 text-sm leading-relaxed text-gray-400">
          {description}
        </p>

        <div className="mb-6 flex flex-wrap gap-2">
          {tech.map((item) => (
            <span
              key={item}
              className="rounded-md border border-teal-500/20 bg-teal-500/10 px-2 py-1 text-xs text-teal-300"
            >
              {item}
            </span>
          ))}
        </div>

        <div className="border-t border-gray-800 pt-4 text-xs tracking-wide text-gray-500 group-hover:text-teal-300 transition-colors">
          {live
            ? 'LIVE DEPLOYMENT'
            : github
            ? 'VIEW ON GITHUB'
            : 'COMING SOON'}
        </div>
      </div>
    </a>
  );
}

function Projects() {
  return (
    <section
      id="projects"
      className="bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 px-8 py-24"
    >
      <div className="mx-auto max-w-6xl">
        <p className="mb-3 text-center text-sm uppercase tracking-[0.35em] text-teal-400">
          Selected Work
        </p>

        <h2 className="mb-4 text-center text-4xl font-bold text-white md:text-5xl">
          Projects
        </h2>

        <p className="mx-auto mb-14 max-w-2xl text-center text-gray-400">
          AI-powered applications and full-stack systems built with a focus on
          real-world impact, scalable architecture, and polished user
          experiences.
        </p>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              index={index}
              {...project}
            />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(24px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}

export default Projects;