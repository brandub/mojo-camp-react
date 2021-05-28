import React, { Component }  from 'react';
import {Button, Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, Modal, ModalHeader, ModalBody, NavItem, NavLink} from 'reactstrap';


export default class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isNavOpen: false,
            isModalOpen: false
        };

        this.toggleNav = this.toggleNav.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        
    }
    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }
    
    render() {
        return (
            <React.Fragment>
            <Navbar id="navBar" light sticky="top" expand="md">
                    <div className="container">
                        <NavbarBrand className="mr-auto" href="/"><i  className="tree fa fa-tree fa-lg" /></NavbarBrand>
                        <NavbarToggler onClick={this.toggleNav} />
                        <Collapse isOpen={this.state.isNavOpen} navbar>
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
                                <Button outline onClick={this.toggleModal}>
                                    <i className="fa fa-bed" /> Booking
                                </Button>
                            </span>
                        </Collapse>
                    </div>
                </Navbar>
                 <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                 <ModalHeader toggle={this.toggleModal}>Book a stay</ModalHeader>
                 <ModalBody>
                 
                 </ModalBody>
             </Modal>
             </React.Fragment>
                
        )
    }
}
