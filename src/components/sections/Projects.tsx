const techPills = ["Python", "JavaScript", "MySQL"];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="text-text-muted text-sm mb-12">
          <span className="font-mono text-accent">04</span>
          <span className="mx-2 text-border">—</span>
          Projects
        </p>

        <h2 className="text-3xl font-semibold text-text-primary mb-12">
          Projects
        </h2>

        {/* Featured project card */}
        <div className="bg-surface border border-border rounded-2xl overflow-hidden">
          {/* Screenshot placeholder */}
          <div className="bg-surface-hover h-48 md:h-64 flex flex-col items-center justify-center gap-3 text-text-muted">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z"
              />
            </svg>
            <span className="text-sm font-mono">CommunityVoice</span>
          </div>

          {/* Details */}
          <div className="p-6 md:p-8">
            <div className="flex items-center gap-3 mb-2">
              <p className="font-mono text-accent text-xs uppercase tracking-widest">
                Featured Project
              </p>
              <span className="inline-block rounded-full bg-accent/20 text-accent-hover px-2.5 py-0.5 text-xs font-mono">
                Capstone Proposal
              </span>
            </div>

            <h3 className="text-2xl font-semibold text-text-primary mb-3">
              CommunityVoice
            </h3>

            <p className="text-text-secondary leading-relaxed mb-6">
              A web-based community reporting and engagement platform designed to
              help citizens report local issues, give feedback, and improve civic
              communication.
            </p>

            <div className="flex flex-wrap gap-2 mb-8">
              {techPills.map((tech) => (
                <span
                  key={tech}
                  className="bg-surface border border-border rounded-full px-4 py-1.5 text-sm text-text-secondary hover:border-border-hover hover:text-text-primary transition"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href="https://github.com/vincee921712/COMMUNITYVOICE"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-2.5 text-sm font-medium text-text-primary hover:bg-accent-hover transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                </svg>
                View on GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
