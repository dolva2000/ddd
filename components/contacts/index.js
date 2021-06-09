import React from 'react'

export default function index() {
    return (
        <section id="contact" className="contact_area pt-80 pb-130">
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <div className="contact_form mt-40 wow fadeIn" data-wow-duration="1.3s" data-wow-delay="0.5s">
                        <div className="section_title pb-25">
                            <h4 className="title">Get In Touch</h4>
                        </div> 
                        
                        <form id="contact-form" action="assets/contact.php" method="post">
                            <div className="single_form">
                                <input name="name" type="text" placeholder="Name" />
                            </div> 
                            
                            <div className="single_form">
                                <input name="email" type="email" placeholder="Email" />
                            </div>
                            
                            <div className="single_form">
                                <input name="subject" type="text" placeholder="Subject" />
                            </div> 
                            
                            <div className="single_form">
                                <input name="number" type="text" placeholder="Contact Number" />
                            </div>
                            
                            <div className="single_form">
                                <textarea name="message" placeholder="Message"></textarea>
                            </div> 
                            
                            <p className="form-message"></p>
                            
                            <div className="single_form">
                                <button className="main-btn">SEND MESSAGE</button>
                            </div>
                        </form>
                    </div> 
                </div>
                <div className="col-lg-6">
                    <div className="contact_info mt-40 wow fadeIn" data-wow-duration="1.3s" data-wow-delay="0.5s">
                        <div className="section_title pb-25">
                            <h4 className="title">Contact Us</h4>
                        </div>
                        <p>Lorem ipsum dolor sit consetetur sadipscing elitr, sed diamnonumy eirmod tempor inidunt ut labore et dolore.Lorem ipsum dolor sit consetetur sadipscing elitr, sed diamnonumy eirmod tempor inidunt ut labore et dolore.Lorem ipsum dolor sit consetetur sadipscing elitr, sed diamnonumy eirmod tempor inidunt ut labore et dolore.</p>
                        
                        <div className="single_info d-flex align-items-center">
                            <div className="info_icon">
                                <i className="lni lni-phone"></i>
                            </div>
                            <div className="info_content media-body">
                                <p>+12345678987654</p>
                            </div>
                        </div> 
                        
                        <div className="single_info d-flex align-items-center">
                            <div className="info_icon">
                                <i className="lni lni-envelope"></i>
                            </div>
                            <div className="info_content media-body">
                                <p>architecture@gmail.com</p>
                            </div>
                        </div>
                        
                        <div className="single_info d-flex align-items-center">
                            <div className="info_icon">
                                <i className="lni lni-world"></i>
                            </div>
                            <div className="info_content media-body">
                                <p>www.architectandconstruction.com</p>
                            </div>
                        </div>
                        
                        <div className="single_info d-flex align-items-center">
                            <div className="info_icon">
                                <i className="lni lni-map"></i>
                            </div>
                            <div className="info_content media-body">
                                <p>London Plaza 38/3, New York <br />United State Of America</p>
                            </div>
                        </div> 
                    </div> 
                </div>
            </div>
        </div>
    </section>
    )
}
