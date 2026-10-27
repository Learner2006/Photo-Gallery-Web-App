export function PhotoCard({ photo, isFavourite, onToggleFavourite }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col justify-between">
      <img
        src={photo.download_url}
        alt={`Photo by ${photo.author}`}
        className="w-full h-60 object-cover"
        loading="lazy"
      />
      <div className="p-4 flex items-center justify-between">
        <p className="font-medium text-gray-800 truncate pr-2">{photo.author}</p>
        <button
          onClick={() => onToggleFavourite(photo.id)}
          aria-label="Toggle favourite"
          className="focus:outline-none transition-transform active:scale-90"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`w-6 h-6 transition-colors ${
              isFavourite
                ? 'fill-red-500 text-red-500'
                : 'fill-none text-gray-400 hover:text-red-500 stroke-current stroke-2'
            }`}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
