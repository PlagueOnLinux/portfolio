"use client";

import Link from "next/link";
import { homelabServices, infrastructureStats } from "@/data/homelab";
import HomelabDiagram from "@/components/HomelabDiagram";
import ServiceCard from "@/components/ServiceCard";
import { useLanguage } from "@/context/LanguageContext";

export default function HomelabPage() {
  const { t } = useLanguage();

  const categories = [
    { key: "core", labelKey: "cat.core" },
    { key: "networking", labelKey: "cat.networking" },
    { key: "media", labelKey: "cat.media" },
    { key: "monitoring", labelKey: "cat.monitoring" },
    { key: "backup", labelKey: "cat.backup" },
    { key: "productivity", labelKey: "cat.productivity" },
  ] as const;

  return (
    <div className="section-container">
      {/* Header — matching HireMate layout */}
      <div className="flex items-start gap-4 mb-8">
        <div className="w-14 h-14 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center flex-shrink-0">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-accent">
            <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
            <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
            <line x1="6" y1="6" x2="6.01" y2="6" />
            <line x1="6" y1="18" x2="6.01" y2="18" />
          </svg>
        </div>
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-text-primary">HomeLab</h1>
          <p className="text-text-secondary mt-1">Self-hosted infrastructure built on Proxmox VE and Linux.</p>
          <span className="status-badge status-active mt-3 inline-flex">
            <span className="w-1.5 h-1.5 rounded-full bg-current" />
            Active
          </span>
        </div>
      </div>

      {/* Tagline */}
      <p className="text-text-secondary text-base italic mb-12 max-w-2xl">
        Running my personal infrastructure for learning, automation and everyday services while keeping full control over data and privacy.
      </p>

      {/* Description */}
      <section className="mb-10">
        <p className="text-text-secondary leading-relaxed max-w-3xl mb-4">
          A complete self-hosted ecosystem running on Proxmox VE with 17+ LXC containers, 25+ services, and automated weekly backups.
          Everything accessible via local DNS through 25+ custom *.home.arpa domains.
        </p>
        <p className="text-text-secondary leading-relaxed max-w-3xl">
          The environment is designed for hands-on learning, real-world infrastructure management, and day-to-day personal use —
          from media streaming and photo management to document archival and system monitoring.
        </p>
      </section>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
        {[
          { label: t("stats.containers"), value: infrastructureStats.containers },
          { label: t("stats.services"), value: infrastructureStats.services },
          { label: t("stats.domains"), value: "25+" },
          { label: t("stats.backup"), value: t("stats.weekly") },
        ].map((stat) => (
          <div key={stat.label} className="glass-card text-center py-4">
            <p className="text-accent font-bold text-2xl">{stat.value}</p>
            <p className="text-text-secondary text-xs mt-1">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Network Topology */}
      <section className="mb-14">
        <h2 className="text-xl font-semibold text-text-primary mb-6">Homelab Architecture</h2>
        <HomelabDiagram />
      </section>

      {/* Core Services */}
      <section className="mb-16">
        <h2 className="text-xl font-semibold text-text-primary mb-8">Core Services</h2>
        {categories.map(({ key, labelKey }) => {
          const services = homelabServices.filter((s) => s.category === key);
          if (services.length === 0) return null;

          const badgeColor = {
            core: "bg-purple-500/20 border-purple-500/40",
            networking: "bg-green-500/20 border-green-500/40",
            media: "bg-blue-500/20 border-blue-500/40",
            monitoring: "bg-yellow-500/20 border-yellow-500/40",
            backup: "bg-orange-500/20 border-orange-500/40",
            productivity: "bg-cyan-500/20 border-cyan-500/40",
          }[key];

          return (
            <div key={key} className="mb-12">
              <h3 className="flex items-center gap-2 text-text-secondary font-mono text-sm uppercase tracking-wider mb-4">
                <span className={`w-2.5 h-2.5 rounded-sm border ${badgeColor}`} />
                {t(labelKey)}
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {services.map((service) => (
                  <ServiceCard key={service.name} service={service} />
                ))}
              </div>
            </div>
          );
        })}
      </section>

      {/* Backup */}
      <section className="border-t border-border pt-12 mb-16">
        <h2 className="text-xl font-semibold text-text-primary mb-6">{t("homelab.backup.title")}</h2>
        <p className="text-text-secondary mb-6 max-w-2xl">{t("homelab.backup.description")}</p>
        <div className="glass-card">
          <div className="space-y-4">
            {[
              { time: "00:35", step: "Smart plug powers on PBS", icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-accent"><path d="M18.36 6.64a9 9 0 1 1-12.73 0"/><line x1="12" y1="2" x2="12" y2="12"/></svg> },
              { time: "00:40", step: "BIOS auto-starts Proxmox Backup Server", icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-accent"><polygon points="5 3 19 12 5 21 5 3"/></svg> },
              { time: "00:50", step: "Proxmox host config backup", icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-accent"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"/><rect x="2" y="14" width="20" height="8" rx="2" ry="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/></svg> },
              { time: "01:00", step: "Full backup of all LXC containers and VMs", icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-accent"><polyline points="21 8 21 21 3 21 3 8"/><rect x="1" y="3" width="22" height="5"/><line x1="10" y1="12" x2="14" y2="12"/></svg> },
              { time: "03:00", step: "PBS graceful shutdown via script", icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-accent"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg> },
              { time: "03:15", step: "Smart plug cuts power to PBS", icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-accent"><path d="M18.36 6.64a9 9 0 1 1-12.73 0"/><line x1="12" y1="2" x2="12" y2="12"/><line x1="2" y1="2" x2="22" y2="22"/></svg> },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4">
                <span className="text-accent font-mono text-sm whitespace-nowrap min-w-[50px]">{item.time}</span>
                <div className="flex items-center gap-3">
                  {item.icon}
                  <span className="text-text-secondary text-sm">{item.step}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hardware & Philosophy */}
      <section className="border-t border-border pt-12">
        <h2 className="text-xl font-semibold text-text-primary mb-6">{t("homelab.hardware")}</h2>
        <div className="grid sm:grid-cols-2 gap-6">
          <div className="glass-card">
            <h3 className="text-text-primary font-medium mb-3">{t("homelab.infrastructure")}</h3>
            <ul className="space-y-2 text-text-secondary text-sm">
              {["proxmox", "containers", "nginx", "adguard", "pbs", "nas", "hue"].map((key) => (
                <li key={key} className="flex items-center gap-2">
                  <span className="text-accent font-mono text-xs">&#9656;</span>
                  {t(`homelab.infra.${key}`)}
                </li>
              ))}
            </ul>
          </div>
          <div className="glass-card">
            <h3 className="text-text-primary font-medium mb-3">{t("homelab.philosophy")}</h3>
            <ul className="space-y-2 text-text-secondary text-sm">
              {["selfhost", "privacy", "backup", "monitor", "docs", "dns", "energy"].map((key) => (
                <li key={key} className="flex items-center gap-2">
                  <span className="text-accent font-mono text-xs">&#9656;</span>
                  {t(`homelab.phil.${key}`)}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="mt-12 flex flex-wrap gap-3">
        <Link href="/contact" className="btn-primary">
          Get in Touch
        </Link>
      </div>
    </div>
  );
}
