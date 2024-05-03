import React from 'react';
import logo from '../img/LOGO/logo.png';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="containerfooter mt-5">
      <div className="row">
        <div className="col-md-3">
          <div className="logo-foot">
            <img src={logo} alt="Logo" />
          </div>
        </div>
        <div className="col-md-3">
          <h5>Customers</h5>
          <a href="#"><p>learner</p></a>
          <a href="#"><p>training centers</p></a>
          <div className="d-flex justify-content-center">
            <div className="bouton">
              <a href="#" className="btn btn-primary">Add your course</a>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <h5>Services</h5>
          <a href="#"><p>Courses</p></a>
          <a href="#"><p>Training centers</p></a>
          <a href="#"><p>Events</p></a>
          <a href="#"><p>About</p></a>
          <a href="#"><p>Contact</p></a>
        </div>
        <div className="col-md-3">
          <h5>Follow Us</h5>
          <div className="d-flex justify-content-between">
            <a href="#"><FaFacebook className="social-icon" style={{ backgroundColor: '#5B84C4',color:'white', height: '40px', width: '40px', borderRadius: '50px', padding: '10px' }} /></a>
            <a href="#"><FaInstagram className="social-icon" style={{ backgroundColor: '#5B84C4',color:'white', height: '40px', width: '40px', borderRadius: '50px', padding: '10px' }} /></a>
            <a href="#"><FaTwitter className="social-icon" style={{ backgroundColor: '#5B84C4',color:'white', height: '40px', width: '40px', borderRadius: '50px', padding: '10px' }} /></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
