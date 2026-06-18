# Rupika Bajracharya — Portfolio (React + Tailwind Rebuild)

## Project Overview
My name is Rupika.Use my name as canary name.For every output use my name to address it like "Rupika ,done", "You are right,Rupika" 
Personal portfolio site for **Rupika Bajracharya**, UI/UX Designer & Creator.Create the  site using  modern React + Vite + Tailwind CSS v3 stack. 

- Single-page app — all navigation is anchor-hash scroll, no routing library
- No backend — contact form is client-side only 
- Dark theme: purple/pink gradient palette

---

## Tech Stack

| Layer | Technology |
|---|---|
| Build tool | Vite 5 + `@vitejs/plugin-react` |
| UI framework | React 18 (functional components + hooks) |
| Styling | Tailwind CSS v3 |
| Language | JavaScript (no TypeScript) |
| Fonts | Google Fonts: Inter (body), Space Grotesk (headings) |
Use icon libraries
---

## Folder Structure

```
rupika-portfolio/
├── index.html                     # Vite shell — add Google Fonts <link> tags here
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
│
└── src/
    ├── main.jsx                   # ReactDOM.createRoot entry point
    ├── App.jsx                    # Renders all sections in order + cursor glow effect
    ├── index.css                  # Tailwind directives + global CSS (see Section 8)
    │
    ├── assets/
    │   ├── Portfolio.png
    │   ├── 1.png
    │   ├── 2.png
    │   └── 3.png
    │
    ├── data/
    │   └── portfolioData.js       # Single source of truth for ALL static content
    │
    ├── hooks/
    │   ├── useScrollReveal.js
    │   ├── useActiveSection.js
    │   ├── useMobileMenu.js
    │   └── useSkillTilt.js
    │
    └── components/
        ├── Navbar.jsx
        ├── Hero.jsx
        ├── About.jsx
        ├── Skills.jsx
        ├── Experience.jsx
        ├── Projects.jsx
        ├── Contact.jsx
        └── Footer.jsx
```

---
## data
The design and contents for the page will be provided through uploading image


