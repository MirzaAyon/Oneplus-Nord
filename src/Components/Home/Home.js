import React from "react";
import { useNavigate } from "react-router-dom";
import useReview from "../../hooks/useReview";
import Review from "../Review/Review";
import "./Home.css";
import image from "./oneplus.png";

const Home = () => {
    const navigate = useNavigate();
    const [reviews] = useReview();
    return (
        <>
            <div className="container my-5 p-5 overflow-hidden">
                <div className="row g-4 container-details">
                    <div data-aos="fade-right" className="col-lg-6">
                        <div className="text-container ">
                            <h1 className="fw-bolder display-5 text-start">
                                Oneplus Nord never settle yourself
                                <br />
                                <span className="fw-bolder display-5 text-second">
                                    Ready to get it?
                                </span>
                            </h1>
                            <p className="h5 my-4">
                                OnePlus Nord is officially announced in July 2020.

                                The smartphone has a huge sized screen, 6.44 inches Fluid AMOLED capacitive touchscreen. It comes with sensors such as Fingerprint (under display, optical), accelerometer, gyro, proximity, and compass.

                                The smartphone runs on the Android 10.0 + OxygenOS 10.0 operating system and powered by Qualcomm SDM765 Snapdragon 765G Octa-core processor. The screen of the smartphone is protected with Corning Gorilla Glass 5 while it has a 90Hz refresh rate and HDR10+
                            </p>
                            <button className="btn btn-outline-primary mb-3">
                                Live Demo
                            </button>
                        </div>
                    </div>
                    <div data-aos="fade-left" className="col-lg-6">
                        <div className="image-container">
                            <img className="w-100 h-50 mx-auto" src={image} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="container my-5  overflow-hidden">
                <h1 className="fw-bolder display-5 mb-4">Customer Reviews</h1>
                <div className="row g-4">
                    {reviews.slice(0, 3).map((review) => (
                        <Review key={review.id} reviews={review} />
                    ))}
                </div>
                <button
                    onClick={() => navigate("/reviews")}
                    className="btn btn-lg btn-primary rounded-pill mt-4"
                >
                    See All The Reviews
                </button>
            </div>
        </>
    );
};

export default Home;
