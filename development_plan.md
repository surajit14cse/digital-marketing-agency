# Digital Marketing Agency Website Development Plan

## 1. Project Overview
**Goal:** Build a high-performance, visually stunning website for "TrustMart Digital Agency" (or generic placeholder) using a modern React stack.
**Tech Stack:**
- **Core:** React.js (Latest, Functional Components + Hooks)
- **Styling:** Bootstrap 5 (via `bootstrap` npm package)
- **Preprocessor:** SCSS/SASS (for custom theming and Bootstrap overrides)
- **Routing:** React Router DOM (v6+)
- **Icons:** Bootstrap Icons or React Icons

## 2. Phase 1: Environment Setup
- [ ] Initialize project using Vite (preferred for speed) or CRA.
    - `npm create vite@latest marketing-agency -- --template react`
- [ ] Install dependencies:
    - `npm install bootstrap sass react-router-dom react-bootstrap` (optional: react-bootstrap for components, or raw bootstrap JS)
    - `npm install bootstrap-icons`
- [ ] Configure SCSS:
    - Create `src/styles/main.scss`.
    - Import Bootstrap source files to allow variable overrides.
    - Setup global variables (Brand Colors, Typography).

## 3. Phase 2: Architecture & Global Components
- [ ] **Folder Structure:**
    ```text
    src/
    ├── assets/       # Images, fonts
    ├── components/   # Reusable UI parts (Navbar, Footer, Buttons)
    ├── pages/        # Route components (Home, Services, Contact)
    ├── styles/       # SCSS partials
    ├── data/         # JSON/JS files for mock data (Services, Testimonials)
    └── App.jsx
    ```
- [ ] **Global Layout:**
    - Create `Layout.jsx` wrapper component.
    - Implement `Navigation` (Responsive Bootstrap Navbar).
    - Implement `Footer` (Links, Newsletter, Socials).
- [ ] **Routing:**
    - Configure `BrowserRouter` and routes in `App.jsx`.

## 4. Phase 3: Page Implementation
- [ ] **Home Page:**
    - Hero Section (High impact visual + CTA).
    - Features/USP Section.
    - Mini Portfolio/Case Studies Preview.
    - Testimonials Slider.
- [ ] **Services Page:**
    - Grid layout using Bootstrap columns.
    - Cards for each service (SEO, PPC, Content, etc.).
- [ ] **Case Studies / Portfolio:**
    - Gallery view (Filterable tags: "Social", "Web", "SEO").
    - Individual Case Study detail view (optional modal or separate route).
- [ ] **About Us / Team:**
    - Agency Story.
    - Team Member cards.
- [ ] **Contact Page:**
    - Contact Form (controlled components).
    - Google Maps embed (or placeholder).
    - Contact Info (Address, Phone, Email).

## 5. Phase 4: Styling & Theming (SASS)
- [ ] **Bootstrap Customization:**
    - Override `$primary`, `$secondary`, `$font-family-base` in `_variables.scss`.
    - Enable specific Bootstrap behaviors (e.g., negative margins, responsive font sizes) if needed.
- [ ] **Custom CSS:**
    - Animations (fade-ins, hover effects).
    - Glassmorphism or specific design trends for a "Modern Agency" look.

## 6. Phase 5: Content & Polishing
- [ ] **Data Management:**
    - Create `services.js`, `team.js`, `testimonials.js` to manage content centrally (simulating a CMS).
- [ ] **Responsiveness Check:**
    - Verify mobile, tablet, and desktop views.
- [ ] **Assets:**
    - Source high-quality placeholder images (Unsplash/Pexels).

## 7. Phase 6: Final Review
- [ ] Linting and Code Cleanup.
- [ ] Build test (`npm run build`).
