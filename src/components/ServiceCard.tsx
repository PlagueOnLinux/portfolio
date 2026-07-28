"use client";

import { HomelabService } from "@/data/homelab";

function getCategoryColor(category: HomelabService["category"]) {
  switch (category) {
    case "core": return "purple";
    case "networking": return "green";
    case "media": return "blue";
    case "monitoring": return "yellow";
    case "backup": return "orange";
    case "productivity": return "cyan";
  }
}

function getCategoryClasses(category: HomelabService["category"]) {
  const color = getCategoryColor(category);
  return {
    text: `text-${color}-400`,
    hoverBorder: `hover:border-${color}-400/50`,
    hoverText: `group-hover:text-${color}-400`,
  };
}

export default function ServiceCard({ service }: { service: HomelabService }) {
  const classes = getCategoryClasses(service.category);
  const cardId = `service-${service.name.toLowerCase().replace(/[^a-z0-9]/g, "-")}`;

  return (
    <div
      id={cardId}
      className={`bg-surface border border-border rounded-xl p-6 transition-all duration-200 hover:-translate-y-0.5 ${classes.hoverBorder} group service-card`}
    >
      {/* Top row: icon + deployment badge */}
      <div className="flex items-start justify-between mb-3">
        <div className={classes.text}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10" />
          </svg>
        </div>
        <span className="text-[10px] font-mono text-text-secondary px-2 py-0.5 rounded border border-border bg-surface-light">
          {service.deployment}
        </span>
      </div>

      {/* Title */}
      <h4 className={`text-text-primary font-medium text-sm mb-1.5 transition-colors duration-200 ${classes.hoverText}`}>
        {service.name}
      </h4>

      {/* Description */}
      <p className="text-text-secondary text-xs leading-relaxed">
        {service.description}
      </p>
    </div>
  );
}
