import { Head } from '@inertiajs/react';
import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';

const ComparisonFAQ = ({user}) => {
    const [activeQuestion, setActiveQuestion] = useState(null);

    const carComparisonFAQ = [
        {
            question: "How do I compare different car models?",
            response: "To compare different car models, follow these steps:\n1. Select the desired year of the car.\n2. Choose the make (brand) of the car.\n3. Select the specific model of the car.\n4. Repeat the above steps for each car model you want to compare."
        },
        {
            question: "Can I compare cars from different years?",
            response: "Yes, you can compare cars from different years. Simply select the desired year for each car you want to compare."
        },
        {
            question: "Is there a limit to the number of cars I can compare?",
            response: "There is typically no strict limit to the number of cars you can compare. However, keep in mind that comparing too many cars at once may make it harder to analyze the information effectively."
        },
        {
            question: "What information is included in the car comparison?",
            response: "The car comparison includes details such as the make, model, year, and any additional specifications or features available for each selected car."
        },
        {
            question: "How do I remove a car from the comparison list?",
            response: "To remove a car from the comparison list, simply click on the remove or delete option next to the car's details in the comparison view."
        },
        {
            question: "Can I save or share my car comparison results?",
            response: "Yes, you can typically save or share your car comparison results. Look for options like 'Save Comparison' or 'Share Comparison' to do so."
        },
        {
            question: "Are the prices shown in the comparison accurate?",
            response: "The prices displayed in the comparison are usually sourced from reputable sources, but they may be subject to change. It's recommended to verify the prices with official dealerships or sellers."
        },
        {
            question: "How often is the car comparison data updated?",
            response: "The frequency of data updates may vary. It's advisable to check for any update information provided by the car comparison platform or service."
        },
        {
            question: "Can I compare cars based on specific features or specifications?",
            response: "Yes, many car comparison tools allow you to filter and compare cars based on specific features, such as fuel efficiency, safety ratings, and more."
        },
        {
            question: "What if I have a question or issue while using the car comparison tool?",
            response: "If you encounter any questions or issues while using the car comparison tool, feel free to reach out to our support team for assistance. We're here to help!"
        }
    ];
    

    const toggleQuestion = (index) => {
        setActiveQuestion(activeQuestion === index ? null : index);
    }

    return (
        <>
            <Head title='FAQ' />
            
            <Header user={user}/>

            <div className='bg-white dark:bg-gray-900 py-20'>
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-base font-semibold leading-7 text-red-600">FAQ</h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight dark:text-white text-gray-900 sm:text-4xl">Car Comparison FAQ</p>
                    <p className="mt-6 text-lg leading-8 text-gray-400">Get answers to frequently asked questions about our car comparison tool.</p>
                </div>
                {carComparisonFAQ.map((faqItem, index) => (
                    <div key={index} className='md:w-2/3 w-11/12 mx-auto my-10'>
                        <button 
                            type="button" 
                            className="flex items-center justify-between w-full py-5 font-medium text-left text-gray-500 dark:text-white border-b border-gray-200 dark:border-gray-700" 
                            onClick={() => toggleQuestion(index)}
                            aria-expanded={activeQuestion === index}
                        >
                            <span>{faqItem.question}</span>
                            <svg 
                                className={`w-3 h-3 transform ${activeQuestion === index ? 'rotate-180' : ''}`} 
                                aria-hidden="true" 
                                xmlns="http://www.w3.org/2000/svg" 
                                fill="none" 
                                viewBox="0 0 10 6"
                            >
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5"/>
                            </svg>
                        </button>
                        {activeQuestion === index && (
                            <div className="py-5 border-b border-gray-200 dark:border-gray-700">
                                <p className="mb-2 text-gray-500 dark:text-gray-400">{faqItem.response}</p>
                            </div>
                        )}

                    </div>
                ))}
                <div className="max-w-2xl mx-auto text-center my-8 md:my-20">
                    <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
                        Need further assistance?
                    </h2>
                    <p className="text-gray-500 dark:text-gray-400 mb-6">
                        If you have any other questions or encounter issues, feel free to get in touch with us!
                    </p>
                    <a href="/contact" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-red-700 hover:bg-red-800 focus:ring-4 focus:stroke-red-300 dark:focus:stroke-red-900">
                        Get in Touch
                    </a>
                </div>
            </div>
        
            <Footer />
        </>
    );
};

export default ComparisonFAQ;
