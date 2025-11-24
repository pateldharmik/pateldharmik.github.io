# Dharmikbhai Patel - Portfolio Website

A modern, responsive portfolio website built with React and Vite, showcasing my experience as a Java Full Stack Developer.

🌐 **Live Site:** [https://pateldharmik.github.io/](https://pateldharmik.github.io/)

## Features

- 🎨 **Dual Theme** - Dark and Light mode with smooth transitions
- ✨ **Interactive Animations** - Framer Motion powered animations
- 🎯 **Mouse Tracking Orb** - Dynamic gradient effect following cursor
- 📱 **Fully Responsive** - Mobile-first design
- 🚀 **Fast Performance** - Optimized with Vite
- 📄 **Resume Download** - Direct PDF download functionality

## Tech Stack

- **Framework:** React 19.2.0
- **Build Tool:** Vite 7.2.4
- **Animations:** Framer Motion 12.23.24
- **Icons:** React Icons 5.5.0
- **Deployment:** GitHub Pages

## Development Workflow

> **⚠️ IMPORTANT:** Always work in the `dev` branch. Never make changes directly in `master`.

### Local Development

```bash
# Ensure you're on dev branch
git checkout dev

# Install dependencies
npm install

# Start dev server
npm run dev
```

Visit `http://localhost:5173/` to view your changes.

### Deployment to Production

```bash
# Build and test locally first
npm run build

# Switch to master and merge dev
git checkout master
git merge dev

# Push to GitHub (triggers automatic deployment)
git push origin master

# Return to dev branch
git checkout dev
```

For detailed workflow instructions, see [.agent/workflows/development-workflow.md](.agent/workflows/development-workflow.md)

## Project Structure

```
├── src/
│   ├── components/      # React components
│   ├── data/           # Resume data (JSON)
│   ├── App.jsx         # Main app component
│   └── index.css       # Global styles
├── public/
│   └── resume.pdf      # Downloadable resume
└── .github/
    └── workflows/      # GitHub Actions deployment
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

## Deployment

This site automatically deploys to GitHub Pages when changes are pushed to the `master` branch. The deployment workflow:

1. Builds the project with Vite
2. Uploads the `dist` folder
3. Deploys to GitHub Pages

Monitor deployments at: [GitHub Actions](https://github.com/pateldharmik/pateldharmik.github.io/actions)

## License

© 2025 Dharmikbhai Patel. All rights reserved.
