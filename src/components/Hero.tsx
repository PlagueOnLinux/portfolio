"use client";

import { personalInfo } from "@/data/personal";

export default function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-4rem)] flex items-center">
      <div className="section-container w-full">
        <div className="max-w-3xl">
          <p className="text-text-secondary text-lg mb-6 animate-fade-in">
            Building reliable IT infrastructure.
          </p>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-text-primary mb-4 animate-slide-up">
            {personalInfo.displayName}
          </h1>

          <h2 className="text-2xl md:text-3xl font-semibold text-text-secondary mb-6 animate-slide-up">
            {personalInfo.role}
          </h2>

          <p className="font-mono text-accent text-sm md:text-base mb-12 animate-slide-up">
            {personalInfo.tagline}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-3 animate-slide-up">
            <a href="/CV_MaciejBledowski_EN.pdf" download className="btn-primary">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
              Download CV
            </a>
            <a href="/projects" className="btn-primary">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/>
              </svg>
              View Projects
            </a>
            <a href={personalInfo.links.contact} className="btn-outline">
              Contact
            </a>
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
