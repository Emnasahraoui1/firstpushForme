import React from 'react';
import Input from './champs';
import Button from './Button'; 
import './learner.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';

import { Link, useHistory } from 'react-router-dom';

const Learner1 = () => {
    return (
      
        
        <div className="sign-up-form">
            <div className="button-container1">
            <div className="button-wrapper1">
                {/* First Button */}
                <button className='bttn' style={{ width: '190px', height: '10px', marginRight: '20px' }}>
                   
                </button>
                {/* Second Button */}
                <button className='bttn' style={{ width: '190px', height: '10px', marginRight: '20px' }}>
                 
                </button>
                {/* Third Button */}
                <button className='bttn' style={{ width: '190px', height: '10px' }}>
                 
                </button>
            </div>
        </div>   
            <h1>Insert your personal information</h1>
            <div className="row">
                <div className="col-md-6 mb-3">
                   
                    <Input inputStyle="box" labelStyle="floating" placeholder="phone number" />
                </div>
                <div className="col-md-6 mb-3">
                   
                    <Input inputStyle="box" labelStyle="floating" placeholder=" age" />
                </div>
                <div className="col-md-6 mb-3">
                    
                    <Input inputStyle="box" labelStyle="floating" placeholder="country" />
                </div>
                <div className="col-md-6 mb-3">
                  
                    <Input inputStyle="box" labelStyle="floating" placeholder=" city" />
                </div>
                <div className="col-md-6 mb-3">
                  
                    <select className="form-select" aria-label="Occupation">
                    <option value="">occupation</option>
                        <option value="Student">Student</option>
                        <option value="Instructor/Tutor">Instructor/Tutor</option>
                        <option value="Professional">Professional</option>
                        <option value="Entrepreneur">Entrepreneur</option>
                        <option value="Job Seeker">Job Seeker</option>
                        <option value="Freelancer">Freelancer</option>
                        <option value="Stay-at-home Parent">Stay-at-home Parent</option>
                        <option value="Other">Other</option>
                    </select>
                </div>
                <div className="col-md-6 mb-3">
                   
                    <select className="form-select" aria-label="Education Level">
                    <option value="">Education Level</option>
                        <option value="Highschool">Highschool</option>
                        <option value="Bachelor">Bachelor</option>
                        <option value="Univeristy graduate">Univeristy graduate</option>
                        <option value="Phd">Phd</option>
                        <option value="Masters">Master</option>
                        <option value="Other">Other</option>
                        
                        

                    </select>
                </div>
                    <div className="col-md-12 mb-3">
                        <div className='move'>
                        <Button className="cont">
                    <Link to="/learner2" style={{ textDecoration: 'none', color: 'white' }}>Continue</Link>
                </Button>
                

                <div className='previous'>
                <Button className="previous" >
                    <Link to="/" style={{ textDecoration: 'none', color: 'inherit'}}>Previous</Link>
                </Button> </div>
                </div>
                </div>
            
                
            </div>
        </div>
      
    );
};

export default Learner1 ;
