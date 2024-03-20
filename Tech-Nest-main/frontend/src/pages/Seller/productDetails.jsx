import React from 'react';

const ProductDetails = ({ product }) => {
    const { image, name, description, brand, stock, price, category, views } = product;

    return (
        <div className="flex justify-between p-2 bg-gray-100 rounded-lg mt-5 shadow-lg">
            <div className="flex items-center justify-center w-20">
                <img src={image} alt={name} className="w-30 h-20 object-cover rounded-lg" />
            </div>
            <div className="flex-1 text-gray-800 text-center font-bold font-sans w-5">{name}</div>
            <div className="flex-1 text-gray-800 text-center font-bold font-sans w-25">{description}</div>
            <div className="flex-1 text-gray-800 text-center font-bold font-sans w-20">{stock}</div>
            <div className="flex-1 text-gray-800 text-center font-bold font-sans w-10">${price.toFixed(2)}</div>

        </div>
    );
};

export default ProductDetails;
