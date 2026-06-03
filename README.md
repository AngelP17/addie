# Addie Elizabeth Jones - Portfolio

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. Features a beautiful design with dark/light theme support and smooth animations.

## 🚀 Live Demo

Visit the live portfolio: https://addieelizjones.com/

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Build Tool**: Vite
- **Deployment**: GitHub Pages
- **CI/CD**: GitHub Actions

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (version 18 or higher)
- npm or yarn

## 🚀 Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/AngelP17/addie.git
   cd addie
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

## 🌐 Deployment Setup

### GitHub Pages Deployment

This project uses GitHub Actions for automated deployment to GitHub Pages. The workflow is configured in `.github/workflows/deploy.yml`.

#### Setup Steps:

1. **Enable GitHub Pages**
   - Go to your repository settings
   - Navigate to "Pages" in the sidebar
   - Under "Source", select "GitHub Actions"

2. **Push to Main Branch**
   - The workflow automatically triggers on pushes to the `main` branch
   - It will build, test, and deploy your site

3. **Access Your Site**
   - Your site will be available at: `https://addieelizjones.com/` after the GitHub Pages deployment completes and DNS is pointed at GitHub Pages

### Manual Deployment

If you prefer to deploy manually:

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Run the deployment checks locally**
   ```bash
   npm run deploy
   ```

3. **Publish**
   Push to the `main` branch or run the **Deploy site** workflow manually from GitHub Actions.

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the root directory for any environment-specific configurations:

```env
VITE_API_URL=your_api_url_here
```

### Custom Domain (Optional)

To use a custom domain:

1. Keep `public/CNAME` set to `addieelizjones.com` so each GitHub Pages deployment preserves the custom domain
2. Configure your DNS settings to point to GitHub Pages
3. In repository settings, verify Pages uses GitHub Actions and the custom domain is set to `addieelizjones.com`

## 📁 Project Structure

```
addie/
├── .github/
│   └── workflows/
│       └── ci.yml          # GitHub Actions workflow
├── public/
│   ├── avatar.jpg          # Profile image
│   ├── favicon.svg         # Site favicon
│   └── resume.pdf          # Resume file
├── src/
│   ├── components/
│   │   ├── sections/       # Page sections
│   │   ├── Layout.tsx      # Main layout component
│   │   └── AppRoutes.tsx   # Routing configuration
│   ├── contexts/           # React contexts
│   ├── hooks/              # Custom hooks
│   ├── i18n/               # Internationalization
│   ├── types/              # TypeScript type definitions
│   ├── utils/              # Utility functions
│   ├── App.tsx             # Main app component
│   ├── main.tsx            # Entry point
│   └── index.css           # Global styles
├── .eslintrc.js            # ESLint configuration
├── package.json            # Dependencies and scripts
├── tailwind.config.js      # Tailwind CSS configuration
├── tsconfig.json           # TypeScript configuration
├── vite.config.ts          # Vite configuration
└── README.md               # This file
```

## 🎨 Customization

### Colors and Themes

The project uses CSS custom properties for theming. You can customize colors in `src/index.css`:

```css
:root {
  --background: #ffffff;
  --foreground: #0f172a;
  --primary: #6366f1;
  --primary-foreground: #ffffff;
  /* Add more custom properties */
}
```

### Content Updates

To update the portfolio content:

1. **Personal Information**: Update `src/components/sections/Hero.tsx`
2. **About Section**: Modify `src/components/sections/About.tsx`
3. **Experience**: Edit `src/components/sections/Experience.tsx`
4. **Projects**: Update `src/components/sections/Portfolio.tsx`
5. **Contact**: Modify `src/components/sections/Contact.tsx`

## 🔍 Troubleshooting

### Common Issues

1. **Build Fails**
   - Check that all dependencies are installed: `npm install`
   - Verify TypeScript compilation: `npm run build`
   - Check for linting errors: `npm run lint`

2. **Deployment Issues**
   - Ensure GitHub Pages is enabled in repository settings
   - Check GitHub Actions logs for error details
   - Verify the `main` branch contains the latest changes

3. **Styling Issues**
   - Clear browser cache
   - Restart the development server
   - Check Tailwind CSS configuration

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Make your changes
4. Commit your changes: `git commit -m 'Add feature'`
5. Push to the branch: `git push origin feature-name`
6. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

- **Email**: addiej@uark.edu
- **LinkedIn**: [Addie Jones](https://www.linkedin.com/in/addie-jones-b5a5b6250)
- **Phone**: (870) 577-0389

---

Built with ❤️ by Addie Elizabeth Jones
