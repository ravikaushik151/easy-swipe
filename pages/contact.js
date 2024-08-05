// pages/contact.js
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export default function Contact() {
    return (
        <>
            <Head>
                <title>Contact Page</title>
                <meta name="description" content="Description of the home page" />
            </Head>
            <section className="custom-header" style={{ background: "url('/img/contactus-header.jpg')" }}></section>
            <section className="mb-4" style={{ marginTop: '-120px' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-10 offset-md-1">
                            <div className="contact_inner">
                                <div className="row">
                                    <div className="col-md-10">
                                        <div className="contact_form_inner">
                                            <div className="contact_field">
                                                <h3 className="text-main">Contact Us</h3>
                                                <p className="text-main">
                                                    Feel Free to contact us any time. We will get back to you as soon as we can!.
                                                </p>
                                                <form id="contact-form">
                                                    <div id="contact-note"></div>
                                                    <input type="text" className="form-control form-group mb-3" name="name" placeholder="Name" />
                                                    <input type="text" name="email" className="form-control form-group mb-3" placeholder="Email" />
                                                    <input type="text" name="phone" className="form-control form-group mb-3" placeholder="Mobile" />
                                                    <textarea name="message" className="form-control form-group mb-3" placeholder="Message"></textarea>
                                                    <button className="contact_form_submit mb-3" id="contact-button">
                                                        Submit
                                                    </button>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-2">
                                        <div className="right_conatct_social_icon d-flex align-items-end">
                                            <div className="socil_item_inner d-flex">
                                                <li>
                                                    <a href="#">
                                                        <i className="fab fa-facebook-square fs-3 text-main"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <i className="fab fa-instagram fs-3 text-main"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <i className="fa-brands fa-linkedin fs-3 text-main"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <i className="fab fa-twitter fs-3 text-main"></i>
                                                    </a>
                                                </li>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="contact_info_sec">
                                    <h4 className="text-white">Contact Info</h4>
                                    <div className="d-flex info_single align-items-center text-white">
                                        <i className="fas fa-headset"></i>
                                        <span>+91 9513445002</span>
                                    </div>
                                    <div className="d-flex info_single align-items-center text-white">
                                        <i className="fas fa-envelope-open-text"></i>
                                        <span>info@gmail.com</span>
                                    </div>
                                    <div className="d-flex info_single align-items-center">
                                        <i className="fas fa-map-marked-alt text-white"></i>
                                        <span>
                                            <strong>VRS Enterprises</strong>
                                            <br />
                                            265/B, 36th B Cross Rd, 7th Block, Jayanagar, Bengaluru, Karnataka 560082
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12 p-0">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3888.738597923948!2d77.5744590756728!3d12.924515215907665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTLCsDU1JzI4LjIiTiA3N8KwMzQnMzcuMyJF!5e0!3m2!1sen!2sin!4v1722317900652!5m2!1sen!2sin" width="100%" height="450" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
