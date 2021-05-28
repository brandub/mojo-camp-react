import React, { Component } from 'react'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, CardGroup, Modal, ModalHeader, ModalBody, FormGroup, Label, Input, Form, 
  } from 'reactstrap';
import {SITES} from '../shared/SITES';

export class CampCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isModalOpen: false,
            sites: SITES
        };
        this.toggleModal = this.toggleModal.bind(this);
      }
      toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

      

      render() {
        const featured = this.state.sites.map(site => {
            return (
                <div className="col-6 col-md-3">
                <Card >
                    <CardImg top width="100%" src={site.image} alt={site.name} />
                    <CardBody>
                    <CardTitle className="text-nowrap"tag="h6">{site.name}</CardTitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">{site.price}</CardSubtitle>
                    <CardText>{site.description}</CardText>
                    <Button id="selector" onClick={this.toggleModal}>Button</Button>
                    </CardBody>
                </Card>
                
                </div>
                
            );
        });
        


        return (
            <>
            <Modal  isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                 <ModalHeader toggle={this.toggleModal}><img top width="100%" src='/assets/images/mountaincup.jpg' alt="mountain cup" /></ModalHeader>
                 <ModalBody>
                 <Form>
                        <FormGroup>
                            <Label for="exampleEmail">Email</Label>
                            <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="name">Name</Label>
                            <Input type="text" name="name" id="name" placeholder="First and Last Name" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="exampleSelect">Site</Label>
                            <Input type="select" name="select" id="exampleSelect">
                            <option>Camp Morel</option>
                            <option>Camp Fir</option>
                            <option>Camp Fir</option>
                            <option>Camp Fir</option>
                            <option>Camp Fir</option>
                            <option>Camp Fir</option>
                            <option>Camp Fir</option>
                            
                            </Input>
                        </FormGroup>
                        
                        <FormGroup>
                            <Label for="exampleText">Comments/Questions</Label>
                            <Input type="textarea" name="text" id="exampleText" />
                        </FormGroup>
                        
                        <FormGroup tag="fieldset">
                            <legend>InsertCalendar</legend>
                            <FormGroup check>
                            <Label check>
                                <Input type="radio" name="radio1" />{' '}
                                Option one is this and that—be sure to include why it's great
                            </Label>
                            </FormGroup>
                            <FormGroup check>
                            <Label check>
                                <Input type="radio" name="radio1" />{' '}
                                Option two can be something else and selecting it will deselect option one
                            </Label>
                            </FormGroup>
                            <FormGroup check disabled>
                            <Label check>
                                <Input type="radio" name="radio1" disabled />{' '}
                                Option three is disabled
                            </Label>
                            </FormGroup>
                        </FormGroup>
                        
                        <Button>Book It!</Button>
                    </Form>
                 </ModalBody>
             </Modal>
            <div className="container mt-4">
      <div className="row row-group">
        <div id="selector"className="col-md-4">
          <h3>Cabins</h3>
          <p>Rugged and rustic are the perfect words to define our cabins. Many are outfitted with furntiture pieces fashioned from twigs and branches.</p>
        </div>
        <div id="selector" className="col-md-4">
          <h3>Teepees</h3>
          <p>Our spacious teepees come with a queen-size bed and waterviews. Glampers can also spy the sky through an opening in the ceiling, and observe the stars at night.</p>
        </div>
        <div id="selector" className="col-md-4">
          <h3>Campsites</h3>
          <p>Our campsites are strategically located all ove the mountain for privacy and beautiful views. Platform and primitive sites are available. </p>
        </div>
      </div>
    </div>
            <div className="container">
                <CardGroup className="row">
                    {featured}
                </CardGroup>
            </div>
            </>
        );
    }
}

export default CampCard

