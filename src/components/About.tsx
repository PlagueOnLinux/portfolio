"use client";

import { personalInfo } from "@/data/personal";
import { useLanguage } from "@/context/LanguageContext";

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="border-t border-border">
      <div className="section-container">
        <h2 className="section-title">
          <span className="font-mono text-accent text-lg mr-2">01.</span>
          {t("about.title")}
        </h2>
        <p className="section-subtitle">{t("about.subtitle")}</p>

        <div className="grid md:grid-cols-5 gap-12">
          {/* Text - shorter, no repetition with hero */}
          <div className="md:col-span-3">
            <p className="text-text-secondary leading-relaxed mb-4">
              {t("about.p2")}
            </p>
            <p className="text-text-secondary leading-relaxed">
              {t("about.p3")}
            </p>
          </div>

          {/* Right column */}
          <div className="md:col-span-2 space-y-6">
            {/* Technologies as tags */}
            <div>
              <h3 className="text-text-primary font-medium text-sm mb-3">Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {personalInfo.technologies.map((tech) => (
                  <span key={tech} className="tag">{tech}</span>
                ))}
              </div>
            </div>

            {/* Core Competencies as list */}
            <div>
              <h3 className="text-text-primary font-medium text-sm mb-3">Core Competencies</h3>
              <ul className="space-y-1.5">
                {personalInfo.skills.map((skill) => (
                  <li key={skill} className="flex items-center gap-2 text-text-secondary text-xs">
                    <span className="text-accent font-mono">&#9656;</span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>

            {/* Certification */}
            <div>
              <h3 className="text-text-primary font-medium text-sm mb-3">Certifications</h3>
              {personalInfo.certifications.map((cert) => (
                <span key={cert} className="tag">{cert}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
