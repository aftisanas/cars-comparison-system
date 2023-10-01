import React from 'react'

const ComparedVehicle = ({vehicle, groupedCars}) => {
    
    return (
        // style={{ width: '50%' }}
        <div className="mx-auto w-full h-auto sm:w-auto bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            
            <img className="rounded-t-lg object-cover w-full" src={vehicle.image_url} alt={`${vehicle.model}`} />
            
            <div className="p-5 w-full">
                <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{vehicle.model}</h5>
                </a>
                <dl className="divide-y divide-gray-100 relative">
                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm font-medium leading-6 text-gray-900 dark:text-white">Introduction</dt>
                        <dd className="mt-1 text-sm leading-6 text-gray-700 dark:text-gray-400 sm:col-span-2 sm:mt-0">{vehicle.introduction}</dd>
                        <span className={`${groupedCars.newestCar === vehicle.model ? 'block' : 'hidden' } w-2 absolute right-4 top-10 md:top-8 h-2 bg-green-600 rounded-full`}></span>
                    </div>
                </dl>
                <dl className="divide-y divide-gray-100 relative">
                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm font-medium leading-6 text-gray-900 dark:text-white">Price</dt>
                        <dd className="mt-1 text-sm leading-6 text-gray-700 dark:text-gray-400 sm:col-span-2 sm:mt-0">{vehicle.price}0 $</dd>
                        <span className={`${groupedCars.low_price === vehicle.model ? 'block' : 'hidden' } w-2 absolute right-4 top-10 md:top-8 h-2 bg-green-600 rounded-full`}></span>
                    </div>
                </dl>
                <dl className="divide-y divide-gray-100 relative">
                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm font-medium leading-6 text-gray-900 dark:text-white">Fuel type</dt>
                        <dd className="mt-1 text-sm leading-6 text-gray-700 dark:text-gray-400 sm:col-span-2 sm:mt-0">{vehicle.fuel_type}</dd>
                        <span className={`${groupedCars.gasolineCar === vehicle.model ? 'block' : 'hidden' } w-2 absolute right-4 top-10 md:top-8 h-2 bg-green-600 rounded-full`}></span>

                    </div>
                </dl>
                <dl className="divide-y divide-gray-100 relative">
                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm font-medium leading-6 text-gray-900 dark:text-white">Mileage</dt>
                        <dd className="mt-1 text-sm leading-6 text-gray-700 dark:text-gray-400 sm:col-span-2 sm:mt-0">{vehicle.mileage}</dd>
                        <span className={`${groupedCars.low_mileage === vehicle.model ? 'block' : 'hidden' } w-2 absolute right-4 top-10 md:top-8 h-2 bg-green-600 rounded-full`}></span>
                    </div>
                </dl>
                <dl className="divide-y divide-gray-100 relative">
                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm font-medium leading-6 text-gray-900 dark:text-white">Body Type</dt>
                        <dd className="mt-1 text-sm leading-6 text-gray-700 dark:text-gray-400 sm:col-span-2 sm:mt-0">{vehicle.body_type}</dd>
                    </div>
                </dl>
            </div>
        </div>

    )
}

export default ComparedVehicle
