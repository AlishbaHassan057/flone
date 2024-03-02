import React from 'react'
import './footer.css'

const Footer = () => {
    return (
        <>
            <div className="container-fluid footer ">
                <div className="container">
                    <div className="footers mx-auto d-flex justify-content-around align-items-center">
                        <div className="col-lg-2 f">
                            <img className='mt-3' src='https://flone.jamstacktemplates.dev/assets/img/logo/logo.png' />
                            <p className='mt-4'>© 2024 Flone.</p>
                            <p className='mt-0'>All Rights Reserved</p>
                        </div>
                        <div className="col-lg-2">
                            <div className="f flex-column justify-content-around">
                                <h6>ABOUT US</h6>
                                <p className='text-secondary'>About us</p>
                                <p className='text-secondary'>Store location</p>
                                <p className='text-secondary'>Contact</p>
                                <p className='text-secondary'>Order tracking</p>
                            </div>
                        </div>
                        {/* 2 */}
                        <div className="col-lg-2">
                            <div className="f flex-column justify-content-around">
                                <h6>USEFUL LINKS</h6>
                                <p className='text-secondary'>Returns</p>
                                <p className='text-secondary'>Support Policy</p>
                                <p className='text-secondary'>Size guide</p>
                                <p className='text-secondary'>FAQs</p>
                            </div>
                        </div>
                        {/* 3 */}
                        <div className="col-lg-2">
                            <div className="f flex-column justify-content-around">
                                <h6>FOLLOW US</h6>
                                <p className='text-secondary'>Facebook</p>
                                <p className='text-secondary'>Twitter</p>
                                <p className='text-secondary'>Instagram</p>
                                <p className='text-secondary'>Youtube</p>
                            </div>
                        </div>
                        {/* 4 */}
                        <div className="col-lg-2">
                            <div className="last flex-column justify-content-around">
                                <h6>SUBSCRIBE</h6>
                                <p className=''>Get E-mail updates about our latest shop and special offers.</p>
                                <input type="email" placeholder="Enter your email address..." />
                                <a href=''>SUBSCRIBE</a>
                            </div>
                        </div>


                    </div>
                </div>
            </div>


        </>
    )
}

export default Footer