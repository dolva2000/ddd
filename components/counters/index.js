import React from 'react'

export default function index() {
    return (                                        
        <section id="counter" className="counter_area bg_cover pt-120 pb-130"   style={{ backgroundImage: "url('assets/images/counter.jpg')" }}>
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-10">
                    <div className="section_title section_title_2 text-center pb-25">
                        <h4 className="title">Our Achievements<br /> in Numbers</h4>
                    </div> 
                </div>
            </div> 
            <div className="row">
                <div className="col-lg-3 col-sm-3 col-6">
                    <div className="single_counter text-center mt-30 wow fadeIn" data-wow-duration="1.3s" data-wow-delay="0.2s">
                        <div className="counter_icon">
                            <i className="lni lni-happy"></i>
                        </div>
                        <div className="counter_content">
                            <span>3874</span>
                            <p>Happy Clients</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-3 col-6">
                    <div className="single_counter text-center mt-30 wow fadeIn" data-wow-duration="1.3s" data-wow-delay="0.4s">
                        <div className="counter_icon">
                            <i className="lni lni-checkmark-circle"></i>
                        </div>
                        <div className="counter_content">
                            <span>3874</span>
                            <p>Projects Done</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-3 col-6">
                    <div className="single_counter text-center mt-30 wow fadeIn" data-wow-duration="1.3s" data-wow-delay="0.6s">
                        <div className="counter_icon">
                            <i className="lni lni-users"></i>
                        </div>
                        <div className="counter_content">
                            <span>3874</span>
                            <p>Team Members</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-3 col-6">
                    <div className="single_counter text-center mt-30 wow fadeIn" data-wow-duration="1.3s" data-wow-delay="0.8s">
                        <div className="counter_icon">
                            <i className="lni lni-cup"></i>
                        </div>
                        <div className="counter_content">
                            <span>3874</span>
                            <p>Awards Won</p>
                        </div>
                    </div>
                </div>
            </div> 
        </div>
    </section>
    )
}
