import React from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";
import LoginBanner from "./LoginBanner";
import LoginForm from "./LoginForm";
import "./login.scss";

const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    const handleLogin = (e) => {
        e.preventDefault();
    };
    return (
        <div className="loginPage">
            <LoginBanner />
            <LoginForm
                handleLogin={handleLogin}
                // setUserRole={setUserRole}
                // userRole={userRole}
                navigate={navigate}
                from={from}
            />
        </div>
    );
};

export default Login;
