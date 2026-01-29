# Bitcoin Association Switzerland

A Next.js website clone of the Bitcoin Association Switzerland website.

## Tech Stack

- **Next.js 15.5.9+** - React framework with App Router
- **React 19.0.3** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS 3.4+** - Utility-first CSS framework
- **Lucide React** - Icon library

## Getting Started

### Prerequisites

- Node.js 18+ installed
- pnpm package manager

### Installation

```bash
# Install dependencies
pnpm install
```

### Development

```bash
# Run development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
# Create production build
pnpm build
```

### Start Production Server

```bash
# Start production server
pnpm start
```

## Project Structure

```
├── app/
│   ├── globals.css       # Global styles and CSS variables
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Home page
├── components/
│   ├── header.tsx        # Navigation header with dropdowns
│   ├── hero.tsx          # Hero section
│   ├── mission.tsx       # Mission statement section
│   ├── feature-cards.tsx # Feature cards section
│   └── footer.tsx        # Footer with social links
├── lib/
│   └── utils.ts          # Utility functions
└── public/               # Static assets
```

## Features

- Responsive design for all screen sizes
- Mobile-friendly navigation with hamburger menu
- Dropdown navigation menus
- Optimized images with Next.js Image component
- Smooth scrolling
- Social media integration (Meetup, YouTube, X)
- Accessible components with proper ARIA labels

## Deployment

This project is configured for Vercel deployment with the following settings:

- **Package Manager**: pnpm@9.15.4
- **Framework**: Next.js
- **Region**: fra1 (Frankfurt)

The site will automatically deploy when pushed to a connected Vercel project.

## Branding

- **Primary Color**: #3D9991 (Teal)
- **Dark Color**: #1F1F1F (Dark Gray)
- **Fonts**: Proxima Nova, Adobe Garamond Pro

## License

This is a clone project for educational purposes.
