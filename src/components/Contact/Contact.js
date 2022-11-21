import React from 'react';
import './Contact.css';

// import { MapContainer } from 'https://cdn.esm.sh/react-leaflet/MapContainer'
// import { TileLayer } from 'https://cdn.esm.sh/react-leaflet/TileLayer'
// import { useMap } from 'https://cdn.esm.sh/react-leaflet/hooks'

import { MapContainer } from 'react-leaflet/MapContainer'
import { TileLayer } from 'react-leaflet/TileLayer'
import { useMap } from 'react-leaflet/hooks'
import { Circle, Marker, Popup, CircleMarker, Tooltip, Polyline, Polygon } from 'react-leaflet';

// import "leaflet/dist/leaflet.css";
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import aboutImg2 from '../../images/about/about2.jpg'


const Contact = () => {
    // const position = [51.505, -0.09]
    // const position = [23.756482, 90.358738]
    const position = [51.5015, -0.0920]

    const center = [51.5015, -0.0920]
    const center2 = [51.52, -0.09]

    const polyline = [
        [51.505, -0.09],
        [51.51, -0.1],
        [51.51, -0.12],
    ]

    const multiPolyline = [
        [
            [51.5, -0.1],
            [51.5, -0.12],
            [51.52, -0.12],
        ],
        [
            [51.5, -0.05],
            [51.5, -0.06],
            [51.52, -0.06],
        ],
    ]

    const polygon = [
        [51.515, -0.09],
        [51.52, -0.1],
        [51.52, -0.12],
    ]

    const multiPolygon = [
        [
            [51.51, -0.12],
            [51.51, -0.13],
            [51.53, -0.13],
        ],
        [
            [51.51, -0.05],
            [51.51, -0.07],
            [51.53, -0.07],
        ],
    ]

    const rectangle = [
        [51.48, -0.08],
        [51.49, -0.05],
    ]

    // const fillBlueOptions = { fillColor: 'blue' }
    const fillBlueOptions = { color: 'dodgerBlue' }
    const blackOptions = { color: 'black' }
    const limeOptions = { color: 'lime' }
    const purpleOptions = { color: 'purple' }
    const redOptions = { color: 'red' }

    // to navigate home 
    const navigate = useNavigate();
    const goToHome = () => navigate('/home');

    return (
        <div>
            {/* contact section top  */}
            <div className="contact-us-header service-details-header">
                <div className='service-details-header-text' >
                    <h2 >Contact Us</h2>
                    <button className='service-details-header-button' onClick={goToHome}>Home</button>&gt; Contact Us
                </div>
            </div>

            {/* location-email-phone-section */}
            <div className="location-email-phone-section">
                <div className="icons-container container">
                    <div className="icon-div location">
                        <a href="#medicalMapLocation">
                            <FontAwesomeIcon className='icon location-icon-special' icon={faLocationDot} />
                        </a>
                        <h6>Location</h6>
                        <p>2108-267 Road Quadra,Toronto, Victiria Canada</p>
                    </div>
                    <div className="icon-div email">
                        <FontAwesomeIcon className='icon' icon={faEnvelope} />
                        <h6>Email</h6>
                        <p>hello@disin.com <br />
                            emailexample@name.com</p>
                    </div>

                    <div className="icon-div phone">
                        <FontAwesomeIcon className='icon' icon={faPhone} />
                        <h6>Phone</h6>
                        <p>+07 5554 3332 322 <br />
                            +07 5554 3332 322</p>
                    </div>
                </div>
            </div>

            {/* Drop your info section  */}
            <div className="drop-your-message">
                <div className="our-experience-content-2 container">
                    <div className="drop-left">
                        <h2>Drop your message for any info or question</h2>
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
                            <input className='contact-send-message' type="Submit" defaultValue="Send Message" />
                        </form>
                    </div>
                    <div className="drop-right">
                        <div className='drop-right-decoration1'></div>
                        <img src={aboutImg2} alt="" className='img-fluid' />
                        <div className="emergency-call-div">
                            <div className='emergency-call-icon-div'>
                                <FontAwesomeIcon className='emergency-call-icon' icon={faPhone} />
                            </div>
                            <div className='emergency-call-info-div'>
                                <h5>Emergency Call</h5>
                                <p>+07 554 332 322</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* map section // react-leaflet  */}
            <MapContainer id='medicalMapLocation' className="my-leaflet-div my-map2 container-fluid" center={center} zoom={13} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />


                {/* 1st custom red circle  */}
                <Circle center={[51.508, -0.11]} pathOptions={redOptions} radius={400}>
                    <Tooltip sticky>Danger area!</Tooltip>
                    <Popup>Popup - Surprise!</Popup>

                    <Circle center={[51.508, -0.11]} pathOptions={redOptions} radius={399}>
                    </Circle>
                    <Circle center={[51.508, -0.11]} pathOptions={redOptions} radius={398}>
                    </Circle>
                    <Circle center={[51.508, -0.11]} pathOptions={redOptions} radius={397}>
                    </Circle>
                </Circle>

                {/* 2nd mark/marker  */}
                <Marker position={position}>
                    <Popup permanent>
                        Safe Plus Dental Care
                        <br />
                        www.safeplus-d-care.com
                    </Popup>
                    <CircleMarker center={center} pathOptions={fillBlueOptions} radius={8} >
                        <Popup> Concord Tower </Popup>
                    </CircleMarker>
                </Marker>

                {/* 3rd option  */}
                <CircleMarker center={[51.513, -0.09]} pathOptions={fillBlueOptions} radius={0} >
                    <Tooltip className='tooltip3' direction="top" offset={[0, 20]} opacity={1} permanent>
                        <h6 className='tooltip3-text'> International Airport!</h6>
                        <h6 className='airport-distance'>2.01 km from hospital</h6>

                    </Tooltip>
                </CircleMarker>

            </MapContainer>
        </div>
    );
};

export default Contact;