const categories = [
  {
    title: "Languages",
    items: ["HTML", "CSS", "JavaScript", "Python"],
  },
  {
    title: "Frameworks",
    items: ["Next.js", "Node.js"],
  },
  {
    title: "Tools",
    items: ["VS Code", "GitHub", "Antigravity"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="text-text-muted text-sm mb-12">
          <span className="font-mono text-accent">03</span>
          <span className="mx-2 text-border">—</span>
          Skills
        </p>

        <h2 className="text-3xl font-semibold text-text-primary mb-12">
          Skills &amp; Tools
        </h2>

        <div className="grid gap-6 md:grid-cols-3">
          {categories.map((cat) => (
            <div
              key={cat.title}
              className="bg-surface border border-border rounded-xl p-6"
            >
              <h3 className="text-accent font-mono text-sm uppercase tracking-wider mb-5">
                {cat.title}
              </h3>

              <ul className="space-y-3">
                {cat.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 text-text-primary hover:text-accent-hover transition cursor-default"
                  >
                    <span className="text-accent text-xs">▹</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
