import React from 'react'

export default function index() {
    return (
        <section id="features" className="features_area pt-100 pb-130">
        <div className="container">
            <div className="row">
                <div className="col-lg-4 col-md-4">
                    <div className="single_features text-center mt-30 wow fadeInUp" data-wow-duration="1.3s" data-wow-delay="0.2s">
                        <div className="features_image">
                            <img src="assets/images/features-1.jpg" alt="features" />
                        </div>
                        <div className="features_content">
                            <h4 className="features_title"><a href="#">Project Planing</a></h4>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-4">
                    <div className="single_features text-center mt-30 wow fadeInUp" data-wow-duration="1.3s" data-wow-delay="0.5s">
                        <div className="features_image">
                            <img src="assets/images/features-2.jpg" alt="features" />
                        </div>
                        <div className="features_content">
                            <h4 className="features_title"><a href="#">Architecture</a></h4>
                        </div>
                    </div> 
                </div>
                <div className="col-lg-4 col-md-4">
                    <div className="single_features text-center mt-30 wow fadeInUp" data-wow-duration="1.3s" data-wow-delay="0.8s">
                        <div className="features_image">
                            <img src="assets/images/features-3.jpg" alt="features"  />
                        </div>
                        <div className="features_content">
                            <h4 className="features_title"><a href="#">Construction</a></h4>
                        </div>
                    </div> 
                </div>
            </div> 
        </div> 
    </section>
    )
}
