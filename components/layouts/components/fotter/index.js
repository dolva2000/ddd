import React from 'react'

export default function index() {
    return (
         <section className="footer_area bg_cover" style={{ backgroundImage: "url('assets/images/footer_bg.jpg')" }}>
        <div className="container">
            <div className="footer_widget pt-80 pb-130">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="footer_about mt-50">
                            <a href="#"><img src="assets/images/logo.png" alt="logo" /></a>
                            <p>Lorem ipsum dolor sit consetetur sadipscing elitr, sed diamnonumy eirmod tempor inidunt ut labore et dolore. Lorem ipsum dolor sit consetetur sadipscing elitr, sed diamnonumy eirmod tempor inidunt ut labore et dolore.</p>
                        </div> 
                    </div>
                    <div className="col-lg-8">
                        <div className="footer_link_wrapper d-flex flex-wrap">
                            <div className="footer_link mt-45">
                                <h4 className="footer_title">Compnay</h4>
                                <ul className="link">
                                    <li><a href="#">Home</a></li>
                                    <li><a href="#">About</a></li>
                                    <li><a href="#">Service</a></li>
                                    <li><a href="#">Gallery</a></li>
                                    <li><a href="#">Blog</a></li>
                                </ul>
                            </div>
                            <div className="footer_link mt-45">
                                <h4 className="footer_title">Support</h4>
                                <ul className="link">
                                    <li><a href="#">Terms  Condition</a></li>
                                    <li><a href="#">Privacy</a></li>
                                    <li><a href="#">Policy</a></li>
                                    <li><a href="#">Leal</a></li>
                                    <li><a href="#">Leal</a></li>
                                </ul>
                            </div> 
                            <div className="footer_link mt-45">
                                <h4 className="footer_title">Socials</h4>
                                <ul className="link">
                                    <li><a href="#">Facebook</a></li>
                                    <li><a href="#">Twitter</a></li>
                                    <li><a href="#">Instageam</a></li>
                                    <li><a href="#">Linkdin</a></li>
                                    <li><a href="#">Pintarest</a></li>
                                </ul>
                            </div> 
                        </div> 
                    </div>
                </div>
            </div>
            <div className="footer_copyright text-center">
                <p>Designed and Developed by <a href="https://uideck.com" rel="nofollo">UIdeck</a></p>
            </div>
        </div>
 <a href="#" class="back-to-top"><i class="lni lni-chevron-up"></i></a>
    </section>


  
    )
}
