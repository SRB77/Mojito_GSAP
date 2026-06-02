# 🍹 Mojito - GSAP Animated Landing Page

A modern, highly interactive, and visually stunning landing page for a premium cocktail brand. This project leverages the power of **React**, **Vite**, and **GSAP** to deliver a scroll-driven, cinematic user experience.

## ✨ Features Implemented

*   **Scroll-Driven Animations:** Utilizes GSAP `ScrollTrigger` to bind animations (like video playback and parallax elements) directly to the user's scroll position.
*   **Cinematic Hero Section:** Features a background video that plays forward/backward on scroll, accompanied by text reveals powered by GSAP `SplitText`.
*   **Dynamic Data Rendering:** Menu items (Cocktails & Mocktails), store information, and social links are centrally managed in a constants file and rendered dynamically.
*   **Parallax Effects:** Floating UI elements (like leaves) that react to scroll, adding depth to the page.
*   **Responsive Design:** Fully responsive layout built with **Tailwind CSS v4** and `react-responsive` for device-specific rendering logic.
*   **Robust Testing Suite:** Configured with **Vitest** and **React Testing Library** for component testing, alongside **Playwright** for end-to-end (E2E) testing.

## 🏗️ Architecture & Project Structure

The project follows a clean, component-based architecture for maintainability and scalability.

```text
.
├── constants/
│   └── index.js          # Centralized data (menus, social links, store info, etc.)
├── e2e/                  # Playwright end-to-end tests
├── src/
│   ├── components/       # Reusable React components (Hero, Cocktails, About, Art, Navbar)
│   ├── __tests__/        # Unit and integration tests
│   ├── App.jsx           # Main application layout and component assembly
│   ├── index.css         # Global styles and Tailwind configuration
│   └── main.jsx          # Application entry point
├── public/               # Static assets (images, videos)
├── package.json          # Project metadata and dependencies
├── vite.config.js        # Vite bundler configuration
└── playwright.config.js  # Playwright E2E testing configuration
```

### Component Breakdown
*   **`Hero`**: The landing section featuring `SplitText` title animations and a scroll-linked background video.
*   **`Cocktails`**: Displays the menu of popular cocktails and mocktails, utilizing GSAP for parallax leaf animations.
*   **`About` / `Art`**: Additional sections detailing the brand's story and craft.
*   **`Navbar`**: Fixed or sticky navigation for smooth page traversal.

## 🚀 Tech Stack

*   **Core:** [React 19](https://react.dev/) + [Vite 7](https://vitejs.dev/)
*   **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
*   **Animation:** [GSAP 3](https://gsap.com/) (ScrollTrigger, SplitText) + `@gsap/react`
*   **Testing:** [Vitest](https://vitest.dev/), [Playwright](https://playwright.dev/), [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)

## 🛠️ Getting Started

### Prerequisites
Make sure you have Node.js (v18+ recommended) installed on your machine.

### Installation

1.  Clone the repository and navigate into the project directory.
2.  Install the dependencies:
    ```bash
    npm install
    ```

### Running the Development Server

Start the Vite development server:
```bash
npm run dev
```
The application will be available at `http://localhost:5173`.

### Building for Production

To create an optimized production build:
```bash
npm run build
```
You can preview the built application locally using:
```bash
npm run preview
```

## 🧪 Testing

This project employs a comprehensive testing strategy.

*   **Run Unit/Component Tests (Vitest):**
    ```bash
    npm run test
    ```
    *(Use `npm run test:ui` for the Vitest UI dashboard).*

*   **Run End-to-End Tests (Playwright):**
    ```bash
    npx playwright test
    ```

## 📜 License

This project is open-source and available under the [MIT License](LICENSE).
