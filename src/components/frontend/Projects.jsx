import React from 'react'
import Header from "../common/Header";
import Footer from "../common/Footer";
import ProjectImg from "../../assets/images/construction2.jpg"
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <div>
      <Header/>

      <main>
        {/* hero-section=================== */}
        <section className="section-7">
          <div className="hero d-flex align-items-center">
            <div className="container">
              <div className="text-left">
                <span>Quality. Integrity. Value.</span>
                <h1>Project</h1>
                <p>
                  We excel at transforming visions into reality <br />
                  through outstanding craftsmanship and precise.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* hero-section=================== */}

        
        {/* Projects-part==================== */}
        <section className="section-3 light-bg py-5">
            <div className="container-fluid">
                <div className="section-header py-5">
                    <span>our projects</span>
                    <h2>Discover our diverse range of projects</h2>
                    <p>We offer a diverse array of construction services, spanning residential, commercial, and industrial projects.</p>
                </div>

                <div className="row">
                    <div className="col-lg-3">
                        <div className="item">
                            <div className="service_img">
                                <img src={ProjectImg} className="w-100" alt="" />
                            </div>
                            <div className="service_body">
                                <div className="service_title">
                                    <h3>Goa Project 2025</h3>
                                </div>
                                <div className="service_content">
                                    <p>Specialty construction is a niche sector within the construction industry that focuses on projects requiring specialized skills, materials, and techniques.</p>
                                    <Link className="btn btn-primary">Read More</Link>
                                </div>
                            </div>
                        </div>
                    </div> 

                    <div className="col-lg-3">
                        <div className="item">
                            <div className="service_img">
                                <img src={ProjectImg} className="w-100" alt="" />
                            </div>
                            <div className="service_body">
                                <div className="service_title">
                                    <h3>Goa Project 2025</h3>
                                </div>
                                <div className="service_content">
                                    <p>Specialty construction is a niche sector within the construction industry that focuses on projects requiring specialized skills, materials, and techniques.</p>
                                    <Link className="btn btn-primary">Read More</Link>
                                </div>
                            </div>
                        </div>
                    </div> 

                    <div className="col-lg-3">
                        <div className="item">
                            <div className="service_img">
                                <img src={ProjectImg} className="w-100" alt="" />
                            </div>
                            <div className="service_body">
                                <div className="service_title">
                                    <h3>Goa Project 2025</h3>
                                </div>
                                <div className="service_content">
                                    <p>Specialty construction is a niche sector within the construction industry that focuses on projects requiring specialized skills, materials, and techniques.</p>
                                    <Link className="btn btn-primary">Read More</Link>
                                </div>
                            </div>
                        </div>
                    </div> 

                    <div className="col-lg-3">
                        <div className="item">
                            <div className="service_img">
                                <img src={ProjectImg} className="w-100" alt="" />
                            </div>
                            <div className="service_body">
                                <div className="service_title">
                                    <h3>Goa Project 2025</h3>
                                </div>
                                <div className="service_content">
                                    <p>Specialty construction is a niche sector within the construction industry that focuses on projects requiring specialized skills, materials, and techniques.</p>
                                    <Link className="btn btn-primary">Read More</Link>
                                </div>
                            </div>
                        </div>
                    </div> 

                </div>
            </div>
        </section>
        {/* Projects-part==================== */}

        
      </main>

      <Footer/>
    </div>
  )
}

export default Projects