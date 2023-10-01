import SideBar from '@/Components/SideBar';
import Authenticated from '@/Layouts/AuthenticatedLayout';
import { Head, router } from '@inertiajs/react';
import React, { useState } from 'react'

const EnquiriesList = ({user, enquiries}) => {
    const [showModal, setShowModal] = useState(false);
    const [reply, setReply] = useState('');
    const [email, setEmail] = useState('');
    const [searchQuery, setSearchQuery] = useState('');
    const [currentPage, setCurrentPage] = useState(enquiries.current_page);
    const request = {
        reply,
        email
    }

    const handlePreviousPage = () => {
        enquiries.prev_page_url && router.visit(enquiries.prev_page_url);
    }

    const handleNextPage = () => {
        enquiries.next_page_url && router.visit(enquiries.next_page_url);
    }

    const currentEnquiries = enquiries.data;


    const filteredEnquiries = currentEnquiries.filter(
        (enquiry) =>
        enquiry.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        enquiry.email.toString().includes(searchQuery) ||
        enquiry.message.toString().includes(searchQuery)
    );

    const handleSubmit = () => {
        router.post(`/reply-enquiry`, request, {
            onSuccess() {
                alert('reply sent successful');
            }
        });
    }

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
                                <h1 className="text-xl font-bold">Enquiries list</h1>
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
                                                <th scope="col" className="px-2 md:px-6 py-3">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {searchQuery ? 
                                                <>
                                                    {filteredEnquiries.map(enquiry => (
                                                        <tr key={enquiry.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                                            <th scope="row" className="px-2 md:px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                                {enquiry.name}
                                                            </th>
                                                            <td className="px-2 md:px-6 py-4">{enquiry.email}</td>
                                                            <td className="px-2 md:px-6 py-4">{enquiry.message}</td>
                                                            <td className="px-2 md:px-6 py-4">
                                                                <button onClick={() => setShowModal(true)} type='Button' className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Reply</button>
                                                            </td>
                                                        </tr>
                                                    ))}
                                                </>
                                                : 
                                                <>
                                                    {currentEnquiries.map(enquiry => (
                                                        <tr key={enquiry.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                                            <th scope="row" className="px-2 md:px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                                {enquiry.name}
                                                            </th>
                                                            <td className="px-2 md:px-6 py-4">{enquiry.email}</td>
                                                            <td className="px-2 md:px-6 py-4">{enquiry.message}</td>
                                                            <td className="px-2 md:px-6 py-4">
                                                                <button onClick={() => {setShowModal(true), setEmail(enquiry.email)}} type='Button' className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Reply</button>
                                                            </td>
                                                        </tr>
                                                    ))}
                                                </>
                                            }
                                        </tbody>
                                    </table>
                                </div>

                                {showModal ? (
                                    <>
                                    <div
                                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                                    >
                                        <div className="relative w-auto my-6 mx-auto max-w-3xl">
                                        {/*content*/}
                                        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white dark:bg-gray-800 outline-none focus:outline-none">
                                            {/*header*/}
                                            <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 dark:border-gray-400 rounded-t">
                                                <h3 className="text-3xl font-semibold text-gray-800 dark:text-white">
                                                    Reply
                                                </h3>
                                                <button
                                                    className="p-1 ml-auto bg-transparent border-0 text-gray-800 dark:text-gray-400 opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                                    onClick={() => setShowModal(false)}
                                                >
                                                    <span className="bg-transparent text-gray-800 opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                                    ×
                                                    </span>
                                                </button>
                                            </div>
                                            {/*body*/}
                                            <div className="relative p-6 flex-auto">
                                                <p className="my-4 text-slate-500 text-lg leading-relaxed">
                                                    Buy replying to this enquiry the answer should get it in the email box.
                                                </p>
                                                <form>
                                                <label htmlFor="message" class="block mb-2 text- md:text-md font-medium text-gray-900 dark:text-white">Your message</label>
                                                    <textarea name='message' id='message' rows={4} defaultValue ={reply} onChange={(e) =>{setReply(e.target.value)}} className="block p-2.5 w-full text-sm md:text-md text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>
                                                </form>
                                            </div>
                                            {/*footer*/}
                                            <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 dark:border-gray-400 rounded-b">
                                                <button
                                                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                    type="button"
                                                    onClick={() => setShowModal(false)}
                                                >
                                                    Close
                                                </button>
                                                <button
                                                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                    type="button"
                                                    onClick={handleSubmit}
                                                >
                                                    Send Reply
                                                </button>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                                    </>
                                ) : null}

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
                                        disabled={currentPage === enquiries.last_page}
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

export default EnquiriesList
