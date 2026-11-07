const entries = [
  { title: "Elementary", institution: "University of San Agustin", current: false },
  { title: "Junior High School", institution: "University of San Agustin", current: false },
  { title: "Senior High School", institution: "University of San Agustin", current: false },
  { title: "College — BSIT (3rd Year)", institution: "University of San Agustin", current: true },
];

export default function Education() {
  return (
    <section id="education" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <p className="text-text-muted text-sm mb-12">
          <span className="font-mono text-accent">02</span>
          <span className="mx-2 text-border">—</span>
          Education
        </p>

        <h2 className="text-3xl font-semibold text-text-primary mb-12">
          Education
        </h2>

        <div className="relative border-l-2 border-border pl-8 space-y-10">
          {entries.map((entry) => (
            <div key={entry.title} className="relative">
              {/* Timeline dot */}
              <span
                className={`absolute -left-[calc(2rem+5px)] top-1.5 block h-3 w-3 rounded-full border-2 ${
                  entry.current
                    ? "border-accent-hover bg-accent"
                    : "border-border bg-surface"
                }`}
              />

              <div className="flex items-center gap-3 flex-wrap">
                <h3 className="font-medium text-text-primary">{entry.title}</h3>
                {entry.current && (
                  <span className="inline-block rounded-full bg-accent/20 text-accent-hover px-3 py-0.5 text-xs font-medium tracking-wide">
                    Present
                  </span>
                )}
              </div>

              <p className="mt-1 text-text-secondary text-sm">
                {entry.institution}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
