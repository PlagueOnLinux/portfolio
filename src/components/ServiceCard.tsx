import { HomelabService } from "@/data/homelab";

function getCategoryColor(category: HomelabService["category"]) {
  switch (category) {
    case "core": return "text-purple-400";
    case "networking": return "text-green-400";
    case "media": return "text-blue-400";
    case "monitoring": return "text-yellow-400";
    case "backup": return "text-orange-400";
    case "productivity": return "text-cyan-400";
  }
}

function getCategoryBorderHover(category: HomelabService["category"]) {
  switch (category) {
    case "core": return "hover:border-purple-400/50";
    case "networking": return "hover:border-green-400/50";
    case "media": return "hover:border-blue-400/50";
    case "monitoring": return "hover:border-yellow-400/50";
    case "backup": return "hover:border-orange-400/50";
    case "productivity": return "hover:border-cyan-400/50";
  }
}

export default function ServiceCard({ service }: { service: HomelabService }) {
  return (
    <div className={`bg-surface border border-border rounded-xl p-6 transition-all duration-200 hover:-translate-y-0.5 ${getCategoryBorderHover(service.category)} group`}>
      {/* Top row: icon + deployment badge */}
      <div className="flex items-start justify-between mb-3">
        <div className={`${getCategoryColor(service.category)}`}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10" />
          </svg>
        </div>
        <span className="text-[10px] font-mono text-text-secondary px-2 py-0.5 rounded border border-border bg-surface-light">
          {service.deployment}
        </span>
      </div>

      {/* Title */}
      <h4 className="text-text-primary font-medium text-sm mb-1.5 group-hover:text-accent transition-colors duration-200">
        {service.name}
      </h4>

      {/* Description */}
      <p className="text-text-secondary text-xs leading-relaxed">
        {service.description}
      </p>
    </div>
  );
}
