# Portfolio Website
![Static Badge](https://img.shields.io/badge/status-completed-success)

## Description
_Welcome to my repository!_
This is my personal portfolio website — a modern single-page application (SPA) created with a love for clean code, user experience, and up-to-date technologies.

This project reflects my professional approach and commitment to continuous growth. Here you'll find information about me, my skills, and completed projects.

## Project Architecture
``` text
├── app/                  # Next.js App Router (routing)
│   ├── layout.tsx        # Imports from src/app/providers
│   ├── page.tsx          # Imports from src/pages/home
│   ├── portfolio/        # Imports from src/pages/portfolio
├── pages/                # Stub Next.js pages folder
│   ├── README.md         # Description of why this folder exists
├── src/                  # FSD structure
│   ├── app/              # FSD app layer 
│   ├── entities/  
│   ├── features/  
│   ├── pages/            # FSD pages layer
│   ├── shared/
│   ├── widgets/
```

## Technology Stack
### Core technologies
- Next.js
- TypeScript
- Tailwind CSS

### Code Quality Tools
- ESLint
- Prettier
- Husky
- Lint-staged
- Commitlint (Conventional Commits)

### Architecture:
- Feature-Sliced Design (FSD) for project structure

### Testing:
- Vitest + React Testing Library

### CI/CD:
- Continuous Integration: GitHub Actions (lint, test, code style)
- Deployment: Vercel

## Project Features:
- **Feature-Sliced Design architecture**  
  Project is structured by FSD for scalability and maintainability
- **Responsive design for all devices**  
  The website looks great on all screen sizes (desktop, tablet, mobile)
- **Dark and light theme support**  
  Manual theme switching or automatic detection based on user's system settings
- **Saves user theme preference**  
  The selected theme is saved and restored on next visit
- **Smooth interface animations**  
  Includes animated elements and typing animation in the terminal
- **Accessibility**  
  Semantic markup and aria-labels for interactive elements for better UX
- **Sorting projects by date**  
  Projects in the archive are sorted by date


## Project Setup

### Installation

To start working on the project, clone the repository to your local machine.

```bash
git clone https://github.com/cherkasovaa/website.git
```

After cloning, navigate to the project directory:

```bash
cd website
```
Install dependencies:

```bash
npm install
```

### Available Scripts

| Script               |  Description                                              |
|:---------------------|:----------------------------------------------------------|
| npm run dev          | Runs the app in development mode using Next.js            |
| npm run build        | Builds the app for production                             |
| npm run start        | Serves the production build locally                       |
| npm run lint         | Runs ESLint to analyze code for issues                    |
| npm run lint:fix     | Automatically fixes code issues                           |
| npm run format       | Automatically fixes formatting issues                     |
| npm run format:check | Checks for formatting issues without fixing them          |
| npm run prepare      | Runs husky                                                |
| npm run test         | Runs all unit tests using Vitest                          |

## Contact Me

📧 **Email**: [alina.ch1202@yandex.com](mailto:alina.ch1202@yandex.com)  
💬 **Telegram**: [@cherkasova_aa](https://t.me/cherkasova_aa)