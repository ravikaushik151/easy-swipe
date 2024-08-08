// pages/selfdeclaration.js

import Head from 'next/head';

export default function SelfDeclaration() {
    return (
        <>
            <Head>
                <title>Self Declaration | Easyswipe.in</title>
            </Head>
            {/* Header Section */}
            <section className="custom-header" style={{ background: "url('/img/service-header-image.jpg')" }}></section>
            <section className="pt-5 custom-blue" style={{ marginTop: '-120px' }}>
                <div className="container text-center">
                    <div className='row justify-content-center'>
                        <div className='col-md-8'>
                            <h1 className="form-heading mb-4">
                                Confirm Your Transaction<span className="text-danger">.</span>
                            </h1>
                            <p className="mb-0">
                                Please provide your valid information for KYC (Know Your Customer) by sharing your Aadhar card number,
                                PAN card, full name, and the last four digits of your card. After you fill out this form, it will be sent
                                to your email. Make sure to attach your Aadhar card and PAN card to that email.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Form Section */}
            <section className="py-5 custom-blue">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-8">
                            <div className="card shadow-lg">
                                <div className="card-body">
                                    <p className="text-danger mb-4">
                                        Note: All form fields are required. Please fill each field to complete the process.
                                    </p>
                                    <form id="declaration-form">
                                        {/* Basic Details */}
                                        <div className="row mb-3">
                                            <div className="col-md-4 mb-3">
                                                <div className="form-group">
                                                    <label className="form-label">Applicant Name</label>
                                                    <i className="fas fa-user input-icon"></i>
                                                    <input className="form-input form-control" type="text" name="name" placeholder="Your name" required />
                                                </div>
                                            </div>
                                            <div className="col-md-4 mb-3">
                                                <div className="form-group">
                                                    <label className="form-label">Aadhar Number</label>
                                                    <i className="fas fa-id-card input-icon"></i>
                                                    <input className="form-input form-control" type="text" name="aadharnumber" placeholder="Aadhar Number" required />
                                                </div>
                                            </div>
                                            <div className="col-md-4 mb-3">
                                                <div className="form-group">
                                                    <label className="form-label">Last 4 Digits of Card No.</label>
                                                    <i className="fas fa-credit-card input-icon"></i>
                                                    <input className="form-input form-control" type="text" name="cardnumber" placeholder="Card Number" required />
                                                </div>
                                            </div>
                                        </div>
                                        {/* Account Details */}
                                        <div className="row mb-3">
                                            <div className="col-md-4 mb-3">
                                                <div className="form-group">
                                                    <label className="form-label">Bank Name</label>
                                                    <i className="fas fa-building input-icon"></i>
                                                    <input className="form-input form-control" type="text" name="bankname" placeholder="Enter Bank Name" required />
                                                </div>
                                            </div>
                                            <div className="col-md-4 mb-3">
                                                <div className="form-group">
                                                    <label className="form-label">Enter Amount</label>
                                                    <i className="fas fa-dollar-sign input-icon"></i>
                                                    <input className="form-input form-control" type="number" name="amount" placeholder="Enter Amount" required />
                                                </div>
                                            </div>
                                            <div className="col-md-4 mb-3">
                                                <div className="form-group">
                                                    <label className="form-label">Account Holder Name</label>
                                                    <i className="fas fa-user input-icon"></i>
                                                    <input className="form-input form-control" type="text" name="accholdername" placeholder="Account Holder Name" required />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row mb-3">
                                            <div className="col-md-6 mb-3">
                                                <div className="form-group">
                                                    <label className="form-label">Account Number</label>
                                                    <i className="fas fa-hashtag input-icon"></i>
                                                    <input className="form-input form-control" type="text" name="accnum" placeholder="Enter Account Number" required />
                                                </div>
                                            </div>
                                            <div className="col-md-6 mb-3">
                                                <div className="form-group">
                                                    <label className="form-label">Bank IFSC Code</label>
                                                    <i className="fas fa-code input-icon"></i>
                                                    <input className="form-input form-control" type="text" name="ifsc" placeholder="Enter Bank IFSC Code" required />
                                                </div>
                                            </div>
                                        </div>
                                        {/* Confirm Details and Submit */}
                                        <div className="form-check mb-3">
                                            <input className="form-check-input" type="checkbox" id="flexCheckChecked" required />
                                            <label className="form-check-label" htmlFor="flexCheckChecked">
                                                I confirm that all the details mentioned above are accurate.
                                            </label>
                                        </div>
                                        <div>
                                            <button className="contact_form_submit mb-3 w-100" type="submit">
                                                Submit
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
