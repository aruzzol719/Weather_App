import { FaSearch } from "react-icons/fa";
const SearchBar = ({ city, setCity, fetchWeather, loading }) => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        fetchWeather(city);
      }}
      className="flex items-center gap-2 justify-center p-4"
    >
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city name..."
        className="w-72 rounded-full border border-gray-300 bg-white px-4 py-2 text-lg outline-none focus:ring-2 focus:ring-blue-500"
      />

      <button
        type="submit"
        disabled={loading}
        className={`flex items-center gap-2 px-5 py-2 rounded-full text-white transition ${
          loading
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-green-600 hover:bg-green-700"
        }`}
      >
        {loading ? (
          "Searching..."
        ) : (
          <>
            <FaSearch />
            Search
          </>
        )}
      </button>
    </form>
  );
};

export default SearchBar;