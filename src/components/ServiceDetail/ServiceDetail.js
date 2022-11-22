import React from 'react';
import './ServiceDetail.css';
import { useParams, useNavigate } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import { useState, useEffect } from 'react';
import quote from '../../images/dq1.png'
import useAuth from './../../Hooks/useAuth';



const ServiceDetail = () => {
    const {user} = useAuth();

    const navigate = useNavigate();
    const goToHome = () => navigate('/home');
    
    const params = useParams();
    let serviceDetailsId = params.anyID;

    const [service, setService] = useState({});
    // console.log('state service:', service)
    //fetching data according to the service-Id (user clicked on home page)
    useEffect(() => {
        fetch('/serviceDetails.json')
            .then(res => res.json())
            .then(data => {
                if (+serviceDetailsId > 0 && +serviceDetailsId < 9) {
                    setService(data.find(x => x.id === +serviceDetailsId)) ///"+" is used here to convert string to number -shorthand --> instead of ".toString()"
                };
            })
    }, []);

    if(serviceDetailsId>=1 && serviceDetailsId<=8){
        // return false;
    }


    return (
        <div className='main-container'>

            <div className="service-details-header">
                <div className='service-details-header-text' >
                    <h2 >Service Details</h2>
                    <button className='service-details-header-button' onClick={goToHome}>Home</button>&gt; Service Details
                </div>
            </div>
            
            {/* Instruction for the user in case they visit this page without selecting any service details form Home. */}
            
            
            {(serviceDetailsId == 1 || serviceDetailsId ==2 || serviceDetailsId ==3 || serviceDetailsId ==4 || serviceDetailsId ==5 || serviceDetailsId ==6 || serviceDetailsId ==7 || serviceDetailsId ==8) || <h2 className='view-details-instruction container'>Please go to HOME page and find "Our Hospital Service" section then select the "Read More" button to view any service's details here!</h2>}


            <Card className='service-details-card container'>
                <Card.Img variant="top" src={service.image1} />
                <Card.Body className='service-card-boy'>
                    <Card.Text className='card-text-section'>
                        <h4>ID: {service.id} </h4>
                        <h2>{service.serviceName} </h2>
                        <h2>{service.heading1} </h2>
                        <p className='details1'>Service Details: {service.details1} </p>

                        <div className='details2-div'>
                            <img className='details-quote' src={quote} alt="" />
                            <p className='details2'> {service.details1} </p>
                        </div>

                        <p className='details1'> {service.details1} </p>

                        <div className='service-details-bottom'>
                            <div>
                                <img className='service-image2' src={service.image2} alt="" />
                            </div>
                            <div className='service-details-bottom-text-div'>
                                <h4>{service.heading2}</h4>
                                <p className='details1'> {service.details1} </p>
                                <p>{service.details2}</p>
                            </div>
                        </div>
                    </Card.Text>
                </Card.Body>
            </Card>


        </div>
    );
};

export default ServiceDetail;