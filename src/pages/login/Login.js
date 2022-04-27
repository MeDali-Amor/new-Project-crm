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
        navigate("/", { replace: true });
    };
    return (
        <div className="loginPage">
            <LoginBanner />
            <LoginForm handleLogin={handleLogin} />
        </div>
    );
};

export default Login;
