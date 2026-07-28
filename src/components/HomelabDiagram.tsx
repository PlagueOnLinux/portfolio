"use client";

const serviceColumns = [
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
    case "blue": return { bg: "bg-blue-500/10", border: "border-blue-500/30", text: "text-blue-400" };
    case "yellow": return { bg: "bg-yellow-500/10", border: "border-yellow-500/30", text: "text-yellow-400" };
    case "cyan": return { bg: "bg-cyan-500/10", border: "border-cyan-500/30", text: "text-cyan-400" };
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

        {/* AdGuard */}
        <div className="bg-green-500/10 border border-green-500/30 text-green-400 px-4 py-2.5 rounded-lg font-medium text-sm">
          AdGuard Home
        </div>
        <div className="w-px h-5 bg-border" />
        <svg width="10" height="6" viewBox="0 0 10 6" className="text-border"><path d="M5 6L0 0h10L5 6z" fill="currentColor" /></svg>

        {/* Nginx */}
        <div className="bg-green-500/10 border border-green-500/30 text-green-400 px-4 py-2.5 rounded-lg font-medium text-sm">
          Nginx Proxy Manager
        </div>
        <div className="w-px h-5 bg-border" />
        <svg width="10" height="6" viewBox="0 0 10 6" className="text-border"><path d="M5 6L0 0h10L5 6z" fill="currentColor" /></svg>

        {/* Proxmox */}
        <div className="bg-purple-500/10 border border-purple-500/30 text-purple-400 px-5 py-3 rounded-lg font-semibold text-sm">
          Proxmox VE
        </div>
        <div className="w-px h-5 bg-border" />
        <svg width="10" height="6" viewBox="0 0 10 6" className="text-border"><path d="M5 6L0 0h10L5 6z" fill="currentColor" /></svg>

        {/* Storage & Backup block */}
        <div className="bg-orange-500/10 border border-orange-500/30 rounded-lg px-6 py-4 flex items-center gap-4 transition-all duration-200 hover:brightness-110">
          <div className="text-center">
            <p className="text-orange-400 font-semibold text-xs">PBS</p>
            <p className="text-orange-400/60 text-[10px]">Backup Server</p>
          </div>
          <div className="w-px h-8 bg-orange-500/30" />
          <div className="text-center">
            <p className="text-orange-400 font-semibold text-xs">NAS</p>
            <p className="text-orange-400/60 text-[10px]">External Storage</p>
          </div>
        </div>
        <p className="text-orange-400 text-[10px] font-semibold tracking-wide mt-1.5 mb-0">Storage & Backup</p>

        {/* Connector to services */}
        <div className="w-px h-8 bg-border" />
        <div className="w-[70%] max-w-md h-px bg-border" />

        {/* Three service columns */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-lg items-start">
          {serviceColumns.map((cat) => {
            const colors = getColorClasses(cat.color);
            return (
              <div key={cat.title} className="flex flex-col items-center">
                <div className="w-px h-5 bg-border" />
                <div className="flex items-center gap-1.5 mb-3">
                  <span className={`w-2 h-2 rounded-full ${colors.bg} ${colors.border} border`} />
                  <p className={`text-xs font-semibold tracking-wide ${colors.text}`}>
                    {cat.title}
                  </p>
                </div>
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
          { color: "bg-purple-500/30 border-purple-500/50", label: "Infrastructure" },
          { color: "bg-orange-500/30 border-orange-500/50", label: "Storage & Backup" },
          { color: "bg-blue-500/30 border-blue-500/50", label: "Media" },
          { color: "bg-yellow-500/30 border-yellow-500/50", label: "Monitoring" },
          { color: "bg-cyan-500/30 border-cyan-500/50", label: "Productivity" },
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
