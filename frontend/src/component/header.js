import React from 'react';




const Header = () => {
    return (
        
        <div className="header-area header-transparent">
            <div className="main-header ">
                <div className="header-bottom  header-sticky">
                    <div className="container-fluid">
                        <div className="row align-items-center">
                            <div className="col-xl-2 col-lg-2">
                            <div className="logo">
                                    <a href=""></a>  
                                </div>
                            </div>
                            <div className="col-xl-10 col-lg-10">
                                <div className="menu-wrapper d-flex align-items-center justify-content-end">
                                    <div className="main-menu d-none d-lg-block">
                                        <nav>
                                            <ul id="navigation">
                                                
                                                <li className="active"><a href="index.html">Home</a></li>
                                                <li><a href="#">Courses</a></li>
                                                <li><a href="#">Training centers</a></li>
                                                <li><a href="#">Events</a></li>
                                                <li><a href="#">About</a></li>
                                                <li><a href="#">Contact</a></li>
                                                
                                                <li className="button-header margin-left"><a href="#" className="btn">Add your course</a></li>
                                                <li className="button-header"><a href="#" className="btn btn3">Sign up</a></li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="mobile_menu d-block d-lg-none"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    );
};

export default Header;
