"use client";

const services = [
  { id: "jellyfin", label: "Jellyfin" },
  { id: "immich", label: "Immich" },
  { id: "media-stack", label: "Media Stack" },
  { id: "music-stack", label: "Navidrome" },
  { id: "uptime-kuma", label: "Uptime Kuma" },
  { id: "pulse", label: "Pulse" },
  { id: "beszel", label: "Beszel" },
  { id: "scrutiny", label: "Scrutiny" },
  { id: "paperless", label: "Paperless-ngx" },
  { id: "wikijs", label: "Wiki.js" },
  { id: "vikunja", label: "Vikunja" },
  { id: "homarr", label: "Homarr" },
  { id: "stirling-pdf", label: "Stirling PDF" },
  { id: "changedetection", label: "ChangeDetection" },
];

function getServiceNodeStyle(id: string) {
  const mediaServices = ["jellyfin", "immich", "media-stack", "music-stack"];
  const monitoringServices = ["uptime-kuma", "pulse", "beszel", "scrutiny"];
  const productivityServices = ["paperless", "wikijs", "vikunja", "homarr", "stirling-pdf", "changedetection"];

  if (mediaServices.includes(id)) return "bg-blue-500/10 border-blue-500/30 text-blue-400 hover:brightness-110";
  if (monitoringServices.includes(id)) return "bg-yellow-500/10 border-yellow-500/30 text-yellow-400 hover:brightness-110";
  if (productivityServices.includes(id)) return "bg-cyan-500/10 border-cyan-500/30 text-cyan-400 hover:brightness-110";
  return "bg-surface-light border-border text-text-secondary hover:brightness-110";
}

export default function HomelabDiagram() {

  return (
    <div className="glass-card p-6 md:p-10">
      <div className="flex flex-col items-center gap-0">
        {/* Internet */}
        <div className="bg-blue-500/10 border border-blue-500/30 text-blue-400 px-4 py-2.5 rounded-lg font-medium text-sm transition-all duration-200 hover:brightness-110">
          Internet
        </div>
        <div className="w-px h-6 bg-border" />
        <svg width="10" height="6" viewBox="0 0 10 6" className="text-border"><path d="M5 6L0 0h10L5 6z" fill="currentColor" /></svg>

        {/* Router */}
        <div className="bg-green-500/10 border border-green-500/30 text-green-400 px-4 py-2.5 rounded-lg font-medium text-sm transition-all duration-200 hover:brightness-110">
          TP-Link Archer C6
        </div>
        <div className="w-px h-6 bg-border" />
        <svg width="10" height="6" viewBox="0 0 10 6" className="text-border"><path d="M5 6L0 0h10L5 6z" fill="currentColor" /></svg>

        {/* Proxmox */}
        <div className="bg-purple-500/10 border border-purple-500/30 text-purple-400 px-5 py-3 rounded-lg font-semibold text-sm transition-all duration-200 hover:brightness-110">
          Proxmox VE
        </div>

        {/* Branch: Services | NAS | PBS */}
        <div className="w-px h-6 bg-border" />

        <div className="flex items-start gap-6 md:gap-10 w-full max-w-3xl">
          {/* NAS branch */}
          <div className="flex flex-col items-center flex-shrink-0">
            <svg width="10" height="6" viewBox="0 0 10 6" className="text-border mb-1"><path d="M5 6L0 0h10L5 6z" fill="currentColor" /></svg>
            <div className="bg-orange-500/10 border border-orange-500/30 text-orange-400 px-3 py-2 rounded-lg font-medium text-xs transition-all duration-200 hover:brightness-110 text-center">
              <p className="font-semibold">NAS</p>
              <p className="text-[10px] mt-0.5 opacity-70">External Storage</p>
            </div>
          </div>

          {/* Services (center, largest) */}
          <div className="flex-1">
            <svg width="10" height="6" viewBox="0 0 10 6" className="text-border mb-1 mx-auto block"><path d="M5 6L0 0h10L5 6z" fill="currentColor" /></svg>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
              {services.map((service) => (
                <div
                  key={service.id}
                  className={`flex items-center justify-center px-2 py-2.5 rounded-lg border text-xs font-medium text-center transition-all duration-200 ${getServiceNodeStyle(service.id)}`}
                >
                  {service.label}
                </div>
              ))}
            </div>
          </div>

          {/* PBS branch */}
          <div className="flex flex-col items-center flex-shrink-0">
            <svg width="10" height="6" viewBox="0 0 10 6" className="text-border mb-1"><path d="M5 6L0 0h10L5 6z" fill="currentColor" /></svg>
            <div className="bg-orange-500/10 border border-orange-500/30 text-orange-400 px-3 py-2 rounded-lg font-medium text-xs transition-all duration-200 hover:brightness-110 text-center">
              <p className="font-semibold">PBS</p>
              <p className="text-[10px] mt-0.5 opacity-70">Backup Server</p>
            </div>
          </div>
        </div>
      </div>

      {/* Legend */}
      <div className="mt-10 pt-6 border-t border-border flex flex-wrap gap-4 justify-center">
        {[
          { color: "bg-blue-500/30 border-blue-500/50", label: "Media" },
          { color: "bg-yellow-500/30 border-yellow-500/50", label: "Monitoring" },
          { color: "bg-cyan-500/30 border-cyan-500/50", label: "Productivity" },
          { color: "bg-green-500/30 border-green-500/50", label: "Networking" },
          { color: "bg-purple-500/30 border-purple-500/50", label: "Infrastructure" },
          { color: "bg-orange-500/30 border-orange-500/50", label: "Storage / Backup" },
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
