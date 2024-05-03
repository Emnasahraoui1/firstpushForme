import React from 'react';
import { Carousel, Container, Row, Col } from 'react-bootstrap';
import uxImage from '../img/section/UX.png';
import reactJsImage from '../img/section/reactjs.jpeg';
import machineLearningImage from '../img/section/machine.jpeg';
import centerImage from '../img/section/center.png';

const CoursesCarousel = () => {
    return (
        <div className="courses-area section-padding40 fix">
            <Container>
                <div className="section-tittle text-center mb-60">
                    <h2>Discover popular courses</h2>
                    <h3>Explore our most popular courses offered.</h3>
                </div>
                <Carousel indicators={false} pause={false} prevIcon={<span className="carousel-control-prev-icon" aria-hidden="true" />} nextIcon={<span className="carousel-control-next-icon" aria-hidden="true" />}>
                    <Carousel.Item>
                        <Row className="justify-content-center">
                            <CourseCard
                                image={uxImage}
                                title="UI/UX Design"
                                center="Proservices Training Company"
                                description="Unlock the secrets of exceptional user experiences with our UI/UX design training program. Dive into the fundamentals of UI/UX design to create intuitive, visually appealing digital products."
                            />
                            <CourseCard
                                image={reactJsImage}
                                title="Full course React JS"
                                center="Proservices Training Company"
                                description="Dive into the world of React with our comprehensive course! Discover how to build dynamic and interactive web interfaces using React."
                            />
                            <CourseCard
                                image={machineLearningImage}
                                title="Machine Learning Specialization"
                                center="Proservices Training Company"
                                description="Discover the world of machine learning in our course! Learn to build predictive models, extract insights from data, and delve into advanced topics like deep learning."
                            />
                        </Row>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Row className="justify-content-center">
                            <CourseCard
                                image={uxImage}
                                title="UI/UX Design"
                                center="Proservices Training Company"
                                description="Unlock the secrets of exceptional user experiences with our UI/UX design training program. Dive into the fundamentals of UI/UX design to create intuitive, visually appealing digital products."
                            />
                            <CourseCard
                                image={reactJsImage}
                                title="Full course React JS"
                                center="Proservices Training Company"
                                description="Dive into the world of React with our comprehensive course! Discover how to build dynamic and interactive web interfaces using React."
                            />
                            <CourseCard
                                image={machineLearningImage}
                                title="Machine Learning Specialization"
                                center="Proservices Training Company"
                                description="Discover the world of machine learning in our course! Learn to build predictive models, extract insights from data, and delve into advanced topics like deep learning."
                            />
                        </Row>
                    </Carousel.Item>
                </Carousel>
            </Container>
        </div>
    );
};

const CourseCard = ({ image, title, center, description }) => {
    return (
        <Col lg={4} md={6} sm={8} className="mb-20">
            <div className="properties__card">
                <div className="properties__img overlay1">
                    <a href="#"><img src={image} alt={title} /></a>
                </div>
                <div className="properties__caption">
                    <div className="type">
                        <p>{title}</p>
                        <p className="free">FREE</p>
                    </div>
                    <div className="center-name">
                        <a href="#"><img src={centerImage} height="20px" alt="Proservices Training Company" /></a>
                        <h4>{center}</h4>
                    </div>
                    <p>{description}</p>
                    <div className="properties__footer d-flex">
                        <ul>
                            <li>.6-8 week course</li>
                            <li>.Certified</li>
                        </ul>
                    </div>
                    <a href="#" className="discover">Enroll now</a>
                </div>
            </div>
        </Col>
    );
};

export default CoursesCarousel;
