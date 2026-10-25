"use client";

import { experiences } from "@/data/experience";
import { useLanguage } from "@/context/LanguageContext";

export default function Timeline() {
  const { t } = useLanguage();

  return (
    <section id="experience" className="border-t border-border">
      <div className="section-container">
        <h2 className="section-title">
          <span className="font-mono text-accent text-lg mr-2">02.</span>
          {t("experience.title")}
        </h2>
        <p className="section-subtitle">{t("experience.subtitle")}</p>

        <div className="relative">
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-border" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative pl-8 md:pl-20">
                <div className="absolute left-0 md:left-8 top-1.5 w-3 h-3 -translate-x-[5px] rounded-full bg-accent border-2 border-background" />

                <div className="glass-card">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                    <div>
                      <h3 className="text-text-primary font-semibold text-lg">{exp.role}</h3>
                      <p className="text-accent font-medium">{exp.company}</p>
                    </div>
                    <span className="text-text-secondary text-sm font-mono whitespace-nowrap">{exp.period}</span>
                  </div>

                  <ul className="space-y-1.5 mb-4">
                    {exp.description.map((point, i) => (
                      <li key={i} className="flex items-start gap-2 text-text-secondary text-sm leading-relaxed">
                        <span className="text-accent font-mono text-xs mt-1 flex-shrink-0">&#9656;</span>
                        {point}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span key={tech} className="tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
