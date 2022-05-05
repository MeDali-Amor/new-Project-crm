import React, { useState } from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";
import LoginBanner from "./LoginBanner";
import LoginForm from "./LoginForm";
import "./login.scss";
import axios from "axios";

const Login = () => {
    // const initialState = { email: "", password: "" };
    // const [userLoginData, setUserLoginData] = useState(initialState);
    // const { email, password } = userLoginData;
    // const [typePass, setTypePass] = useState(false);

    // const navigate = useNavigate();
    // const location = useLocation();
    // const from = location.state?.from?.pathname || "/";
    // const handleLogin = async (e) => {
    //     e.preventDefault();
    //     try {
    //         const body = { email, password };
    //         const res = await axios.post(
    //             "https://18a3-197-244-143-40.eu.ngrok.io/account/api/login",
    //             body
    //         );
    //         console.log(res);
    //         //    navigate("/", { replace: true });
    //     } catch (error) {
    //         console.log(error);
    //     }
    // };

    // const handleChange = (e) => {
    //     const { name, value } = e.target;
    //     setUserLoginData({ ...userLoginData, [name]: value });
    // };

    return (
        <div className="loginPage">
            <LoginBanner />
            <LoginForm
            // handleLogin={handleLogin}
            // email={email}
            // password={password}
            // handleChange={handleChange}
            />
        </div>
    );
};

export default Login;
