import { HomelabService } from "@/data/homelab";

function getCategoryHoverBorder(category: HomelabService["category"]) {
  switch (category) {
    case "core": return "hover:border-purple-400/50";
    case "networking": return "hover:border-green-400/50";
    case "media": return "hover:border-blue-400/50";
    case "monitoring": return "hover:border-yellow-400/50";
    case "backup": return "hover:border-orange-400/50";
    case "productivity": return "hover:border-cyan-400/50";
  }
}

function getCategoryHoverTitle(category: HomelabService["category"]) {
  switch (category) {
    case "core": return "group-hover:text-purple-400";
    case "networking": return "group-hover:text-green-400";
    case "media": return "group-hover:text-blue-400";
    case "monitoring": return "group-hover:text-yellow-400";
    case "backup": return "group-hover:text-orange-400";
    case "productivity": return "group-hover:text-cyan-400";
  }
}

function getCategoryIconColor(category: HomelabService["category"]) {
  switch (category) {
    case "core": return "text-purple-400";
    case "networking": return "text-green-400";
    case "media": return "text-blue-400";
    case "monitoring": return "text-yellow-400";
    case "backup": return "text-orange-400";
    case "productivity": return "text-cyan-400";
  }
}

export default function ServiceCard({ service }: { service: HomelabService }) {
  return (
    <div className={`bg-surface border border-border rounded-xl p-6 transition-all duration-200 hover:-translate-y-0.5 ${getCategoryHoverBorder(service.category)} group`}>
      {/* Top row: icon + deployment badge */}
      <div className="flex items-start justify-between mb-3">
        <div className={getCategoryIconColor(service.category)}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10" />
          </svg>
        </div>
        <span className="text-[10px] font-mono text-text-secondary px-2 py-0.5 rounded border border-border bg-surface-light">
          {service.deployment}
        </span>
      </div>

      {/* Title */}
      <h4 className={`text-text-primary font-medium text-sm mb-1.5 transition-colors duration-200 ${getCategoryHoverTitle(service.category)}`}>
        {service.name}
      </h4>

      {/* Description */}
      <p className="text-text-secondary text-xs leading-relaxed">
        {service.description}
      </p>
    </div>
  );
}
