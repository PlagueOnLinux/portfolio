"use client";

import { HomelabNode } from "@/data/homelab";

// Map node IDs to service card IDs
const nodeToServiceMap: Record<string, string> = {
  "adguard": "service-adguard-home",
  "nginx": "service-nginx-proxy-manager",
  "proxmox": "service-proxmox-ve",
  "nas": "service-nas",
  "jellyfin": "service-jellyfin",
  "immich": "service-immich",
  "media-stack": "service-media-stack",
  "music-stack": "service-navidrome",
  "uptime-kuma": "service-uptime-kuma",
  "pulse": "service-pulse",
  "beszel": "service-beszel",
  "scrutiny": "service-scrutiny",
  "paperless": "service-paperless-ngx",
  "wikijs": "service-wiki-js",
  "vikunja": "service-vikunja",
  "homarr": "service-homarr",
  "stirling-pdf": "service-stirling-pdf",
  "changedetection": "service-changedetection",
};

function getNodeStyle(type: HomelabNode["type"]) {
  switch (type) {
    case "network": return "bg-blue-500/10 border-blue-500/30 text-blue-400";
    case "router": return "bg-cyan-500/10 border-cyan-500/30 text-cyan-400";
    case "gateway": return "bg-green-500/10 border-green-500/30 text-green-400";
    case "hypervisor": return "bg-purple-500/10 border-purple-500/30 text-purple-400";
    case "storage": return "bg-orange-500/10 border-orange-500/30 text-orange-400";
    case "service": return "bg-surface-light border-border text-text-primary";
  }
}

function getServiceNodeColor(id: string) {
  // Map services to their category colors
  const mediaServices = ["jellyfin", "immich", "media-stack", "music-stack"];
  const monitoringServices = ["uptime-kuma", "pulse", "beszel", "scrutiny"];
  const productivityServices = ["paperless", "wikijs", "vikunja", "homarr", "stirling-pdf", "changedetection"];

  if (mediaServices.includes(id)) return "bg-blue-500/10 border-blue-500/30 text-blue-400 hover:bg-blue-500/20 hover:border-blue-400/60";
  if (monitoringServices.includes(id)) return "bg-yellow-500/10 border-yellow-500/30 text-yellow-400 hover:bg-yellow-500/20 hover:border-yellow-400/60";
  if (productivityServices.includes(id)) return "bg-cyan-500/10 border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/20 hover:border-cyan-400/60";
  return "bg-surface-light border-border text-text-primary hover:bg-surface hover:border-text-secondary/30";
}

function scrollToService(nodeId: string) {
  const serviceId = nodeToServiceMap[nodeId];
  if (!serviceId) return;

  const el = document.getElementById(serviceId);
  if (!el) return;

  el.scrollIntoView({ behavior: "smooth", block: "center" });

  // Pulse animation
  el.classList.add("service-pulse");
  setTimeout(() => {
    el.classList.remove("service-pulse");
  }, 1500);
}

function highlightService(nodeId: string, highlight: boolean) {
  const serviceId = nodeToServiceMap[nodeId];
  if (!serviceId) return;

  const el = document.getElementById(serviceId);
  if (!el) return;

  if (highlight) {
    el.classList.add("service-hover-highlight");
  } else {
    el.classList.remove("service-hover-highlight");
  }
}

export default function HomelabDiagram({ topology }: { topology: HomelabNode[] }) {
  const services = topology.filter((n) => n.type === "service");

  const chainNodes = [
    topology.find((n) => n.id === "internet"),
    topology.find((n) => n.id === "router"),
    topology.find((n) => n.id === "adguard"),
    topology.find((n) => n.id === "nginx"),
    topology.find((n) => n.id === "proxmox"),
  ].filter(Boolean) as HomelabNode[];

  return (
    <div className="glass-card p-6 md:p-10">
      <div className="flex flex-col items-center gap-0">
        {/* Vertical chain */}
        {chainNodes.map((node, i) => {
          const isClickable = !!nodeToServiceMap[node.id];
          return (
            <div key={node.id} className="flex flex-col items-center">
              <div
                onClick={() => isClickable && scrollToService(node.id)}
                onMouseEnter={() => isClickable && highlightService(node.id, true)}
                onMouseLeave={() => isClickable && highlightService(node.id, false)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-lg border font-medium text-sm transition-all duration-200 ${getNodeStyle(node.type)} ${isClickable ? "cursor-pointer hover:scale-105 hover:brightness-125" : ""}`}
              >
                {node.label}
              </div>
              {i < chainNodes.length - 1 && (
                <div className="flex flex-col items-center">
                  <div className="w-px h-6 bg-border" />
                  <svg width="10" height="6" viewBox="0 0 10 6" className="text-border">
                    <path d="M5 6L0 0h10L5 6z" fill="currentColor" />
                  </svg>
                </div>
              )}
            </div>
          );
        })}

        {/* Connector line down from Proxmox */}
        <div className="w-px h-6 bg-border" />

        {/* Services + NAS grid */}
        <div className="w-full max-w-2xl">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
            {services.map((service) => (
              <div
                key={service.id}
                onClick={() => scrollToService(service.id)}
                onMouseEnter={() => highlightService(service.id, true)}
                onMouseLeave={() => highlightService(service.id, false)}
                className={`flex items-center justify-center px-2 py-2.5 rounded-lg border text-xs font-medium text-center cursor-pointer transition-all duration-200 hover:scale-105 ${getServiceNodeColor(service.id)}`}
              >
                {service.label}
              </div>
            ))}
            {/* NAS */}
            <div className={`flex items-center justify-center px-2 py-2.5 rounded-lg border text-xs font-medium text-center ${getNodeStyle("storage")}`}>
              NAS
            </div>
          </div>
        </div>
      </div>

      {/* Legend */}
      <div className="mt-10 pt-6 border-t border-border flex flex-wrap gap-4 justify-center">
        {([
          { type: "network" as const, label: "Internet" },
          { type: "router" as const, label: "Router" },
          { type: "gateway" as const, label: "DNS / Proxy" },
          { type: "hypervisor" as const, label: "Hypervisor" },
          { type: "storage" as const, label: "Storage" },
        ]).map(({ type, label }) => (
          <div key={type} className="flex items-center gap-2 text-xs">
            <div className={`w-3 h-3 rounded border ${getNodeStyle(type)}`} />
            <span className="text-text-secondary">{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
