import React from 'react';
import { Link } from 'react-router-dom';
import './Content.css';

const Content = () => {
    return (
        <div className="text-start">
           
            
            {/* About */}
            <section className="my-4 py-4 contaner_bg">
                <div className="container ">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="about-img">
                                <img src="https://backpacktraveler.qodeinteractive.com/wp-content/uploads/2018/10/landing-posts-img-1.jpg" alt="" className="img-fluid" />

                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="ps-4 mt-4 mt-lg-0">
                                <h1 className="fs-1">Team NC</h1>
                                <h5 className="mt-4 mb-5">We are a group of enthusaistic coders and Web Developers.</h5>

                                <Link to="/about" className="text-decoration-none">
                                        <button className="btn btn-primary d-flex justify-content-between align-items-center">
                                            About Us
                                           
                                        </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            

            {/* Appoinment */}
                <div className="container py-4 my-4">
                   
                </div>
        </div>
    );
};

export default Content;