// components/Footer.js
import Link from 'next/link';
const Footer = () => {
    return (
        <footer className="mysec wow slideInUp" data-aos="fade-up" data-aos-duration="1500">
            <div className="container footer">
                <div className="row">
                    <div className="col-md-11 d-block mx-auto">
                        <div className="row border-bottom py-md-4">
                            <div className="col-md-3 ps-3 mb-3 d-flex align-items-center justify-content-center">
                                <div className="content">
                                    <div className="ftr-logo">
                                        <img src="/img/logo.png" className="mb-2 img-fluid px-3" alt="Logo" />
                                    </div>
                                    <p className="fs-5 fw-bold ps-2 footer-heading mb-3 mt-4 mt-lg-0 pt-3 text-center">FOLLOW US</p>
                                    <div className="ps-2 text-center">
                                        <Link href="#" className="text-decoration-none text-main pe-2 fs-2">
                                            <i className="fa-brands fa-facebook"></i>
                                        </Link>
                                        <Link href="#" className="text-decoration-none text-main px-2 fs-2">
                                            <i className="fa-brands fa-instagram"></i>
                                        </Link>
                                        <Link href="#" className="text-decoration-none text-main px-2 fs-2">
                                            <i className="fa-brands fa-linkedin"></i>
                                        </Link>
                                        <Link href="#" className="text-decoration-none text-main px-2 fs-2">
                                            <i className="fa-brands fa-x-twitter"></i>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-3 ps-3 mb-3 d-flex align-content-center justify-content-center">
                                <div>
                                    <p className="fs-4 fw-bold">Contact Us</p>
                                    <ul className="ps-lg-4 ps-0 text-center d-inline mt-4">
                                        <li className="my-2">
                                            <Link href="tel:+919513445002" className="text-decoration-none text-main fs-6">
                                                <i className="fa-solid fa-phone"></i> (+91) 951 344 5002
                                            </Link>
                                        </li>
                                        <li className="my-2">
                                            <p className="fs-6">
                                                <i className="fa-solid fa-location-dot"></i> 265/B, 36th B Cross Rd,<br /> 7th Block, Jayanagar,<br /> Bengaluru,<br /> Karnataka 560082
                                            </p>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-md-2 ps-3 text-left mb-3 d-flex align-content-center justify-content-center">
                                <div className="content">
                                    <p className="fs-4 fw-bold">Quick Links</p>
                                    <ul className="ps-lg-4 ps-0 text-center d-inline">
                                        <li>
                                            <Link href="./" className="text-decoration-none text-main lh fs-6">Home</Link>
                                        </li>
                                        <li>
                                            <Link href="/about" className="text-decoration-none text-main lh fs-6">About</Link>
                                        </li>
                                        <li>
                                            <Link href="/service" className="text-decoration-none text-main fs-6">Service</Link>
                                        </li>
                                        <li>
                                            <Link href="/blog" className="text-decoration-none text-main fs-6">Blog</Link>
                                        </li>
                                        <li>
                                            <Link href="/contact" className="text-decoration-none text-main fs-6">Contact</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-md-4 ps-3 text-left mb-3 d-flex justify-content-center align-items-center">
                                <div className="content">
                                    <p className="mb-3 fs-4 fw-bold text-main">Enquire Now</p>
                                    <form id="footer-form" style={{ paddingTop: '10px' }}>
                                        <div id="footer-note"></div>
                                        <div className="row my-3">
                                            <div className="box col-6">
                                                <input type="text" className="form-control rounded-0 bg-whie text-main" name="name" placeholder="Name" />
                                            </div>
                                            <div className="box col-6">
                                                <input type="email" className="form-control rounded-0 bg-whie text-main" name="email" placeholder="Email" />
                                            </div>
                                        </div>
                                        <div className="row my-3">
                                            <div className="box col-12">
                                                <input type="text" className="form-control rounded-0 bg-whie text-main" name="phone" placeholder="Mobile" />
                                            </div>
                                        </div>
                                        <div className="row my-3">
                                            <div className="box-inner">
                                                <textarea className="form-control bg-whie text-main" name="message" placeholder="Enter Message" rows="2"></textarea>
                                            </div>
                                        </div>
                                        <div className="row my-3">
                                            <div className="box-inner">
                                                <button type="submit" className="btn btn-danger submit-btn" id="footer-button">Submit</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div>
                <p className="text-center text-main py-3 mb-0 fs-6" style={{ color: '#003366c4' }}>Copyright © Easy Swipe 2024. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
