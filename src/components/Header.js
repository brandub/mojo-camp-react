import React from 'react';
import {Button, Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, } from 'reactstrap';
import { NavLink } from 'react-router-dom';


const Header = ({toggleNav, isNavOpen, openModal})=>  {
        return (
            <React.Fragment>
            <Navbar id="navBar" light sticky="top" expand="sm">
                    <div className="container">
                        <NavbarBrand className="mr-auto" href="/"><i  className="tree fa fa-tree fa-lg" /></NavbarBrand>
                        <NavbarToggler onClick={() => toggleNav()} />
                        <Collapse isOpen={!isNavOpen} navbar>
                            <Nav className="m-auto" navbar>
                                <NavItem>
                                    <NavLink className="nav-link" to="/camp">
                                        <i className="fa fa-free-code-camp" /> Camp
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/blog">
                                        <i className="fa fa-bullhorn" /> Blog
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/about">
                                        <i className="fa fa-binoculars " /> About
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <a className="nav-link" href="mailto:info@mojocamp.com">
                                        <i className="fa fa-envelope " /> Contact
                                    </a>
                                </NavItem>
                                </Nav>
                            <span className="navbar-text ml-auto">
                                <Button outline onClick={() => openModal("select one", "$0")}>
                                    <i className="fa fa-bed" /> Booking
                                </Button>
                            </span>
                        </Collapse>
                    </div>
                </Navbar>
                 
             </React.Fragment>
                
        )
    }
    export default Header;

