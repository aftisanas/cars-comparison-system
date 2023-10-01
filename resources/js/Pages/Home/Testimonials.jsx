import React from 'react';

const Testimonials = () => {
    const testimonialsData = [
        {
        id: 1,
        name: 'John Doe',
        location: 'New York, USA',
        comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        },
        {
        id: 2,
        name: 'Jane Smith',
        location: 'London, UK',
        comment: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        },
        {
        id: 3,
        name: 'Bob Johnson',
        location: 'Sydney, Australia',
        comment: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        },
    ];

    return (
        <section className="bg-gray-100 dark:bg-gray-900 py-16">
            <div className="container mx-auto px-4">
                <div className="mx-auto max-w-2xl text-center mb-8">
                    <h2 className="text-base font-semibold leading-7 text-red-600">Testimonials</h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight dark:text-white text-gray-900 sm:text-4xl">What Our Customers Say</p>
                    <p className="mt-6 text-lg leading-8 text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias numquam expedita ex mollitia a!.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {testimonialsData.map(testimonial => (
                    <div key={testimonial.id} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                        <p className="mb-4 text-gray-800 dark:text-white">{testimonial.comment}</p>
                        <p className="text-gray-600 dark:text-red-600 font-semibold">{testimonial.name}</p>
                        <p className="text-gray-800 dark:text-gray-400">{testimonial.location}</p>
                    </div>
                ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
