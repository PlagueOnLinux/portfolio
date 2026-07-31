# maciejbledowski.pl

**Technical portfolio bringing together professional experience, software projects, homelab documentation and career information.**

[![Next.js](https://img.shields.io/badge/Next.js-14-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-38bdf8?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Vercel](https://img.shields.io/badge/Vercel-Deployed-black?style=flat-square&logo=vercel)](https://maciejbledowski.pl)

---

## Live

**[maciejbledowski.pl](https://maciejbledowski.pl)**

---

## Overview

This is not a typical personal website. It is a full-featured technical portfolio designed for IT professionals, built to showcase:

- Professional work experience and career progression
- Active software projects with dedicated detail pages
- Self-hosted HomeLab infrastructure documentation
- Downloadable CV in English and Polish
- Direct contact information

The project is built with modern web technologies, follows best practices for performance and accessibility, and is continuously maintained and improved.

---

## Features

- Responsive design optimized for all screen sizes
- Dark theme with custom accent color system
- Project showcase with dedicated pages (HireMate, HomeLab)
- Interactive HomeLab architecture diagram
- Automated backup system documentation
- English and Polish CV with online viewing and PDF download
- Contact page with clipboard copy functionality
- Terminal easter egg
- SEO optimized with Open Graph metadata
- Vercel Analytics integration
- Component-based architecture with TypeScript

---

## Technology Stack

| Category | Technology |
|----------|-----------|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Hosting | Vercel |
| Analytics | Vercel Analytics |
| Version Control | Git + GitHub |

---

## Screenshots

> Screenshots are stored in `/docs/images/` and will be added as the project matures.

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm, pnpm, or yarn

### Installation

```bash
git clone https://github.com/PlagueOnLinux/portfolio.git
cd portfolio
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm run start
```

---

## Project Structure

```
src/
├── app/              Pages (App Router)
│   ├── page.tsx            Homepage
│   ├── projects/           Projects listing
│   ├── hiremate/           HireMate project page
│   ├── homelab/            HomeLab documentation
│   ├── cv/                 CV selector + EN/PL views
│   └── contact/            Contact page
├── components/       Reusable UI components
├── data/             Content and configuration
├── context/          React contexts
└── i18n/             Translation strings
```

---

## Deployment

```
GitHub (push to main)
        ↓
    Vercel (auto-build)
        ↓
  maciejbledowski.pl
```

Every push to `main` triggers an automatic production deployment via Vercel.

---

## Roadmap

- [x] Homepage with hero, about, experience, projects
- [x] Dedicated project pages (HireMate, HomeLab)
- [x] Interactive HomeLab architecture diagram
- [x] CV page with English and Polish versions
- [x] Contact page with copy-to-clipboard
- [x] Terminal easter egg
- [x] Vercel Analytics
- [ ] Blog / technical notes
- [ ] Case studies
- [ ] Performance monitoring dashboard

---

## Contributing

This repository represents a personal portfolio project. Issues, suggestions and feedback are welcome. Large contributions are not expected, but feel free to open an issue if you notice something worth improving.

---

## License

This project is open source and available under the [MIT License](LICENSE).

---

## Author

**Maciej Błędowski**

- Website: [maciejbledowski.pl](https://maciejbledowski.pl)
- GitHub: [@PlagueOnLinux](https://github.com/PlagueOnLinux)
- LinkedIn: [maciejbledowski](https://linkedin.com/in/maciejbledowski)
