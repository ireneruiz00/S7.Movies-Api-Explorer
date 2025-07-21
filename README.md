# Movie Explorer (React)

Movie Explorer is a responsive web application built with React and Tailwind CSS that allows users to browse, discover, and explore detailed information about movies using The Movie Database (TMDb) API. Features include infinite scrolling, cast and crew listings, search functionality, and animated UI elements powered by Framer Motion. The app also supports basic authentication and routing for a smooth user experience.

## Key features

Key features include:

- Discover popular movies with infinite scrolling
- View cast and crew with detailed profiles
- Navigate to individual actor pages
- Basic authentication (login/logout)
- Smooth animations with Framer Motion
- Fully responsive design

## Tech Stack

- **React 19**
- **Typescript**
- **Vite** for fast dev environment
- **ESLint** for linting
- **Tailwind CSS** for utility-first styling
- **React Router DOM**
- **Firebase** for authentication
- **Motion** for smooth hovers and transitions

## Installation

Follow these steps to get the project running locally:

1. Clone the repository

```bash
git clone https://github.com/ireneruiz00/S7.Movies-Api-Explorer.git
```

2. Create a .env.local file in the root directory.

```bash
touch .env
```

3. Add your TMDb API key and Firebase credentials inside `.env file` and close the file.

```bash
VITE_TMBD_API_KEY=your_tmdb_api_key
VITE_FIREBASE_API_KEY=your_firebase_api_key
```

4. Install dependencies

```bash
npm install
```

5. Start the development server

```bash
npm run dev
```

---

## What I learned

- How to set up a modern, scalable React project using Vite, TypeScript, and Tailwind CSS.
- Structuring components, hooks, and context in a reusable, DRY, and maintainable way.
- Implementing authentication flow with Firebase (login, logout, protected routes).
- Using React Context to manage global state (e.g., authentication, movies pagination).
- Creating custom hooks like useMovies, useMovieDetails, and useMovieCredits to abstract data fetching logic and improve code reuse.
- Applying Framer Motion to enhance user experience with smooth animations and transitions.
- Designing responsive layouts that adapt based on the authentication state and screen size.
- Improving performance and UX with infinite scrolling using the IntersectionObserver API.
- Dynamically rendering movie data, cast/crew lists, and actor details with conditional logic and reusable components.
- Managing layout consistency and component composition via layout wrappers (<DetailsLayout />, <Layout />).
- Navigating with React Router to handle dynamic routes like /movies/:id and /actor/:id and using ProtectedRoute property.
- Debugging layout issues and fine-tuning scroll behavior for isolated UI sections.
