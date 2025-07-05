import React from "react";
import AboutImg from "../../assets/images/about-us.jpg"
import Header from "../common/Header";
import Footer from "../common/Footer";
import { Link } from "react-router-dom";
import ServiceImg from "../../assets/images/construction1.jpg"
import ProjectImg from "../../assets/images/construction2.jpg"
import Icon1 from "../../assets/images/icon-1.svg"
import Icon2 from "../../assets/images/icon-2.svg"
import Icon3 from "../../assets/images/icon-3.svg"

const Home = () => {
  return (
    <div>
      <Header/>

      <main>
        {/* hero-section=================== */}
        <section className="section-1">
          <div className="hero d-flex align-items-center">
            <div className="container-fluid">
              <div className="text-center">
                <span>Welcome Amazing Constructions</span>
                <h1>Crafting dreams with<br/> precision and excellence.</h1>
                <p>
                  We excel at transforming visions into reality through
                  outstanding craftsmanship and precise<br/> attention to detail.
                  With years of experience and a dedication to quality.
                </p>
                <div className="mt-4">
                    <a href="" className="btn btn-primary">Contact Now</a>
                    <a href="" className="btn btn-secondary ms-2">View Project</a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* hero-section=================== */}

        {/* about-us-section=================== */}
        <section className="section-2 py-5">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <img src={AboutImg} className="w-100" alt="about image" />
                    </div>

                    <div className="col-lg-6">
                        <span>about us</span>
                        <h2>Crafting structures that last a lifetime</h2>
                        <p>Building enduring structures requires a comprehensive approach that combines advanced materials, resilient design, routine maintenance, and sustainable practices. By drawing on historical insights and utilizing modern technology.</p>
                        <p>Designing structures that stand the test of time involves a seamless blend of cutting-edge materials, durable design, ongoing upkeep, and eco-friendly practices. By combining lessons from the past with the power of modern technology.</p>
                    </div>
                </div>
            </div>
        </section>
        {/* about-us-section=================== */}

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


        {/* why_choose_us_part================= */}

        <section className="section-4 py-5">
            <div className="container">
                <div className="section-header py-5">
                    <span>Why Choose Us</span>
                    <h2>Discover our wide variety of projects.</h2>
                    <p>Created in close partnership with our clients and collaborators, this approach merges industry expertise, decades of experience, innovation, and flexibility to consistently deliver excellence.</p>
                </div>

                <div className="row">
                    <div className="col-lg-4">
                        <div className="card shadow border-0 p-4">
                            <div className="card_icon">
                                <img src={Icon1} alt="" />
                            </div>
                            <div className="card-body">
                                <h4>Cutting-Edge Solutions</h4>
                                <p>Small actions create big impacts. It all begins and ends with each employee committing to safer work practices daily, ensuring they return home safely.</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-lg-4">
                        <div className="card shadow border-0 p-4">
                            <div className="card_icon">
                                <img src={Icon2} alt="" />
                            </div>
                            <div className="card-body">
                                <h4>Cutting-Edge Solutions</h4>
                                <p>Small actions create big impacts. It all begins and ends with each employee committing to safer work practices daily, ensuring they return home safely.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4">
                        <div className="card shadow border-0 p-4">
                            <div className="card_icon">
                                <img src={Icon3} alt="" />
                            </div>
                            <div className="card-body">
                                <h4>Cutting-Edge Solutions</h4>
                                <p>Small actions create big impacts. It all begins and ends with each employee committing to safer work practices daily, ensuring they return home safely.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* why_choose_us_part================= */}

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
  );
};

export default Home;
