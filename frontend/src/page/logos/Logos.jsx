import React from 'react'
import './logo.css'

const Logos = () => {
    return (
        <>
            <div className="container w-75 mt-5 mb-5 mx-auto logos">
                <div className="d-flex justify-content-between align-items-center gap-5 mx-auto ">
                    <div className="col-lg-3">
                        <div className="d-flex justify-content-around">
                            <div className="img-truck">
                                <img src='https://flone.jamstacktemplates.dev/assets/img/icon-img/support-1.png' />
                            </div>
                            <div className="free">
                                <div className=" align-items-center flex-column">
                                    <div className="freeshipping">
                                        <h6>Support 24/7</h6></div>
                                    <div className="frees">
                                        <p>Free shipping on all order</p></div>
                                </div>

                            </div>
                        </div>



                    </div>
                    {/* 2ND */}
                    <div className="col-lg-3">
                        <div className="d-flex justify-content-around">
                            <div className="img-truck">
                                <img src='https://flone.jamstacktemplates.dev/assets/img/icon-img/support-2.png' />
                            </div>
                            <div className="free">
                                <div className="align-items-center flex-column">
                                    <div className="freeshipping">
                                        <h6>Support 24/7</h6></div>
                                    <div className="frees">
                                        <p>Free shipping on all order</p></div>
                                </div>

                            </div>
                        </div>



                    </div>
                    {/* 3RD */}
                    <div className="col-lg-3">
                        <div className="d-flex justify-content-around">
                            <div className="img-truck">
                                <img src='https://flone.jamstacktemplates.dev/assets/img/icon-img/support-3.png' />
                            </div>
                            <div className="free">
                                <div className="align-items-center flex-column">
                                    <div className="freeshipping">
                                        <h6>Money Return</h6></div>
                                    <div className="frees">
                                        <p>Free shipping on all order</p></div>
                                </div>

                            </div>
                        </div>



                    </div>
                    {/* 4TH */}
                    <div className="col-lg-3">
                        <div className="d-flex justify-content-around ">
                            <div className="img-truck">
                                <img src='https://flone.jamstacktemplates.dev/assets/img/icon-img/support-4.png' />
                            </div>
                            <div className="free">
                                <div className="align-items-center flex-column">
                                    <div className="freeshipping">
                                        <h6>Order Discount</h6></div>
                                    <div className="frees">
                                        <p>Free shipping on all order</p></div>
                                </div>

                            </div>
                        </div>



                    </div>
                </div>
            </div>


        </>
    )
}

export default Logos