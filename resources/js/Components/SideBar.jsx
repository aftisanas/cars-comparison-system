import { Link } from '@inertiajs/react'
import React, { useState } from 'react'
import ApplicationLogo from './ApplicationLogo';

const SideBar = () => {
        // Initialize the state for the dropdown menu visibility and icon rotation
        const [isDropdownOpen, setIsDropdownOpen] = useState(false);
        const [iconRotation, setIconRotation] = useState('');
    
        // Initialize the state for the sidebar visibility
        const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    
        // Function to toggle the dropdown menu and icon rotation
        const toggleDropdown = () => {
            setIsDropdownOpen(!isDropdownOpen);
            setIconRotation(isDropdownOpen ? '' : 'rotate-180');
        };
    
        // Function to toggle the sidebar visibility
        const toggleSidebar = () => {
            setIsSidebarOpen(!isSidebarOpen);
        };
        
    return (
        <div>
            {/* Button to toggle the sidebar */}
            <button className="bg-gray-800 text-white p-2 rounded hover:bg-gray-700 absolute top-3 right-3 md:hidden flex justify-center items-center" onClick={() => toggleSidebar()}>
                <ion-icon name="menu-outline"></ion-icon>
            </button>
            
            {/* left side */}
            <div className={`w-64 h-full bg-gray-800 text-white flex flex-col md:block transition absolute top-0 rounded-s md:static duration-300 z-50 ${isSidebarOpen ? 'block' : 'hidden'}`}>

                <div className="p-4 mx-2">
                    <Link href="/">
                        {/* <ApplicationLogo className="block h-9 w-auto fill-current text-gray-800 dark:text-gray-200" /> */}
                        <img
                            className="block h-10 w-auto"
                            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                            alt="Car comparison system"
                        />
                    </Link>
                    {/* <span className="text-xl font-bold ml-2">Dashboard</span> */}
                </div>

                <nav className="p-4">
                    <ul>
                        <li className="mb-2"><Link href="users-list" className="flex items-center justify-start gap-3 p-2 rounded hover:bg-gray-700"><ion-icon name="person-outline"></ion-icon> Users</Link></li>
                        <li className="mb-2">
                            <Link href="/cars" className="flex items-center justify-start gap-3 p-2 rounded hover:bg-gray-700">
                                <ion-icon name="car-sport-outline"></ion-icon> 
                                Cars
                            </Link>
                        </li>
                        <li className="mb-2"><Link href="/feedbacks" className="flex items-center justify-start gap-3 p-2 rounded hover:bg-gray-700"><ion-icon name="chatbox-ellipses-outline"></ion-icon> Feedback</Link></li>
                        <li className="mb-2"><Link href="/enquiries" className="flex items-center justify-start gap-3 p-2 rounded hover:bg-gray-700"><ion-icon name="help-circle-outline"></ion-icon> Enquiries</Link></li>
                    </ul>
                </nav>
            </div>
        </div>

    )
}

export default SideBar
