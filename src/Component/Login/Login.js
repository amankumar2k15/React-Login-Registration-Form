import axios from 'axios'
import React, { useEffect, useState } from 'react'
import bgImg from "../../assets/bgimg.jpg"

const Login = (props) => {
    const [userData, setUserData] = useState()


    const getDataUser = () => {
        axios.get(" http://localhost:3000/user").then((res) => {
            setUserData(res.data)
        }).catch((err) => {
            console.log(err)
        })
    }
    // console.log(userData)

    //Life Cycle Method
    useEffect(() => {
        getDataUser()
    }, [])


    const initialLoginData = {
        email: "",
        password: ""
    }

    const handleData = (event) => {
        const { value, id } = event.target;
        if (id === "login_email") {
            initialLoginData.email = value;
        } else if (id === "login_password") {
            initialLoginData.password = value;
        }
    }

    const validation = () => {
        if (initialLoginData.email.length === 0) {
            return {
                isError: false,
                message: "Email is missing"
            }
        }
        else if (initialLoginData.password.length === 0) {
            return {
                isError: false,
                message: "Password is missing"
            }
        }
        else {
            return {
                isError: true
            }
        }
    }

    const handleLogin = () => {
        // console.log(initialLoginData)
        if (validation().isError) {

            const filterUser = userData.filter((item) => item.email === initialLoginData.email && item.password === initialLoginData.password)
            if (filterUser.length > 0) {
                alert("Login")
            } else {
                alert("Invalid Credentials")
            }
        } else {
            alert(validation().message)
        }
    }

    const loginClicked = () => {
        props.toggleComponent(true)
    }

    return (
        <>
            <section className=" bg-image vh-100" style={{ background: `url(${bgImg})` }}>
                <div className="mask d-flex align-items-center h-100 gradient-custom-3">
                    <div className="container h-100">
                        <div className="row d-flex justify-content-center align-items-center h-100">
                            <div className="col-12  col-md-9 col-lg-7 col-xl-6"></div>
                            <div className="card w-50 m-5" id="login-form" style={{ borderRadius: "15px" }}>
                                <div className="card-body p-5">
                                    <h2 className="text-uppercase text-center mb-5">Login</h2>

                                    <form>
                                        <div className="form-outline mb-4">
                                            <input type="email" id="login_email" onChange={handleData} className="form-control form-control-lg" />
                                            <label className="form-label" id="your-login_email" htmlFor="email">Your Email</label>
                                        </div>

                                        <div className="form-outline mb-4">
                                            <input type="password" id="login_password" onChange={handleData} className="form-control form-control-lg" />
                                            <label className="form-label" id="your_login_password" htmlFor="login_password">Password</label>
                                        </div>

                                        <br />
                                        <div className="d-flex justify-content-center">
                                            <button type="button"
                                                className="btn w-100 btn-success btn-block btn-lg gradient-custom-4 text-body" onClick={handleLogin}>Login</button>
                                        </div>

                                        <p className="text-center text-muted mt-5 mb-0">Don't have account? <a href="#!"
                                            className="fw-bold text-body" id="login-show"><u onClick={loginClicked}>Sign up</u></a>
                                        </p>

                                    </form>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Login