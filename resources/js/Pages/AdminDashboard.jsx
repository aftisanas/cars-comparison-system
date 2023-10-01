import Authenticated from '@/Layouts/AuthenticatedLayout'
import React, {useState} from 'react';
import { Head } from '@inertiajs/react';
import SideBar from '@/Components/SideBar';

const AdminDashboard = ({user}) => {

    return (
        <div>
            <Authenticated
                user={user}
                // header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Admin Dashboard</h2>}
            >
                <Head title="Admin dashboard" />

                <div className="p-1 sm:px-6 lg:px-10">
                    <div className="max-w-7xl mx-auto flex h-screen bg-gray-200 relative rounded">
                        <SideBar />

                        {/* right side */}
                        <div className="flex-1 p-4">

                            <div className="flex items-center justify-between mb-4">
                                <h1 className="text-xl font-bold">Dashboard</h1>
                                {/* <button className="bg-gray-800 text-white p-2 rounded hover:bg-gray-700">Logout</button> */}
                            </div>

                            <div className="bg-white p-4 rounded shadow">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc magna massa, ornare quis interdum a, cursus in quam. Quisque risus libero, cursus eget eros vitae, aliquam placerat velit. Vivamus luctus eros id sagittis luctus. Pellentesque felis nulla, rhoncus viverra nunc vitae, viverra aliquam ante. Ut feugiat mattis tempor.</p>
                            </div>
                        </div>
                    </div>
                </div>

                
            </Authenticated>
        </div>
    )
}

export default AdminDashboard
