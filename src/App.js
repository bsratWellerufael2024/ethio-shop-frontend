
import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import Footer from './Footer';

const API_URL = process.env.REACT_APP_API_URL;
const PAGE_SIZE = 9;

function App() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(false);  // State to track theme

  const totalPages = Math.ceil(total / PAGE_SIZE);

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const query = `?search=${encodeURIComponent(search)}&page=${page}&limit=${PAGE_SIZE}`;
      const res = await fetch(`${API_URL}${query}`);
      const data = await res.json();
      if (data.success) {
        setProducts(data.products);
        setTotal(data.total);
      }
    } catch (err) {
      console.error('Fetch error:', err);
    }
    setLoading(false);
  };

  useEffect(() => {
    const delay = setTimeout(() => {
      fetchProducts();
    }, 300);
    return () => clearTimeout(delay);
  }, [search, page]);

  useEffect(() => {
    // Apply dark mode or light mode class to the body
    if (isDarkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-indigo-50 to-blue-100 dark:from-gray-900 dark:to-gray-800 font-sans">
      <div className="flex-grow p-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-extrabold text-center text-brand dark:text-white mb-8 font-display">
            🛒 Ethio Shop Product Search
          </h1>

          
          <div className="flex justify-end mb-6">
  <button
    onClick={() => setIsDarkMode(prev => !prev)}
    className="flex items-center gap-2 px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded-full border border-gray-300 dark:border-gray-600 shadow-sm transition-all hover:bg-gray-300 dark:hover:bg-gray-600"
  >
    <span className="text-sm font-medium text-gray-800 dark:text-gray-100">
      {isDarkMode ? 'Light' : 'Dark'}
    </span>
    <div
      className={`w-10 h-5 flex items-center bg-gray-400 dark:bg-gray-600 rounded-full p-1 transition duration-300`}
    >
      <div
        className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform ${
          isDarkMode ? 'translate-x-5' : ''
        }`}
      />
    </div>
    {/* <span className="text-lg">{isDarkMode ? '🌞' : '🌙'}</span> */}
  </button>
</div>


          {/* Search Input + Clear */}
          <div className="flex justify-center mb-10 gap-2">
            <input
              type="text"
              className="w-full max-w-lg px-5 py-3 rounded-full shadow-sm border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-brand transition bg-white dark:bg-gray-700 dark:text-white"
              placeholder="🔍 Search for products (e.g., blouse)..."
              value={search}
              onChange={(e) => {
                setPage(1);
                setSearch(e.target.value);
              }}
            />
            {search && (
              <button
                onClick={() => {
                  setSearch('');
                  setPage(1);
                }}
                className="text-sm px-4 py-2 bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-white rounded-full hover:bg-gray-300 dark:hover:bg-gray-500 transition"
              >
                ❌ Clear
              </button>
            )}
          </div>

          {/* Results Count */}
          {!loading && total > 0 && (
            <p className="text-center text-sm text-gray-600 dark:text-gray-300 mb-4">
              Showing {products.length} of {total} results
            </p>
          )}

          {/* Loading / Empty / Product Grid */}
          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 animate-pulse">
              {Array.from({ length: PAGE_SIZE }).map((_, idx) => (
                <div
                  key={idx}
                  className="bg-white dark:bg-gray-700 h-72 rounded-lg shadow-card p-4 space-y-4"
                >
                  <div className="bg-gray-300 dark:bg-gray-600 h-40 w-full rounded-md" />
                  <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-3/4" />
                  <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-1/2" />
                </div>
              ))}
            </div>
          ) : products.length === 0 ? (
            <p className="text-center text-gray-500 dark:text-gray-400">No products found.</p>
          ) : (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {products.map((product, idx) => (
                  <ProductCard key={idx} product={product} />
                ))}
              </div>

              {/* Pagination */}
              <div className="flex justify-center items-center gap-4 mt-10">
                <button
                  onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
                  disabled={page === 1}
                  className="px-4 py-2 bg-brand text-white rounded hover:bg-brand-dark disabled:opacity-50"
                >
                  ← Previous
                </button>
                <span className="text-gray-700 dark:text-gray-200 font-medium">
                  Page {page} of {totalPages}
                </span>
                <button
                  onClick={() => setPage((prev) => (prev < totalPages ? prev + 1 : prev))}
                  disabled={page === totalPages}
                  className="px-4 py-2 bg-brand text-white rounded hover:bg-brand-dark disabled:opacity-50"
                >
                  Next →
                </button>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;

