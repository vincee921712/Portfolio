export default function Certifications() {
  return (
    <section id="certifications" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <p className="text-text-muted text-sm mb-12">
          <span className="font-mono text-accent">05</span>
          <span className="mx-2 text-border">—</span>
          Certifications
        </p>

        <h2 className="text-3xl font-semibold text-text-primary mb-12">
          Certifications
        </h2>

        <div className="bg-surface border border-border rounded-xl p-6">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
            {/* Award icon */}
            <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-accent/10 text-accent-hover shrink-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.746 3.746 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
                />
              </svg>
            </div>

            {/* Details */}
            <div>
              <h3 className="font-medium text-text-primary">
                Cisco Packet Tracer
              </h3>
              <p className="text-text-secondary text-sm mt-0.5">
                Beginner Level
              </p>
              <p className="text-text-muted text-sm mt-0.5">
                Cisco Networking Academy
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
