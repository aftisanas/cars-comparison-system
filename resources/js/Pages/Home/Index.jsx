import React from 'react'
import Header from './Header'
import { Head } from '@inertiajs/react'
import Hero from './Hero'
import Footer from './Footer'
import HowItWorks from './HowItWorks'
import Testimonials from './Testimonials'
import EnquiryForm from './EnquiryForm'

const index = ({user}) => {
    return (
        <div>
            <Head title='Home page' />

            <Header user={user} />

            <Hero />

            <HowItWorks />

            <EnquiryForm user={user} />

            <Testimonials />

            <Footer />
        </div>
    )
}

export default index
