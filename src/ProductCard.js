import React from 'react';

const ProductCard = ({ product }) => (
  <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col border border-gray-100">
    <div className="bg-white h-60 flex items-center justify-center overflow-hidden p-4">
      <img
        src={product.image}
        alt={product.name}
        className="max-h-full max-w-full object-contain transition-transform duration-300 hover:scale-105"
      />
    </div>

    <div className="px-5 py-4 flex flex-col justify-between flex-1">
      <h3 className="text-md font-semibold text-gray-800 mb-2 line-clamp-2 min-h-[48px]">
        {product.name}
      </h3>

      <p className="text-lg font-bold text-green-600 mb-4">{product.price}</p>

      <a
        href={product.link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm bg-blue-600 text-white text-center py-2 px-4 rounded-lg hover:bg-blue-700 transition"
      >
        View Product
      </a>
    </div>
  </div>
);

export default ProductCard;
