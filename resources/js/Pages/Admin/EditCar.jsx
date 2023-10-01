import Authenticated from '@/Layouts/AuthenticatedLayout'
import { Head, router, useForm } from '@inertiajs/react'
import React from 'react'

const EditCar = ({car, user}) => {

	const { data, setData, put, processing } = useForm({...car});
	
    const handleChange = (event) => {
		// Update the state with the new input value
        setData({
			...data,
			[event.target.name]: event.target.value // Update the specific property
        })
    }
	
	const handleSubmit = (e) => {
		e.preventDefault();
		console.log("🚀 ~ file: EditCar.jsx:9 ~ EditCar ~ data:", data)
		put(`/cars/${car.id}`, data, { forceFormData: true, });
	};

    return (
        <div>
            <Authenticated 
                user={user}
            >
                <Head title='Edit Car' />

                <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-gray-800">
					<div className="sm:mx-auto w-full sm:max-w-sm">
						<h2 className="w-full mt-10 text-center text-6xl font-bold leading-9 tracking-tight text-yellow-500">
							Edit Car
						</h2>
					</div>

					<div className="mt-10 sm:mx-auto sm:w-full sm:max-w-lg md:max-w-4xl">
						<form onSubmit={handleSubmit} encType="multipart/form-data">
							<div className="grid gap-6 mb-6 md:grid-cols-2">
								<div>
									<label htmlFor="make" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Make</label>
									<input type="text" name="make" defaultValue={car.make} onChange={handleChange} id="make" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Car Name" required/>
								</div>
								<div>
									<label htmlFor="model" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Model</label>
									<input type="text" name="model" defaultValue={car.model} onChange={handleChange} id="model" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Car model" required/>
								</div>
								<div>
									<label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
									<input type="text" name="description" defaultValue={car.description} onChange={handleChange} id="description" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="description..." required/>
								</div>  
								<div>
									<label htmlFor="Year" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Year</label>
									<input type="number" name="year" defaultValue={car.year} onChange={handleChange} id="Year" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="0000" required/>
								</div>
								<div>
									<label htmlFor="price" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Price</label>
									<input type="number" name="price" defaultValue={car.price} onChange={handleChange} id="price" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="$0000.00" required/>
								</div>
								<div>
									<label htmlFor="fuel_type" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Fuel Type</label>
									<input type="text" name="fuel_type" defaultValue={car.fuel_type} onChange={handleChange} id="fuel_type" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Gasoline" required/>
								</div>
							</div>
							<div className="mb-6">
								<label htmlFor="transmission" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Transmission</label>
								<input type="text" name="transmission" defaultValue={car.transmission} onChange={handleChange} id="transmission" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Automatic" required/>
							</div>
							<div className="mb-6">
								<label htmlFor="mileage" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Mileage</label>
								<input type="number" name="mileage" defaultValue={car.mileage} onChange={handleChange} id="mileage" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="0000" required/>
							</div>	
							<div className="mb-6">
									<label htmlFor="engine_size" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Engine Size</label>
									<input type="number" name="engine_size" defaultValue={car.engine_size} onChange={handleChange} id="engine_size" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="0.0" required/>
							</div>
							<div className="grid gap-6 mb-6 md:grid-cols-2">
								<div>
									<label htmlFor="body_type" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Body Type</label>
									<input type="text" name="body_type" defaultValue={car.body_type} onChange={handleChange} id="body_type" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Car Body Type" required/>
								</div>
								<div>
									<label htmlFor="color" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Color</label>
									<input type="text" name='color' defaultValue={car.color} onChange={handleChange} id="color" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Car color" required/>
								</div>
							</div>
							<div className="mb-6">
									<label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="image">Upload Image</label>
									<input 
										onChange={(event) => setData({
												...data, // Copy the previous state
												image: event.target.files[0] // Update the specific property
											})}
										className="p-2 block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="image" type="file" />
									
							</div>
							<button type="submit" disabled={processing} className="text-white bg-amber-700 hover:bg-amber-800 focus:ring-4 focus:outline-none focus:ring-amber-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-amber-600 dark:hover:bg-amber-700 dark:focus:ring-amber-800">Update</button>
						</form>

					</div>
				</div>

            </Authenticated>
        </div>
    )
}

export default EditCar
