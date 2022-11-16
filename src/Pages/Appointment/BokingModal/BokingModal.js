import { format } from 'date-fns';
import React from 'react';

const BokingModal = ({treatment, setTreatment,  selectedDate}) => {
    const {name, slots} = treatment
    const date = format(selectedDate , "PP");

    const handleBooking = event => {
         event.preventDefault()
        const form = event.target;
        const slot = form.slot.value
        const name = form.name.value;
        const email = form.email.value;
        const number = form.number.value;
        //  [3, 4, 5].map((value, i) => console.log(value))
        const booking = {
            appointmentDate: date,
            treatment: name,
            patient: name,
            slot,
            email,
            number

        }
        setTreatment(null)
        console.log(booking)
    }
    return (
        <div>
                <input type="checkbox" id="booking-modal" className="modal-toggle" />
                <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold mb-4 text-center">{name}</h3>
                   <form onSubmit={handleBooking}>
                   
                        <input type="text" value={date}  className="input input-bordered  w-full mb-3" disabled/>

                        <select name='slot' className="select select-ghost w-full mb-4">
                            
                            {
                                slots?.map((slot, i) =><option key={i} value={slot}>{slot}</option>)
                            }
                        </select>
                        <input type="text" name='name' placeholder="Name" className="input input-bordered  w-full mb-3" />

                        <input type="email" name='email' placeholder="Your email" className="input input-bordered  w-full mb-3" />

                        <input type="text" name='number' placeholder="Phone number" className="input input-bordered  w-full mb-3" />

                        <input className='mt-5 text-center w-full bg-slate-900 py-2 px-5 text-white font-bold rounded-xl' type="submit" value="Submit" />
                   </form>
                </div>
            </div>
        </div>
    );
};

export default BokingModal;