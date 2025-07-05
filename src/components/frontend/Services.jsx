import React from 'react'
import Header from '../common/Header'
import Footer from '../common/Footer'
import ServiceImg from "../../assets/images/construction1.jpg"
import { Link } from "react-router-dom";

const Services = () => {
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
                <h1>Services</h1>
                <p>
                  We excel at transforming visions into reality <br />
                  through outstanding craftsmanship and precise.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* hero-section=================== */}

        {/* services-part==================== */}
        <section className="section-3 light-bg py-5">
            <div className="container-fluid">
                <div className="section-header py-5">
                    <span>our services</span>
                    <h2>Our construction services</h2>
                    <p>We offer a diverse array of construction services, spanning residential, commercial, and industrial projects.</p>
                </div>

                <div className="row">
                    <div className="col-lg-3">
                        <div className="item">
                            <div className="service_img">
                                <img src={ServiceImg} className="w-100" alt="" />
                            </div>
                            <div className="service_body">
                                <div className="service_title">
                                    <h3>Specialty Construction</h3>
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
                                <img src={ServiceImg} className="w-100" alt="" />
                            </div>
                            <div className="service_body">
                                <div className="service_title">
                                    <h3>Specialty Construction</h3>
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
                                <img src={ServiceImg} className="w-100" alt="" />
                            </div>
                            <div className="service_body">
                                <div className="service_title">
                                    <h3>Specialty Construction</h3>
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
                                <img src={ServiceImg} className="w-100" alt="" />
                            </div>
                            <div className="service_body">
                                <div className="service_title">
                                    <h3>Specialty Construction</h3>
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
        {/* services-part==================== */}
      </main>

      <Footer/>
    </div>
  )
}

export default Services