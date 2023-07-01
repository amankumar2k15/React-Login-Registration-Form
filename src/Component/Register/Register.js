import React from "react";
import axios from "axios";
import bgImg from "../../assets/bgimg.jpg"


const Register = (props) => {
    // console.log(props)
    // const [data, setData] = useState(initialData)       

    const initialData = {
        name: "",
        email: "",
        password: "",
        repeatPassword: "",
        checkbox: false,
    }


    const handleInput = (event) => {
        const { id, value, checked } = event.target;
        // setData((preValue) => ({ ...preValue, [id]: value }))
        // // console.log(data)


        switch (id) {
            case "name":
                initialData.name = value;
                break;
            case "email":
                initialData.email = value;
                break;
            case "password":
                initialData.password = value;
                break;
            case "repeatPassword":
                initialData.repeatPassword = value;
                break;
            case "checkbox":
                initialData.checkbox = checked
                break;
            default:
                console.log("Invalid details")
        }
        console.log(initialData)
    };



    const validation = () => {
        if (initialData.name.length === 0) {
            return {
                isError: false,
                message: "name is missing"
            }
        }
        else if (initialData.email.length === 0) {
            return {
                isError: false,
                message: "email is missing"
            }
        }
        else if (initialData.password.length === 0) {
            return {
                isError: false,
                message: "password is missing"
            }
        }
        else if (initialData.repeatPassword.length === 0) {
            return {
                isError: false,
                message: "repeatPassword is missing"
            }
        }
        else if (initialData.password !== initialData.repeatPassword) {
            return {
                message: "Password did not match"
            }
        }
        else if (initialData.checkbox === false) {
            return {
                isError: false,
                message: "Please Accept Terms and Condition"
            }
        }
        else {
            return {
                isError: true
            }
        }
    }

    const handleSubmit = () => {
        if (validation().isError) {
            axios.post("http://localhost:3000/user", initialData).then((res) => {
                // console.log(res)
                props.toggleComponent(false)
            }).catch((err) => {
                console.log(err)
            })
        } else {
            alert(validation().message)
        }
    };


    const registerClicked = () => {
        props.toggleComponent(false)
    }


    return (
        <>
            <section className=" bg-image vh-100" style={{ background: `url(${bgImg})` }}>
                <div className="mask d-flex align-items-center h-100 gradient-custom-3">
                    <div className="container h-100">
                        <div className="row d-flex justify-content-center align-items-center h-100">
                            <div className="col-12 col-md-9 col-lg-7 col-xl-6">

                                <div className="card" id="registration-form" style={{ borderRadius: "15px" }} >
                                    <div className="card-body p-4">

                                        {/* //Props used ====> */}
                                        <h2 className="text-uppercase text-center mb-5">{props.heading}</h2>

                                        <form>

                                            <div className="form-outline mb-4">
                                                <input type="text" id="name" onChange={handleInput} className="form-control form-control-lg" />
                                                <label className="form-label" id="name" htmlFor="your_name">Your Name</label>
                                            </div>

                                            <div className="form-outline mb-4">
                                                <input type="email" id="email" onChange={handleInput} className="form-control form-control-lg" />
                                                <label className="form-label" id="your_email" htmlFor="email">Your Email</label>
                                            </div>

                                            <div className="form-outline mb-4">
                                                <input type="password" id="password" onChange={handleInput} className="form-control form-control-lg" />
                                                <label className="form-label" id="your_password" htmlFor="password">Password</label>
                                            </div>

                                            <div className="form-outline mb-2">
                                                <input type="password" id="repeatPassword" onChange={handleInput} className="form-control form-control-lg" />
                                                <label className="form-label" id="your_repeat_password" htmlFor="repeatPassword">Repeat your password</label>
                                            </div>

                                            <div className="form-check d-flex justify-content-center mb-1">
                                                <input className="form-check-input mb-3" type="checkbox" value="" onChange={handleInput} id="checkbox" />
                                                <label className="form-check-label mx-2" htmlFor="checkbox">
                                                    I agree all statements in <a href="#!" className="text-body"><u>Terms of service</u></a>
                                                </label>
                                            </div>

                                            <div className="d-flex justify-content-center">
                                                <button type="button" id="register "
                                                    className="btn w-100 btn-success btn-block mt-3 mb-3 btn-lg gradient-custom-4 text-body" onClick={handleSubmit}>Register</button>
                                            </div>
                                            <p className="text-center text-muted mt-2 mb-0">Have already an account? <a href="#!"
                                                className="fw-bold text-body"><u onClick={registerClicked}>Login here</u></a>
                                            </p>
                                        </form>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Register;
