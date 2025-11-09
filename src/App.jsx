import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";

function Footer() {
  return (
    <footer className="py-8 text-center text-sm text-zinc-600 dark:text-zinc-400">
      <p>
        © {new Date().getFullYear()} Manoj Kumar. Built with React & Tailwind. Deployed by Flames.Blue.
      </p>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
