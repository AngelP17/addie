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

### Vercel Deployment

This project is deployed on Vercel at `https://addieelizjones.com/`. Pushes to `main` are deployed by the linked Vercel project, and the custom domain is aliased to the latest production deployment.

#### Setup Steps:

1. **Link the Vercel project**
   ```bash
   vercel link
   ```

2. **Push to Main Branch**
   - The Vercel Git integration automatically deploys production from `main`
   - The production deployment should include the `https://addieelizjones.com` alias

3. **Access Your Site**
   - Your site is available at: `https://addieelizjones.com/`

4. **Automatic Healthcheck**
   - `.github/workflows/healthcheck.yml` checks DNS and HTTPS every 15 minutes
   - Run `npm run healthcheck` locally to verify DNS, HTTPS, and the Vercel alias

### Manual Deployment

If you prefer to deploy manually:

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Run the healthcheck**
   ```bash
   npm run healthcheck
   ```

3. **Deploy to Vercel production**
   ```bash
   npm run deploy
   ```

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the root directory for any environment-specific configurations:

```env
VITE_API_URL=your_api_url_here
```

### Custom Domain (Optional)

To use a custom domain:

1. Keep `addieelizjones.com` attached to the Vercel project
2. Keep the domain DNS delegated to Vercel nameservers: `ns1.vercel-dns.com` and `ns2.vercel-dns.com`
3. A browser message like "This site can’t be reached" / `DNS_PROBE_FINISHED_NXDOMAIN` usually means local DNS or router DNS is failing
4. Verify public DNS with `dig @1.1.1.1 addieelizjones.com A +short`
5. Verify the live site with `npm run healthcheck`

## 📁 Project Structure

```
addie/
├── .github/
│   └── workflows/
│       ├── deploy.yml      # GitHub Pages deployment workflow
│       └── healthcheck.yml # Scheduled live-site healthcheck
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
