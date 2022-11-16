import React from 'react';
import appointment from '../../../assets/images/appointment.png'
import doctor from '../../../assets/images/doctor-small.png'
const MakeAppointment = () => {
    return (
       <section className='' 
        style={{
            background: `url(${appointment})`
        }}
       >
            <div className='grid grid-cols-1 lg:grid-cols-2 justify-center items-center my-32'>
                <div>
                    <img className=" -mt-32" src={doctor} alt="" />
                </div>
                <div>
                    <h3 className='text-lg font-bold text-sky-500'>Appointment</h3>
                    <p className='text-white my-5'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                    <button className="py-2 px-4 text-white text-xl font-semibold mb-4 banner-btn">Get started</button>
                </div>
            </div>
       </section>
    );
};

export default MakeAppointment;