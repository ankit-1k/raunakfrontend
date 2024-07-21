import React from 'react';
import './../components.css';
import { FaLinkedin, FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';
const Footer = () => {
    return (
        <div className='mt-5'>
            <main className="footer-container">
                <footer>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4">
                                <ul>
                                    <li>About Us</li>
                                    <li>Get in touch</li>
                                </ul>
                            </div>
                            <div className="col-md-4">
                                <ul>
                                    <li>Footer</li>
                                    <li>Footer</li>
                                </ul>
                            </div>
                            <div className="col-md-4">
                                <ul>
                                    <li>
                                        <ul className="example-2 mt-2">
                                            <li className="icon-content">
                                                <a href="https://youtube.com/" aria-label="Youtube" data-social="youtube">
                                                    <div className="filled"></div>
                                                    <FaYoutube className="icon" />
                                                </a>
                                                <div className="tooltip">YouTube</div>
                                            </li>
                                            <li className="icon-content">
                                                <a href="https://linkedin.com/" aria-label="LinkedIn" data-social="linkedin">
                                                    <div className="filled"></div>
                                                    <FaLinkedin className="icon" />
                                                </a>
                                                <div className="tooltip">LinkedIn</div>
                                            </li>
                                            <li className="icon-content">
                                                <a href="https://www.github.com/" aria-label="GitHub" data-social="github">
                                                    <div className="filled"></div>
                                                    <FaFacebook className="icon" />
                                                </a>
                                                <div className="tooltip">Facebook</div>
                                            </li>
                                            <li className="icon-content">
                                                <a href="https://www.instagram.com/" aria-label="Instagram" data-social="instagram">
                                                    <div className="filled"></div>
                                                    <FaInstagram className="icon" />
                                                </a>
                                                <div className="tooltip">Instagram</div>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="copy-right text-center">
                        © Raunak Coaching Center, All Rights Reserved
                    </div>
                </footer>
            </main>
        </div>
    );
};

export default Footer;
