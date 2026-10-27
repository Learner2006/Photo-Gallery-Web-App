function getInitialFavourites() {
  try {
    const saved = localStorage.getItem('favourites');
    return saved ? JSON.parse(saved) : [];
  } catch (err) {
    console.error('Failed to read favourites from localStorage:', err);
    return [];
  }
}

export const initialFavourites = getInitialFavourites();

export function favouritesReducer(state, action) {
  switch (action.type) {
    case 'TOGGLE_FAVOURITE': {
      const id = action.payload;
      if (state.includes(id)) {
        return state.filter((favId) => favId !== id);
      } else {
        return [...state, id];
      }
    }
    default:
      return state;
  }
}
