import React from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
    const navigate = useNavigate();
    return (
        <div className="container error-container d-flex justify-content-md-center align-items-center">
            <div>
                <h1 className="text-center fw-bold text-info">
                    THIS WEBSITE MADE FOR GIVE USERS A PERFECT REVIEW OF ONEPLUS PRODUCTS
                </h1>

                <button
                    onClick={() => navigate("/home")}
                    className="btn btn-primary rounded-pill"
                >
                    BACK TO HOMEPAGE
                </button>
            </div>
        </div>
    );
};

export default About;
