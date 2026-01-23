# Frontend Developer Portfolio

A stunning, modern portfolio website built with React and Framer Motion, featuring premium animations, glassmorphism effects, and a beautiful dark theme.

![Portfolio Preview](https://img.shields.io/badge/React-18.3-61DAFB?style=for-the-badge&logo=react)
![Vite](https://img.shields.io/badge/Vite-7.3-646CFF?style=for-the-badge&logo=vite)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-Latest-FF0055?style=for-the-badge)

## ✨ Features

- 🎨 **Premium Dark Theme** - Vibrant purple/blue gradients with glassmorphism effects
- 🎬 **Smooth Animations** - Scroll-triggered animations using Framer Motion
- 📱 **Fully Responsive** - Optimized for all devices (mobile, tablet, desktop)
- ⚡ **Fast Performance** - Built with Vite for lightning-fast development and builds
- 🎯 **SEO Optimized** - Comprehensive meta tags for search engines and social sharing
- 🔥 **Modern Stack** - React 18, Framer Motion, React Icons

## 🚀 Quick Start

### Prerequisites

- Node.js 16+ and npm

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd Test-Project
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit:
```
http://localhost:5174/
```

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Navigation.jsx   # Fixed navigation with smooth scroll
│   ├── Hero.jsx         # Hero section with gradient orbs
│   ├── About.jsx        # About section with timeline
│   ├── Skills.jsx       # Skills with animated progress bars
│   ├── Projects.jsx     # Project showcase cards
│   └── Contact.jsx      # Contact form and info
├── hooks/              # Custom React hooks
│   └── useScrollAnimation.js
├── utils/              # Utility functions
│   └── animations.js   # Framer Motion variants
├── App.jsx            # Main app component
└── index.css          # Global styles & design system
```

## 🎨 Customization

### Update Your Information

1. **Personal Details** - Edit `src/components/Hero.jsx` and `src/components/Contact.jsx`
2. **Experience** - Update timeline in `src/components/About.jsx`
3. **Skills** - Modify skill categories in `src/components/Skills.jsx`
4. **Projects** - Add your projects in `src/components/Projects.jsx`

### Change Colors

Edit CSS variables in `src/index.css`:

```css
:root {
  --gradient-primary: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  --gradient-accent: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
  /* ... customize more colors */
}
```

## 🛠️ Built With

- [React](https://react.dev/) - UI library
- [Vite](https://vitejs.dev/) - Build tool
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [React Icons](https://react-icons.github.io/react-icons/) - Icon library

## 📦 Build for Production

```bash
npm run build
```

The optimized build will be in the `dist/` folder.

## 🌐 Deployment

Deploy to your favorite platform:

- **Vercel**: `vercel deploy`
- **Netlify**: Connect your GitHub repo
- **GitHub Pages**: Use `gh-pages` package

## 📝 Sections

1. **Hero** - Eye-catching introduction with animated gradient background
2. **About** - Professional summary with 3+ years experience timeline
3. **Skills** - Technology proficiency with animated progress bars
4. **Projects** - Showcase of featured work with live demos
5. **Contact** - Get in touch form and social links

## 🎯 Performance

- ⚡ Optimized animations (60fps)
- 🚀 Fast load times with Vite
- 📱 Mobile-first responsive design
- ♿ Accessible components

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 👤 Author

**Frontend Developer**
- Portfolio: [Your Portfolio URL]
- GitHub: [@yourusername](https://github.com/yourusername)
- LinkedIn: [Your LinkedIn](https://linkedin.com/in/yourprofile)

---

⭐ Star this repo if you found it helpful!
