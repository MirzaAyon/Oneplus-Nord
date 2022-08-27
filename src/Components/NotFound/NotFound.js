import React from "react";
import { useNavigate } from "react-router-dom";
import "./NotFound.css";

const NotFound = () => {
    const navigate = useNavigate();
    return (
        <div className="container error-container d-flex justify-content-md-center align-items-center">
            <div>
                <h2 className="text-center fw-bold">WE ARE SORRY,PAGE NOT FOUND!</h2>
                <p className="text-center text-start">
                    THE PAGE YOU ARE LOOKING FOR MIGHT HAVE BEEN REMOVED HAD ITS NAME
                    CHANGED OR IS TEMPORARILY UNAVAILABLE
                </p>
                <button
                    onClick={() => navigate("/home")}
                    className="btn btn-lg btn-primary rounded-pill"
                >
                    BACK TO HOMEPAGE
                </button>
            </div>
        </div>
    );
};

export default NotFound;
