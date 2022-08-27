import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
    return (
        <>
            <Navbar
                bg="light"
                // style={{ position: "sticky", top: "0", zIndex: "10" }}
                expand="lg"
            >
                <Container className="navbar">
                    <NavLink to="/" className="fw-bold link-left">
                        ONEPLUS NORD
                    </NavLink>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <NavLink
                                className={({ isActive }) =>
                                    isActive ? "active-link" : "link"
                                }
                                to="/"
                            >
                                Home
                            </NavLink>
                            <NavLink
                                className={({ isActive }) =>
                                    isActive ? "active-link" : "link"
                                }
                                to="/reviews"
                            >
                                Reviews
                            </NavLink>
                            <NavLink
                                className={({ isActive }) =>
                                    isActive ? "active-link" : "link"
                                }
                                to="/dashboard"
                            >
                                Dashboard
                            </NavLink>
                            <NavLink
                                className={({ isActive }) =>
                                    isActive ? "active-link" : "link"
                                }
                                to="/blogs"
                            >
                                Blogs
                            </NavLink>
                            <NavLink
                                className={({ isActive }) =>
                                    isActive ? "active-link" : "link"
                                }
                                to="/about"
                            >
                                About
                            </NavLink>
                            <button className="btn btn-primary rounded-pill ms-3">Get one</button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;
