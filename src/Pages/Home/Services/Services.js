import React from 'react';
import fluoride from '../../../assets/images/fluoride.png'
import cavity from '../../../assets/images/cavity.png'
import teeth from '../../../assets/images/whitening.png'
import Service from './Service';

const Services = () => {
    const services = [
        {
            id:1,
            name: 'Fluoride Treatment',
            img: fluoride,
            title: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the"
        },
        {
            id:2,
            name: 'Cavity Filling',
            img: cavity,
            title: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the"
        },
        {
            id:3,
            name: 'Teeth Whitening',
            img: teeth,
            title: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the"
        }
    ]
    return (
       <div>
        <div className='text-center py-3'>
            <h4 className=' text-lg font-bold text-teal-500 mb-3'>OUR SERVICES</h4>
            <h4 className='text-3xl'>Services We Provide</h4>
        </div>
         <div className='grid grid-cols-1 lg:grid-cols-3 py-10 gap-3'>
            {
                services.map(service => <Service
                    key={service.id}
                    service={service}
                >
                </Service>
                )
            }
        </div>
       </div>
    );
};

export default Services;