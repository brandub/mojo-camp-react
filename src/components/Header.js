import React from 'react';
import {Button, Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, NavLink} from 'reactstrap';


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
                                    <NavLink className="nav-link" to="/home">
                                        <i className="fa fa-free-code-camp" /> Camp
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/directory">
                                        <i className="fa fa-bullhorn" /> Blog
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/aboutus">
                                        <i className="fa fa-binoculars " /> About
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/contactus">
                                        <i className="fa fa-envelope " /> Contact Us
                                    </NavLink>
                                </NavItem>
                                </Nav>
                            <span className="navbar-text ml-auto">
                                <Button outline onClick={() => openModal()}>
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

