import { useState, useReducer, useEffect, useCallback, useMemo } from 'react';
import { useFetchPhotos } from '../hooks/useFetchPhotos';
import { favouritesReducer, initialFavourites } from '../reducers/favouritesReducer';
import { SearchBar } from './SearchBar';
import { PhotoCard } from './PhotoCard';

export function Gallery() {
  const { photos, loading, error } = useFetchPhotos();
  const [searchTerm, setSearchTerm] = useState('');
  const [favourites, dispatch] = useReducer(favouritesReducer, initialFavourites);

  // Save favourites to localStorage safely whenever they change
  useEffect(() => {
    try {
      localStorage.setItem('favourites', JSON.stringify(favourites));
    } catch (err) {
      console.error('Failed to save favourites to localStorage:', err);
    }
  }, [favourites]);

  // useCallback on search input handler
  const handleSearchChange = useCallback((e) => {
    setSearchTerm(e.target.value);
  }, []);

  // useMemo to calculate filtered photos based on search term
  const filteredPhotos = useMemo(() => {
    return photos.filter((photo) =>
      photo.author.toLowerCase().includes(searchTerm.toLowerCase().trim())
    );
  }, [photos, searchTerm]);

  // Dispatch toggle action
  const handleToggleFavourite = (id) => {
    dispatch({ type: 'TOGGLE_FAVOURITE', payload: id });
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Photo Gallery
        </h1>

        {/* Search Filter */}
        <SearchBar
          searchTerm={searchTerm}
          onSearchChange={handleSearchChange}
        />

        {/* Loading Spinner */}
        {loading && (
          <div className="flex flex-col items-center justify-center py-20">
            <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
            <p className="mt-3 text-gray-600 font-medium">Loading photos...</p>
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="text-center py-10">
            <p className="text-lg font-semibold text-red-600 mb-3">Error: {error}</p>
            <button
              onClick={() => window.location.reload()}
              className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg transition"
            >
              Retry
            </button>
          </div>
        )}

        {/* Photos Grid: 4 cols desktop, 2 cols tablet, 1 col mobile */}
        {!loading && !error && (
          <>
            {filteredPhotos.length === 0 ? (
              <p className="text-center text-gray-500 py-10">No photos found.</p>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {filteredPhotos.map((photo) => (
                  <PhotoCard
                    key={photo.id}
                    photo={photo}
                    isFavourite={favourites.includes(photo.id)}
                    onToggleFavourite={handleToggleFavourite}
                  />
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
