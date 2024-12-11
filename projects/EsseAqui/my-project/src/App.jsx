import React from 'react';

const App = () => {
  return (
    <div className="flex flex-col items-center  justify-center min-h-screen bg-sky-100">
      <div className="bg-white rounded-lg shadow-lg max-w-md">
      <img
          src="./order-summary-component-main/images/illustration-hero.svg"
          alt="Music Icon"
          className="mx-w h-60 rounded-t-xl">
        </img>
      </div>
      <div className="bg-white p-6 rounded-b-xl shadow-lg max-w-md">
        <h1 className="text-2xl font-bold text-center text-gray-800">
          Order Summary
        </h1>
        <p className="text-gray-600 text-center mt-2 px-5">
          You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like!
        </p>
        
        <div className='bg-gray-100 p-4 rounded-lg mt-4 flex items-center justify-between'>
          <div className='flex items-center'>
            <img
              src="./order-summary-component-main/images/icon-music.svg"
              alt="Music Icon"
              className="w-12 h-12"
            />
            <div className='ml-4'>
              <h2 className='text-gray-800 font-bold'>Annual Plan</h2>
              <p className='text-gray-600'>$59.99/year</p>
            </div>
          </div>
          
          <button className="text-blue-500 font-bold hover:underline">
            Change
          </button>
        </div>

        <div className="mt-4">
          <button className="bg-purple-500 text-white py-2 px-4 rounded-md w-full hover:bg-purple-600">
            Proceed to Payment
          </button>
          <button className="bg-gray-200 text-gray-800 py-2 px-4 rounded-md w-full mt-2 hover:bg-gray-300">
            Cancel Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
