import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';

const API_URL = process.env.REACT_APP_API_URL;
const PAGE_SIZE = 9;

function App() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);

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

  // Fetch on search or page change
  useEffect(() => {
    const delay = setTimeout(() => {
      fetchProducts();
    }, 300);
    return () => clearTimeout(delay);
  }, [search, page]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-blue-100 p-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-extrabold text-center text-blue-800 mb-8">
          🛒 Ethio Shop Product Search
        </h1>

        {/* Search Input + Clear */}
        <div className="flex justify-center mb-10 gap-2">
          <input
            type="text"
            className="w-full max-w-lg px-5 py-3 rounded-full shadow-sm border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition bg-white"
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
              className="text-sm px-4 py-2 bg-gray-200 rounded-full hover:bg-gray-300 transition"
            >
              ❌ Clear
            </button>
          )}
        </div>

        {/* Results Count */}
        {!loading && total > 0 && (
          <p className="text-center text-sm text-gray-600 mb-4">
            Showing {products.length} of {total} results
          </p>
        )}

        {/* Loading / Empty / Product Grid */}
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 animate-pulse">
            {Array.from({ length: PAGE_SIZE }).map((_, idx) => (
              <div key={idx} className="bg-white h-72 rounded-lg shadow-md p-4 space-y-4">
                <div className="bg-gray-300 h-40 w-full rounded-md" />
                <div className="h-4 bg-gray-300 rounded w-3/4" />
                <div className="h-4 bg-gray-300 rounded w-1/2" />
              </div>
            ))}
          </div>
        ) : products.length === 0 ? (
          <p className="text-center text-gray-500">No products found.</p>
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
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50"
              >
                ← Previous
              </button>
              <span className="text-gray-700 font-medium">
                Page {page} of {totalPages}
              </span>
              <button
                onClick={() => setPage((prev) => (prev < totalPages ? prev + 1 : prev))}
                disabled={page === totalPages}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50"
              >
                Next →
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
