# AI Coding Agent Instructions

This workspace contains a **monorepo** with an Express backend and a React Vite frontend portfolio.

## Project Structure

```
Backend/                          # Root workspace
├── server.js                     # Express server (port 3000)
├── package.json                  # Backend dependencies: Express
└── Samavia-s-portfolio/          # Frontend - React portfolio
    ├── src/
    │   ├── App.jsx               # Single-page portfolio component
    │   ├── main.jsx              # React root entry
    │   ├── index.css             # Global styles
    │   └── App.css               # Component styles
    ├── public/                    # Static assets
    ├── package.json              # Frontend: Vite, React 19, ESLint
    ├── vite.config.js            # Vite config with React plugin
    ├── eslint.config.js          # ESLint rules for React/Hooks
    └── index.html                # HTML entry point
```

## What It Does

- **Frontend**: A beautiful, dark-themed portfolio website for freelancer Samavia Siddiqui
  - Sections: About (hero), Skills, Projects, Services, Contact
  - Custom animations, typewriter effect, scroll-triggered reveals
  - Contact form with success confirmation
  - Responsive design with mobile menu
  - Social links: GitHub, LinkedIn, Email

- **Backend**: Currently a minimal Express stub (incomplete)
  - Listens on port 3000
  - Needs: email endpoint, API routes, database integration

## Development Commands

### Frontend
```bash
cd Samavia-s-portfolio
npm run dev      # Start Vite dev server (http://localhost:5173)
npm run build    # Production build to dist/
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

### Backend
```bash
# From root or via node server.js
node server.js   # Start Express server
```

## Key Conventions & Patterns

### Frontend
- **No Tailwind**: Uses inline styles and CSS classes for full customization
- **Custom color palette**: Dark background (#080810), violet accents (#7c3aed), gray text (#9ca3af)
- **React hooks only**: useState, useEffect, useRef (no Redux/Context used)
- **Custom animations**: CSS-in-JS via style props + @keyframes in `<style>` tags
- **Reusable components**: `AnimatedSection`, `TypeWriter`, `useInView` (intersection observer)
- **ESLint configured**: Checks React hooks rules, refresh, and JS best practices

### Backend
- **CommonJS format** (type: "commonjs" in package.json)
- **Express only** - minimal dependencies

## Common Tasks

### Add a new project to the portfolio
Edit `Samavia-s-portfolio/src/App.jsx`, add to `PROJECTS` array with: title, desc, tags, github, emoji, featured flag.

### Add a new skill category
Edit `Samavia-s-portfolio/src/App.jsx`, add to `SKILLS` array with: category, items list.

### Update contact email
Search `samaviasiddiqui3@gmail.com` in App.jsx and replace.

### Complete the backend
Create API endpoints for:
1. Contact form email handler (currently form.onSubmit just shows success UI)
2. Project data API (currently hardcoded in frontend)
3. Skill data API (currently hardcoded in frontend)

## Important Notes

- **Frontend is production-ready** with smooth animations and full functionality
- **Backend is incomplete**: Extend server.js with CORS, body parser, email service, and routes
- **No database configured** yet
- **No environment variables** set up - will need for API keys (email service, etc.)
- **Mobile responsive** - uses clamp() and flexbox for all layouts
- **TypeScript not used** - uses vanilla JS with JSDoc comments

## Next Steps for Development

1. **Backend expansion**:
   - Set up CORS for frontend-backend communication
   - Add email handler using nodemailer or SendGrid
   - Create REST API for dynamic content
   - Add environment variable support (.env)

2. **Frontend enhancements**:
   - Integrate contact form with backend endpoint
   - Fetch projects/skills from API instead of hardcoding
   - Add form validation and error handling
   - Dark/light mode toggle (optional)

3. **Deployment**:
   - Frontend: Vercel or Netlify (build: `npm run build`)
   - Backend: Heroku, Railway, or self-hosted
   - Set up environment variables on deployment platform

## Useful Links

- [Vite docs](https://vitejs.dev/)
- [React 19 docs](https://react.dev/)
- [Express docs](https://expressjs.com/)
- [ESLint config](Samavia-s-portfolio/eslint.config.js)
