import { steps } from "@/lib/content";

export function ProcessSteps() {
  return (
    <ol className="mt-8 grid gap-4 md:grid-cols-5">
      {steps.map((step, index) => (
        <li
          key={step.n}
          className="rise rounded-3xl border border-line bg-card p-5"
          style={{ animationDelay: `${index * 40}ms` }}
        >
          <span className="font-display text-sm font-extrabold text-primary">{step.n}</span>
          <h3 className="mt-2 text-lg font-bold">{step.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-mute">{step.text}</p>
        </li>
      ))}
    </ol>
  );
}
