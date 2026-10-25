"use client";

import Link from "next/link";
import { personalInfo } from "@/data/personal";

export default function CVPolishPage() {
  const experiences = [
    {
      role: "IT Support Specialist",
      company: "Boston Scientific",
      period: "12/2025 - Obecnie",
      description: [
        "Samodzielne wsparcie IT na miejscu dla ~400 użytkowników biura w Warszawie, obejmujące bezpośrednią obsługę zgłoszeń, eskalacje z pierwszej linii wsparcia oraz wsparcie VIP.",
        "Diagnostyka i rozwiązywanie problemów z Windows 10/11, macOS, Microsoft 365, sprzętem, oprogramowaniem, urządzeniami końcowymi i siecią.",
        "Instalacja, konfiguracja i wsparcie laptopów, komputerów stacjonarnych, urządzeń wielofunkcyjnych, telefonów służbowych, sprzętu sal konferencyjnych i innych urządzeń peryferyjnych.",
        "Zarządzanie urządzeniami Windows przez Microsoft Intune: rejestracja urządzeń, polityki konfiguracyjne, wdrażanie aplikacji, synchronizacja i zdalna administracja.",
        "Obsługa incydentów i zgłoszeń serwisowych w ServiceNow zgodnie z wymaganiami SLA.",
        "Zarządzanie cyklem życia sprzętu IT: przygotowanie urządzeń dla nowych pracowników, wymiany sprzętu, zwroty oraz przypisywanie zasobów do użytkowników i centrów kosztowych.",
        "Prowadzenie inwentaryzacji sprzętu IT i utrzymywanie dokładnej ewidencji, weryfikacja przypisań urządzeń między użytkownikami i działami.",
        "Tworzenie i wdrażanie procedur IT dotyczących onboardingu, wymiany sprzętu, ewidencji zasobów i standaryzacji procesów.",
        "Koordynacja wydawania służbowych urządzeń mobilnych, w tym zgłoszenia telefonów i kart SIM, wydawanie urządzeń oraz wsparcie użytkowników końcowych.",
        "Współpraca z globalnymi zespołami IT przy rozwiązywaniu problemów technicznych i bieżącym wsparciu operacji IT.",
      ],
    },
    {
      role: "Wsparcie Systemów Linux i Projekty IT (Freelance)",
      company: "Uniwersytet Warszawski / Warner Bros. Discovery",
      period: "09/2025 - 11/2025",
      description: [
        "Uniwersytet Warszawski: Wsparcie techniczne w środowisku akademickim z dominacją systemów Linux (Ubuntu, Debian); diagnostyka sprzętowa i systemowa stacji roboczych naukowców i inżynierów.",
        "Warner Bros. Discovery: Doraźna interwencja techniczna obejmująca wsparcie infrastruktury IT oraz inwentaryzację sprzętową.",
      ],
    },
    {
      role: "IT Support Engineer",
      company: "Xperi Inc.",
      period: "09/2024 - 05/2025",
      description: [
        "Samodzielna odpowiedzialność za infrastrukturę IT biura w Warszawie (~200 pracowników): pełne zarządzanie wsparciem technicznym na miejscu, w tym utrzymanie systemów wideokonferencyjnych.",
        "Obsługa 20+ zgłoszeń technicznych dziennie w systemie ServiceNow, z priorytetem na wsparcie bezpośrednie użytkowników lokalnych.",
        "Zarządzanie flotą laptopów (Windows, macOS, Linux) przez Intune i Jamf Pro; administracja kontami i dostępami w środowiskach Okta, Active Directory oraz AWS.",
        "Kompleksowy proces przygotowania, wydawania i inwentaryzacji sprzętu IT dla pracowników biura.",
        "Zapewnianie priorytetowej pomocy technicznej dla kadry zarządzającej (VIP Support) bezpośrednio w biurze w Warszawie.",
      ],
    },
    {
      role: "Projekty krótkoterminowe i wsparcie IT (Freelance)",
      company: "KPMG / Euvic IT / LUX MED / Coty",
      period: "02/2023 - 09/2024",
      description: [
        "Euvic IT: Masowe przygotowanie i konfiguracja ponad 100+ stacji roboczych Windows dla użytkowników korporacyjnych.",
        "KPMG, Sp. z o.o.: Diagnoza usterek sprzętowych, obsługa zgłoszeń ITSM oraz administracja kontami w Active Directory, a także priorytetowe wsparcie IT dla kadry zarządzającej (VIP Support).",
        "LUX MED, Sp. z o.o.: Zdalna diagnoza problemów IT, obsługa systemów ticketowych i konfiguracja aplikacji.",
        "Coty, Inc.: Wsparcie globalne w j. angielskim oraz administracja kontami użytkowników.",
        "Zlecenia Freelance: Sprzętowa diagnostyka, naprawa urządzeń peryferyjnych oraz konfiguracja sieci domowych.",
      ],
    },
    {
      role: "Specjalista ds. technicznej obsługi klienta",
      company: "ASUS",
      period: "10/2021 - 01/2023",
      description: [
        "Profesjonalna i szybka obsługa połączeń od klientów, udzielanie natychmiastowej pomocy i odpowiedzi na pytania techniczne.",
        "Kompleksowe wsparcie techniczne, w tym diagnoza problemów, proponowanie rozwiązań i instruktaż dotyczący produktów ASUS.",
        "Monitorowanie i zarządzanie oficjalnym forum technicznym ASUS: odpowiadanie na pytania użytkowników oraz publikowanie poradników i artykułów.",
        "Skuteczne przekierowywanie zgłoszeń klientów do odpowiednich zespołów lub specjalistów w celu szybkiego rozwiązania problemów.",
        "Rejestrowanie wszystkich zgłoszeń w systemie ticketowym, zapewniając dokładną dokumentację i śledzenie statusu.",
        "Diagnoza i rozwiązywanie problemów z produktami ASUS, takimi jak laptopy, komputery, monitory i inne urządzenia.",
        "Regularne aktualizacje oprogramowania i konserwacja sprzętu w celu zapewnienia optymalnej wydajności urządzeń.",
        "Prowadzenie szkoleń online i tworzenie materiałów edukacyjnych zwiększających wiedzę klientów o produktach ASUS.",
        "Koordynacja procesu reklamacyjnego, dbanie o spełnienie wymogów proceduralnych i satysfakcję klientów.",
        "Ścisła współpraca z innymi zespołami wsparcia przy identyfikacji i rozwiązywaniu złożonych problemów oraz wdrażaniu usprawnień.",
      ],
    },
    {
      role: "Stażysta w dziale produkcji",
      company: "NTT System S.A.",
      period: "05/2017 - 09/2017",
      description: [
        "Profesjonalna instalacja i konfiguracja komputerów oraz urządzeń peryferyjnych, zapewniająca ich optymalne działanie i zgodność ze specyfikacją techniczną.",
        "Tworzenie i utrzymywanie ergonomicznych, efektywnych stanowisk pracy, dbanie o komfort i produktywność użytkowników.",
        "Instalacja, konfiguracja i aktualizacja systemów operacyjnych na nowych i istniejących urządzeniach.",
        "Identyfikacja i naprawa problemów sprzętowych i programowych, minimalizując przestoje i zapewniając ciągłość pracy użytkowników.",
        "Instalacja i konfiguracja aplikacji zgodnie ze standardami firmowymi dla optymalnej wydajności.",
        "Regularne monitorowanie wydajności sprzętu i oprogramowania oraz wykonywanie aktualizacji i optymalizacji.",
      ],
    },
  ];

  return (
    <div className="section-container">
      {/* Back + Download */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-12">
        <Link href="/cv" className="text-text-secondary hover:text-accent transition-colors text-sm">
          &larr; Wróć do CV
        </Link>
        <a href="/CV_MaciejBledowski_PL.pdf" download className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-black rounded-lg font-medium hover:bg-accent-hover transition-colors duration-200 self-start">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
          </svg>
          Pobierz PDF
        </a>
      </div>

      <div className="max-w-3xl">
        {/* Header */}
        <section className="mb-14">
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
        <section className="mb-14">
          <h2 className="text-lg font-semibold text-text-primary mb-4 flex items-center gap-2">
            <span className="text-accent font-mono text-sm">01.</span>Podsumowanie
          </h2>
          <p className="text-text-secondary leading-relaxed">
            IT Support Engineer z ponad 3-letnim doświadczeniem w środowiskach korporacyjnych, specjalizujący się w administracji urządzeniami końcowymi, zarządzaniu tożsamością oraz utrzymaniu infrastruktury IT. Na co dzień pracuję z systemami Windows, Linux i macOS oraz rozwiązaniami klasy enterprise. Poza pracą rozwijam autorskie projekty techniczne, w tym środowisko HomeLab oparte o Proxmox oraz aplikację HireMate wykorzystującą sztuczną inteligencję.
          </p>
        </section>

        {/* Doświadczenie */}
        <section className="mb-14">
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
                <ul className="space-y-1.5">
                  {exp.description.map((point, j) => (
                    <li key={j} className="flex items-start gap-2 text-text-secondary text-sm leading-relaxed">
                      <span className="text-accent font-mono text-xs mt-1 flex-shrink-0">&#9656;</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Technologie */}
        <section className="mb-14">
          <h2 className="text-lg font-semibold text-text-primary mb-4 flex items-center gap-2">
            <span className="text-accent font-mono text-sm">03.</span>Technologie i kompetencje
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="glass-card">
              <h3 className="text-text-primary font-medium text-sm mb-3">Technologie</h3>
              <div className="flex flex-wrap gap-2.5">
                {["Windows / Linux / macOS", "Intune / Jamf Pro", "Active Directory / Okta", "Proxmox / Docker", "ServiceNow / ServiceDesk Plus"].map((t) => (
                  <span key={t} className="inline-block px-3.5 py-1.5 text-xs font-medium rounded-full bg-surface-light text-text-secondary border border-border">{t}</span>
                ))}
              </div>
            </div>
            <div className="glass-card">
              <h3 className="text-text-primary font-medium text-sm mb-3">Kompetencje</h3>
              <ul className="space-y-1.5">
                {["Administracja systemami operacyjnymi", "Zarządzanie urządzeniami końcowymi", "Zarządzanie tożsamością i dostępami", "Zarządzanie zasobami i inwentaryzacją IT", "Zarządzanie incydentami i eskalacjami", "Tworzenie i standaryzacja procesów IT", "Wirtualizacja i konteneryzacja", "Diagnostyka sprzętu i systemów", "Podstawy administracji sieciami LAN"].map((s) => (
                  <li key={s} className="flex items-center gap-2 text-text-secondary text-xs">
                    <span className="text-accent font-mono">&#9656;</span>{s}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Certyfikaty */}
        <section className="mb-14">
          <h2 className="text-lg font-semibold text-text-primary mb-4 flex items-center gap-2">
            <span className="text-accent font-mono text-sm">04.</span>Certyfikaty
          </h2>
          <div className="glass-card">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center flex-shrink-0">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-accent">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
              </div>
              <span className="text-text-primary text-sm font-medium">Google Cybersecurity Professional Certificate</span>
            </div>
          </div>
        </section>

        {/* Wykształcenie */}
        <section className="mb-14">
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
            <div className="flex flex-wrap gap-4">
              <span className="text-text-secondary text-sm">
                <span className="text-text-primary font-medium">Polski</span> — język ojczysty
              </span>
              <span className="text-text-secondary text-sm">
                <span className="text-text-primary font-medium">Angielski</span> — C1
              </span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
