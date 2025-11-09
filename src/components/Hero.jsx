import { Code2, Rocket, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-100 via-white to-pink-100 dark:from-zinc-900 dark:via-zinc-950 dark:to-indigo-950 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-24 relative">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl font-extrabold tracking-tight text-zinc-900 dark:text-white"
            >
              Manoj Kumar
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="mt-4 text-lg text-zinc-600 dark:text-zinc-300"
            >
              Full‑stack developer crafting clean, scalable web experiences with React, FastAPI, and delightful details.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-8 flex gap-3"
            >
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-indigo-600 text-white hover:bg-indigo-700 transition shadow"
              >
                <Rocket className="h-5 w-5" /> View Projects
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-white dark:bg-zinc-800 text-zinc-800 dark:text-zinc-100 border border-zinc-200 dark:border-zinc-700 hover:bg-zinc-50 dark:hover:bg-zinc-700 transition"
              >
                <Sparkles className="h-5 w-5" /> Get in Touch
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="relative"
          >
            <div className="aspect-square rounded-xl bg-white/70 dark:bg-zinc-900/70 backdrop-blur border border-zinc-200 dark:border-zinc-800 p-8 shadow-lg">
              <div className="h-full w-full flex items-center justify-center">
                <Code2 className="h-24 w-24 text-indigo-600" />
              </div>
            </div>
            <div className="absolute -top-4 -right-4 bg-indigo-600 text-white text-xs px-3 py-1 rounded-full shadow">
              Open to Opportunities
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
