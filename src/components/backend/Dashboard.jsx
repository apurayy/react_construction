import React from 'react'
import Header from '../common/Header'
import Footer from '../common/Footer'

const Dashboard = () => {
  return (
    <div>
        <Header/>
        <main className="dashboard-main">
            <div className="container my-5">
                <div className="row">
                    <div className="col-lg-3">
                        <div className="card shadow border-0 p-4">
                            <h4 className="py-2">Sidebar</h4>
                            <li>1</li>
                            <li>1</li>
                            <li>1</li>
                            <li>1</li>
                            <li>1</li>
                        </div>
                    </div>

                    <div className="col-lg-9">
                        <div className="card shadow border-0 p-4">
                            <h4 className="py-2">Dashboard</h4>
                            <hr />
                            <p>Welcome to the admin dashboard!</p>
                            <p>Here you can manage your website content, view statistics, and perform administrative tasks.</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
        <Footer/>
    </div>
  )
}

export default Dashboard