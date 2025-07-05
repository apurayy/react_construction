import React from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";
import { Link } from "react-router-dom";
import BlogImg from "../../assets/images/construction7.jpg";

const Blogs = () => {
  return (
    <div>
      <Header />

      <main>
        {/* hero-section=================== */}
        <section className="section-7">
          <div className="hero d-flex align-items-center">
            <div className="container">
              <div className="text-left">
                <span>Quality. Integrity. Value.</span>
                <h1>Blogs</h1>
                <p>
                  We excel at transforming visions into reality <br />
                  through outstanding craftsmanship and precise.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* hero-section=================== */}

        {/* blog-part==================== */}
        <section className="section-6 light-bg py-5">
          <div className="container">
            <div className="section-header py-5">
              <span>Blog & News</span>
              <h2>Articles & blog posts</h2>
              <p>
                We offer a diverse array of construction services, spanning
                residential, commercial, and industrial projects.
              </p>
            </div>

            <div className="row">
              <div className="col-lg-4">
                <div className="card shadow border-0">
                  <img src={BlogImg} alt="" />
                  <div className="content p-4">
                    <h4>
                      One of the defining characteristics of civil construction
                    </h4>
                    <div className="blog_btn pt-2">
                      <a href="" className="btn btn-primary">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4">
                <div className="card shadow border-0">
                  <img src={BlogImg} alt="" />
                  <div className="content p-4">
                    <h4>
                      One of the defining characteristics of civil construction
                    </h4>
                    <div className="blog_btn pt-2">
                      <a href="" className="btn btn-primary">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4">
                <div className="card shadow border-0">
                  <img src={BlogImg} alt="" />
                  <div className="content p-4">
                    <h4>
                      One of the defining characteristics of civil construction
                    </h4>
                    <div className="blog_btn pt-2">
                      <a href="" className="btn btn-primary">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* blog-part==================== */}
      </main>

      <Footer />
    </div>
  );
};

export default Blogs;
