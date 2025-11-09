import { Mail, Send } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    // For this static portfolio, we'll just simulate a send.
    setSent(true);
  }

  return (
    <section id="contact" className="py-20 bg-zinc-50 dark:bg-zinc-950/50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">
          Contact
        </h2>
        <p className="mt-2 text-zinc-600 dark:text-zinc-300">
          Want to collaborate or just say hello? Drop a message.
        </p>

        <form onSubmit={handleSubmit} className="mt-8 grid gap-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="mt-1 w-full px-3 py-2 rounded-md border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="mt-1 w-full px-3 py-2 rounded-md border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="you@example.com"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">Message</label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              rows="5"
              className="mt-1 w-full px-3 py-2 rounded-md border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="What would you like to chat about?"
            />
          </div>
          <div className="flex items-center gap-3">
            <button
              type="submit"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-indigo-600 text-white hover:bg-indigo-700 transition shadow"
            >
              <Send className="h-4 w-4" /> Send Message
            </button>
            <a
              href="mailto:manoj@example.com"
              className="inline-flex items-center gap-2 text-indigo-700 dark:text-indigo-400 hover:underline"
            >
              <Mail className="h-4 w-4" /> Or email directly
            </a>
          </div>

          {sent && (
            <p className="text-sm text-green-700 dark:text-green-400">
              Thanks {name.split(" ")[0] || "there"}! Your message is noted locally. Hook this form to your backend or a service like EmailJS to make it live.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
