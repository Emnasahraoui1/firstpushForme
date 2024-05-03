import React, { useState } from 'react';
import Button from './Button'; 
import Input from './champs';
import './learner2.css'; 
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


const Learner2 = () => { 
    const [courseType, setCourseType] = useState('');
    const [showAcademicList, setShowAcademicList] = useState(false);
    const [showProfessionalList, setShowProfessionalList] = useState(false);
    const [showWebDevList, setShowWebDevList] = useState(false);
    const [showHobbyList, setShowHobbyList] = useState(false);
    const [showVocationalList, setShowVocationalList] = useState(false);

    const handleCourseTypeChange = (event) => {
        const selectedType = event.target.value;
        setCourseType(selectedType);

        setShowAcademicList(selectedType === 'Academic Courses');
        setShowProfessionalList(selectedType === 'Professional Development Courses');
        setShowWebDevList(selectedType === 'Web Development');
        setShowHobbyList(selectedType === 'Hobby/Interest-based Courses');
        setShowVocationalList(selectedType === 'Vocational/Technical Courses');
    };
   
    return (
       
        <div className="sign-form">
        <div className="button-container1">
            <div className="button-wrapper1">
                {/* First Button */}
                <button className='bttn1' style={{ width: '190px', height: '10px', marginRight: '20px' }}>
                    <Link to="/learner1" style={{ textDecoration: 'none', color: 'inherit' }}></Link>
                </button>
                {/* Second Button */}
                <button className='bttn1' style={{ width: '190px', height: '10px', marginRight: '20px' }}>
                    <Link to="/learner2" style={{ textDecoration: 'none', color: 'inherit' }}></Link>
                </button>
                {/* Third Button */}
                <button className='bttn1' style={{ width: '190px', height: '10px' }}>
                    <Link to="/learner3" style={{ textDecoration: 'none', color: 'inherit' }}></Link>
                </button>
            </div>
        </div>   
            <strong><h1>Insert your preferences</h1></strong>
            <div className="row">
            <div className="col-md-6 mb-3">
                <select className="form-select" aria-label="learning methode">  
                <option value="methode of learning">methode of learning </option>
                        <option value="Beginner">Online</option>
                        <option value="Intermidate">Hybrid</option>
                        <option value="Advanced">Advanced</option>
                        </select>
                </div>
            <div className="col-md-6 mb-3">
                    <select className="form-select" aria-label="Level">
                        <option value=""> Level</option>
                        <option value="Beginner">Beginner</option>
                        <option value="Intermediate">Intermediate</option>
                        <option value="Advanced">Advanced</option>
                    </select>
                </div>
                <div className="col-md-6 mb-3">
                <select className="form-select" aria-label="learning methode">  
                <option value="language">Language</option>
                        <option value="English">English</option>
                        <option value="French">French</option>
                        <option value="Arabic">Arabic</option>
                        <option value="Spanish">Spanish</option>
                        <option value="other">other</option> 
                    </select>
                </div>
                <div className="col-md-6 mb-3">
                <select className="form-select" aria-label="certification">  
                <option value="Certification">Certification</option>
                        <option value="Accredited by recognized institution">Available</option>
                        <option value="Industry certification (e.g., Microsoft Certified, Google Certified)">Not available</option>
                        <option value="No prefrence">No prefrence</option>
              </select>
                </div>
                <div className="col-md-6 mb-3">
                    <select className="form-select" aria-label="Occupation" onChange={handleCourseTypeChange}>
                        <option value="">Type of course</option>
                        <option value="Academic Courses">Academic Courses</option>
                        <option value="Professional Development Courses">Professional Development Courses</option>
                        <option value="Web Development">Web Development</option>
                        <option value="Hobby/Interest-based Courses">Hobby/Interest-based Courses</option>
                        <option value="Vocational/Technical Courses">Vocational/Technical Courses</option>
                   
                    </select>
                </div>
                 
                {showAcademicList && (
                    <div className="col-md-6 mb-3">
                        <select className="form-select" aria-label="Academic Courses">
                            <option value="">Academic Courses</option>
                            <option value="Math">Math</option>
                            <option value="Science">Science</option>
                            <option value="Humanities">Humanities</option>
                            <option value="Social Sciences">Social Sciences</option>
                            <option value="Languages">Languages</option>
                            <option value="Computer Science">Computer Science</option>
                            <option value="Data Science">Data Science</option>
                            <option value="Cybersecurity">Cybersecurity</option>
                            <option value="Graphic Design">Graphic Design</option>

                            
                        </select>
                    </div>
                )}


                {showProfessionalList && (
                    <div className="col-md-6 mb-3">
                        <select className="form-select" aria-label="Professional Development Courses">
                       
                            <option value="">Professional Development Courses</option>
                            <option value="Project Management">Project Management</option>
                            <option value="Finance">Finance</option>
                            <option value="Human Resources">Human Resources</option>
                            <option value="Sales">Sales</option>
                            <option value="Leadership and Management">Leadership and Management</option>
                            
                        </select>
                    </div>
                )}

                {showWebDevList && (
                    <div className="col-md-6 mb-3">
                        <select className="form-select" aria-label="Web Development">
                       
                            <option value="">Web Development</option>
                            <option value="Full Stack Development">Full Stack Development</option>
                            <option value="Frontend Development">Frontend Development</option>
                            <option value="Backend Development">Backend Development</option>
                            <option value="JavaScript Frameworks">JavaScript Frameworks</option>
                            <option value="Web Design">Web Design</option>
                        </select>
                    </div>
                )}

                {showHobbyList && (
                    <div className="col-md-6 mb-3">
                        <select className="form-select" aria-label="Hobby/Interest-based Courses">
                    
                            <option value="">Hobby/Interest-based Courses</option>
                            <option value="Cooking">Cooking</option>
                            <option value="Photography">Photography</option>
                            <option value="Painting">Painting</option>
                            <option value="Music">Music</option>
                            <option value="Writing">Writing</option>
                            <option value="Fitness and Nutrition">Fitness and Nutrition</option>
                            <option value="Beauty and Personal Care">Beauty and Personal Care</option>
                        </select>
                    </div>
                )}

                {showVocationalList && (
                    <div className="col-md-6 mb-3">
                        <select className="form-select" aria-label="Vocational/Technical Courses">
                      
                            <option value="">Vocational/Technical Courses</option>
                            <option value="Plumbing">Plumbing</option>
                            <option value="Automotive Mechanics">Automotive Mechanics</option>
                            <option value="Carpentry">Carpentry</option>
                            <option value="Welding">Welding</option>
                            <option value="Electrician Training">Electrician Training</option>
                            <option value="Heating, Ventilation, and Air Conditioning">Heating, Ventilation, and Air Conditioning</option>
                        </select>
                    </div>
                )}

                    <div className="col-md-6 mb-3">
                    <select className="form-select" aria-label="category">
                        <option value="">course duration</option>
                        <option value="Short-term (e.g., 1-3 months)">Short-term (e.g., 1-3 months)</option>
                        <option value="Medium-term (e.g., 3-6 months)">Medium-term (e.g., 3-6 months)</option>
                        <option value="Long-term (e.g., 6+ months)">Long-term (e.g., 6+ months)</option>
                       
                        

                    </select>
                </div>
                <div className="col-md-6 mb-3">
                <select className="form-select" aria-label="budget">  
                <option value="budget">Budget  </option>
                        <option value="Less than 100DT">Less than 100DT</option>
                        <option value="100DT - 300DT">100DT - 300DT</option>
                        <option value="A300DT - 900DT">300DT - 900DT</option>
                        <option value="More than 900DT">More than 900DT</option>
                        <option value="None of the above">None of the above</option>
                        </select>
                </div>
                
               
               
                <div className="col-md-12 mb-3">
                        <div className='move'>
                    <Button className="contbutton">
                    <Link to="/training center/tcwelcome" style={{ textDecoration: 'none', color: 'white' }}>Continue</Link>
                </Button>
                

                <div className='previous'>
                <Button className="previous" >
                    <Link to="/learner1" style={{ textDecoration: 'none', color: 'white'}}>Previous</Link>
                </Button> </div>
                </div>
                </div>
            </div>
        </div>
       
    );
};

export default Learner2 ;
