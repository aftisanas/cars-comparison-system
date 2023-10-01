import React, {useState, useEffect} from 'react'
import Header from '../Home/Header'
import { Head } from '@inertiajs/react';
import VehicleButton from './VehicleButton'
import ComparedVehicle from './ComparedVehicle'
import Footer from '../Home/Footer'
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import Feedback from './Feedback';

const CompareTool = ({user, brandData}) => {
    const [selectedVehicles, setSelectedVehicles] = useState([]);
    const [groupedCars, setGroupedCars] = useState({
        low_price: '',
        low_mileage: ''
    });
    const [disableComparison, setDisableComparison] = useState(false);
    const [disable, setDisable] = useState(false);
    const [isVehicleSelected, setIsVehicleSelected] = useState(false);

    useEffect(() => {
        const storedVehicles = JSON.parse(localStorage.getItem('vehicles')) || [];
        setSelectedVehicles(storedVehicles);
        setIsVehicleSelected(storedVehicles.length > 1);
        if (storedVehicles.length >= 2) {
            setDisable(!disable);
        } else {
            setDisable(disable);
        }
    }, []);
    
    const handleVehicleSubmit = (data) => {
        setSelectedVehicles([...selectedVehicles, data]);
        setIsVehicleSelected(true);
    };
    
    const compare = () => {
        setDisableComparison(true);
        const newestCar = selectedVehicles.sort((a, b) => new Date(b.introduction) - new Date(a.introduction))[0];
        const cheapestCar = selectedVehicles.sort((a, b) => a.price - b.price)[0];
        const gasolineCar = selectedVehicles.filter(car => car.fuel_type === 'gasoline');
        const greatestMileageCar = selectedVehicles.sort((a, b) => a.mileage - b.mileage)[0];

        if (newestCar === cheapestCar) {
            setGroupedCars( groupedCars => ({ ...groupedCars, newestCheapestCar: newestCar.model }));
        } else {
            setGroupedCars( groupedCars => ({ ...groupedCars, newestCar: newestCar.model }));
            setGroupedCars( groupedCars => ({ ...groupedCars, low_price: cheapestCar.model }));
        }
    
        if (gasolineCar.length > 1) {
            setGroupedCars( groupedCars => ({ ...groupedCars, gasolineCar: newestCar.model }));
        }
    
        setGroupedCars( groupedCars => ({ ...groupedCars, low_mileage: greatestMileageCar.model }));
        
    }
    

    const clearCarsSelected = () => {
        localStorage.clear();
    }

    const getComparisonRapport = () => {
        const doc = new jsPDF();


        doc.text(`Comparison between ${selectedVehicles[0].model} and ${selectedVehicles[1].model}`, 10, 10);


        const columns = ['Attribute', selectedVehicles[0].model, selectedVehicles[1].model];


        const rows = [
            ['Introduction', selectedVehicles[0].introduction, selectedVehicles[1].introduction],
            ['Price', selectedVehicles[0].price, selectedVehicles[1].price],
            ['Fuel Type', selectedVehicles[0].fuel_type, selectedVehicles[1].fuel_type],
            ['Mileage', selectedVehicles[0].mileage, selectedVehicles[1].mileage],
            ['Body Type', selectedVehicles[0].body_type, selectedVehicles[1].body_type],

        ];


        doc.autoTable({
            head: [columns],
            body: rows,
            startY: 20,
        });


        doc.save('comparison-rapport.pdf');
    }

    return (
        <div>
            <Head title='Compare cars' />
            <Header user={user} />

            <div className="bg-white dark:bg-gray-900 h-full p-4">
                <div className="mx-auto max-w-7xl">
                    <div className="mx-auto max-w-full text-center lg:mx-0 lg:flex-auto py-10 lg:text-left">
                        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                            Ready to Compare?
                        <br />
                            Find Your Perfect Car Today
                        </h2>
                        <p className="mt-6 px-4 md:px-0 text-lg leading-8 text-gray-300">
                            Start comparing cars now and make an informed decision on your next vehicle purchase.
                        </p>
                        {isVehicleSelected && (
                            <div className='mt-6 flex justify-center lg:justify-between items-center gap-5 flex-col md:flex-row'>
                                <button onClick={compare} type="button" className="flex justify-center items-center gap-2 py-3 px-5 my-3 mx-auto lg:mx-0 text-sm md:text-base font-medium text-center text-white rounded-lg bg-emerald-700 sm:w-fit hover:bg-emerald-800 focus:ring-4 focus:outline-none focus:ring-emerald-300 dark:bg-emerald-600 dark:hover:bg-emerald-700 dark:focus:ring-emerald-800">
                                    <ion-icon name="bookmark-outline"></ion-icon>
                                    Compare
                                </button>
                                <div className='flex justify-center lg:justify-between items-center gap-5 flex-col md:flex-row'>
                                    <button onClick={getComparisonRapport} type="button" className="flex justify-center items-center gap-2 py-3 px-5 my-3 mx-auto lg:mx-0 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                                        <ion-icon name="cloud-download-outline"></ion-icon>
                                        Get Comparison Rapport
                                    </button>

                                    <button onClick={clearCarsSelected} type="button" className="flex justify-center items-center gap-2 py-3 px-5 my-3 mx-auto lg:mx-0 text-sm md:text-base font-medium text-center text-white rounded-lg bg-red-700 sm:w-fit hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
                                        <ion-icon name="trash-outline"></ion-icon>
                                        Clear Comparison
                                    </button>

                                </div>

                            </div>
                        )}
                    </div>
                    <VehicleButton
                        brandData={brandData}
                        onVehicleSubmit={handleVehicleSubmit}
                        disable={disable}
                    />
                    <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-5">
                        {disableComparison && 
                            <>
                                {selectedVehicles && selectedVehicles.map((vehicle, index) => (
                                    <ComparedVehicle groupedCars={groupedCars} key={index} vehicle={vehicle} />
                                ))}
                            </>
                        }
                    </div>
                </div>
            </div>

            <Feedback />

            <Footer />
        </div>
    )
}

export default CompareTool
