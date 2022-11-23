import React from 'react';
import './Home.css';
import Carousel from 'react-bootstrap/Carousel';
import banner1 from '../../images/slider/home-slider1.png'
import banner2 from '../../images/slider/home-slider2.png'
import banner3 from '../../images/slider/home-slider3.png'
import { Button, Form, InputGroup, Modal } from 'react-bootstrap';
import { faArrowRight, faBedPulse, faCalendarDays, faCheckCircle, faCircleCheck, faMedal, faPeopleGroup, faRightLong, faUserDoctor } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import aboutImg1 from '../../images/about/about1.jpg';
import aboutImg2 from '../../images/about/about2.jpg';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
// import Sonnet from '../../components/Sonnet';
import Sonnet from './../Sonnet/Sonnet';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import doctor1 from '../../images/doctors/doctor1.jpg'
import doctor2 from '../../images/doctors/doctor2.jpg'
import doctor3 from '../../images/doctors/doctor3.jpg'
import blog1 from '../../images/blogs/blog1.jpg'
import blog2 from '../../images/blogs/blog2.jpg'
import blog3 from '../../images/blogs/blog3.jpg'
import { useNavigate } from 'react-router-dom';
import 'animate.css';



const Home = () => {

    //// react modal (here using to display and play a popup video)
    const [modalShow, setModalShow] = React.useState(false);
    function MyVerticallyCenteredModal(props) {
        return (
            <Modal className='modal-for-popup-video'
                {...props}
                // size="xl"
                size="lg"
                centered
            >
                <Modal.Header closeButton className='myModal-header'>
                    <div className="ratio ratio-16x9">
                        <iframe className='iframe-video' src="https://www.youtube.com/embed/bk7McNUjWgw?&autoplay=1" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                </Modal.Header>

            </Modal>
        );
    };


    //dynamic routing depending on service button unique id
    const navigate = useNavigate();
    const handleServiceReadMoreButton = (id) => {
        navigate(`/service-detail/${id}`)
    };

    // navigate to appointment section
    const handleGetAppointment = () => navigate('/appointment');
    
    //navigate to contact page
    const handleKnowMoreButton = () => navigate('/contact');


    // console.log("mr P:", document.querySelectorAll(" p * div "))


    return (
        <div className='home-container'>


            {/* //top section  */}
            <div className='top-section'>
                <Carousel className=''>
                    <Carousel.Item className='carousel-item'>
                        <div className='container carousel-info'>
                            <div className='carousel-text'>
                                <h2>Exceptional Health Care for Woman</h2>
                                <p>Following up with our patient post-appointment is a great way to maintain a relationship as well as remain updated with their condition. This is especially important if they have gone through a major operation or we've given them a life changing diagnosis.</p>

                                <Button className='carousel-btn-get-appoint' variant="outline-primary" onClick={handleGetAppointment}>Get Appointment</Button>{' '}
                                <Button variant="primary" className='carousel-btn-know-more' onClick={handleKnowMoreButton}>Know More</Button>{' '}
                            </div>
                            <div className='carousel-image'>
                                <img
                                    className="d-block w-100 img-fluid"
                                    src={banner1}
                                    alt="First slide"
                                />
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item className='carousel-item'>
                        <div className='container carousel-info'>
                            <div className='carousel-text'>
                                <h2>Caring Health is Important Than All</h2>
                                <p>Following up with our patient post-appointment is a great way to maintain a relationship as well as remain updated with their condition. This is especially important if they have gone through a major operation or we've given them a life changing diagnosis.</p>

                                <Button className='carousel-btn-get-appoint' variant="outline-primary">Get Appointment</Button>{' '}
                                <Button variant="primary" className='carousel-btn-know-more'>Know More</Button>{' '}
                            </div>
                            <div className='carousel-image'>
                                <img
                                    className="d-block w-100 img-fluid"
                                    src={banner2}
                                    alt="First slide"
                                />
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item className='carousel-item'>
                        <div className='container carousel-info'>
                            <div className='carousel-text'>
                                <h2>We Offer Highly Treatments</h2>
                                <p>Following up with our patient post-appointment is a great way to maintain a relationship as well as remain updated with their condition. This is especially important if they have gone through a major operation or we've given them a life changing diagnosis.</p>

                                <Button className='carousel-btn-get-appoint' variant="outline-primary">Get Appointment</Button>{' '}
                                <Button variant="primary" className='carousel-btn-know-more'>Know More</Button>{' '}
                            </div>
                            <div className='carousel-image'>
                                <img
                                    className="d-block w-100 img-fluid"
                                    src={banner3}
                                    alt="First slide"
                                />
                            </div>
                        </div>
                    </Carousel.Item>
                </Carousel>
                {/* statistics section  */}
                <div className="header-statistics container">
                    <div className="patients-bed">
                        <h2><FontAwesomeIcon icon={faBedPulse} /></h2>
                        <h2>850</h2>
                        <p>Patients Beds</p>
                    </div>
                    <div className="happy-patient">
                        <h2><FontAwesomeIcon icon={faPeopleGroup} /></h2>
                        <h2>25000+</h2>
                        <p>Happy Patients</p>
                    </div>
                    <div className="doctors-and-nurse">
                        <h2><FontAwesomeIcon icon={faUserDoctor} /></h2>
                        <h2>750</h2>
                        <p>Doctors & Nurse</p>
                    </div>
                    <div className="your-experience">
                        <h2><FontAwesomeIcon icon={faMedal} /></h2>
                        <h2>18</h2>
                        <p>Your Experience</p>
                    </div>
                </div>
            </div>


            {/* about section  */}
            <div className="about-section container">
                <div className="about-left">
                    <img src={aboutImg1} alt="" className='img-fluid' />
                </div>
                <div className="about-right">
                    <h2 className='fw-bold'>About Our Hospital</h2>
                    <p>Great medical office, wonderful and warm experience from start to finish. Appreciate Dr. Moon taking time to go over the diagnosis clearly and treatment options. Was referred over by my general doctor and can see why. Highly recommended.</p>

                    {/* <FontAwesomeIcon icon={faCheckCircle} /> */}
                    <div className='about-icons'>
                        <i className="fa-regular fa-circle-check"></i> Browse Our Website <br />
                        <i className="fa-regular fa-circle-check"></i> Choose Service <br />
                        <i className="fa-regular fa-circle-check"></i> Send Message <br />
                    </div>

                    <button className="btn btn-primary about-btn" onClick={handleKnowMoreButton}>Know More</button>


                </div>
            </div>


            {/* Out Hospital Services Section */}
            <div className="our-hospital-services-section container">
                <h2>Our Hospital Services </h2>

                <div className="all-services">
                    <div className='expert-doctor hospital-service'>
                        <i className="fa-solid fa-user-doctor"></i>
                        <h4>Expert Doctor</h4>
                        <p>Identify and diagnose disease processes that help determine!</p>
                        <button onClick={() => handleServiceReadMoreButton(1)} className='all-services-read-more-button'>Read More</button>
                    </div>
                    <div className="diagnosis">
                        <i className="fa-solid fa-clipboard-list"></i>
                        <h4>Diagnosis</h4>
                        <p>Pathologists draw on their extensive medical knowledge.</p>
                        <button onClick={() => handleServiceReadMoreButton(2)} className='all-services-read-more-button'>Read More</button>
                    </div>
                    <div className="pathology">
                        <i className="fa-solid fa-notes-medical"></i>
                        <h4>Pathology</h4>
                        <p> Additionally, pathology offers a broad scope of them.</p>
                        <button onClick={() => handleServiceReadMoreButton(3)} className='all-services-read-more-button'>Read More</button>
                    </div>
                    <div className="dental-care">
                        <i className="fa-solid fa-tooth"></i>
                        <h4>Dental Care</h4>
                        <p> Pathology offers a broad scope of practice work balance.</p>
                        <button onClick={() => handleServiceReadMoreButton(4)} className='all-services-read-more-button'>Read More</button>
                    </div>
                    <div className="cardiology">
                        <i className="fa-solid fa-heart-pulse"></i>
                        <h4>Cardiology</h4>
                        <p>Pathology offers a broad scope of practice work balance.</p>
                        <button onClick={() => handleServiceReadMoreButton(5)} className='all-services-read-more-button'>Read More</button>
                    </div>
                    <div className="medicine">
                        <i className="fa-solid fa-capsules"></i>
                        <h4>Medicine</h4>
                        <p>Additionally, pathology offers a broad scope of them.</p>
                        <button onClick={() => handleServiceReadMoreButton(6)} className='all-services-read-more-button'>Read More</button>
                    </div>
                    <div className="neurology">
                        <i className="fa-solid fa-dna"></i>
                        <h4>Neurology</h4>
                        <p>Pathologists draw on their extensive medical knowledge.</p>
                        <button onClick={() => handleServiceReadMoreButton(7)} className='all-services-read-more-button'>Read More</button>
                    </div>
                    <div className="neurology">
                        <i className="fa-solid fa-truck-medical"></i>
                        <h4>Ambulance</h4>
                        <p>Identify and diagnose disease processes that helps us!</p>
                        <button onClick={() => handleServiceReadMoreButton(8)} className='all-services-read-more-button'>Read More</button>
                    </div>
                    <div className="dental-care">
                        <i className="fa-solid fa-tooth"></i>
                        <h4>Dental Care</h4>
                        <p> Pathology offers a broad scope of practice work balance.</p>
                        <button onClick={() => handleServiceReadMoreButton(4)} className='all-services-read-more-button'>Read More</button>
                    </div>
                    <div className="cardiology">
                        <i className="fa-solid fa-heart-pulse"></i>
                        <h4>Cardiology</h4>
                        <p>Pathology offers a broad scope of practice work balance.</p>
                        <button onClick={() => handleServiceReadMoreButton(5)} className='all-services-read-more-button'>Read More</button>
                    </div>
                    <div className="medicine">
                        <i className="fa-solid fa-capsules"></i>
                        <h4>Medicine</h4>
                        <p>Additionally, pathology offers a broad scope of them.</p>
                        <button onClick={() => handleServiceReadMoreButton(6)} className='all-services-read-more-button'>Read More</button>
                    </div>
                    <div className="pathology">
                        <i className="fa-solid fa-notes-medical"></i>
                        <h4>Pathology</h4>
                        <p> Additionally, pathology offers a broad scope of them.</p>
                        <button onClick={() => handleServiceReadMoreButton(3)} className='all-services-read-more-button'>Read More</button>
                    </div>
                </div>
            </div>


            {/* Our expertise section  */}
            <div className="our-expertise-section container">
                <h2>Our Expertise</h2>
                <div className="our-experience-content">
                    <div className="expertise-left">
                        <div className="certified-doctors">
                            <i className="fa-solid fa-user-doctor"></i>
                            <h4>Best Doctors</h4>
                            <p>Identify & diagnose disease processes helps determine!</p>
                        </div>
                        <div className="emergency">
                            <i className="fa-solid fa-bed-pulse"></i>
                            <h4>Emergency</h4>
                            <p>Additionally, pathology offers a broad scope of them.</p>
                        </div>
                        <div className="technology">
                            <i className="fa-solid fa-network-wired"></i>
                            <h4>Technology</h4>
                            <p>Pathologists drawss their extensive medical knowledge.</p>
                        </div>
                        <div className="ambulance">
                            <i className="fa-solid fa-truck-medical"></i>
                            <h4>Ambulance</h4>
                            <p>Pathologists draw on their extensive medical knowledge.</p>
                        </div>
                    </div>
                    <div className="experience-right">
                        <div>
                            <div className='experience-right-decoration'></div>
                            <img src={aboutImg2} alt="" className='img-fluid expertise-image' />
                        </div>
                    </div>
                </div>
            </div>


            {/* Hospital Introduction section  */}
            <div className="hospital-introduction-section" id='myVideo'>
                {/* video in a modal */}
                <div className="hospital-introduction-video">
                    <i onClick={() => setModalShow(true)} className="fa-solid fa-circle-play play-icon"></i>

                    {/* <i onClick={() => setModalShow(true)} className="fa-regular fa-circle-play play-icon"></i> */}
                    <MyVerticallyCenteredModal show={modalShow} onHide={() => setModalShow(false)} />
                </div>
            </div>

            {/* tabs section */}
            <div className="tab-container container">
                <Tabs defaultActiveKey="hospital" id="fill-tab-example" className="mb-3 tab-header container" fill justify>
                    <Tab eventKey="hospital" title="Hospital Introduction" className='tab-text container' >
                        <h4>Hospital Introduction</h4>
                        <p>As the quality of health care has become more of a concern around the world, hospitals have had to pay more attention to this issue. One of the most powerful ways to analyze this component of health care.</p>
                    </Tab>
                    <Tab eventKey="pharmacy" title="Pharmacy" className='tab-text container'>
                        <h4>About Our Pharmacy</h4>
                        <p>Pharmacy is a branch of clinical health science responsible for discovering drugs and pharmaceuticals, their production, disposal and their safe and effective use. A complete grasp of drugs, their action methods, toxicity and mobility!</p>
                    </Tab>
                    <Tab eventKey="longer-tab" title="Reasearch & Lab" className='tab-text container'>
                        <h4>Our reasearch center and lab</h4>
                        <p>Medical Laboratory Technology presents the development in the medical laboratory science. It discusses the general laboratory glassware and apparatus. It addresses...</p>
                    </Tab>
                    <Tab eventKey="ccu&icu" title="CCU & ICU" className='tab-text container'>
                        <h4>CCU & ICU</h4>
                        <p>The Intensive Care Unit (ICU) is a separate, self-contained area within a medical facility, equipped with high-tech specialised facilities designed for close monitoring, rapid intervention and often extended treatment of patients with acute organ dysfunction!</p>

                    </Tab>
                    <Tab eventKey='doctors' title='Doctors' className='tab-text container container'>
                        <h4>Our Doctors</h4>
                        <p>A practitioner of medicine can either be a physician or a surgeon. A physician diagnoses and treats illness while a surgeon performs surgery.
                            <br />
                            Apart from god, another only person who can save your life is the doctor..</p>
                    </Tab>
                </Tabs>
            </div>


            {/* meet our doctors section  */}
            <div className="meet-our-doctors-section container">
                <h2 className='meet-our-doctors-section-heading'>Meet Our Doctors</h2>

                <div className="doctors-card">
                    <Card style={{ maxWidth: '18rem' }} className='card'>
                        <Card.Img variant="top" src={doctor1} />
                        <Button className='doctors-get-appointment-btn animate__animated animate__backInDown' variant="outline-primary" onClick={handleGetAppointment}>Get Appointment</Button>{' '}
                        <Card.Body>
                            <Card.Title>Dr. J. Naushin Moon </Card.Title>
                            <Card.Text className='designation'>
                                Dental Surgeon
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card style={{ maxWidth: '18rem' }} className='card'>
                        <Card.Img variant="top" src={doctor2} />
                        <Button className='doctors-get-appointment-btn animate__animated animate__backInDown' variant="outline-primary" onClick={handleGetAppointment}>Get Appointment</Button>{' '}
                        <Card.Body>
                            <Card.Title>Dr. Addisin Smith</Card.Title>

                            <Card.Text className='designation'>
                                Neurosurgeon
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card style={{ maxWidth: '18rem' }} className='card'>
                        <Card.Img variant="top" src={doctor3} />
                        <Button className='doctors-get-appointment-btn animate__animated animate__backInDown' variant="outline-primary" onClick={handleGetAppointment}>Get Appointment</Button>{' '}
                        <Card.Body>
                            <Card.Title>Dr. Sarah Tylor</Card.Title>
                            <Card.Text className='designation'>
                                Dental Surgeon
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>

                <Button className='doctors-see-all-btn' variant="outline-primary">See All</Button>{' '}
            </div>


            {/* our latest blogs section  */}
            <div className="meet-our-doctors-section container">
                <h2 className='meet-our-doctors-section-heading'>Our Latest Blogs</h2>

                <div className="doctors-card">
                    <Card style={{ maxWidth: '18rem' }} className='card'>
                        <div className="card-image-div">
                            <Card.Img className='card-image-top' variant="top" src={blog1} />
                        </div>
                        <Card.Body>
                            <Card.Title className='card-title'> <h6>In this hospital there are special surgeon</h6> </Card.Title>
                            <Card.Text>
                                <p>All surgeons develop core knowledge of anatomy, physiology, metabolism, immunology, pathology, wound healing, shock and resuscitation.</p>
                            </Card.Text>
                            <hr />
                            <div className="card-links">
                                <Card.Link href="#" className='card-link'>
                                    Read More <FontAwesomeIcon icon={faRightLong} />
                                </Card.Link>
                                <Card.Link href="#" className='card-link'>
                                    <FontAwesomeIcon icon={faCalendarDays} /> Jan 03, 2020
                                </Card.Link>
                            </div>
                        </Card.Body>
                    </Card>
                    <Card style={{ maxWidth: '18rem' }} className='card'>
                        <div className="card-image-div">
                            <Card.Img className='card-image-top' variant="top" src={blog2} />
                        </div>
                        <Card.Body>
                            <Card.Title> <h6>World AIDS Day, designated on 1 December</h6> </Card.Title>
                            <Card.Text>
                                <p>Each year, on 1 December, the world commemorates World AIDS Day. People around the world unite to show support for people living with HIV.</p>
                            </Card.Text>
                            <hr />
                            <div className="card-links">
                                <Card.Link href="#" className='card-link'>
                                    Read More <FontAwesomeIcon icon={faRightLong} />
                                </Card.Link>
                                <Card.Link href="#" className='card-link'>
                                    <FontAwesomeIcon icon={faCalendarDays} /> Jan 03, 2020
                                </Card.Link>
                            </div>
                        </Card.Body>
                    </Card>
                    <Card style={{ maxWidth: '18rem' }} className='card'>
                        <div className="card-image-div">
                            <Card.Img className='card-image-top' variant="top" src={blog3} />
                        </div>
                        <Card.Body>
                            <Card.Title> <h6>More than 80 clinical trials launch to test coronavirus</h6> </Card.Title>
                            <Card.Text>
                                <p>An Australian research and clinical facility is preparing to lunch human trial of COVID-19 vaccine developed by China. Chinese media..</p>
                            </Card.Text>
                            <hr />
                            <div className="card-links">
                                <Card.Link href="#" className='card-link'>
                                    Read More <FontAwesomeIcon icon={faRightLong} />
                                </Card.Link>
                                <Card.Link href="#" className='card-link'>
                                    <FontAwesomeIcon icon={faCalendarDays} /> Jan 03, 2020
                                </Card.Link>
                            </div>
                        </Card.Body>
                    </Card>
                </div>

                <Button className='doctors-see-all-btn' variant="outline-primary">See All</Button>{' '}
            </div>


            {/* Join our newsletter section */}
            <div className="join-our-newsletter-section container">
                <div className="join-newsletter-text">
                    <h2>Join Our Newsletter</h2>
                    <p>To join our newsletter Please provide your email address and subscribe. Thank you!</p>
                </div>
                <div className="join-newsletter-input">
                    <InputGroup className="mb">
                        <Form.Control
                            placeholder="Enter Your Email"
                            aria-label="Recipient's username"
                            aria-describedby="basic-addon2"
                        />
                        <Button className='btn-subscribe' variant="outline-secondary" id="button-addon2">
                            Subscribe
                        </Button>
                    </InputGroup>
                </div>

            </div>

        </div>
    );
};

export default Home;