import React from 'react';
import treatment from '../../../assets/images/treatment.png'
const Terms = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 items-center justify-center py-16 gap-10'>
            <div>
                <img src={treatment} alt="" />
            </div>
            <div>
                <h1 className='text-4xl'>Exceptional Dental Care, on Your Terms</h1>
                <p className='my-8'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                <button className="py-2 px-4 text-white text-xl font-semibold mb-4 banner-btn">Get started</button>
            </div>
        </div>
    );
};

export default Terms;