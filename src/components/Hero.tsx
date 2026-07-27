"use client";

import { personalInfo } from "@/data/personal";

export default function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-4rem)] flex items-center">
      <div className="section-container w-full">
        <div className="max-w-3xl">
          <p className="text-text-secondary font-mono text-sm mb-4 animate-fade-in">
            Hi, my name is
          </p>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-text-primary mb-4 animate-slide-up">
            {personalInfo.displayName}
          </h1>

          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-text-secondary mb-6 animate-slide-up">
            {personalInfo.role}
          </h2>

          <p className="font-mono text-accent text-sm md:text-base mb-8 animate-slide-up">
            {personalInfo.tagline}
          </p>

          <p className="text-text-secondary text-lg max-w-2xl mb-12 leading-relaxed animate-slide-up">
            IT Support Engineer with 3+ years of experience managing enterprise environments
            across Windows, macOS and Linux. Outside of work, I build AI-powered applications
            and self-hosted infrastructure to continuously expand my skills in Linux, networking
            and automation.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-3 mb-14 animate-slide-up">
            <a href={personalInfo.links.cv} className="btn-primary">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                <polyline points="14 2 14 8 20 8"/>
              </svg>
              CV
            </a>
            <a href="/projects" className="btn-primary">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/>
              </svg>
              Projects
            </a>
            <a href={personalInfo.links.github} target="_blank" rel="noopener noreferrer" className="btn-outline">
              GitHub
            </a>
            <a href={personalInfo.links.linkedin} target="_blank" rel="noopener noreferrer" className="btn-outline">
              LinkedIn
            </a>
            <a href={personalInfo.links.contact} className="btn-outline">
              Contact
            </a>
          </div>

          {/* Current Focus */}
          <div className="animate-slide-up">
            <p className="text-text-secondary text-sm mb-4 font-mono">Current Focus</p>
            <p className="text-text-secondary text-xs mb-5">Technologies and areas I&apos;m actively working with.</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
              {[
                { value: "Linux", label: "Systems" },
                { value: "Infrastructure", label: "& Networking" },
                { value: "Enterprise IT", label: "Support" },
                { value: "AI", label: "Projects" },
                { value: "HomeLab", label: "Self-Hosted" },
              ].map((item) => (
                <div key={item.label} className="text-center p-3 rounded-lg border border-border bg-surface">
                  <p className="text-accent font-bold text-lg font-mono">{item.value}</p>
                  <p className="text-text-secondary text-xs mt-0.5">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block animate-bounce">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-text-secondary">
            <path d="M7 13l5 5 5-5M7 6l5 5 5-5"/>
          </svg>
        </div>
      </div>
    </section>
  );
}
