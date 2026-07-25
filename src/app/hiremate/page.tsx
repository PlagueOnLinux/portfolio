"use client";

import Link from "next/link";

export default function HireMatePage() {
  return (
    <div className="section-container">
      {/* Header */}
      <div className="flex items-start gap-4 mb-8">
        <div className="w-14 h-14 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center flex-shrink-0">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-accent">
            <path d="M12 2L2 7l10 5 10-5-10-5z" />
            <path d="M2 17l10 5 10-5" />
            <path d="M2 12l10 5 10-5" />
          </svg>
        </div>
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-text-primary">HireMate</h1>
          <p className="text-text-secondary mt-1">A local-first AI assistant for job searching and application management.</p>
          <span className="status-badge status-development mt-3 inline-flex">
            <span className="w-1.5 h-1.5 rounded-full bg-current" />
            In Development
          </span>
        </div>
      </div>

      {/* Description */}
      <section className="mb-12">
        <p className="text-text-secondary leading-relaxed max-w-3xl">
          HireMate is not a mass-apply bot. It&apos;s a controlled AI assistant that helps you find relevant job offers,
          analyze them against your profile, identify skill gaps, and prepare applications — all while keeping your data
          private and the final decision in your hands. All AI processing runs locally via Ollama.
        </p>
      </section>

      {/* How it works */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold text-text-primary mb-6">How It Works</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { step: "01", title: "Collect", desc: "Import job offers from URLs, pasted text, or add them manually." },
            { step: "02", title: "Analyze", desc: "AI extracts requirements, salary, contract type, and work mode." },
            { step: "03", title: "Score", desc: "Each offer scored with career fit + realistic match ratings." },
            { step: "04", title: "Gap Analysis", desc: "Identifies missing requirements and experience mismatches." },
            { step: "05", title: "Recommend", desc: "AI generates recommendation with risk level and application notes." },
            { step: "06", title: "Track", desc: "Full pipeline: new → to apply → applied → interview → offer / rejected." },
          ].map((item) => (
            <div key={item.step} className="glass-card">
              <span className="text-accent font-mono text-xs">{item.step}</span>
              <h3 className="text-text-primary font-medium mt-1 mb-2">{item.title}</h3>
              <p className="text-text-secondary text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Key Features */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold text-text-primary mb-6">Key Features</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            {
              title: "AI-Powered Job Scoring",
              points: [
                "Dual scoring: career fit + realistic match",
                "Application chance: realistic / stretch / unrealistic",
                "Risk assessment: low / medium / high",
                "Missing requirements detection",
              ],
            },
            {
              title: "Smart Job Import",
              points: [
                "Import from URL — fetches and parses page with AI",
                "Import from pasted job description",
                "AI field extraction (title, salary, requirements)",
                "Preview and edit before saving",
              ],
            },
            {
              title: "Candidate Profile",
              points: [
                "CV upload with automatic text extraction",
                "AI analysis of skills, seniority, experience",
                "Career direction tracking",
                "Dual CV support (PL and EN)",
              ],
            },
            {
              title: "Gap Analysis",
              points: [
                "Job requirements vs profile comparison",
                "Missing must-have requirements list",
                "Experience gap identification",
                "Stretch offer warnings",
              ],
            },
          ].map((feature) => (
            <div key={feature.title} className="glass-card">
              <h3 className="text-text-primary font-medium mb-3">{feature.title}</h3>
              <ul className="space-y-1.5">
                {feature.points.map((point) => (
                  <li key={point} className="flex items-start gap-2 text-text-secondary text-sm">
                    <span className="text-accent font-mono text-xs mt-0.5">&#9656;</span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Architecture */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold text-text-primary mb-6">Architecture</h2>
        <div className="glass-card font-mono text-sm text-text-secondary">
          <pre className="whitespace-pre-wrap">{`Job Source (URL / paste / manual)
        ↓
    Collector
        ↓
    Database (PostgreSQL)
        ↓
    AI Engine (Ollama — qwen3:8b)
        ↓
    Backend API (FastAPI)
        ↓
    Dashboard (HTMX / Jinja2)
        ↓
    User Decision`}</pre>
        </div>
      </section>

      {/* Design Principles */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold text-text-primary mb-6">Design Principles</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            { title: "Local-first", desc: "All AI processing runs on your machine via Ollama. No data sent externally." },
            { title: "User in control", desc: "AI recommends, you decide. No automated applications without confirmation." },
            { title: "Privacy by design", desc: "Your CV, preferences, and job history never leave your machine." },
            { title: "Dockerized", desc: "One docker compose up and the entire stack is running." },
          ].map((principle) => (
            <div key={principle.title} className="glass-card">
              <h3 className="text-text-primary font-medium text-sm mb-1">{principle.title}</h3>
              <p className="text-text-secondary text-xs leading-relaxed">{principle.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Tech Stack */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold text-text-primary mb-4">Tech Stack</h2>
        <div className="flex flex-wrap gap-2">
          {["Python", "FastAPI", "PostgreSQL", "Ollama", "qwen3:8b", "Playwright", "HTMX", "Jinja2", "Docker Compose"].map((tech) => (
            <span key={tech} className="tag">{tech}</span>
          ))}
        </div>
      </section>

      {/* Roadmap */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold text-text-primary mb-6">Roadmap</h2>
        <div className="space-y-3">
          {[
            { label: "Foundation", done: true },
            { label: "Job Offers MVP", done: true },
            { label: "AI Scoring", done: true },
            { label: "Candidate Profile & CV Analysis", done: true },
            { label: "Job Import (URL & text)", done: true },
            { label: "Gap Analysis & Risk Levels", done: true },
            { label: "Application Generation", done: false },
            { label: "Assisted Applications (Playwright)", done: false },
            { label: "Automated Job Discovery", done: false },
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-3">
              <div className={`w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 ${item.done ? "bg-accent/20 text-accent" : "bg-surface-light border border-border"}`}>
                {item.done && (
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                )}
              </div>
              <span className={`text-sm ${item.done ? "text-text-primary" : "text-text-secondary"}`}>{item.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Why Local AI */}
      <section className="mb-12 border-t border-border pt-12">
        <h2 className="text-xl font-semibold text-text-primary mb-4">Why Local AI?</h2>
        <p className="text-text-secondary leading-relaxed max-w-3xl">
          Most job search tools send your CV and preferences to cloud APIs. HireMate runs entirely on your hardware.
          Ollama handles all LLM inference locally, using the qwen3:8b model — selected after benchmarking for the best
          balance of quality and speed. Your data stays on your machine — period.
        </p>
      </section>

      {/* CTA */}
      <div className="flex flex-wrap gap-4">
        <a
          href="https://github.com/PlagueOnLinux/hiremate-showcase"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
          </svg>
          View on GitHub
        </a>
        <Link href="/contact" className="btn-outline">
          Interested? Let&apos;s talk
        </Link>
      </div>
    </div>
  );
}
