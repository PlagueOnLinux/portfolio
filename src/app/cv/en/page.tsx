"use client";

import Link from "next/link";
import { personalInfo } from "@/data/personal";
import { experiences } from "@/data/experience";

export default function CVEnglishPage() {
  return (
    <div className="section-container">
      {/* Back + Download */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-12">
        <Link href="/cv" className="text-text-secondary hover:text-accent transition-colors text-sm">
          &larr; Back to CV
        </Link>
        <a href="/CV_MaciejBledowski_EN.pdf" download className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-black rounded-lg font-medium hover:bg-accent-hover transition-colors duration-200 self-start">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
          </svg>
          Download PDF
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
              <span>Warsaw, Poland</span>
              <span>Open for remote work</span>
            </div>
          </div>
        </section>

        {/* Summary */}
        <section className="mb-14">
          <h2 className="text-lg font-semibold text-text-primary mb-4 flex items-center gap-2">
            <span className="text-accent font-mono text-sm">01.</span>Summary
          </h2>
          <p className="text-text-secondary leading-relaxed">
            IT Support Engineer with over 3 years of experience in enterprise environments, specializing in endpoint administration, identity management and IT infrastructure support. I work daily with Windows, Linux and macOS, as well as enterprise solutions including Microsoft Intune, Jamf Pro, Active Directory and Okta. Outside of work, I develop my personal technical projects, including a Proxmox-based HomeLab environment and HireMate, an AI-powered job search assistant.
          </p>
        </section>

        {/* Experience */}
        <section className="mb-14">
          <h2 className="text-lg font-semibold text-text-primary mb-6 flex items-center gap-2">
            <span className="text-accent font-mono text-sm">02.</span>Professional Experience
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

        {/* Technologies & Skills */}
        <section className="mb-14">
          <h2 className="text-lg font-semibold text-text-primary mb-4 flex items-center gap-2">
            <span className="text-accent font-mono text-sm">03.</span>Technologies & Skills
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="glass-card">
              <h3 className="text-text-primary font-medium text-sm mb-3">Technologies</h3>
              <div className="flex flex-wrap gap-2.5">
                {personalInfo.technologies.map((t) => (
                  <span key={t} className="inline-block px-3.5 py-1.5 text-xs font-medium rounded-full bg-surface-light text-text-secondary border border-border">{t}</span>
                ))}
              </div>
            </div>
            <div className="glass-card">
              <h3 className="text-text-primary font-medium text-sm mb-3">Core Competencies</h3>
              <ul className="space-y-1.5">
                {personalInfo.skills.map((s) => (
                  <li key={s} className="flex items-center gap-2 text-text-secondary text-xs">
                    <span className="text-accent font-mono">&#9656;</span>{s}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="mb-14">
          <h2 className="text-lg font-semibold text-text-primary mb-4 flex items-center gap-2">
            <span className="text-accent font-mono text-sm">04.</span>Certifications
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

        {/* Education */}
        <section className="mb-14">
          <h2 className="text-lg font-semibold text-text-primary mb-4 flex items-center gap-2">
            <span className="text-accent font-mono text-sm">05.</span>Education
          </h2>
          <div className="glass-card">
            <h3 className="text-text-primary font-medium">{personalInfo.education.school}</h3>
            <p className="text-text-secondary text-sm mt-1">
              {personalInfo.education.field} &bull; {personalInfo.education.specialization}
            </p>
            <p className="text-text-secondary text-sm font-mono mt-1">{personalInfo.education.period}</p>
          </div>
        </section>

        {/* Languages */}
        <section className="mb-12">
          <h2 className="text-lg font-semibold text-text-primary mb-4 flex items-center gap-2">
            <span className="text-accent font-mono text-sm">06.</span>Languages
          </h2>
          <div className="glass-card">
            <div className="flex flex-wrap gap-4">
              {personalInfo.languages.map((lang) => (
                <span key={lang.name} className="text-text-secondary text-sm">
                  <span className="text-text-primary font-medium">{lang.name}</span> — {lang.level}
                </span>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
