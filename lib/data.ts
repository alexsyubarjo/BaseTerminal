export const brand = {
  logo: "<SEC/>",
  nav: [
    { href: "#home", label: "Beranda" },
    { href: "#about", label: "Tentang Saya" },
    { href: "#projects", label: "Project" },
    { href: "#contact", label: "Kontak" },
  ],
  languageLabel: "Bahasa Indonesia",
  cvHref: "/cv.pdf",
};

export const hero = {
  terminalTitle: "bash ~ security-dev",
  whoami: "security_operator",
  info: {
    nama: "Kusuma Wijaya",
    posisi: "Security Engineer / Pentester",
    domisili: "Yogyakarta, Indonesia",
    pendidikan: "Universitas Amikom Yogyakarta",
    prodi: "S1 Informatika",
    semester: "6",
  },
  welcome: "Selamat datang di portofolio saya!",
  headingSmall: "Halo, Saya",
  headingBig: "Kusuma Wijaya",
  desc:
    "Spesialis Security yang fokus pada pengujian Web App & API, serta pemetaan attack surface (OSINT) secara metodologis.",
  tags: ["OWASP", "API Security", "OSINT", "Burp Suite", "nuclei", "nmap", "Linux"],
  cta1: { label: "Hubungi Saya", href: "#contact" },
  cta2: { label: "Lihat Proyek", href: "#projects" },
};

export const about = {
  title: "// Tentang Saya",
  role: "Security / Pentester",
  paragraphs: [
    "Saya berfokus pada pengujian keamanan aplikasi web dan API dengan alur kerja yang sistematis: recon → validasi → eksploitasi terkontrol → rekomendasi mitigasi.",
    "Saya menulis laporan temuan yang actionable: dampak, langkah reproduksi, bukti, dan prioritas perbaikan agar tim dev dapat memperbaiki secara cepat dan tepat.",
    "Saya menjaga praktik pengujian tetap legal, berizin, dan sesuai ruang lingkup (scope).",
  ],
  skillsTitle: "Keahlian & Pengalaman",
  skills: [
    {
      title: "Web App Security",
      items: ["OWASP Top 10", "Auth & Session Testing", "Access Control Review", "Injection & Misconfig Checks"],
    },
    {
      title: "API Security",
      items: ["REST API Testing", "JWT/Token Review", "Rate Limit & Abuse Case", "BOLA/BFLA Validation"],
    },
    {
      title: "Recon & OSINT",
      items: ["Attack Surface Mapping", "Subdomain Enumeration", "Tech Fingerprinting", "Asset Inventory (Legal Scope)"],
    },
    {
      title: "Other Skills",
      items: ["Git Version Control", "Report Writing", "Risk Prioritization", "Basic Linux Ops"],
    },
  ],
};

export const projects = {
  title: "// Proyek Saya",
  subtitle: "Berikut adalah beberapa proyek yang telah saya kerjakan.",
  items: [
    {
      name: "Recon Pipeline - Attack Surface",
      desc:
        "Pipeline recon untuk domain: enum → scan → fingerprint → output rapi untuk assessment awal.",
      tags: ["nmap", "httpx", "nuclei"],
      demo: "https://example.com",
      github: "https://github.com/username/recon-pipeline",
    },
    {
      name: "API Security Checklist",
      desc:
        "Checklist pengujian API untuk auth, access control, injection, misconfig, dan abuse scenario.",
      tags: ["OWASP", "REST", "JWT"],
      demo: "https://example.com",
      github: "https://github.com/username/api-security-checklist",
    },
    {
      name: "Pentest Report Template",
      desc:
        "Template laporan pentest yang menekankan impact, reproduksi, dan mitigasi prioritas.",
      tags: ["Markdown", "CVSS", "Evidence"],
      demo: "https://example.com",
      github: "https://github.com/username/pentest-report-template",
    },
  ],
  moreHref: "#",
  moreLabel: "Lihat lainnya",
};

export const contact = {
  title: "// Hubungi Saya",
  terminalTitle: "contact.sh",
  email: "you@email.com",
  whatsapp: "+62 8xx-xxxx-xxxx",
  domisili: "Yogyakarta, Indonesia",
  ketersediaan: "Bersedia untuk freelance dan kolaborasi.",
  echo: "Ayo Terhubung",
  socials: [
    { name: "LinkedIn", href: "https://linkedin.com/in/username" },
    { name: "GitHub", href: "https://github.com/username" },
    { name: "Instagram", href: "https://instagram.com/username" },
    { name: "WhatsApp", href: "https://wa.me/628xxxxxxxxxx" },
    { name: "Email", href: "mailto:you@email.com" },
  ],
  footerRole: "Security Engineer / Pentester",
};
