import React from 'react';

const Review = ({review}) => {
    const {img, name, title, description} = review
    return (
        <div className='shadow-2xl p-4'>
            <p>{description}</p>
            <div className='flex items-center mt-4'>
                <div>
                <img className='' src={img} alt="" />
                </div>
                <div className='ml-4 text-justify'>
                <h3>{name}</h3>
                <p>{title}</p>
                </div>
            </div>
        </div>
    );
};

export default Review;