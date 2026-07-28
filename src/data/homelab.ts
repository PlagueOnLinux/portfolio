export interface HomelabService {
  name: string;
  description: string;
  category: "core" | "media" | "monitoring" | "backup" | "productivity" | "networking";
  icon: string;
  deployment: "LXC" | "Docker" | "VM" | "Physical" | "Network";
}

export interface HomelabNode {
  id: string;
  label: string;
  type: "gateway" | "hypervisor" | "service" | "network" | "storage" | "router";
  children?: string[];
}

export const homelabServices: HomelabService[] = [
  // Core / Networking
  {
    name: "AdGuard Home",
    description: "DNS server for the entire network. Blocks ads and trackers, handles DNS rewrites for all *.home.arpa domains.",
    category: "networking",
    icon: "shield",
    deployment: "LXC",
  },
  {
    name: "Nginx Proxy Manager",
    description: "Routes traffic from 25+ local domains to the correct container. All services accessible via clean URLs instead of IP:port.",
    category: "networking",
    icon: "globe",
    deployment: "LXC",
  },
  {
    name: "Proxmox VE",
    description: "The hypervisor running everything. Manages all LXC containers and VMs from a single web interface.",
    category: "core",
    icon: "server",
    deployment: "Physical",
  },
  {
    name: "Proxmox Backup Server",
    description: "Automated weekly backups of every container and VM. Runs only on Sundays, powered on and off by a smart plug.",
    category: "backup",
    icon: "database",
    deployment: "Physical",
  },
  // Media
  {
    name: "Jellyfin",
    description: "My personal Netflix. Streams movies and TV shows to any device on the network via Samba share.",
    category: "media",
    icon: "play",
    deployment: "LXC",
  },
  {
    name: "Immich",
    description: "Google Photos replacement with face recognition and AI tagging. Photos stored on NAS, database local.",
    category: "media",
    icon: "image",
    deployment: "LXC",
  },
  {
    name: "Navidrome",
    description: "Personal music streaming with Subsonic API. Works with any mobile music app.",
    category: "media",
    icon: "music",
    deployment: "Docker",
  },
  {
    name: "Media Stack",
    description: "Radarr, Sonarr, Prowlarr, Jellyseerr, Bazarr, qBittorrent — the full automated media pipeline from request to playback.",
    category: "media",
    icon: "film",
    deployment: "LXC",
  },
  // Monitoring
  {
    name: "Uptime Kuma",
    description: "Monitors every service in my homelab and instantly alerts me if something goes offline.",
    category: "monitoring",
    icon: "activity",
    deployment: "LXC",
  },
  {
    name: "Pulse",
    description: "Proxmox-specific monitoring — tracks host health, container status, storage usage and temperatures.",
    category: "monitoring",
    icon: "bar-chart",
    deployment: "LXC",
  },
  {
    name: "Beszel",
    description: "Lightweight resource graphs for every node. CPU, RAM, disk and network at a glance.",
    category: "monitoring",
    icon: "bar-chart",
    deployment: "LXC",
  },
  {
    name: "Scrutiny",
    description: "Keeps an eye on disk health via SMART data. Early warning before a drive fails.",
    category: "monitoring",
    icon: "hard-drive",
    deployment: "LXC",
  },
  // Productivity
  {
    name: "Paperless-ngx",
    description: "OCR document archive for invoices, contracts and personal documents with full-text search.",
    category: "productivity",
    icon: "file-text",
    deployment: "LXC",
  },
  {
    name: "Wiki.js",
    description: "Where all homelab documentation lives. IP tables, configs, procedures — everything searchable.",
    category: "productivity",
    icon: "book",
    deployment: "LXC",
  },
  {
    name: "Vikunja",
    description: "Task manager for homelab projects, ideas and things to fix. Simple boards and lists.",
    category: "productivity",
    icon: "check-square",
    deployment: "LXC",
  },
  {
    name: "Stirling PDF",
    description: "All-in-one PDF toolkit. Merge, split, compress, convert — without uploading anything to the cloud.",
    category: "productivity",
    icon: "file",
    deployment: "LXC",
  },
  {
    name: "ChangeDetection",
    description: "Watches websites for changes and sends notifications. Useful for job listings and price drops.",
    category: "productivity",
    icon: "eye",
    deployment: "LXC",
  },
  {
    name: "Homarr",
    description: "My central dashboard with instant access to every self-hosted service.",
    category: "productivity",
    icon: "layout",
    deployment: "LXC",
  },
];

export const networkTopology: HomelabNode[] = [
  {
    id: "internet",
    label: "Internet",
    type: "network",
    children: ["router"],
  },
  {
    id: "router",
    label: "TP-Link Archer C6",
    type: "router",
    children: ["adguard"],
  },
  {
    id: "adguard",
    label: "AdGuard Home",
    type: "gateway",
    children: ["nginx"],
  },
  {
    id: "nginx",
    label: "Nginx Proxy Manager",
    type: "gateway",
    children: ["proxmox", "nas"],
  },
  {
    id: "proxmox",
    label: "Proxmox VE",
    type: "hypervisor",
    children: [
      "jellyfin",
      "immich",
      "media-stack",
      "music-stack",
      "uptime-kuma",
      "pulse",
      "beszel",
      "scrutiny",
      "paperless",
      "wikijs",
      "vikunja",
      "homarr",
      "stirling-pdf",
      "changedetection",
    ],
  },
  {
    id: "nas",
    label: "NAS",
    type: "storage",
  },
  { id: "jellyfin", label: "Jellyfin", type: "service" },
  { id: "immich", label: "Immich", type: "service" },
  { id: "media-stack", label: "Media Stack", type: "service" },
  { id: "music-stack", label: "Music Stack", type: "service" },
  { id: "uptime-kuma", label: "Uptime Kuma", type: "service" },
  { id: "pulse", label: "Pulse", type: "service" },
  { id: "beszel", label: "Beszel", type: "service" },
  { id: "scrutiny", label: "Scrutiny", type: "service" },
  { id: "paperless", label: "Paperless-ngx", type: "service" },
  { id: "wikijs", label: "Wiki.js", type: "service" },
  { id: "vikunja", label: "Vikunja", type: "service" },
  { id: "homarr", label: "Homarr", type: "service" },
  { id: "stirling-pdf", label: "Stirling PDF", type: "service" },
  { id: "changedetection", label: "ChangeDetection", type: "service" },
];

export const backupSchedule = [
  { time: "00:35", step: "Smart plug powers on PBS" },
  { time: "00:40", step: "BIOS auto-starts Proxmox Backup Server" },
  { time: "00:50", step: "Proxmox host config backup" },
  { time: "01:00", step: "Full backup of all LXC containers and VMs" },
  { time: "03:00", step: "PBS graceful shutdown via script" },
  { time: "03:15", step: "Smart plug cuts power to PBS" },
];

export const infrastructureStats = {
  containers: "17+",
  services: "25+",
  domains: "25+ local *.home.arpa",
  backupFrequency: "Weekly (Sunday night)",
  network: "192.168.1.0/24",
};
