import React from 'react';

const OrderSummary = () => {
    return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      {/* Card Container */}
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-xl font-bold text-center text-gray-800">Order Summary</h1>
        <p className="text-center text-gray-600 mt-2">
            You can now listen to millions of songs, audiobooks, and podcasts on any device, anywhere you like!
        </p>
        {/* Buttons Placeholder */}
        <div className="mt-4 flex flex-col gap-2">
            <button className="bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600">
            Proceed to Payment
            </button>
            <button className="bg-gray-200 text-gray-800 py-2 rounded-md hover:bg-gray-300">
            Cancel Order
            </button>
        </div>
        </div>
    </div>
    );
};

export default OrderSummary;
