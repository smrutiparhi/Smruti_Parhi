# 🚀 Smruti Ranjan Parhi — Portfolio Website

A modern, responsive professional portfolio website built with **React + Vite**. Features a stunning dark/light mode, smooth animations, interactive project showcase, and a functional contact form.

![React](https://img.shields.io/badge/React-18-61DAFB?style=flat-square&logo=react)
![Vite](https://img.shields.io/badge/Vite-5-646CFF?style=flat-square&logo=vite)
![CSS](https://img.shields.io/badge/CSS-Custom_Properties-1572B6?style=flat-square&logo=css3)
![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)

## ✨ Features

- **🌓 Dark/Light Mode** — Toggle between themes with smooth CSS transitions and localStorage persistence
- **⌨️ Typing Animation** — Dynamic role cycling in the hero section
- **🎨 Glassmorphic Design** — Modern glass-effect cards with backdrop blur
- **📱 Fully Responsive** — Looks great on mobile, tablet, and desktop
- **🎭 Smooth Animations** — Powered by Framer Motion with scroll-reveal effects
- **📊 Interactive Skills** — Categorized skill cards with colored technology icons
- **🗂️ Filterable Projects** — Filter projects by category with animated transitions
- **📬 Contact Form** — Ready for EmailJS integration with validation
- **🔍 SEO Optimized** — Meta tags, Open Graph, semantic HTML
- **⬆️ Back to Top** — Floating button appears on scroll
- **📏 Fluid Typography** — `clamp()` based responsive text sizing

## 🛠️ Tech Stack

| Technology | Purpose |
|-----------|---------|
| **React 18** | Component-based UI |
| **Vite** | Lightning-fast build tool |
| **Framer Motion** | Smooth animations & transitions |
| **React Icons** | Comprehensive icon library |
| **EmailJS** | Serverless contact form emails |
| **Vanilla CSS** | Custom properties, glassmorphism, gradients |
| **Google Fonts** | Inter + Space Grotesk typography |

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ installed
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/smrutiranjan/portfolio.git
cd portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

The site will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

Output will be in the `dist/` folder.

## 📁 Project Structure

```
src/
├── main.jsx                    # Entry point
├── App.jsx                     # Root component
├── index.css                   # Design system & global styles
├── data/
│   └── portfolioData.js        # ✏️ All content — edit this file!
├── components/
│   ├── Navbar.jsx/css          # Glassmorphic sticky navbar
│   ├── Hero.jsx/css            # Hero with typing animation
│   ├── About.jsx/css           # About me + stats
│   ├── Skills.jsx/css          # Skills grid with icons
│   ├── Projects.jsx/css        # Filterable project cards
│   ├── Experience.jsx/css      # Timeline (work + education)
│   ├── Contact.jsx/css         # Contact form + info
│   ├── Footer.jsx/css          # Footer + back to top
│   └── ThemeToggle.jsx/css     # Dark/light mode switch
└── hooks/
    └── useScrollAnimation.js   # Scroll-reveal hook
```

## ✏️ Customization

All personal content lives in **one file**: `src/data/portfolioData.js`

Edit this file to update:
- Your name, bio, and tagline
- Skills and technologies
- Projects (title, description, links, tags)
- Work experience and education
- Social links and contact info
- EmailJS configuration

## 📬 Setting Up EmailJS (Contact Form)

1. Create a free account at [EmailJS](https://www.emailjs.com/)
2. Create an email service and template
3. Update `src/data/portfolioData.js`:

```javascript
export const contactConfig = {
  serviceId: "your_service_id",
  templateId: "your_template_id",
  publicKey: "your_public_key",
};
```

4. Uncomment the EmailJS code in `src/components/Contact.jsx`

## 🌐 Deployment

### Netlify
```bash
npm run build
# Deploy the `dist` folder
```

### Vercel
```bash
npx vercel
```

### GitHub Pages
```bash
npm run build
# Push dist/ to gh-pages branch
```

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgements

- Built as part of the **Future Interns** Full Stack Web Development Internship
- Design inspired by modern portfolio trends on Dribbble and Awwwards
- Icons by [React Icons](https://react-icons.github.io/react-icons/)
- Animations by [Framer Motion](https://www.framer.com/motion/)

---

Made with ❤️ by **Smruti Ranjan Parhi**
