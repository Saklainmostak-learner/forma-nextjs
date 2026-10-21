# Forma — Curated Workspace Essentials

Forma is a responsive editorial-style product catalog built for the Remontada Next.js Assessment. Explore curated workspace objects, filter by category and price, authenticate using Firebase, and add or manage your own products.

## Tech stack
- Next.js (App Router), React 19, Tailwind CSS 4
- Firebase Authentication (email/password and Google)
- React Context for authentication state
- LocalStorage for user-created products
- Lucide icons, React Hot Toast

## Features
- Responsive sticky navbar, user dropdown, mobile menu
- Landing page: navbar, hero, featured products, categories, brand story, benefits, footer (four relevant content sections)
- Catalog of eight demo items, searchable by text and filterable by **category** and **price**
- Dynamic item detail pages with specifications and related products
- Login and registration with Firebase, including optional Google sign-in
- Client-side protected add/manage routes, with login redirect
- Create, view and delete your own products, persisted to this browser's localStorage
- Form validation, loading indicators, toast feedback, accessible focus states
- Automatic dark color scheme based on operating-system preference

## Local installation
1. Install Node.js 20.9+.
2. Run `npm install` in this directory.
3. Copy `.env.example` to `.env.local` and add your own Firebase web app config.
4. In Firebase Console, enable **Authentication → Sign-in method → Email/Password**. For Google login, also enable **Google** and configure its settings.
5. In Authentication → Settings → Authorized domains, add your Vercel hostname when deploying. For local development, authorize `localhost` if it is not already present.
6. Start with `npm run dev` and open http://localhost:3000.
7. Run `npm run build` before submission.

**Firebase setup:** https://firebase.google.com/docs/auth/web/start

## Routes
| Route | Access | Purpose |
|---|---|---|
| `/` | Public | Landing page |
| `/items` | Public | Search and filter products |
| `/items/[id]` | Public | Dynamic product details |
| `/about` | Public | About Forma |
| `/login` | Public | Firebase login |
| `/register` | Public | Firebase signup |
| `/items/add` | Logged-in users | Add own product |
| `/items/manage` | Logged-in users | View all products and delete own products |

## Deployment
Deploy to Vercel, add the `NEXT_PUBLIC_FIREBASE_*` variables in project settings, and include the Vercel domain in your Firebase authorized domains.

## Data and security notes
Sample products are defined in `lib/products.js`. New products are saved in localStorage, scoped by Firebase UID for management. They do **not** sync across browsers, and localStorage data can be modified by anyone with browser access. Protected UI routing is **client-side only**, not a substitute for server-side authorization. For production, move items to Firestore, configure security rules, and enforce permissions server-side. Prices and product content are sample catalog data, not real purchase offers. Remote Unsplash images require internet access.

## Submission checklist
- [ ] Firebase environment variables configured
- [ ] Email/password register + login verified
- [ ] Google login verified, if enabled
- [ ] Protected pages redirect after logout
- [ ] Search + category/price filters tested
- [ ] Add/view/delete tested
- [ ] Mobile/tablet/desktop layouts reviewed
- [ ] `npm run build` succeeds
- [ ] Public GitHub repository URL submitted
- [ ] Working Vercel URL submitted

## Suggested meaningful commit checkpoints
1. `chore: initialize Next.js app and design tokens`
2. `feat: create shared navbar and footer`
3. `feat: design landing page sections`
4. `feat: add product data and reusable cards`
5. `feat: implement catalog search and filters`
6. `feat: add dynamic product details`
7. `feat: integrate Firebase authentication`
8. `feat: create login and registration pages`
9. `feat: protect add and manage product routes`
10. `feat: implement local product management`
11. `style: polish mobile responsiveness and dark theme`
12. `docs: finalize setup guide and submission checklist`

Only make commits as milestones are actually finished; do not fabricate a development history.
