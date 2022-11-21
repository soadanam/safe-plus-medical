import React from 'react';
import { useNavigate } from 'react-router-dom';

import doctor from '../../images/doctors/doctor3.jpg'
import doctor2 from '../../images/about/about1.jpg'



const Appointment = () => {
    const navigate = useNavigate();
    const goToHome = () => navigate('/home');
    return (
        <div className='pb-5'>
            <div className="service-details-header">
                <div className='service-details-header-text' >
                    <h2 >Appointment</h2>
                    <button className='service-details-header-button' onClick={goToHome}>Home</button>&gt; Appointment Section
                </div>
            </div>

            {/* Appointment section  */}
            <div className="drop-your-message">
                <div className="our-experience-content-2 container">
                    <div className="drop-left">
                        <h2>Fill up your information for an appointment:</h2>
                        <form action="">
                            <div className='contact-email-pass'>
                                <input className="form-control" type="text" placeholder='Your Name' />
                                <input className="form-control" type="text" placeholder='Your email' />
                                <input className="form-control" type="text" placeholder='Your phone number' />
                                <input className="form-control" type="text" placeholder='Your Subject' />
                            </div>

                            <br />
                            <textarea className="form-control" name="" id="" cols="30" rows="5" placeholder='Write your message...'></textarea>

                            <br />
                            <input className='contact-send-message' type="Submit" defaultValue="Submit Info" />
                        </form>
                    </div>
                    <div className="drop-right">
                        <div className='drop-right-decoration1'></div>
                        <img src={doctor2} alt="" className='img-fluid' />
                        <div className="emergency-call-div">
                            <div className='emergency-call-info-div'>
                                <h5>Dr. Andrew</h5>
                                <p>+07 554 332 322</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Appointment;