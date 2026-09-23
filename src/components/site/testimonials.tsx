import { publishedTestimonials } from "@/lib/content";

/** Renders nothing until a testimonial is marked published in content.ts. */
export function Testimonials() {
  if (!publishedTestimonials.length) return null;

  return (
    <section className="mx-auto max-w-6xl px-5 py-16">
      <p className="text-xs font-semibold uppercase tracking-widest text-primary">Clients</p>
      <h2 className="mt-3 text-3xl font-extrabold tracking-tight">What clients say</h2>
      <ul className="mt-8 grid gap-4 md:grid-cols-2">
        {publishedTestimonials.map((item) => (
          <li key={`${item.client}-${item.company}`} className="rounded-3xl border border-line bg-card p-5">
            <blockquote className="text-sm leading-relaxed text-ink">“{item.quote}”</blockquote>
            <footer className="mt-4 flex items-center gap-3">
              {item.photo ? (
                <img src={item.photo} alt="" className="size-10 rounded-full object-cover" />
              ) : null}
              <p className="text-sm">
                <span className="font-semibold">{item.client}</span>
                <span className="block text-mute">
                  {item.role}, {item.company}
                </span>
              </p>
            </footer>
          </li>
        ))}
      </ul>
    </section>
  );
}
