import { router } from '@inertiajs/react';
import axios from 'axios';
import React, { useState } from 'react';
import Select from './SelectComponent';

const VehicleButton = ({brandData, onVehicleSubmit, disable}) => {
  const [compareData, setCompareData] = useState({
    brand: '',
    model: ''
  });


  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/compared', compareData);
      onVehicleSubmit(response.data);

      // Store the selected vehicle in local storage
      const storedVehicles = JSON.parse(localStorage.getItem('vehicles')) || [];
      localStorage.setItem('vehicles', JSON.stringify([...storedVehicles, response.data]));
    } catch (error) {
      console.log("🚀 ~ file: VehicleButton.jsx:88 ~ handleSubmit ~ error:", error.message);
    }
  }


  return (
    <div className="mb-4">
      <div className='w-full flex justify-between items-center flex-col md:flex-row gap-5 m-0'>
        <div className='w-full'>
          <Select
            brandData={brandData} setCompareData={setCompareData} 
          />
          <button
            onClick={handleSubmit}
            disabled={disable}
            className="px-16 py-3 my-3 text-sm font-medium text-white bg-red-600 border border-transparent rounded-md disabled:bg-gray-300 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
          >
            Add Car
          </button>
        </div>
        <div className='w-full'>
          <Select brandData={brandData} setCompareData={setCompareData} />
          <button
            onClick={handleSubmit}
            disabled={disable}
            className="px-16 py-3 my-3 text-sm font-medium text-white bg-red-600 border border-transparent rounded-md disabled:bg-gray-300 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
          >
            Add Car
          </button>
        </div>
      </div>
    </div>
  );
};

export default VehicleButton;
