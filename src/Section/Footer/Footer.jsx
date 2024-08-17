import React from 'react';
import "./Footer.css";
import { FaFacebookSquare, FaGithubSquare, FaInstagramSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa";

const Footer = () => {
    return (
        <>
            <footer className="w-full flex justify-center ">
                <div className="container w-11/12 flex justify-between">
                    <div className="foot-brand">
                        <h6 className="foot-title">My Pets</h6>
                        <p className='foot-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, aliquam!</p>
                    </div>
                    <div className="siteMap ">
                        <h6 className="foot-title-div">Site Map</h6>
                        <div className="links">
                            <ul className="foot-items">
                                <li className='foot-item'><a href="/" className='foot-link'>Home</a></li>
                                <li className='foot-item'><a href="/" className='foot-link'>Sign in</a>/<a href='/'  className='foot-link'>Create account</a></li>
                                <li className='foot-item'><a href="/" className='foot-link'>Blogs</a></li>
                                <li className='foot-item'><a href="/" className='foot-link'>How we work</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="help">
                        <h6 className="foot-title-div">Help</h6>
                        <div className="links">
                            <ul className="foot-items">
                                <li className='foot-item'><a href="/" className='foot-link'>Privacy Policy </a></li>
                                <li className='foot-item'><a href="/" className='foot-link'>Terms and Conditions</a></li>
                                <li className='foot-item'><a href="/" className='foot-link'>Refund and Cancellation Policy</a></li>
                                <li className='foot-item'><a href="/" className='foot-link'>About Us</a></li>
                                <li className='foot-item'><a href="/" className='foot-link'>Contact US</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="siteMap ">
                        <h6 className="foot-title-div">Our Country</h6>
                        <div className="links links-country">
                            <ul className="foot-items">
                                <li className='flex foot-item'>
                                    <img src={require('../../image/location-tick.png')} alt="error" className='ms-2' />
                                    <a href="/" className='foot-link'>Cairo ,Egypt</a>
                                </li>
                                <li className='flex foot-item'>
                                    <img src={require('../../image/call-calling.png')} alt="error" className='ms-2' />
                                    <a href="/"  className='foot-link'>(+02) 01234567899</a>
                                </li>
                                <li className='flex foot-item'>
                                    <img src={require('../../image/sms.png')} alt="error" className='ms-2' />
                                    <a href="/"  className='foot-link'>myPets@gmail.com</a>
                                </li>
                                <li className='flex foot-item'>
                                    <img src={require('../../image/clock.png')} alt="errror" className='ms-2' />
                                    <a href="/"  className='foot-link'>How we work</a>
                                </li>
                            </ul>
                        </div>
                        <div className="socialLinks">
                            <ul className='flex social-items'>
                                <li className='flex social-item'><a href="/" className='flex social-links'>
                                    <FaFacebookSquare />
                                </a></li>
                                <li className='flex social-item'><a href="/" className='flex social-links'>
                                    <FaGithubSquare />
                                </a></li>
                                <li className='flex social-item'><a href="/" className='flex social-links'>
                                    <FaInstagramSquare />
                                </a></li>
                                <li className='flex social-item'><a href="/" className='flex social-links'>
                                    <FaLinkedin />
                                </a></li>
                                <li className='flex social-item'><a href="/" className='flex social-links'>
                                    <FaTwitterSquare />
                                </a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}
export default Footer;