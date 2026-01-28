import { brand } from "@/lib/data";
import { Download, ChevronDown } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-black/30 backdrop-blur border-b border-white/10">
      <div className="mx-auto max-w-6xl px-6 py-5 flex items-center justify-between">
        <a href="#home" className="text-xl font-semibold tracking-tight">
          <span className="text-white">&lt;</span>
          <span className="text-accent-600">Nanda Sec</span>
          <span className="text-white">/&gt;</span>
        </a>

        <nav className="hidden md:flex items-center gap-10 text-base">
          {brand.nav.map((it) => (
            <a key={it.href} href={it.href} className="navlink">
              {it.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-white/80">
            <span>{brand.languageLabel}</span>
            <ChevronDown className="text-accent-600" size={18} />
          </div>

          <a
            href={brand.cvHref}
            className="inline-flex items-center gap-2 rounded-lg bg-accent-600 px-5 py-3 font-medium text-white hover:bg-accent-700 transition"
            target="_blank"
            rel="noreferrer"
          >
            <Download size={18} /> CV
          </a>
        </div>
      </div>
    </header>
  );
}
