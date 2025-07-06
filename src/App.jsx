import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/frontend/Home";
import About from "./components/frontend/About";
import Services from "./components/frontend/Services";
import Projects from "./components/frontend/Projects";
import Blogs from "./components/frontend/Blogs";
import Contact from "./components/frontend/Contact";
import './assets/css/style.scss'
import Login from "./components/backend/Login";
import { ToastContainer } from 'react-toastify';
import Dashboard from "./components/backend/Dashboard";
import RequierAuth from "./components/common/RequierAuth";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/service" element={<Services/>} />
          <Route path="/project" element={<Projects/>} />
          <Route path="/blog" element={<Blogs/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/admin/login" element={<Login/>} />

          <Route path="/admin/dashboard" element={
            <RequierAuth><Dashboard/></RequierAuth>} />


        </Routes>




      </BrowserRouter>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        draggable
        progress={undefined}
        theme="light"
      />
    </div>
  );
}

export default App;
