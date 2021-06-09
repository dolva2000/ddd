import React from 'react'

export default function index() {
    return (
        <section id="about" className="about_area pt-80 pb-130">
        <div className="about_bg d-none d-lg-block">
            <div className="about_bg_image bg_cover" style={{ backgroundImage: "url('assets/images/about_bg.jpg')" }}></div>
        </div> 
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-6">
                    <div className="about_image mt-50 wow fadeInRightBig" data-wow-duration="1.3s" data-wow-delay="0.5s">
                        <img src="assets/images/about_image.jpg" alt="About" />
                    </div> 
                </div>
                <div className="col-lg-6">
                    <div className="about_content mt-50 wow fadeInLeftBig" data-wow-duration="1.3s" data-wow-delay="0.5s">
                        <h3 className="sub_title"><span>15</span> Years of Experiance</h3>
                        <h4 className="main_title">Providing the best quality service</h4>
                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, serd diam nonumy eirmod tempor invidunt ut labore et dolore maali quyam erat, sed diam voluptua. At vero eos et accusam et justo dudolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctuest Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, onsetetur sadipscing elitr, <br /> <br />Sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et.</p>
                        <a href="#" className="main-btn">Read More</a>
                    </div> 
                </div>
            </div> 
        </div>
    </section>
    )
}
