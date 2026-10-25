export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string[];
  technologies: string[];
}

export const experiences: Experience[] = [
  {
    company: "Boston Scientific",
    role: "IT Support Specialist",
    period: "12/2025 - Present",
    description: [
      "Provide independent on-site IT support for approximately 400 users in the Warsaw office, handling direct user requests, escalations from first-line support and VIP support.",
      "Diagnose and resolve Windows 10/11, macOS, Microsoft 365, hardware, software, endpoint and network-related issues.",
      "Install, configure and support laptops, desktops, multifunction printers, corporate mobile devices, conference room equipment and other IT peripherals.",
      "Manage Windows endpoints through Microsoft Intune, including device enrollment, configuration policies, application deployment, synchronization and remote device management.",
      "Manage incidents and service requests in ServiceNow in accordance with SLA requirements.",
      "Manage the IT hardware lifecycle, including device provisioning for new hires, hardware replacements, equipment returns and asset assignment to users and cost centers.",
      "Conduct IT asset inventory and maintain accurate hardware records, verifying equipment assignments across users and departments.",
      "Develop and implement IT procedures for employee onboarding, hardware replacement, asset tracking and process standardization.",
      "Coordinate corporate mobile device provisioning, including phone and SIM card requests, device issuance and end-user troubleshooting.",
      "Collaborate with global IT teams to resolve technical issues and support day-to-day IT operations.",
    ],
    technologies: ["Microsoft Intune", "ServiceNow", "Microsoft 365", "Windows", "macOS", "VIP Support"],
  },
  {
    company: "University of Warsaw / Warner Bros. Discovery",
    role: "Linux Systems Support & IT Projects (Freelance)",
    period: "09/2025 - 11/2025",
    description: [
      "University of Warsaw \u2013 Provided technical support in a Linux-dominant academic environment (Ubuntu, Debian), including hardware and system diagnostics for researchers and engineers.",
      "Warner Bros. Discovery \u2013 Delivered ad-hoc IT support, including infrastructure assistance and hardware inventory management.",
    ],
    technologies: ["Linux", "Ubuntu", "Debian", "Hardware Diagnostics"],
  },
  {
    company: "Xperi Inc.",
    role: "IT Support Engineer",
    period: "09/2024 - 05/2025",
    description: [
      "The only IT support engineer for the Warsaw office (~200 employees), responsible for all on-site IT support and maintenance of video conferencing systems.",
      "Handled 20+ daily technical requests via ServiceNow, with a strong focus on direct end-user support.",
      "Managed laptop fleet (Windows, macOS, Linux) using Intune and Jamf Pro; administered accounts and access in Okta, Active Directory, and AWS environments.",
      "Led end-to-end lifecycle management of IT equipment (provisioning, deployment, inventory) for employees.",
      "Provided high-priority VIP support for senior leadership on-site.",
    ],
    technologies: ["Intune", "Jamf Pro", "Okta", "Active Directory", "ServiceNow", "AWS"],
  },
  {
    company: "KPMG / Euvic IT / LUX MED / Coty",
    role: "Short-term IT Projects & Support (Freelance)",
    period: "02/2023 - 09/2024",
    description: [
      "Euvic IT \u2013 Prepared and configured 100+ Windows workstations for corporate users.",
      "KPMG (Poland) \u2013 Diagnosed hardware issues, handled ITSM tickets, administered user accounts in Active Directory, and provided VIP support for senior management.",
      "LUX MED (Poland) \u2013 Delivered remote IT support, handled ticketing systems, and configured applications.",
      "Coty Inc. \u2013 Provided global IT support in English and managed user accounts.",
      "Freelance Projects \u2013 Hardware diagnostics, printer repair, and home network configuration.",
    ],
    technologies: ["Active Directory", "ITSM", "Windows", "VIP Support", "Networking"],
  },
  {
    company: "ASUS",
    role: "Technical Customer Service Specialist",
    period: "10/2021 - 01/2023",
    description: [
      "Answered customer calls professionally and quickly, providing immediate assistance and answers to technical questions.",
      "Provided comprehensive technical support, including diagnosing problems, proposing solutions and giving instructions for ASUS products.",
      "Monitored and managed the official ASUS technical forum \u2013 answering user questions and posting helpful guides and articles.",
      "Efficiently redirected customer requests to the appropriate teams or specialists to ensure issues were resolved quickly.",
      "Recorded all customer tickets in the ticket management system, ensuring accurate documentation and status tracking.",
      "Diagnosed and troubleshot ASUS products such as laptops, desktops, monitors and other devices.",
      "Performed regular software updates and hardware maintenance to ensure optimal device performance.",
      "Conducted online training and created educational materials to increase customers' knowledge of ASUS products.",
      "Coordinated the complaints process, ensuring procedural requirements were met and customer satisfaction was maintained.",
      "Worked closely with other support teams to identify and resolve complex issues and implement new solutions and improvements.",
    ],
    technologies: ["Customer Support", "Hardware", "Technical Forums", "Troubleshooting", "Ticketing"],
  },
  {
    company: "NTT System S.A.",
    role: "Intern in the Production Department",
    period: "05/2017 - 09/2017",
    description: [
      "Professionally installed and configured computers and peripherals, ensuring optimal operation and compliance with technical specifications.",
      "Created and maintained ergonomic, effective workstations to ensure user comfort and productivity.",
      "Installed, configured and updated operating systems on new and existing devices for smooth operation.",
      "Identified and repaired hardware and software problems, minimizing downtime and ensuring user continuity.",
      "Installed and configured applications in line with corporate standards for optimal performance.",
      "Monitored hardware and software performance regularly, performing updates and optimizations to improve efficiency.",
    ],
    technologies: ["Hardware", "OS Installation", "Troubleshooting", "PC Assembly"],
  },
];
