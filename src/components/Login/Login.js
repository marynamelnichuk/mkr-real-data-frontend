import React from "react";
import LoginForm from "../LoginForm/LoginForm";
import './Login.css';
import loginImage from './login.png';
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();

    return (
        <div>
            <div className="main-container">
                <div className="login-image-container">
                    <img src={loginImage} />
                </div>
                <div className="login-form">
                    <LoginForm navigation={navigate} />
                </div>
            </div>
        </div>
    );
};

export default Login;