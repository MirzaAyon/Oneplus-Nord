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
                                Oneplus phone never settle yourself
                                <br />
                                <span className="fw-bolder display-5 text-second">
                                    Ready to get it?
                                </span>
                            </h1>
                            <p className="h5 my-4">
                                Mac Studio is an entirely new Mac desktop. It packs outrageous
                                performance, extensive connectivity, and new capabilities into
                                an unbelievably compact form, putting everything you need within
                                easy reach and transforming any space into a studio. And it all
                                starts with your choice of the ferociously fast M1 Max or the
                                all-new M1 Ultra — the most powerful chip ever in a personal
                                computer.
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
                    See All Review
                </button>
            </div>
        </>
    );
};

export default Home;
