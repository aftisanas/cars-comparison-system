import React from 'react';
import Authenticated from '@/Layouts/AuthenticatedLayout'
import { Head, useForm } from '@inertiajs/react'

const EditAccessory = ({user, accessory, cars}) => {
    const {data, setData, put} = useForm({...accessory});


    const handleChange = (event) => {
        setData({
            ...data,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(accessory)
        put(`/accessories/${accessory.id}`, accessory, { forceFormData: true, });
    }

    return (
        <Authenticated user={user}>
            <Head title="Edit Accessories" />

            <div className="flex min-h-full h-screen flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-gray-800">
				<div className="sm:mx-auto sm:w-full sm:max-w-sm">
					<h2 className="mt-10 text-center text-6xl font-bold leading-none tracking-tight text-blue-500">
						Edit Accessory
					</h2>
				</div>

				<div className="mt-10 sm:mx-auto sm:w-full sm:max-w-lg md:max-w-4xl">
					<form onSubmit={handleSubmit}>
						<div className="grid gap-6 mb-6 md:grid-cols-1">
							<div>
								<label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
								<input defaultValue={accessory.name} type="text" name="name" onChange={handleChange} id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Name" required/>
							</div>
							<div>
								<label htmlFor="price" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Price</label>
								<input defaultValue={accessory.price} type="number" name="price" onChange={handleChange} id="price" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="$0000.00" required/>
							</div>
                            
                            <div>
                                <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Link it with a car</label>
                                <select defaultValue={accessory.car_id} name='car_id' onChange={handleChange} id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                    {cars.map(car => (
                                        <option value={car.id} key={car.id}>{car.make}</option>
                                    ))}
                                </select>
                            </div>

							<div>
                                <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                                <textarea defaultValue={accessory.description} id="message" rows="4" onChange={handleChange} name='description' className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Leave a description..." />
							</div> 
						</div>

						<button type="submit" className="text-white bg-amber-700 hover:bg-amber-800 focus:ring-4 focus:outline-none focus:ring-amber-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-amber-600 dark:hover:bg-amber-700 dark:focus:ring-amber-800">Update</button>
					</form>

				</div>
			</div>
        </Authenticated>
    )
}

export default EditAccessory
