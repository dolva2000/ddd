import React from 'react'

export default function index() {
    return (
        <section className="header_area">
        <div className="header_navbar">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <nav className="navbar navbar-expand-lg">
                            <a className="navbar-brand" href="index.html">
                                <img src="assets/images/logo.png" alt="Logo" />
                            </a>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="toggler-icon"></span>
                                <span className="toggler-icon"></span>
                                <span className="toggler-icon"></span>
                            </button>

                            <div className="collapse navbar-collapse sub-menu-bar" id="navbarSupportedContent">
                                <ul id="nav" className="navbar-nav ml-auto">
                                    <li className="nav-item active">
                                        <a className="page-scroll" href="#home">Home</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="page-scroll" href="#about">About</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="page-scroll" href="#services">Services</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="page-scroll" href="#gallery">Gallery</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="page-scroll" href="#team">Team</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="page-scroll" href="#testimonial">Clients</a>
                                    </li>                                    
                                    <li className="nav-item">
                                        <a className="page-scroll" href="#contact">Contact</a>
                                    </li>
                                </ul>
                            </div> 
                        </nav> 
                    </div>
                </div> 
            </div>
        </div> 

        <div id="home" className="header_slider">
            <div className="single_slider bg_cover d-flex align-items-center" style={{ backgroundImage: "url('assets/images/slider-1.jpg')" }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 col-md-10">
                            <div className="slider_content">
                                <h2 className="slider_title wow fadeInUp" data-wow-duration="1.3s" data-wow-delay="0.2s">Cdi Builds</h2>
                                <p className="wow fadeInUp" data-wow-duration="1.3s" data-wow-delay="0.5s">Les experts en construction et Architecture de CDi builds comprennent des ingénieurs, des comptables et des professionnels de la gestion de la construction qui proposent des solutions aux clients nécessitant une expertise de niche. </p>
                                <a href="#" rel="nofollow" className="main-btn wow fadeInLeftBig" data-wow-duration="1.3s" data-wow-delay="0.8s">Cdi Build</a>
                            </div> 
                        </div>
                    </div> 
                </div>
            </div> 
        </div>
    </section>
    )
}
