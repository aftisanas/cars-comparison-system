import SideBar from '@/Components/SideBar';
import Authenticated from '@/Layouts/AuthenticatedLayout';
import { Head, router } from '@inertiajs/react';
import React, { useState } from 'react'

const FeedbackList = ({user, feedbacks}) => {
    const [currentPage, setCurrentPage] = useState(feedbacks.current_page);
    const [searchQuery, setSearchQuery] = useState('');

    const handlePreviousPage = () => {
        feedbacks.prev_page_url && router.visit(feedbacks.prev_page_url);
    }

    const handleNextPage = () => {
        feedbacks.next_page_url && router.visit(feedbacks.next_page_url);
    }

    const currentFeedbacks = feedbacks.data;


    const filteredFeedbacks = currentFeedbacks.filter(
        (feedback) =>
        feedback.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        feedback.email.toString().includes(searchQuery) ||
        feedback.message.toString().includes(searchQuery)
    );


    return (
        <div>
            <Authenticated
                user={user}
            >
                <Head title="Admin dashboard" />

                <div className="p-1 sm:px-6 lg:px-10">
                    <div className="max-w-7xl mx-auto flex h-screen lg:h-screen bg-gray-200 relative rounded">
                        <SideBar />

                        {/* right side */}
                        <div className="w-full h-full p-4">

                            <div className="flex items-center justify-between mb-4">
                                <h1 className="text-xl font-bold">Feedbacks list</h1>
                                {/* <button className="bg-gray-800 text-white p-2 rounded hover:bg-gray-700">Logout</button> */}
                            </div>
                            
                            <div className="relative sm:rounded-lg  overflow-x-auto">
                                <div className="pb-4 flex items-start md:justify-between gap-3 md:gap-0 flex-col md:flex-row">
                                    <div className='w-full md:w-80'>
                                        <label htmlFor="table-search" className="sr-only">Search</label>
                                        <div className="relative mt-1">
                                                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                                                    </svg>
                                                </div>
                                                <input 
                                                    type="text" 
                                                    id="table-search" 
                                                    onChange={(e) => setSearchQuery(e.target.value)}
                                                    className="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-full md:w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-indigo-500" placeholder="Search for items"/>
                                        </div>
                                    </div>
                                </div>

                                <div className="table-responsive overflow-x-auto">
                                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                            <tr>
                                                <th scope="col" className="px-2 md:px-6 py-3">name</th>
                                                <th scope="col" className="px-2 md:px-6 py-3">email</th>
                                                <th scope="col" className="px-2 md:px-6 py-3">message</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {searchQuery ? 
                                                <>
                                                    {filteredFeedbacks.map(feedback => (
                                                        <tr key={feedback.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                                            <th scope="row" className="px-2 md:px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                                {feedback.name}
                                                            </th>
                                                            <td className="px-2 md:px-6 py-4">{feedback.email}</td>
                                                            <td className="px-2 md:px-6 py-4">{feedback.message}</td>
                                                        </tr>
                                                    ))}
                                                </>
                                                : 
                                                <>
                                                    {currentFeedbacks.map(feedback => (
                                                        <tr key={feedback.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                                            <th scope="row" className="px-2 md:px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                                {feedback.name}
                                                            </th>
                                                            <td className="px-2 md:px-6 py-4">{feedback.email}</td>
                                                            <td className="px-2 md:px-6 py-4">{feedback.message}</td>
                                                        </tr>
                                                    ))}
                                                </>
                                            }
                                        </tbody>
                                    </table>
                                </div>

                                {/* Pagination controls */}
                                <div className="flex justify-between mt-4">
                                    <button
                                        disabled={currentPage === '1'}
                                        onClick={handlePreviousPage}
                                        className="flex items-center justify-center px-4 h-10 mr-3 text-base font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                                        <svg className="w-3.5 h-3.5 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10"
                                    >
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 5H1m0 0 4 4M1 5l4-4"/>
                                        </svg>
                                        Previous
                                    </button>
                                    <button 
                                        disabled={currentPage === feedbacks.last_page}
                                        onClick={handleNextPage}
                                        className="flex items-center justify-center px-4 h-10 text-base font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                                    >
                                        Next
                                        <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </Authenticated>
        </div>
    )
}

export default FeedbackList
