import React from 'react';
import Header from '../../Share/Header/Header';
import Banner from '../Banner/Banner';
import Infocards from '../IfonCards/Infocards';
import MakeAppointment from '../MakeAppointment/MakeAppointment';
import Services from '../Services/Services';
import Terms from '../Terms/Terms';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Infocards></Infocards>
            <Services></Services>
            <Terms></Terms>
            <MakeAppointment></MakeAppointment>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;