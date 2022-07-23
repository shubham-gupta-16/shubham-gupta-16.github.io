import React from 'react'

import "../../css/header.css";
import "../../css/button.css";
// import pic from "../../images/me_alpha.png";

export default function Header() {
    return (
        <header id="home">
            <div className="page-container">
                <div className="header-content">
                    <div className="text-content">
                        <h1 className="header-title" data-aos="fade-up" data-aos-delay='300'>Hello, I am Shubham Gupta✋</h1>
                        <p className="header-body" data-aos="fade-up" data-aos-delay='500'>
                            A passionate Mobile App Developer 🚀 having an experience of building Web and Mobile applications with Flutter / Android (Kotlin) / React and some other cool libraries and frameworks.
                        </p>
                        <div className="footer-timing social-links">
                            <a href={'./'} className="fb" data-aos="fade-up" data-aos-delay='600'> <i className="fa fa-facebook" aria-hidden="true"></i></a>
                            <a href={'./'} className="yt" data-aos="fade-up" data-aos-delay='650'> <i className="fa fa-youtube-play" aria-hidden="true"></i></a>
                            <a href={'./'} className="ig" data-aos="fade-up" data-aos-delay='700'> <i className="fa fa-instagram" aria-hidden="true"></i></a>
                            <a href={'./'} className="tw" data-aos="fade-up" data-aos-delay='750'> <i className="fa fa-twitter" aria-hidden="true"></i></a>
                        </div>
                        <br />
                        <br />
                        <br />
                        <div>
                            <a href="#services" data-aos="fade-up" data-aos-delay='900' className="b-btn hard">Mail Me</a>
                            <a href="#about" data-aos="fade-up" data-aos-delay='1000' style={{ marginLeft: '15px' }} className="b-btn hard inverse">Resume</a>
                        </div>
                        
                    </div>
                    {/* <div className="header-image" data-aos="fade-up"> */}
                        {/* <img src={pic} alt="Header" /> */}
                    {/* </div> */}
                </div>
            </div>
        </header>
    )
}