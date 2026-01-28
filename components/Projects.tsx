import { projects } from "@/lib/data";
import { ExternalLink } from "lucide-react";

export default function Projects() {
  return (
    <div>
      <p className="text-white/60 text-lg">{projects.subtitle}</p>

      <div className="mt-12 grid gap-10 lg:grid-cols-3">
        {projects.items.map((p) => (
          <div key={p.name} className="card p-8 hover:bg-white/10">
            <h3 className="text-2xl font-semibold text-white">{p.name}</h3>
            <p className="mt-4 text-white/75 leading-relaxed">{p.desc}</p>

            <div className="mt-6 flex flex-wrap gap-3">
              {p.tags.map((t) => (
                <span key={t} className="pill">{t}</span>
              ))}
            </div>

           
          </div>
        ))}
      </div>

      <div className="mt-14 flex justify-center">
        <a href={projects.moreHref} className="btn-outline px-10">
          {projects.moreLabel}
        </a>
      </div>
    </div>
  );
}
