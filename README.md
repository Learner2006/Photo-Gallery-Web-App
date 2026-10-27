# Photo Gallery Web App

A clean and simple Photo Gallery built with React, Vite, and Tailwind CSS. It fetches photos from the Picsum API, renders them in a responsive grid, provides real-time search by author, and manages favourite photos with `useReducer` and `localStorage`.

---

## 📁 Project Architecture

```text
photo-gallery/
├── src/
│   ├── components/
│   │   ├── Gallery.jsx
│   │   ├── PhotoCard.jsx
│   │   └── SearchBar.jsx
│   ├── hooks/
│   │   └── useFetchPhotos.js
│   ├── reducers/
│   │   └── favouritesReducer.js
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── public/
├── package.json
└── README.md
```

---

## 🚀 How to Run

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the local server:**
   ```bash
   npm run dev
   ```

3. **Build for production:**
   ```bash
   npm run build
   ```

---

## 🎯 How Requirements Are Met

1. **Project Setup:** Created with React + Vite + Tailwind CSS. No third-party UI component libraries (no MUI, Bootstrap, or Ant Design).
2. **Fetch Photos:** Fetches 30 photos from `https://picsum.photos/v2/list?limit=30`. Displays a loading spinner while fetching, and an error message if the fetch fails.
3. **Responsive Grid:** Responsive Tailwind grid:
   - Desktop (`lg:grid-cols-4`): 4 columns
   - Tablet (`md:grid-cols-2`): 2 columns
   - Mobile (`grid-cols-1`): 1 column
   - Each card displays the photo, author name, and a heart button.
4. **Search Filter:** A search input at the top filters photos by author name in real time without refreshing or re-fetching.
5. **Favourites with `useReducer`:** The heart icon toggles favourites using `useReducer`. Saved favourites persist across page refreshes via `localStorage`.
6. **Custom Hook (`useFetchPhotos`):** Handles API fetching and returns `{ photos, loading, error }`. Used directly by `Gallery.jsx`.
7. **`useCallback` + `useMemo`:**
   - `useCallback` wraps the search input handler (`handleSearchChange`).
   - `useMemo` calculates the filtered photo list (`filteredPhotos`).

---

## 🎥 5-Minute Screen Recording Cheat Sheet

Here are natural, simple talking points for your 5-minute video:

### 1. Show the App Working (1 min)
- Open `http://localhost:5173` in your browser.
- Point out the loading spinner when the page loads.
- Type in the search box to filter by author (e.g. type "Alejandro"). Show that it updates instantly without any page reload.
- Click the heart icons on a few photos to turn them red.
- Refresh the browser (F5 or Cmd+R) to show that the favourited hearts stay saved (persisting from `localStorage`).

### 2. Explain `useFetchPhotos` Hook (1 min)
- Open `src/hooks/useFetchPhotos.js`.
- *"This hook returns three values: `photos`, `loading`, and `error`."*
- *"Inside `useEffect`, it calls the Picsum API with limit 30. While waiting for data, `loading` is true. When data arrives, it sets `photos` and turns `loading` to false. If anything fails (like a network error), it catches it, sets the `error` state, and turns off `loading` so the UI can display an error message."*

### 3. Explain `useReducer` Code (1 min)
- Open `src/reducers/favouritesReducer.js`.
- *"The reducer handles one action: `TOGGLE_FAVOURITE`. When an ID is passed in `action.payload`, it checks if the ID is already in the list. If it's already there, it filters it out (unfavourites it). Otherwise, it adds it to the array."*
- *"Why `useReducer` instead of `useState`? Because favourites have toggle logic (adding or removing based on current state). `useReducer` keeps this state transition logic in one clean, predictable function instead of writing inline logic inside the UI component."*

### 4. Explain `useCallback` & `useMemo` (1 min)
- Open `src/components/Gallery.jsx`.
- **`useCallback`**: *"I used `useCallback` on `handleSearchChange`. In React, functions get recreated on every render. `useCallback` keeps the function reference stable across re-renders so we don't pass a new function instance down to `SearchBar` on every keystroke."*
- **`useMemo`**: *"I used `useMemo` to compute `filteredPhotos`. Filtering through the array only needs to happen when `photos` or `searchTerm` changes. Without `useMemo`, the filtering logic would run on every single render—even when just clicking a heart button to toggle a favourite."*

### 5. The Hardest Part (1 min)
- *"The hardest part was making sure the favourites persisted smoothly with `localStorage` and `useReducer` on the first load without complex synchronization issues or race conditions. I solved this simply by initializing the reducer directly from `localStorage.getItem('favourites')` and saving updates in a small `useEffect`."*

---

## 📝 One-liner for the Submission Form:
> "Managing favourites state transitions with useReducer while ensuring clean, reliable synchronization with localStorage across page refreshes."
