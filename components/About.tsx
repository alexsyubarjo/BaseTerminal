import { about } from "@/lib/data";

export default function About() {
  return (
    <div className="grid gap-12 lg:grid-cols-2">
      <div>
        <h3 className="text-2xl font-semibold text-accent-600">{about.role}</h3>
        <div className="mt-6 space-y-6 text-white/80 text-lg leading-relaxed">
          {about.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-2xl font-semibold text-accent-600">{about.skillsTitle}</h3>

        <div className="mt-6 grid gap-8 sm:grid-cols-2">
          {about.skills.map((g) => (
            <div key={g.title}>
              <div className="text-accent-600 text-lg font-semibold">{g.title}</div>
              <ul className="mt-4 space-y-3 text-white/85">
                {g.items.map((it) => (
                  <li key={it} className="flex gap-3">
                    <span className="text-accent-600">&gt;</span>
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
