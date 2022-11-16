import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import BokingModal from '../BokingModal/BokingModal';
import AppointmentOption from './AppointmentOption';

const AppointmentAvilable = ({selectedDate, setSelectedDate}) => {
    const [appointmentOptions, setAppointmentOption] = useState([])
    const [treatment, setTreatment] = useState([])
    useEffect(()=>{
        fetch('appointment.json')
        .then(res => res.json())
        .then(data => setAppointmentOption(data))
    }, [])
    return (
        <section>
             <p className='text-center text-sky-500 font-bold py-5'>Available Appointment date {format(selectedDate, 'PP')}</p>

             <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 py-10'>
                {
                    appointmentOptions.map(option => <AppointmentOption
                        key={option._id}
                        option={option}
                        setTreatment={setTreatment}
                    ></AppointmentOption>)
                }
             </div>
                {    
                treatment &&
                    <BokingModal
                    selectedDate={selectedDate}
                    treatment={treatment}
                    setTreatment={setTreatment}
                    >
                    </BokingModal>
                }
                
        </section>
    );
};

export default AppointmentAvilable;