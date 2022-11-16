import React from 'react';
import quote from '../../../assets/icons/quote.svg'
import people1 from "../../../assets/images/people1.png"
import people2 from "../../../assets/images/people2.png"
import people3 from "../../../assets/images/people3.png"
import Review from './Review';
const Testimonial = () => {
    const reviews = [
        {
            _id: 1,
            name: "Winson Herry",
            description: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            title: "California",
            img: people1
        },
        {
            _id: 1,
            name: "Winson Herry",
            description: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            title: "California",
            img: people2
        },
        {
            _id: 1,
            name: "Winson Herry",
            description: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            title: "California",
            img: people3
        }
    ]
    return (
        <section>
            <div className='flex justify-between items-center'>
                <div>
                    <h2 className='text-sky-500 font-bold text-lg'>Testimonial</h2>
                    <h1 className='text-4xl'>What Our Patients Says</h1>
                </div>
                <div>
                    <img src={quote} alt="" />
                </div>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 py-10'>
                {
                    reviews.map(review => <Review
                        key={review._id}
                        review={review}
                    ></Review>)
                }
            </div>
        </section>
    );
};

export default Testimonial;