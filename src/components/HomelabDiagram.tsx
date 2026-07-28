"use client";

const categories = [
  {
    title: "Networking",
    color: "green",
    services: ["AdGuard Home", "Nginx Proxy Manager"],
  },
  {
    title: "Media",
    color: "blue",
    services: ["Jellyfin", "Immich", "Media Stack", "Navidrome"],
  },
  {
    title: "Monitoring",
    color: "yellow",
    services: ["Uptime Kuma", "Pulse", "Beszel", "Scrutiny"],
  },
  {
    title: "Productivity",
    color: "cyan",
    services: ["Paperless-ngx", "Wiki.js", "Vikunja", "Homarr", "Stirling PDF", "ChangeDetection"],
  },
  {
    title: "Storage & Backup",
    color: "orange",
    services: ["PBS", "NAS"],
  },
];

function getColorClasses(color: string) {
  switch (color) {
    case "green": return { bg: "bg-green-500/10", border: "border-green-500/30", text: "text-green-400" };
    case "blue": return { bg: "bg-blue-500/10", border: "border-blue-500/30", text: "text-blue-400" };
    case "yellow": return { bg: "bg-yellow-500/10", border: "border-yellow-500/30", text: "text-yellow-400" };
    case "cyan": return { bg: "bg-cyan-500/10", border: "border-cyan-500/30", text: "text-cyan-400" };
    case "orange": return { bg: "bg-orange-500/10", border: "border-orange-500/30", text: "text-orange-400" };
    default: return { bg: "bg-surface-light", border: "border-border", text: "text-text-secondary" };
  }
}

export default function HomelabDiagram() {
  return (
    <div className="glass-card p-6 md:p-10">
      <div className="flex flex-col items-center">
        {/* Top chain: Internet → Router → Proxmox */}
        <div className="bg-blue-500/10 border border-blue-500/30 text-blue-400 px-4 py-2.5 rounded-lg font-medium text-sm">
          Internet
        </div>
        <div className="w-px h-5 bg-border" />
        <svg width="10" height="6" viewBox="0 0 10 6" className="text-border"><path d="M5 6L0 0h10L5 6z" fill="currentColor" /></svg>

        <div className="bg-green-500/10 border border-green-500/30 text-green-400 px-4 py-2.5 rounded-lg font-medium text-sm">
          TP-Link Archer C6
        </div>
        <div className="w-px h-5 bg-border" />
        <svg width="10" height="6" viewBox="0 0 10 6" className="text-border"><path d="M5 6L0 0h10L5 6z" fill="currentColor" /></svg>

        <div className="bg-purple-500/10 border border-purple-500/30 text-purple-400 px-5 py-3 rounded-lg font-semibold text-sm">
          Proxmox VE
        </div>

        {/* Vertical line from Proxmox to horizontal connector */}
        <div className="w-px h-8 bg-border" />

        {/* Horizontal connector line */}
        <div className="w-[80%] max-w-xl h-px bg-border" />

        {/* Category columns */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 w-full mt-0 items-start">
          {categories.map((cat) => {
            const colors = getColorClasses(cat.color);
            return (
              <div key={cat.title} className="flex flex-col items-center">
                {/* Vertical connector from horizontal line to heading */}
                <div className={`w-px h-5 bg-border`} />

                {/* Category heading */}
                <div className="flex items-center gap-1.5 mb-3">
                  <span className={`w-2 h-2 rounded-full ${colors.bg} ${colors.border} border`} />
                  <p className={`text-xs font-semibold tracking-wide ${colors.text}`}>
                    {cat.title}
                  </p>
                </div>

                {/* Services stack */}
                <div className="flex flex-col gap-1.5 w-full">
                  {cat.services.map((service) => (
                    <div
                      key={service}
                      className={`${colors.bg} ${colors.border} ${colors.text} border rounded-lg px-2 py-1.5 text-[11px] font-medium text-center transition-all duration-200 hover:brightness-110`}
                    >
                      {service}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Legend */}
      <div className="mt-10 pt-6 border-t border-border flex flex-wrap gap-4 justify-center">
        {[
          { color: "bg-green-500/30 border-green-500/50", label: "Networking" },
          { color: "bg-blue-500/30 border-blue-500/50", label: "Media" },
          { color: "bg-yellow-500/30 border-yellow-500/50", label: "Monitoring" },
          { color: "bg-cyan-500/30 border-cyan-500/50", label: "Productivity" },
          { color: "bg-orange-500/30 border-orange-500/50", label: "Storage & Backup" },
          { color: "bg-purple-500/30 border-purple-500/50", label: "Infrastructure" },
        ].map(({ color, label }) => (
          <div key={label} className="flex items-center gap-2 text-xs">
            <div className={`w-3 h-3 rounded border ${color}`} />
            <span className="text-text-secondary">{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
