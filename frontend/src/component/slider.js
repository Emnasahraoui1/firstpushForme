import React from 'react';

const Home = () => {
    return (
        <section className="slider-area">
        

            <div className="slider-active">
                
                {/* Single Slider */}
                <div className="single-slider slider-height d-flex align-items-center">
                    <div className="container">
                        <div className="row">
                            
                            <div className="col-xl-6 col-lg-7 col-md-12">
                                
                                <div  className="hero__caption" >
                                    
                                    <h1 data-animation="fadeInLeft" data-delay="0.2s">For Me is the perfect
                                        <br />  match FOR YOU</h1>
                                    <p data-animation="fadeInLeft" data-delay="0.4s">Where Learners and Training Centers Align for 
                                        Your Personalized Learning Journey</p>
                                     
                                </div>
                                
                                <a style={{ '--clr': '#7808d0' }} className="button" href="#">
                                    <span className="button__icon-wrapper">
                                        <svg width="10" className="button__icon-svg" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 15">
                                            <path fill="currentColor" d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"></path>
                                        </svg>
                                        
                                        <svg className="button__icon-svg  button__icon-svg--copy" xmlns="http://www.w3.org/2000/svg" width="10" fill="none" viewBox="0 0 14 15">
                                            <path fill="currentColor" d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"></path>
                                        </svg>
                                    </span>
                                    Explore All
                                </a>
                            </div>
                        </div>
                    </div>          
                </div>
            </div>
        </section>
    );
};

export default Home;
