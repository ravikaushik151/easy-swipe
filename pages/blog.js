import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export default function Blog() {
    return (
        <>
            <Head>
                <title>Blog Page</title>
                <meta name="description" content="Description of the home page" />
            </Head>
            <section className="custom-header" style={{ background: "url('/img/blog-header.jpg')" }}></section>

            <section className="mb-4" style={{ marginTop: '-80px' }}>
                <div className="container">
                    <div className="row d-flex align-content-center justify-content-center">
                        <div className="title text-center">
                            <h2 className="text-main">Blogs</h2>
                        </div>

                        <div className="row">
                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <div className="services-item shine-animate-item bg-white shadow-sm">
                                        <div className="services-thumb">
                                            <Link href="maximizing-financial-flexibility-with-credit-card-to-bank-transfers" className="shine-animate">
                                                <Image src="/img/blog2.jpg" className="img-fluid" alt="Maximizing Financial Flexibility with Credit Card to Bank Transfers" width={500} height={500} />
                                            </Link>
                                        </div>
                                        <div className="services-content">
                                            <div className="icon">
                                                <i className="fa-solid fa-barcode"></i>
                                            </div>
                                            <h4 className="title">
                                                <Link href="maximizing-financial-flexibility-with-credit-card-to-bank-transfers">
                                                    Maximizing Financial Flexibility with Credit Card to Bank Transfers
                                                </Link>
                                            </h4>
                                            <p>
                                                In today&#39;s fast-paced world, having financial flexibility is more important than ever. One of the most convenient ways to achieve this is by utilizing credit card to bank transfers...
                                            </p>
                                            <Link href="maximizing-financial-flexibility-with-credit-card-to-bank-transfers" className="btn btn-danger text-white">Read More</Link>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-6 mb-3">
                                    <div className="services-item shine-animate-item bg-white shadow-sm">
                                        <div className="services-thumb">
                                            <Link href="the-convenience-of-cash-on-credit-card-swipe-in-bangalore" className="shine-animate">
                                                <Image src="/img/blog1.jpg" className="img-fluid" alt="The Convenience of Cash on Credit Card Swipe in Bangalore" width={500} height={500} />
                                            </Link>
                                        </div>
                                        <div className="services-content">
                                            <div className="icon">
                                                <i className="fa-solid fa-barcode"></i>
                                            </div>
                                            <h4 className="title">
                                                <Link href="the-convenience-of-cash-on-credit-card-swipe-in-bangalore">
                                                    The Convenience of Cash on Credit Card Swipe in Bangalore
                                                </Link>
                                            </h4>
                                            <p>
                                                In the bustling city of Bangalore, financial emergencies can arise at any moment. Having quick access to cash can make all the difference in managing unexpected expenses. At C2C Enterprises...
                                            </p>
                                            <Link href="the-convenience-of-cash-on-credit-card-swipe-in-bangalore" className="btn btn-danger text-white">Read More </Link>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-6 mb-3">
                                    <div className="services-item shine-animate-item bg-white shadow-sm">
                                        <div className="services-thumb">
                                            <Link href="how-to-avoid-scams-when-using-cash-against-credit-card-services"  className="shine-animate">
                                                <Image src="/img/blog3.jpg" className="img-fluid" alt="How to Avoid Scams When Using Cash Against Credit Card Services" width={500} height={500} />
                                            </Link>
                                        </div>
                                        <div className="services-content">
                                            <div className="icon">
                                                <i className="fa-solid fa-barcode"></i>
                                            </div>
                                            <h4 className="title">
                                                <Link href="how-to-avoid-scams-when-using-cash-against-credit-card-services">
                                                    How to Avoid Scams When Using Cash Against Credit Card Services
                                                </Link>
                                            </h4>
                                            <p>
                                                Using cash against credit card services can be a convenient way to manage your finances during emergencies. However...
                                            </p>
                                                <Link href="how-to-avoid-scams-when-using-cash-against-credit-card-services" className="btn btn-danger text-white">Read More</Link>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-6 mb-3">
                                    <div className="services-item shine-animate-item bg-white shadow-sm">
                                        <div className="services-thumb">
                                            <Link href="how-cash-against-credit-card-services-can-help-in-financial-emergencies" className="shine-animate">
                                                <Image src="/img/blog4.jpg" className="img-fluid" alt="How Cash Against Credit Card Services Can Help in Financial Emergencies" width={500} height={500} />
                                            </Link>
                                        </div>
                                        <div className="services-content">
                                            <div className="icon">
                                                <i className="fa-solid fa-barcode"></i>
                                            </div>
                                            <h4 className="title">
                                                <Link href="how-cash-against-credit-card-services-can-help-in-financial-emergencies">
                                                    How Cash Against Credit Card Services Can Help in Financial Emergencies
                                                </Link>
                                            </h4>
                                            <p>
                                                Financial emergencies can strike unexpectedly, leaving you in urgent need of funds. Whether it&#39;s a medical emergency, sudden car repair, or any unforeseen expense, having access to quick...
                                            </p>
                                            <Link href="how-cash-against-credit-card-services-can-help-in-financial-emergencies" className="btn btn-danger text-white">Read More</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
