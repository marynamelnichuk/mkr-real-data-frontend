import React from "react";
import './Signup.css';
import signupImage from './signup.png';
import SignupForm from "../SignupForm/SignupForm";

class Signup extends React.Component {

    render() {
        return (
            <div>
                <div className="main-container">
                    <div className="login-image-container">
                        <img src={signupImage} />
                    </div>
                    <div className="login-form">
                            <SignupForm />
                    </div>
                </div>
            </div>
        )
    }
}

export default Signup;