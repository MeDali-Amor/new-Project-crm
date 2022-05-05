import React, { useState } from "react";
import CustomCheckbox from "../../components/customCheckbox/CustomCheckbox";
import "./login.scss";
import { useNavigate, Link, useLocation } from "react-router-dom";

import axios from "axios";
const LoginForm = () => {
    // const initialState = { email: "", password: "" };
    // const [userLoginData, setUserLoginData] = useState(initialState);
    // const { email, password } = userLoginData;
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [typePass, setTypePass] = useState(false);

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const config = {
                headers: {
                    "Content-Type": "application/json",
                },
            };
            const body = { email, password };
            const res = await axios.post(
                "https://250c-197-244-143-40.eu.ngrok.io/account/api/login",
                body
            );
            console.log(res);
            //    navigate("/", { replace: true });
        } catch (error) {
            console.log(error);
        }
    };

    // const handleChange = (e) => {
    //     const { name, value } = e.target;
    //     setUserLoginData({ ...userLoginData, [name]: value });
    // };
    const onChangeEmail = (e) => {
        setEmail(e.target.value);
    };

    const onChangePassword = (e) => {
        setPassword(e.target.value);
    };
    return (
        <div className="login-form-container">
            {/* <div className="background">
                <div className="shape"></div>
                <div className="shape"></div>
            </div> */}
            <form className="login-form" onSubmit={handleLogin}>
                <h3 className="login-title">Bienvenue</h3>
                <label className="login-label" htmlFor="username">
                    Email
                </label>
                <input
                    className="login-input"
                    type="email"
                    placeholder="Email or Phone"
                    id="username"
                    value={email}
                    onChange={onChangeEmail}
                />
                <label className="login-label" htmlFor="password">
                    Password
                </label>
                <input
                    className="login-input"
                    type="password"
                    placeholder="Password"
                    id="password"
                    value={password}
                    onChange={onChangePassword}
                />
                <div className="login-row">
                    <div>
                        <CustomCheckbox />
                        <label className="login-check-label">
                            Se souvenir de moi
                        </label>
                    </div>
                    <p className="login-secondary-link">Mot de passe oublié</p>
                </div>
                <button className="login-button" type="submit">
                    Log In
                </button>
            </form>
            <div className="login-secondary-text-container">
                <span className="login-secondary-text">
                    Vous n'avez pas un compte?
                </span>
                <span className="login-secondary-link">s'inscrire ici</span>
            </div>
        </div>
    );
};

export default LoginForm;
