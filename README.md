# ⚡ Sulaman Shahzad — Developer Portfolio

[![React 19](https://img.shields.io/badge/React-19.2.7-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-8.1.1-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS v4](https://img.shields.io/badge/Tailwind_CSS-4.3.2-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](LICENSE)

A high-performance, responsive personal developer portfolio website designed for **Sulaman Shahzad**, Software Engineer. Built with modern web technologies including **React 19**, **Vite 8**, and **Tailwind CSS v4**, this portfolio features a dual-column layout with synchronized desktop scrolling, a dynamic theme, smooth section navigation, interactive project showcases, and an automated contact form.

---

## 🌟 Key Features

- **📱 Dual-Column Synchronized Layout**: Fixed left profile card with smooth scroll-synchronization (`requestAnimationFrame`) for desktop viewports, seamlessly shifting to a single-column layout on mobile devices.
- **🧭 Glassmorphic Floating Top Bar**: Floating navigation bar featuring interactive micro-animations, tooltips, and smooth intra-page scrolling (`#home`, `#projects`, `#certifications`, `#tools`, `#thoughts`).
- **📊 Real-time Stats & Metrics**: Dynamic display highlighting projects completed, industry certifications earned, and years of continuous learning.
- **💼 Interactive Project Showcase**: Detailed project cards featuring live site links, preview imagery, and descriptions for featured applications like *FairGig* and *SPYLT*.
- **📜 Verified Certifications**: Showcase of technical credentials (HackerRank SQL Advance, JavaScript Intermediate, React Basic) with direct verification links.
- **🛠️ Tools & Tech Stack Display**: Grid representation of core skills across Frontend, Backend, Databases, and DevOps platforms.
- **✉️ Automated Contact System**: Interactive contact form powered by client-side validation and [FormSubmit API](https://formsubmit.co/) with an automatic `mailto:` client fallback.

---

## 🛠️ Tech Stack & Technologies

| Category | Technology | Description |
| :--- | :--- | :--- |
| **Frontend Framework** | [React 19](https://react.dev/) | UI component library with concurrent rendering features |
| **Build Tool & HMR** | [Vite 8](https://vitejs.dev/) | Next-generation fast frontend tooling & module bundler |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) | Utility-first CSS framework with Vite plugin integration |
| **Typography** | [Google Fonts (Poppins)](https://fonts.google.com/specimen/Poppins) | Clean modern sans-serif typeface |
| **Icons** | [React Icons](https://react-icons.github.io/react-icons/) & Custom SVGs | Vector icon sets (FaGithub, FaLinkedin, FaTwitter, FaFire, etc.) |
| **Linting & Quality** | [ESLint 10](https://eslint.org/) | Flat config setup with React hooks and refresh plugins |
| **Deployment Platform**| [Vercel](https://vercel.com/) | Optimized production hosting platform |

---

## 🚀 Featured Projects Highlight

### 1. [FairGig](https://fairgig.vercel.app)
- **Description**: A gig worker platform engineered for earnings logging, screenshot verification, and anomaly detection. Built for **SOFTEC 2026 Hackathon**.
- **Live Demo**: [fairgig.vercel.app](https://fairgig.vercel.app)

### 2. [SPYLT](https://canfusion.vercel.app)
- **Description**: An animated product website featuring scroll-triggered animations and interactive showcase displays for a premium protein milk brand.
- **Live Demo**: [canfusion.vercel.app](https://canfusion.vercel.app)

---

## 📂 Project Architecture & Structure

```
portfolio/
├── public/                 # Static public assets, icons, & downloadable PDF resume
│   ├── Home.svg
│   ├── SPYLT.png
│   ├── SulamanShahzadWebDeveloperResume.pdf
│   ├── fairgig.png
│   ├── port.png
│   └── ...
├── src/
│   ├── assets/             # Internal visual assets
│   ├── components/         # Modular React UI components
│   │   ├── sections/       # Individual page section components
│   │   │   ├── CertificationsSection.jsx
│   │   │   ├── HeroSection.jsx
│   │   │   ├── ProjectsSection.jsx
│   │   │   ├── SkillsSection.jsx
│   │   │   ├── StatsSection.jsx
│   │   │   ├── ToolsTechSection.jsx
│   │   │   └── WorkTogetherSection.jsx
│   │   ├── Layout.jsx      # Dual-column container with scroll-sync engine
│   │   ├── LeftPanel.jsx   # Profile sidebar with bio & social links
│   │   ├── Navbar.jsx      # Glassmorphic top navigation header
│   │   └── RightContent.jsx# Section compositor wrapper
│   ├── App.jsx             # Main application component
│   ├── index.css           # Tailwind v4 import & custom utilities
│   └── main.jsx            # Application root entry point
├── eslint.config.js        # ESLint 10 flat configuration
├── index.html              # Entry HTML template with Google Fonts
├── package.json            # Dependencies, scripts, and package metadata
└── vite.config.js          # Vite configuration with React & Tailwind plugins
```

---

## 💻 Getting Started

### Prerequisites

Ensure you have the following installed on your local development machine:
- **Node.js**: `v18.0.0` or higher
- **npm**: `v9.0.0` or higher (or `pnpm` / `yarn`)

### 📦 Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/sulaman492/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

---

## 🏃 Available Scripts

In the project directory, you can run:

| Command | Description |
| :--- | :--- |
| `npm run dev` | Starts the local Vite development server with HMR at `http://localhost:5173` |
| `npm run build` | Bundles and optimizes the app for production in the `dist` folder |
| `npm run preview` | Locally previews the production build output |
| `npm run lint` | Executes ESLint to check for code quality and syntax errors |

---

## 📬 Contact & Socials

- **Developer**: Sulaman Shahzad
- **Email**: [sulamanshahzad492@gmail.com](mailto:sulamanshahzad492@gmail.com)
- **GitHub**: [@sulaman492](https://github.com/sulaman492)
- **LinkedIn**: [Sulaman Shahzad](https://www.linkedin.com/in/sulaman-shahzad-149820324/)
- **Resume**: Downloadable PDF included in project ([Resume](file:///public/SulamanShahzadWebDeveloperResume.pdf))

---

*Made with ❤️ by Sulaman Shahzad*
