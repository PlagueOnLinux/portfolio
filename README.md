# maciejbledowski.pl

**Technical portfolio bringing together professional experience, software projects, homelab documentation and career information.**

[![Next.js](https://img.shields.io/badge/Next.js-14-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-38bdf8?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Vercel](https://img.shields.io/badge/Vercel-Deployed-black?style=flat-square&logo=vercel)](https://maciejbledowski.pl)

**[maciejbledowski.pl](https://maciejbledowski.pl)**

---

## Overview

A full-featured technical portfolio designed for IT professionals. More than a personal website — it serves as a central hub for showcasing active projects, documenting self-hosted infrastructure, and presenting professional experience in a format that goes beyond a traditional CV.

---

## Features

- Responsive design with dark theme
- Dedicated project pages (HireMate, HomeLab)
- Interactive HomeLab architecture diagram
- English and Polish CV with online view and PDF download
- SEO optimized with Open Graph metadata
- Modern component-based architecture with TypeScript

---

## Technology Stack

| Category | Technology |
|----------|-----------|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Hosting | Vercel |
| Analytics | Vercel Analytics |

---

## Getting Started

```bash
git clone https://github.com/PlagueOnLinux/portfolio.git
cd portfolio
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

Production build:

```bash
npm run build
npm run start
```

---

## Project Structure

```
src/
├── app/              Pages (App Router)
│   ├── hiremate/           HireMate project page
│   ├── homelab/            HomeLab documentation
│   ├── cv/                 CV selector + EN/PL views
│   ├── projects/           Projects listing
│   └── contact/            Contact page
├── components/       Reusable UI components
├── data/             Content and configuration
└── context/          React contexts
```

---

## Deployment

```mermaid
graph LR
    A[GitHub] --> B[Vercel]
    B --> C[maciejbledowski.pl]
```

Every push to `main` triggers an automatic production deployment.

---

## Roadmap

- [x] Homepage with professional hero section
- [x] Dedicated project pages
- [x] Interactive HomeLab architecture diagram
- [x] CV page with language selection
- [x] Contact page with clipboard integration
- [ ] Blog / technical notes
- [ ] Case studies

---

## License

[MIT](LICENSE)

---

## Author

**Maciej Błędowski** — IT Support Engineer

[Website](https://maciejbledowski.pl) · [LinkedIn](https://linkedin.com/in/maciejbledowski) · [GitHub](https://github.com/PlagueOnLinux) · [Email](mailto:bledowskimaciej@gmail.com)
