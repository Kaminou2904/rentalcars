import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <div id='contact' className='mainFooter bg-white'>
        <div className="footerDiv">
            <div className="footerWrap pt-5">
            <div className="footerLogo container">
                <img src="./images/CARONRENT LOGO.png" alt="" className="img-fluid"/>
            </div>
            <div className="quickLinks d-flex justify-content-center align-items-center pt-4">
                <a href="#home" className="footerLink nav-link brandP urbanist-black border-end px-2">Home</a>
                <a href="#about" className="footerLink nav-link brandP urbanist-black border-end px-2">About</a>
                <a href="#cars" className="footerLink nav-link brandP urbanist-black border-end px-2">Cars</a>
                <a href="#contact" className="footerLink nav-link brandP urbanist-black px-2">Contact Us</a>
            </div>
            <p className="mb-0 mt-3 text-muted jakarta-extrabold text-center">&copy; 2023 Scalemax.in</p>
            <div className="footerInfo container p-0 d-flex justify-content-center flex-wrap mt-4">
                <div className="footerCard text-center  p-2">
                    <p className="cardHead mb-0 urbanist-black"><a href="tel:+918928060714" className="nav-link"><i className="fas fa-phone-alt fs-1 mb-1 text-primary"></i></a></p>
                    <p className="mb-0 footerCardP"><a href="tel:+918928060714" className="nav-link brandP urbanist-black text-nowrap">+91 96197 97272</a></p>
                </div>
                <div className="footerCard text-center  p-2">
                    <p className="cardHead mb-0 urbanist-black"><span className="nav-link"><i className="fas fa-map-marker-alt fs-1 mb-1 text-primary"></i></span></p>
                    <p className="mb-0 footerCardP"><span className='nav-link urbanist-black'>6, Mistry Chawl, Behind Madina Dairy, Jarimari, Kurla-Andheri Road, Mumbai 400072.</span></p>
                </div>
                <div className="footerCard text-center  p-2">
                    <p className="cardHead mb-0 urbanist-black"><a href="mailto:caronrent.co@gmail.com" className="nav-link"><i className="fas fa-envelope fs-1 mb-1 text-primary"></i></a></p>
                    <p className="mb-0 footerCardP"><a href="mailto:caronrent.co@gmail.com" className="nav-link brandP urbanist-black text-nowrap">caronrent.co@gmail.com</a></p>
                </div>
                <div className="footerAbout container">
                    <p className="footerAboutP text-muted text-center px-3 urbanist-black pt-4">We're just a call or click away to help you hit the road smoothly.</p>
                </div>
            </div>
            </div>
        </div> 
    </div>
  )
}

export default Footer