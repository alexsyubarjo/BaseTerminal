import { brand, contact } from "@/lib/data";
import { Download } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-white/10 bg-black/25">
      <div className="mx-auto max-w-6xl px-6 py-10 grid gap-6 md:grid-cols-3 items-center">
        <div>
          <div className="text-xl font-semibold tracking-tight">
            <span className="text-white">&lt;</span>
            <span className="text-accent-600">SEC</span>
            <span className="text-white">/&gt;</span>
          </div>
          <div className="mt-3 text-white/60">{contact.footerRole}</div>
        </div>

        <div className="md:text-center text-white/60">
          © {new Date().getFullYear()} {brand.logo.replace(/[<>/]/g, "")}.
        </div>

        <div className="md:text-right">
          <a href={brand.cvHref} target="_blank" rel="noreferrer" className="btn-primary inline-flex">
            <Download size={18} /> Download CV
          </a>
        </div>
      </div>
    </footer>
  );
}
