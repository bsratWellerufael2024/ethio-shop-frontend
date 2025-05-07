// import React from 'react';

// const ProductCard = ({ product }) => (
//   <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300 flex flex-col">
//     <div className="h-64 overflow-hidden">
//       <img
//         src={product.image}
//         alt={product.name}
//         className="w-full h-full object-contain bg-gray-100"
//       />
//     </div>
//     <div className="p-4 flex-1 flex flex-col justify-between">
//       <div>
//         <h3 className="text-lg font-semibold text-gray-800 line-clamp-2">{product.name}</h3>
//         <p className="text-green-600 font-bold mt-2">{product.price}</p>
//       </div>
//       <a
//         href={product.link}
//         target="_blank"
//         rel="noopener noreferrer"
//         className="mt-4 text-sm text-blue-600 font-medium hover:underline"
//       >
//         View Product →
//       </a>
//     </div>
//   </div>
// );

// export default ProductCard;


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
