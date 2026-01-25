import { contact } from "@/lib/data";
import { Linkedin, Github, Instagram, Mail } from "lucide-react";

export default function Contact() {
  const json = `{
  "email": "${contact.email}",
  "WhatsApp": "${contact.whatsapp}",
  "domisili": "${contact.domisili}",
  "ketersediaan": "${contact.ketersediaan}"
}`;

  return (
    <div className="grid items-center gap-12 lg:grid-cols-3">
      <div className="flex gap-4 text-white/80 lg:justify-start justify-center">
        <a className="hover:text-white" href={contact.socials[0].href} target="_blank" rel="noreferrer"><Linkedin /></a>
        <a className="hover:text-white" href={contact.socials[1].href} target="_blank" rel="noreferrer"><Github /></a>
        <a className="hover:text-white" href={contact.socials[2].href} target="_blank" rel="noreferrer"><Instagram /></a>
        <a className="hover:text-white" href={contact.socials[4].href}><Mail /></a>
      </div>

      <div className="term lg:col-span-2 max-w-2xl mx-auto w-full">
        <div className="term-top justify-center">
          <span className="dot bg-red-400/80" />
          <span className="dot bg-yellow-300/80" />
          <span className="dot bg-green-400/80" />
          <span className="ml-4 text-sm text-white/70">{contact.terminalTitle}</span>
        </div>

        <div className="p-6 font-mono text-base leading-relaxed">
          <div className="text-termgreen">
            <span className="prompt">$</span> ./get_contact_info.sh
          </div>
          <pre className="text-white/90 whitespace-pre-wrap">{json}</pre>

          <div className="mt-3 text-termgreen">
            <span className="prompt">$</span> echo "{contact.echo}"
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            {contact.socials.map((s) => (
              <a key={s.name} className="btn-outline px-4 py-2" href={s.href} target="_blank" rel="noreferrer">
                {s.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
