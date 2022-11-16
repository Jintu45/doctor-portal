import React, { useState } from 'react';
import AppointmentAvilable from '../AppointmentAvilable/AppointmentAvilable';
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner';
import BokingModal from '../BokingModal/BokingModal';

const Appointment = () => {
    const [selectedDate, setSelectedDate] = useState(new Date())
    return (
        <div>
            <AppointmentBanner
                selectedDate={selectedDate}
                setSelectedDate={setSelectedDate}
            ></AppointmentBanner>
            <AppointmentAvilable
                 selectedDate={selectedDate}
                 setSelectedDate={setSelectedDate}
            ></AppointmentAvilable>
        </div>
    );
};

export default Appointment;