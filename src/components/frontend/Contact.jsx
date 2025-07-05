import React from 'react'
import Header from "../common/Header";
import Footer from "../common/Footer";

const Contact = () => {
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
                <h1>Contact US</h1>
                <p>
                  We excel at transforming visions into reality <br />
                  through outstanding craftsmanship and precise.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* hero-section=================== */}

      
      </main>

      <Footer/>
    </div>
  )
}

export default Contact