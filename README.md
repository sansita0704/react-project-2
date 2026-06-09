# Elementum Landing Page

Elementum is a responsive React landing page for a creative agency-style brand. The page combines animated sections, custom typography, image-based decorations, and smooth anchor navigation.

## Features

- Responsive single-page layout built with React and Vite
- Animated hero, feature, service, testimonial, and footer sections
- Framer Motion entrance, hover, and scrolling animations
- Tailwind CSS utility styling
- Custom Gerbil font loaded from `public/fonts/gerbil.otf`
- Satoshi font loaded through `src/index.css`
- Static visual assets stored in `public/avatars`
- Online/offline status indicator in the header
- Smooth scrolling between page sections

## Tech Stack

- React
- Vite
- Tailwind CSS
- Framer Motion
- Heroicons
- ESLint

## Getting Started

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Build the production version:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

Run linting:

```bash
npm run lint
```

## Project Structure

```text
react-project-2/
├── public/
│   ├── avatars/        # Images and decorative assets used by the page
│   ├── fonts/          # Local custom font files
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── Features.jsx
│   │   ├── Services.jsx
│   │   ├── Testimonials.jsx
│   │   ├── Footer.jsx
│   │   └── ScrollToTop.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── Dockerfile
├── package.json
├── tailwind.config.js
└── vite.config.js
```

## Main Sections

- `Header.jsx`: Navigation, mobile menu, and online/offline status.
- `Hero.jsx`: Main headline, intro copy, and animated avatar image layout.
- `Features.jsx`: Studio/content blocks with image-led feature sections.
- `Services.jsx`: Service offering rows with animated interactions.
- `Testimonials.jsx`: Customer testimonial section.
- `Footer.jsx`: Newsletter call-to-action, footer navigation, office details, and contact link.
- `ScrollToTop.jsx`: Floating scroll-to-top behavior.

##

> Made with ❤️ by [Sansita Jain](mailto:sansita7406@gmail.com)
