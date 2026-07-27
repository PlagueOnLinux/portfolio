"use client";

import Link from "next/link";
import { personalInfo } from "@/data/personal";

export default function CVPolishPage() {
  const experiences = [
    {
      role: "Rozwój środowisk IT i wsparcie techniczne",
      company: "Freelance",
      period: "12/2025 - Obecnie",
      description: "Samodzielna realizacja usług IT dla klientów indywidualnych, obejmujących diagnostykę i naprawę komputerów, konfigurację urządzeń peryferyjnych oraz optymalizację systemów operacyjnych. Administracja systemami Linux w środowisku testowym. Projektowanie i rozwój środowiska HomeLab opartego o Proxmox.",
    },
    {
      role: "Wsparcie Systemów Linux i Projekty IT",
      company: "Uniwersytet Warszawski / Warner Bros. Discovery",
      period: "09/2025 - 11/2025",
      description: "Uniwersytet Warszawski: Wsparcie techniczne w środowisku akademickim z dominacją systemów Linux (Ubuntu, Debian); diagnostyka sprzętowa i systemowa stacji roboczych. Warner Bros. Discovery: Doraźna interwencja techniczna obejmująca wsparcie infrastruktury IT oraz inwentaryzację sprzętową.",
    },
    {
      role: "IT Support Engineer",
      company: "Xperi Inc.",
      period: "09/2024 - 05/2025",
      description: "Samodzielna odpowiedzialność za infrastrukturę IT biura w Warszawie (~200 pracowników). Obsługa 20+ zgłoszeń dziennie w ServiceNow. Zarządzanie flotą laptopów przez Intune i Jamf Pro; administracja kontami w Okta, Active Directory oraz AWS. Zapewnianie priorytetowego wsparcia VIP.",
    },
    {
      role: "Projekty krótkoterminowe i wsparcie IT",
      company: "Euvic IT / KPMG / LUX MED / Coty",
      period: "02/2023 - 09/2024",
      description: "Euvic IT: Masowe przygotowanie i konfiguracja 100+ stacji roboczych. KPMG: Diagnoza usterek, obsługa ITSM, administracja AD, VIP Support. LUX MED: Zdalna diagnoza, systemy ticketowe. Coty: Wsparcie globalne w j. angielskim.",
    },
    {
      role: "Specjalista ds. technicznej obsługi klienta",
      company: "ASUS Polska Sp. z o.o.",
      period: "10/2021 - 01/2023",
      description: "Obsługa połączeń od klientów i udzielanie szybkiej pomocy. Wsparcie techniczne, aktywna obecność na forum technicznym. Monitorowanie trendów i analiza zgłoszeń klientów.",
    },
  ];

  return (
    <div className="section-container">
      {/* Back + Download */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-12">
        <Link href="/cv" className="text-text-secondary hover:text-accent transition-colors text-sm">
          &larr; Wróć do CV
        </Link>
        <a href="/CV_MaciejBledowski_PL.pdf" download className="btn-primary self-start">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
          </svg>
          Pobierz PDF
        </a>
      </div>

      <div className="max-w-3xl">
        {/* Header */}
        <section className="mb-12">
          <div className="glass-card p-8">
            <h1 className="text-2xl font-bold text-text-primary mb-1">{personalInfo.displayName}</h1>
            <p className="text-accent font-medium text-lg mb-1">{personalInfo.role}</p>
            <p className="font-mono text-text-secondary text-sm mb-4">{personalInfo.tagline}</p>
            <div className="flex flex-wrap gap-4 text-text-secondary text-sm">
              <span>{personalInfo.email}</span>
              <span>Warszawa</span>
              <span>Otwarty na pracę zdalną</span>
            </div>
          </div>
        </section>

        {/* Podsumowanie */}
        <section className="mb-12">
          <h2 className="text-lg font-semibold text-text-primary mb-4 flex items-center gap-2">
            <span className="text-accent font-mono text-sm">01.</span>Podsumowanie
          </h2>
          <p className="text-text-secondary leading-relaxed">
            IT Support Engineer z ponad 3-letnim doświadczeniem w środowiskach korporacyjnych, specjalizujący się w administracji urządzeniami końcowymi, zarządzaniu tożsamością oraz utrzymaniu infrastruktury IT. Na co dzień pracuję z systemami Windows, Linux i macOS oraz rozwiązaniami klasy enterprise. Poza pracą rozwijam autorskie projekty techniczne, w tym środowisko HomeLab oparte o Proxmox oraz aplikację HireMate wykorzystującą sztuczną inteligencję.
          </p>
        </section>

        {/* Doświadczenie */}
        <section className="mb-12">
          <h2 className="text-lg font-semibold text-text-primary mb-6 flex items-center gap-2">
            <span className="text-accent font-mono text-sm">02.</span>Doświadczenie zawodowe
          </h2>
          <div className="space-y-6">
            {experiences.map((exp, i) => (
              <div key={i} className="glass-card">
                <div className="flex flex-col sm:flex-row sm:justify-between gap-1 mb-2">
                  <div>
                    <h3 className="text-text-primary font-medium">{exp.role}</h3>
                    <p className="text-accent text-sm">{exp.company}</p>
                  </div>
                  <span className="text-text-secondary text-sm font-mono">{exp.period}</span>
                </div>
                <p className="text-text-secondary text-sm leading-relaxed">{exp.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Technologie */}
        <section className="mb-12">
          <h2 className="text-lg font-semibold text-text-primary mb-4 flex items-center gap-2">
            <span className="text-accent font-mono text-sm">03.</span>Technologie i kompetencje
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="glass-card">
              <h3 className="text-text-primary font-medium text-sm mb-3">Technologie</h3>
              <div className="flex flex-wrap gap-2">
                {["Windows / Linux / macOS", "Intune / Jamf Pro", "Active Directory / Okta", "Proxmox / Docker", "ServiceNow / ServiceDesk Plus"].map((t) => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>
            </div>
            <div className="glass-card">
              <h3 className="text-text-primary font-medium text-sm mb-3">Kompetencje</h3>
              <ul className="space-y-1.5">
                {["Administracja systemami operacyjnymi", "Zarządzanie urządzeniami końcowymi", "Zarządzanie tożsamością i dostępami", "Wirtualizacja i konteneryzacja", "Diagnostyka sprzętu i systemów", "Podstawy administracji sieciami LAN"].map((s) => (
                  <li key={s} className="flex items-center gap-2 text-text-secondary text-xs">
                    <span className="text-accent font-mono">&#9656;</span>{s}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Certyfikaty */}
        <section className="mb-12">
          <h2 className="text-lg font-semibold text-text-primary mb-4 flex items-center gap-2">
            <span className="text-accent font-mono text-sm">04.</span>Certyfikaty
          </h2>
          <div className="glass-card">
            <span className="tag">Google Cybersecurity Professional Certificate</span>
          </div>
        </section>

        {/* Wykształcenie */}
        <section className="mb-12">
          <h2 className="text-lg font-semibold text-text-primary mb-4 flex items-center gap-2">
            <span className="text-accent font-mono text-sm">05.</span>Wykształcenie
          </h2>
          <div className="glass-card">
            <h3 className="text-text-primary font-medium">Akademia nauk stosowanych im. Haliny Konopackiej w Pruszkowie</h3>
            <p className="text-text-secondary text-sm mt-1">Zarządzanie &bull; Specjalizacja: E-sport</p>
            <p className="text-text-secondary text-sm font-mono mt-1">2021 - 2025</p>
          </div>
        </section>

        {/* Języki */}
        <section className="mb-12">
          <h2 className="text-lg font-semibold text-text-primary mb-4 flex items-center gap-2">
            <span className="text-accent font-mono text-sm">06.</span>Języki obce
          </h2>
          <div className="glass-card">
            <span className="text-text-secondary text-sm">
              <span className="text-text-primary font-medium">Angielski</span> — C1
            </span>
          </div>
        </section>
      </div>
    </div>
  );
}
