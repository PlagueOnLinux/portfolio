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

        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2 space-y-4">
            <p className="text-text-secondary leading-relaxed">{t("about.p1")}</p>
            <p className="text-text-secondary leading-relaxed">{t("about.p2")}</p>
            <p className="text-text-secondary leading-relaxed">{t("about.p3")}</p>
          </div>

          <div className="space-y-6">
            {/* Technologies */}
            <div>
              <h3 className="text-text-primary font-medium mb-3">Technologies</h3>
              <ul className="space-y-1.5">
                {personalInfo.technologies.map((tech) => (
                  <li key={tech} className="flex items-center gap-2 text-text-secondary text-sm">
                    <span className="text-accent font-mono text-xs">&#9656;</span>
                    {tech}
                  </li>
                ))}
              </ul>
            </div>

            {/* Core Competencies */}
            <div>
              <h3 className="text-text-primary font-medium mb-3">Core Competencies</h3>
              <ul className="space-y-1.5">
                {personalInfo.skills.map((skill) => (
                  <li key={skill} className="flex items-center gap-2 text-text-secondary text-sm">
                    <span className="text-accent font-mono text-xs">&#9656;</span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>

            {/* Certifications */}
            <div>
              <h3 className="text-text-primary font-medium mb-3">Certifications</h3>
              <ul className="space-y-1.5">
                {personalInfo.certifications.map((cert) => (
                  <li key={cert} className="flex items-center gap-2 text-text-secondary text-sm">
                    <span className="text-accent font-mono text-xs">&#9656;</span>
                    {cert}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
