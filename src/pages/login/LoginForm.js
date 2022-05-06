import React, { useState } from "react";
import CustomCheckbox from "../../components/customCheckbox/CustomCheckbox";
import "./login.scss";
import { useNavigate, Link, useLocation } from "react-router-dom";

import axios from "axios";
import Loader from "../../components/loader/Loader";
import ErrorMessage from "../../components/errorMessage/ErrorMessage";
const LoginForm = () => {
    // const initialState = { email: "", password: "" };
    // const [userLoginData, setUserLoginData] = useState(initialState);
    // const { email, password } = userLoginData;
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");
    const [typePass, setTypePass] = useState(false);

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            setIsLoading(true);
            setError("");
            const config = {
                headers: {
                    "Content-Type": "application/json",
                },
            };
            const body = { email, password };
            const res = await axios.post(
                "https://ac8a-197-238-56-76.eu.ngrok.io/account/api/login",
                body
            );
            console.log(res);
            setIsLoading(false);
            navigate("/", { replace: true });
        } catch (error) {
            // console.log(error.response.status);
            if (error.response.status === 401) {
                setError("Email ou mot de passe incorrect!");
            } else {
                setError("Une erreur s'est produite veuillez réessayer!");
            }
            setIsLoading(false);
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
                    required={true}
                    onChange={onChangeEmail}
                />
                <label className="login-label" htmlFor="password">
                    Password
                </label>
                <div className="pass-input">
                    <input
                        className="login-input pass-input"
                        type={typePass ? "text" : "password"}
                        placeholder="Password"
                        id="password"
                        value={password}
                        onChange={onChangePassword}
                        required={true}
                    />

                    <small
                        onClick={() => setTypePass(!typePass)}
                        className="show-hide_pass"
                    >
                        {typePass ? (
                            <i className="fa-solid fa-eye"></i>
                        ) : (
                            <i className="fa-solid fa-eye-slash"></i>
                        )}
                    </small>
                </div>
                <div className="login-row">
                    <div>
                        <CustomCheckbox />
                        <label className="login-check-label">
                            Se souvenir de moi
                        </label>
                    </div>
                    <p className="login-secondary-link">Mot de passe oublié</p>
                </div>
                {error.length > 0 && <ErrorMessage msg={error} />}
                {isLoading && (
                    <div className="loading-wrapper">
                        <Loader />
                    </div>
                )}
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
