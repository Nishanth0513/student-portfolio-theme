# G. Nishanth Reddy — Portfolio

A modern, premium developer portfolio built with Next.js, React, TypeScript, Tailwind CSS, and Framer Motion.

## Tech Stack

- **Next.js 16** (App Router)
- **React 19**
- **TypeScript**
- **Tailwind CSS v4**
- **Framer Motion**
- **shadcn/ui** (custom components)
- **Lucide Icons**
- **EmailJS** (contact form)
- **next-themes** (dark/light mode)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Configuration

1. Copy `.env.example` to `.env.local` and add your EmailJS credentials.
2. Add your resume as `public/resume.pdf`.
3. Update contact details in `lib/data.ts`.
4. Update `siteConfig.url` in `lib/data.ts` for production SEO.

## Features

- Animated hero with typing effect & coding workspace illustration
- Photo section, glassmorphism cards, tilt project cards
- Education timeline, experience, skills with scroll animations
- Command palette (⌘K / Ctrl+K), theme switcher
- Scroll progress bar, back-to-top, cursor glow, loading screen
- SEO metadata, sitemap, robots.txt, dynamic OG image & favicon
- Fully responsive & accessibility compliant

## Scripts

```bash
npm run dev      # Development server
npm run build    # Production build
npm run start    # Start production server
npm run lint     # ESLint
```

## Deploy

Deploy to [Vercel](https://vercel.com) or any platform supporting Next.js.

```bash
npm run build
```

## License

MIT — Designed & Developed by G. Nishanth Reddy
