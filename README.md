# Photo Gallery

A responsive and performant photo gallery web application built with **React**, **Vite**, and **Tailwind CSS**. It fetches images from the Picsum Photos API, features real-time search filtering by photographer, and manages user favourites with persistent storage.

---

##  Features

- **Live Data Fetching**: Retrieves 30 photos on load from the Picsum Photos API.
- **Responsive Layout**: Designed with Tailwind CSS utility classes:
  - Mobile: 1 column
  - Tablet: 2 columns
  - Desktop: 4 columns
- **Real-Time Search**: Instant filtering of photos by author name without unnecessary API re-fetching or page reloads.
- **Persistent Favourites**: Mark photos as favourites using heart buttons. State is managed via React's `useReducer` and persisted across sessions using `localStorage`.
- **Loading & Error States**: Visual feedback with a loading spinner while fetching, and an error state with a retry option if the request fails.
- **Performance Optimized**:
  - `useCallback` to maintain a stable reference for event handlers.
  - `useMemo` to memoize the filtered photo computation.

---

##  Tech Stack

- **React 19** (Functional Components & Hooks)
- **Vite** (Next-gen frontend tooling)
- **Tailwind CSS v4** (Utility-first styling, no external component libraries)
- **Picsum Photos API** (Image data source)

---

##  Project Structure

```text
photo-gallery/
├── src/
│   ├── components/
│   │   ├── Gallery.jsx          # Main gallery view with grid and states
│   │   ├── PhotoCard.jsx        # Individual photo card with favourite toggle
│   │   └── SearchBar.jsx        # Search input for filtering by author
│   ├── hooks/
│   │   └── useFetchPhotos.js    # Custom hook handling API fetch, loading & error
│   ├── reducers/
│   │   └── favouritesReducer.js # Reducer managing favourites state transitions
│   ├── App.jsx                  # Root component
│   ├── index.css                # Tailwind CSS entrypoint
│   └── main.jsx                 # Application entrypoint
├── public/
├── package.json
└── README.md
```

---

##  Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Learner2006/Photo-Gallery-Web-App.git
   cd Photo-Gallery-Web-App
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173` in your browser.

4. Build for production:
   ```bash
   npm run build
   ```
