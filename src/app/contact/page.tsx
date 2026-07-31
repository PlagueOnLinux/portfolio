"use client";

import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

function ChevronRight() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-text-secondary group-hover:text-accent transition-colors duration-200 flex-shrink-0">
      <polyline points="9 18 15 12 9 6" />
    </svg>
  );
}

export default function ContactPage() {
  const { t } = useLanguage();
  const [copied, setCopied] = useState(false);

  const copyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText("bledowskimaciej@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="section-container">
      <h1 className="section-title">{t("contact.title")}</h1>
      <p className="section-subtitle">
        Feel free to reach out for collaboration, job opportunities or technical discussions.
      </p>

      <div className="grid md:grid-cols-2 gap-6 max-w-3xl">
        {/* Email */}
        <a
          href="mailto:bledowskimaciej@gmail.com"
          className="glass-card flex items-center gap-4 group"
        >
          <div className="text-accent group-hover:brightness-125 transition-all flex-shrink-0">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="M22 7l-10 7L2 7" />
            </svg>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm text-text-secondary">{t("contact.email.label")}</p>
            <div className="flex items-center gap-2">
              <p className="text-text-primary font-medium group-hover:text-accent group-hover:underline transition-all duration-200 truncate">
                bledowskimaciej@gmail.com
              </p>
              <button
                onClick={copyEmail}
                className="p-1 rounded text-text-secondary hover:text-accent transition-colors flex-shrink-0"
                title="Copy email"
                aria-label="Copy email address"
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                  <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                </svg>
              </button>
            </div>
          </div>
          <ChevronRight />
        </a>

        {/* LinkedIn */}
        <a
          href="https://linkedin.com/in/maciejbledowski"
          target="_blank"
          rel="noopener noreferrer"
          className="glass-card flex items-center gap-4 group"
        >
          <div className="text-accent group-hover:brightness-125 transition-all flex-shrink-0">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm text-text-secondary">LinkedIn</p>
            <p className="text-text-primary font-medium group-hover:text-accent group-hover:underline transition-all duration-200 truncate">
              linkedin.com/in/maciejbledowski
            </p>
          </div>
          <ChevronRight />
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/PlagueOnLinux"
          target="_blank"
          rel="noopener noreferrer"
          className="glass-card flex items-center gap-4 group"
        >
          <div className="text-accent group-hover:brightness-125 transition-all flex-shrink-0">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm text-text-secondary">GitHub</p>
            <p className="text-text-primary font-medium group-hover:text-accent group-hover:underline transition-all duration-200 truncate">
              github.com/PlagueOnLinux
            </p>
          </div>
          <ChevronRight />
        </a>

        {/* Location */}
        <div className="glass-card flex items-center gap-4">
          <div className="text-accent flex-shrink-0">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm text-text-secondary">{t("contact.location.label")}</p>
            <p className="text-text-primary font-medium">{t("contact.location.value")}</p>
          </div>
        </div>
      </div>

      {/* Remote work badge */}
      <div className="mt-8">
        <span className="status-badge status-active">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          {t("contact.remote")}
        </span>
      </div>

      {/* Toast */}
      {copied && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-surface border border-accent/30 text-accent text-sm font-medium px-4 py-2.5 rounded-lg shadow-lg animate-fade-in">
          ✓ Email copied to clipboard
        </div>
      )}
    </section>
  );
}
