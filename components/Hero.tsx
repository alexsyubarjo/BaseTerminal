import { hero } from "@/lib/data";

export default function Hero() {
  const infoJson = `{
  "nama": "${hero.info.nama}",
  "posisi": "${hero.info.posisi}",
  "domisili": "${hero.info.domisili}",
  "pendidikan": "${hero.info.pendidikan}",
  "prodi": "${hero.info.prodi}",
  "semester": ${hero.info.semester},
}`;

  return (
    <section id="home" className="pt-16 pb-20">
      <div className="mx-auto max-w-6xl px-6 grid gap-14 lg:grid-cols-2 items-center">
        <div className="term">
          <div className="term-top">
            <span className="dot bg-red-400/80" />
            <span className="dot bg-yellow-300/80" />
            <span className="dot bg-green-400/80" />
            <span className="ml-4 text-sm text-white/70">{hero.terminalTitle}</span>
          </div>

          <div className="p-6 font-mono text-base leading-relaxed">
            <div className="text-termgreen">
              <span className="prompt">$</span> whoami
            </div>
            <div className="text-white/90">{hero.whoami}</div>

            <div className="mt-3 text-termgreen">
              <span className="prompt">$</span> cat info.json
            </div>
            <pre className="text-white/90 whitespace-pre-wrap">{infoJson}</pre>

            <div className="mt-3 text-termgreen">
              <span className="prompt">$</span> ./welcome.sh
            </div>
            <div className="text-white/90">
              {hero.welcome} <span className="ml-2 cursor" />
            </div>
          </div>
        </div>

        <div>
          <div className="text-5xl md:text-6xl font-semibold tracking-tight leading-tight">
            <div className="text-white">{hero.headingSmall}</div>
            <div className="text-accent-600">{hero.headingBig}</div>
          </div>

          <p className="mt-6 text-xl text-white/80 max-w-xl">
            {hero.desc}
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            {hero.tags.map((t) => (
              <span key={t} className="pill">{t}</span>
            ))}
          </div>

          <div className="mt-10 flex gap-6">
            <a href={hero.cta1.href} className="btn-primary">{hero.cta1.label}</a>
            <a href={hero.cta2.href} className="btn-outline">{hero.cta2.label}</a>
          </div>
        </div>
      </div>
    </section>
  );
}
