import Image from "next/image";

const techStack = ["HTML", "CSS", "JavaScript", "Python", "Next.js", "Node.js"];

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="text-text-muted text-sm mb-12">
          <span className="font-mono text-accent">01</span>
          <span className="mx-2 text-border">—</span>
          About
        </p>

        <div className="grid gap-12 md:grid-cols-2 items-center">
          {/* Profile image */}
          <div className="flex justify-center md:justify-start">
            <div className="relative w-80 h-80 rounded-2xl border border-border overflow-hidden">
              <Image
                src="/profile.jpg"
                alt="Vince Dorell F. Esmero"
                fill
                className="object-cover"
                sizes="320px"
                priority
              />
            </div>
          </div>

          {/* Bio */}
          <div>
            <h2 className="text-3xl font-semibold text-text-primary mb-6">
              About Me
            </h2>

            <p className="text-text-secondary leading-relaxed mb-8">
              I am an aspiring developer and IT student dedicated to building
              impactful digital solutions. Passionate about both front-end and
              back-end development, I focus on creating web applications that
              address real-world community needs. I continuously broaden my
              technical skill set through hands-on projects and practical
              software engineering.
            </p>

            <p className="text-text-muted text-sm font-mono uppercase tracking-wider mb-4">
              Tech Stack
            </p>

            <div className="flex flex-wrap gap-2">
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="bg-surface border border-border rounded-full px-4 py-1.5 text-sm text-text-secondary hover:border-border-hover hover:text-text-primary transition"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
