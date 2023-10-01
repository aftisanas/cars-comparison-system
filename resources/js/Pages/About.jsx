import { Head, Link } from '@inertiajs/react'
import React from 'react'
import Header from './Home/Header'
import Footer from './Home/Footer'

const About = ({user}) => {
    return (
        <>
            <Head title='About' />
            
            <Header user={user}/>

            <div className="w-full h-screen mx-auto px-4 py-8 bg-white dark:bg-gray-900">
                <h1 className="text-4xl font-bold text-center text-gray-800 dark:text-white">About Us</h1>
                <p className="my-10 w-11/12 md:w-3/4 mx-auto text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                    We are a team of passionate car enthusiasts who love to compare different models and features of cars. We created this website to help you find the best car for your needs and budget. You can browse through our database of thousands of cars from various brands and categories, and compare them side by side on various criteria such as price, performance, fuel efficiency, safety, reliability, and more. You can also read reviews from other users and experts, and share your own opinions and experiences with the cars you own or test drive.
                </p>
                <p className="my-10 w-11/12 md:w-3/4 mx-auto text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                    Our mission is to provide you with the most accurate and up-to-date information about cars, and to make your car shopping experience easy and enjoyable. Whether you are looking for a new or used car, a family car or a sports car, a luxury car or an economy car, we have got you covered. We hope you find our website useful and informative, and we welcome your feedback and suggestions on how we can improve our service.
                </p>
                <p className="my-10 w-11/12 md:w-3/4 mx-auto text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae, voluptatibus! Libero deserunt dicta ad aperiam laudantium corporis necessitatibus error tempore consequatur eum cumque consequuntur molestias culpa, quod perferendis suscipit animi.
                    Error quas deleniti deserunt consequuntur voluptatem labore minus cum iste ullam! Voluptate itaque impedit corrupti consectetur debitis! Magni, repellendus. Fugit porro fuga harum quam molestiae delectus quis temporibus deleniti eos?
                    Aspernatur nihil tempore dignissimos placeat atque fugit error sunt dolorum, animi nobis laborum recusandae cum porro aliquid pariatur inventore nesciunt exercitationem doloremque expedita eligendi sequi ut eaque. Perspiciatis, dolor placeat?
                    Earum inventore ad quod reprehenderit accusamus. Nisi dignissimos quasi provident architecto accusamus? Adipisci sapiente saepe maiores, sed error iusto a debitis eius in voluptatibus quaerat atque ipsam veniam neque reprehenderit?
                    Amet porro accusantium inventore a nemo voluptatem error molestiae aliquam aut, necessitatibus ea commodi sapiente doloremque pariatur expedita dolor suscipit nulla rem obcaecati dolores. Vel facilis tempora facere nisi harum?
                    Vitae inventore possimus, natus molestias tempore quisquam doloremque explicabo accusantium consequatur optio, praesentium perspiciatis a asperiores officia obcaecati, libero beatae rem iure quaerat quam numquam at distinctio est.
                </p>
                <div className="mt-8 flex justify-center">
                    <Link to="/contact" className="bg-red-600 hover:bg-red-800 text-white font-bold py-2 px-10 rounded">Contact Us</Link>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default About
