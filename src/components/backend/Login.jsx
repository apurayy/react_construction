import React from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Login = () => {

    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        const res = await fetch("http://localhost:8000/api/authenticate", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
        });

        const result = await res.json();
        if(result.status == false){
            toast.error(result.message)
        }else{
            toast.success(result.message);

            const userInfo = {
                id: result.id,
                token: result.token,
            }

            localStorage.setItem("userInfo", JSON.stringify(userInfo));
            navigate("/admin/dashboard");
        }
        
    };

  return (
    <div>
      <Header />
      <main>
        <section className="login-section">
          <div className="container my-5 d-flex justify-content-center align-items-center">
            <div className="card shadow border-0 p-4">
              <h4 className="text-center py-2">Admin Login</h4>
              <hr />
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                            message: "Please enter a valid email address",
                        },
                    })}
                    type="email"
                    id="email"
                    className={`form-control ${errors.email && "is-invalid"}`}
                    placeholder="Enter your Email"
                  />
                  {errors.email && (
                    <p className="text-danger">{errors.email.message}</p>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input
                    {...register("password", {
                      required: "Password is required",
                    })}
                    type="password"
                    id="password"
                    className={`form-control ${
                      errors.password && "is-invalid"
                    }`}
                    placeholder="Enter your Password"
                  />
                  {errors.password && (
                    <p className="text-danger">{errors.password.message}</p>
                  )}
                </div>

                <button type="submit" className="btn btn-primary w-100">
                  Login
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Login;
