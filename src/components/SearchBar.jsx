export function SearchBar({ searchTerm, onSearchChange }) {
  return (
    <div className="w-full max-w-md mx-auto mb-8">
      <input
        type="text"
        placeholder="Search by author name..."
        value={searchTerm}
        onChange={onSearchChange}
        className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-800 placeholder-gray-400"
      />
    </div>
  );
}
