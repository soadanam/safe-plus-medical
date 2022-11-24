import React from 'react';
import './Footer.css';
import logoPlus from '../../images/logo3.png';
import logoTooth from '../../images/logo2.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faLocationDot, faPhoneFlip, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    return (
        <div className="footer-main">
            <div className='footer-container container'>

                <div className="footer-name-and-schedule-section">
                    <div className="footer-name-sec">
                        <div className="footer-name-top">
                            <div>
                                <img className="footer-site-logo" src={logoTooth} alt="" />
                            </div>
                            <div className="footer-site-name">
                                <h4> Safe </h4>
                                <img className='logo-footer-plus' src={logoPlus} alt="" />
                            </div>
                        </div>
                        <p>Mauris non nisi semper, lacinia neque in, dapibus leo. Curabitur sagittis libero tincidunt tempor finibus. Mauris at dignissim ligula, nec tristique orci.Quisque vitae metus.</p>
                    </div>
                    <div className="footer-schedule">
                        <div className="footer-watch-logo">
                            <i className="fa-regular fa-clock footer-icon"></i>
                            {/* <FontAwesomeIcon icon={faClock} /> */}
                        </div>
                        <div className='footer-schedule-text'>
                            <p>Monday - Saturday :</p>
                            <p>9.00am - 10.00pm</p>
                        </div>
                    </div>
                </div>

                <div className="other-links-div">
                    <h4>Other Links</h4>

                    <h6><span className='footer-plus'>+</span><a href="#"> Home </a></h6>
                    <h6><span className='footer-plus'>+</span><a href="#"> About Us</a></h6>
                    <h6><span className='footer-plus'>+</span><a href="#"> Services</a></h6>
                    <h6><span className='footer-plus'>+</span><a href="#"> Project</a></h6>
                    <h6><span className='footer-plus'>+</span><a href="#"> Our Team</a></h6>
                    <h6><span className='footer-plus'>+</span><a href="#"> Latest Blog</a></h6>
                </div>

                <div className="our-services-div">
                    <h4>Our Services</h4>

                    <h6><span className="footer-plus">+</span><a href="#"> Root Canal</a></h6>
                    <h6><span className="footer-plus">+</span><a href="#"> Alignment Teeth</a></h6>
                    <h6><span className="footer-plus">+</span><a href="#"> Cosmetic Teeth</a></h6>
                    <h6><span className="footer-plus">+</span><a href="#"> Oral Hygiene</a></h6>
                    <h6><span className="footer-plus">+</span><a href="#"> Live Advisory</a></h6>
                    <h6><span className="footer-plus">+</span><a href="#"> Cavity Inspection</a></h6>

                </div>

                <div className="contact-us-div">
                    <h4>Contact Us</h4>
                    <div className="contact-us-address">
                        <div className="address-icon-sec">
                            <i className="fa-solid fa-location-dot  footer-icon"></i>
                        </div>
                        <p>1247/Plot No. 39,<br /> 15th Phase, <br />
                            LHB Colony, Kanpur
                        </p>
                    </div>
                    <div className="phone-number">
                        <div className="phone-icon">
                            <i className="fa-solid fa-phone-flip  footer-icon"></i>
                        </div>
                        <div>
                            <p>1800-121-5656</p>
                            <p>+91-4564-444-888</p>
                        </div>
                    </div>
                    <div className="footer-email">
                        <div className="email-icon">
                            <i className="fa-regular fa-envelope  footer-icon"></i>
                        </div>
                        <div className="footer-email-address">
                            <p><a href="#"> info@example.com</a></p>
                            <p><a href="#"> help@example.com</a></p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="copy-right">
                <p>Copyright &copy; 2022. Design & Developed by SoadAnam</p>
            </div>
        </div>
    );
};

export default Footer;