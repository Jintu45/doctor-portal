import React from 'react';

const InfoCard = ({infocard}) => {
    const {name, id, description, img, bgColor} = infocard
    return (
        <div className={`py-8 px-5 items-center justify-center rounded-lg flex ${bgColor}`}>
            <div>
                <img src={img} alt="" />
            </div>
            <div className='ml-3 text-white text-justify'>
                <h2 className='font-semibold text-xl'>{name}</h2>
                <p className='text-sm'>{description}</p>
            </div>
        </div>
    );
};

export default InfoCard;