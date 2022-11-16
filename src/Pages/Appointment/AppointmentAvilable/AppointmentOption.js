import React from 'react';

const AppointmentOption = ({option, setTreatment}) => {
    const {name, slots} = option
    return (
        <div className='shadow-2xl p-6 rounded-xl text-center'>
            <h2> {name}</h2>
            <p>{slots.length > 0 ? slots[0] : 'try another day'}</p>
            <p className='mb-4'>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} available</p>
            <button>
            <label
                onClick={()=>setTreatment(option)} htmlFor="booking-modal" className="py-2 px-5 cursor-pointer text-white text-xl font-semibold mb-4 banner-btn"
                
                >
                Book Appointment
            </label>
            </button>
        </div>
    );
};

export default AppointmentOption;