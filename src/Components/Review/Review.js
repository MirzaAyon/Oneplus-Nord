import React from "react";
import { Card } from "react-bootstrap";
import { FaStar } from "react-icons/fa";
import "./Review.css";
const Review = ({ reviews }) => {
    const { name, review, image, ratings } = reviews;
    const number = parseInt(ratings);

    return (
        <div className="col-lg-4 col-md-6 col-12">
            <Card data-aos="zoom-in-up" className="p-3 card-details">
                <Card.Img className="rounded-circle" variant="top" src={image} />
                <Card.Body className="card-body p-3 mt-4 text-dark rounded">
                    <Card.Title>{name}</Card.Title>
                    {[...Array(number)].map(() => {
                        return (
                            <FaStar key={Math.random()} className="text-warning"></FaStar>
                        );
                    })}
                    <p className="text-dark fw-bold">{ratings}.00/5.00</p>
                    <Card.Text>
                        <i>{review.length > 180 ? review.slice(0, 180) : review}...</i>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Review;
