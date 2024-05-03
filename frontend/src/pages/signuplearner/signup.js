
import React, { useState } from 'react';
import './sign.css';
import axios from 'axios';
import Login from './login';
import { Link } from 'react-router-dom';


function Signup() {
    const [isActive, setIsActive] = useState(false);
    const [errors, setErrors] = useState({
        learner_fullname: '',
        learner_email: '',
        learner_password: ''
    });

    const handleRegisterClick = () => {
        setIsActive(true);
    };

    const handleLoginClick = () => {
        setIsActive(false);
    };

    const [Values, setValues] = useState({
        learner_fullname: '',
        learner_email: '',
        learner_password: ''
    });

    const handleChange = (event) => {
        setValues({ ...Values, [event.target.name]: event.target.value });

        // Clear previous error message for the field being changed
        setErrors({ ...errors, [event.target.name]: '' });
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        const newErrors = {};

        // Perform form validation
        if (!Values.learner_fullname.match(/^[A-Za-z\s]+$/)) {
            newErrors.learner_fullname = "Name should contain only letters and spaces.";
        }

        if (!Values.learner_email.includes('@')) {
            newErrors.learner_email = "Email should contain '@'.";
        }

        if (Values.learner_password.length < 6) {
            newErrors.learner_password = "Password should be at least 6 characters long.";
        }

        // Check if any field is empty
        for (let field in Values) {
            if (Values[field].trim() === '') {
                newErrors[field] = "This field is required.";
            }
        }

        if (Object.keys(newErrors).length > 0) {
            // Update errors state with new error messages
            setErrors(newErrors);
            return;
        }

        // If all validations pass, submit the form
        axios.post('http://localhost:8081/signup', Values)
            .then(res => {
                console.log("Registered Successfully !");
                alert("Registered Successfully !");
            })
            .catch(err => {
                console.error("Registration failed:", err.response.data.message);
                alert("Registration failed: " + err.response.data.message);
            });
    }

    return (
        <div className='all'>
        <div className={`container ${isActive ? "active" : ""}`} id="container">
            <div className="form-container sign-up">
                <form onSubmit={handleSubmit}>
                    <h1>Create Account</h1>
                    <input type="text" placeholder="Full name" name="learner_fullname" value={Values.learner_fullname} onChange={handleChange} />
                    {errors.learner_fullname && <span className="error">{errors.learner_fullname}</span>}
                    <input type="email" placeholder="Email" name="learner_email" value={Values.learner_email} onChange={handleChange} />
                    {errors.learner_email && <span className="error">{errors.learner_email}</span>}
                    <input type="password" placeholder="Password" name="learner_password" value={Values.learner_password} onChange={handleChange} />
                    {errors.learner_password && <span className="error">{errors.learner_password}</span>}
                    <Link to="/startlearner" className="button-link">Continue</Link>
                   
                </form>
            </div>

            <Login /> {/* Include the Login component here */}

            <div className="toggle-container">
                <div className="toggle">
                    <div className={`toggle-panel toggle-left ${isActive ? "" : "active"}`}>
                        <h1>Welcome Back!</h1>
                        <p>Enter your personal details to use all of site features</p>
                        <button className="hidden" onClick={handleLoginClick}>Sign In</button>
                    </div>
                    <div className={`toggle-panel toggle-right ${isActive ? "active" : ""}`}>
                        <h1>Welcome, Friend!</h1>
                        <p>Enter your personal details to use all of site features</p>
                        <button className="hidden" onClick={handleRegisterClick}>Sign Up</button>
                    </div>
                </div>
            </div>
            </div>
        </div>
        
    );
}

export default Signup;
