import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "AI Chat Assistant",
    description:
      "Conversational agent with retrieval-augmented generation, built with React, FastAPI, and vector search.",
    tags: ["React", "FastAPI", "RAG", "Pinecone"],
    live: "#",
    repo: "#",
  },
  {
    title: "Task Manager",
    description:
      "Productivity web app featuring real-time updates, drag-and-drop boards, and MongoDB persistence.",
    tags: ["Vite", "Tailwind", "MongoDB", "WebSockets"],
    live: "#",
    repo: "#",
  },
  {
    title: "Portfolio Generator",
    description:
      "CLI that scaffolds developer portfolios from a single config file using opinionated templates.",
    tags: ["Node.js", "CLI", "Templates"],
    live: "#",
    repo: "#",
  },
];

function Tag({ label }) {
  return (
    <span className="px-2.5 py-1 rounded-md bg-zinc-100 dark:bg-zinc-800 text-xs text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700">
      {label}
    </span>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-white dark:bg-zinc-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-end justify-between gap-4 mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">
              Selected Projects
            </h2>
            <p className="mt-2 text-zinc-600 dark:text-zinc-300">
              A snapshot of things I loved building recently.
            </p>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <article
              key={i}
              className="group rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6 hover:shadow-lg transition"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">
                    {p.title}
                  </h3>
                  <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-300">
                    {p.description}
                  </p>
                </div>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <Tag key={t} label={t} />
                ))}
              </div>
              <div className="mt-6 flex items-center gap-3">
                <a
                  href={p.live}
                  className="inline-flex items-center gap-2 text-sm px-3 py-2 rounded-md bg-indigo-50 text-indigo-700 border border-indigo-200 hover:bg-indigo-100 dark:bg-indigo-950 dark:text-indigo-300 dark:border-indigo-900"
                >
                  <ExternalLink className="h-4 w-4" /> Live Demo
                </a>
                <a
                  href={p.repo}
                  className="inline-flex items-center gap-2 text-sm px-3 py-2 rounded-md bg-zinc-100 text-zinc-800 border border-zinc-200 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-200 dark:border-zinc-700"
                >
                  <Github className="h-4 w-4" /> Source
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
