import { useState } from 'react';

function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted:', form);
    setSent(true);
  };

  return (
    <section
      id="contact"
      className="bg-gradient-to-b from-gray-950 via-zinc-950 to-gray-950 px-8 py-24"
    >
      <div className="mx-auto max-w-2xl">
        {/* Heading */}
        <p className="mb-3 text-center text-sm uppercase tracking-[0.35em] text-teal-400">
          Let’s Talk
        </p>

        <h2 className="mb-4 text-center text-4xl font-bold text-white md:text-5xl">
          Get In Touch
        </h2>

        <p className="mx-auto mb-12 max-w-xl text-center text-gray-400">
          Open to internships, collaborations, freelance work, and meaningful
          conversations.
        </p>

        {/* Card */}
        <div className="rounded-3xl border border-zinc-800 bg-zinc-900/70 p-8 backdrop-blur-sm md:p-10">
          {sent ? (
            <div className="py-12 text-center">
              <div className="mb-4 text-5xl">✓</div>

              <h3 className="text-2xl font-semibold text-white">
                Message Sent
              </h3>

              <p className="mt-3 text-gray-400">
                Thanks for reaching out. I’ll get back to you soon.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full rounded-xl border border-zinc-800 bg-zinc-950 px-4 py-3 text-white placeholder-gray-600 outline-none transition-all focus:border-teal-400"
              />

              <input
                name="email"
                type="email"
                placeholder="Your Email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full rounded-xl border border-zinc-800 bg-zinc-950 px-4 py-3 text-white placeholder-gray-600 outline-none transition-all focus:border-teal-400"
              />

              <textarea
                name="message"
                rows={5}
                placeholder="Your Message"
                value={form.message}
                onChange={handleChange}
                required
                className="w-full resize-none rounded-xl border border-zinc-800 bg-zinc-950 px-4 py-3 text-white placeholder-gray-600 outline-none transition-all focus:border-teal-400"
              />

              <button
                type="submit"
                className="mt-2 w-full rounded-xl bg-teal-400 py-3 font-medium text-black transition-all duration-300 hover:scale-[1.02] hover:bg-teal-300"
              >
                Send Message →
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

export default Contact;