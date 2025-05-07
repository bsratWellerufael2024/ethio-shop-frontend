import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';

const API_URL = 'http://localhost:3000/api/products';
const PAGE_SIZE = 9;

function App() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState('');
  const [filtered, setFiltered] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  // Fetch all (up to 500) then paginate locally
  useEffect(() => {
    const timeout = setTimeout(() => {
      fetchProducts(search.trim());
    }, 500);
    return () => clearTimeout(timeout);
  }, [search]);

  const fetchProducts = async (query = '') => {
    setLoading(true);
    try {
      const res = await fetch(`${API_URL}?limit=500${query ? `&search=${query}` : ''}`);
      const data = await res.json();
      if (data.success) {
        setProducts(data.products);
        setPage(1); // Reset to first page on new search
      }
    } catch (err) {
      console.error('Fetch error:', err);
    }
    setLoading(false);
  };

  // Get current page slice
  useEffect(() => {
    const start = (page - 1) * PAGE_SIZE;
    const end = start + PAGE_SIZE;
    setFiltered(products.slice(start, end));
  }, [products, page]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-blue-100 p-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-extrabold text-center text-blue-800 mb-8">
          🛒 Ethio Shop Product Search
        </h1>

        <div className="flex justify-center mb-10">
          <input
            type="text"
            className="w-full max-w-lg px-5 py-3 rounded-full shadow-sm border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition bg-white"
            placeholder="🔍 Search for products (e.g., blouse)..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {loading ? (
          <p className="text-center text-blue-600 text-lg font-medium">🔄 Loading products...</p>
        ) : filtered.length === 0 ? (
          <p className="text-center text-gray-500">No products found.</p>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {filtered.map((product, idx) => (
                <ProductCard key={idx} product={product} />
              ))}
            </div>

            <div className="flex justify-center items-center gap-4 mt-10">
              <button
                onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
                disabled={page === 1}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50"
              >
                ← Previous
              </button>
              <span className="text-gray-700 font-medium">
                Page {page} of {Math.ceil(products.length / PAGE_SIZE)}
              </span>
              <button
                onClick={() =>
                  setPage((prev) =>
                    prev < Math.ceil(products.length / PAGE_SIZE) ? prev + 1 : prev
                  )
                }
                disabled={page === Math.ceil(products.length / PAGE_SIZE)}
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
