"use client";

const serviceColumns = [
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
        {/* Internet */}
        <div className="bg-blue-500/10 border border-blue-500/30 text-blue-400 px-4 py-2.5 rounded-lg font-medium text-sm">
          Internet
        </div>
        <div className="w-px h-5 bg-border" />
        <svg width="10" height="6" viewBox="0 0 10 6" className="text-border"><path d="M5 6L0 0h10L5 6z" fill="currentColor" /></svg>

        {/* Router */}
        <div className="bg-green-500/10 border border-green-500/30 text-green-400 px-4 py-2.5 rounded-lg font-medium text-sm">
          TP-Link Archer C6
        </div>
        <div className="w-px h-5 bg-border" />
        <svg width="10" height="6" viewBox="0 0 10 6" className="text-border"><path d="M5 6L0 0h10L5 6z" fill="currentColor" /></svg>

        {/* Proxmox */}
        <div className="bg-purple-500/10 border border-purple-500/30 text-purple-400 px-5 py-3 rounded-lg font-semibold text-sm">
          Proxmox VE
        </div>

        {/* Branch connector */}
        <div className="w-px h-6 bg-border" />

        {/* Two branches: Infrastructure + Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-3xl">

          {/* Infrastructure branch */}
          <div className="flex flex-col items-center">
            <div className="text-xs font-semibold tracking-wide text-purple-400 mb-4 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-purple-500/20 border border-purple-500/40" />
              Infrastructure
            </div>
            <div className="flex gap-3">
              <div className="bg-orange-500/10 border border-orange-500/30 text-orange-400 px-4 py-3 rounded-lg text-center transition-all duration-200 hover:brightness-110">
                <p className="font-semibold text-xs">PBS</p>
                <p className="text-[10px] mt-0.5 opacity-70">Backup Server</p>
              </div>
              <div className="bg-orange-500/10 border border-orange-500/30 text-orange-400 px-4 py-3 rounded-lg text-center transition-all duration-200 hover:brightness-110">
                <p className="font-semibold text-xs">NAS</p>
                <p className="text-[10px] mt-0.5 opacity-70">External Storage</p>
              </div>
            </div>
          </div>

          {/* Services branch */}
          <div className="flex flex-col items-center">
            <div className="text-xs font-semibold tracking-wide text-text-primary mb-4 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-accent/20 border border-accent/40" />
              Hosted Services
            </div>

            {/* Service columns */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full">
              {serviceColumns.map((cat) => {
                const colors = getColorClasses(cat.color);
                return (
                  <div key={cat.title} className="flex flex-col items-center">
                    <p className={`text-[10px] font-semibold tracking-wide mb-2 ${colors.text}`}>
                      {cat.title}
                    </p>
                    <div className="flex flex-col gap-1 w-full">
                      {cat.services.map((service) => (
                        <div
                          key={service}
                          className={`${colors.bg} ${colors.border} ${colors.text} border rounded px-1.5 py-1 text-[10px] font-medium text-center transition-all duration-200 hover:brightness-110`}
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
        </div>
      </div>

      {/* Legend */}
      <div className="mt-10 pt-6 border-t border-border flex flex-wrap gap-4 justify-center">
        {[
          { color: "bg-purple-500/30 border-purple-500/50", label: "Infrastructure" },
          { color: "bg-green-500/30 border-green-500/50", label: "Networking" },
          { color: "bg-blue-500/30 border-blue-500/50", label: "Media" },
          { color: "bg-yellow-500/30 border-yellow-500/50", label: "Monitoring" },
          { color: "bg-cyan-500/30 border-cyan-500/50", label: "Productivity" },
          { color: "bg-orange-500/30 border-orange-500/50", label: "Storage & Backup" },
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
