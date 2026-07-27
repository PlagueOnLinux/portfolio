export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
  technologies: string[];
}

export const experiences: Experience[] = [
  {
    company: "Freelance",
    role: "Freelance IT Support & Infrastructure Projects",
    period: "12/2025 - Present",
    description:
      "Delivered independent IT services for individual clients, including hardware diagnostics and repair, peripheral device configuration, and operating system optimization. Administer Linux systems in a personal lab environment, including user, permission and file system management. Designed and developed a Proxmox-based HomeLab environment supporting containerization, infrastructure monitoring and self-hosted services.",
    technologies: ["Linux", "Proxmox", "Docker", "Hardware Diagnostics", "Networking"],
  },
  {
    company: "University of Warsaw / Warner Bros. Discovery",
    role: "Linux Systems Support & IT Projects",
    period: "09/2025 - 11/2025",
    description:
      "University of Warsaw \u2013 Provided technical support in a Linux-dominant academic environment (Ubuntu, Debian), including hardware and system diagnostics for researchers and engineers. Warner Bros. Discovery \u2013 Delivered ad-hoc IT support, including infrastructure assistance and hardware inventory management.",
    technologies: ["Linux", "Ubuntu", "Debian", "Hardware Diagnostics"],
  },
  {
    company: "Xperi Inc.",
    role: "IT Support Engineer",
    period: "09/2024 - 05/2025",
    description:
      "The only IT support engineer for the Warsaw office (~200 employees), responsible for all on-site IT support and maintenance of video conferencing systems. Handled 20+ daily technical requests via ServiceNow, with a strong focus on direct end-user support. Managed laptop fleet (Windows, macOS, Linux) using Intune and Jamf Pro; administered accounts and access in Okta, Active Directory, and AWS environments. Led end-to-end lifecycle management of IT equipment. Provided high-priority VIP support for senior leadership on-site.",
    technologies: ["Intune", "Jamf Pro", "Okta", "Active Directory", "ServiceNow", "AWS"],
  },
  {
    company: "Euvic IT / KPMG / LUX MED / Coty",
    role: "Short-term IT Projects & Support",
    period: "02/2023 - 09/2024",
    description:
      "Euvic IT \u2013 Prepared and configured 100+ Windows workstations for corporate users. KPMG \u2013 Diagnosed hardware issues, handled ITSM tickets, administered user accounts in Active Directory, and provided VIP support for senior management. LUX MED \u2013 Delivered remote IT support, handled ticketing systems, and configured applications. Coty Inc. \u2013 Provided global IT support in English and managed user accounts.",
    technologies: ["Active Directory", "ITSM", "Windows", "VIP Support"],
  },
  {
    company: "ASUS Poland Sp. z o.o.",
    role: "Technical Customer Service Specialist",
    period: "10/2021 - 01/2023",
    description:
      "Handling customer calls and providing prompt assistance in resolving issues. Providing technical support to customers, sharing information about new features and solutions. Actively participate in technical forums, providing assistance to users and building a support community. Monitor trends and analyze customer requests to identify recurring issues.",
    technologies: ["Customer Support", "Hardware", "Technical Forums", "Troubleshooting"],
  },
];
