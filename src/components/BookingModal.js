import React from 'react'

import {Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input} from 'reactstrap';




const BookingModal = ({openModal, isModalOpen}) => {
    return (
        <div>
            <Modal  isOpen={isModalOpen} toggle={openModal}>
                 <ModalHeader toggle={openModal}><img width="100%" src='/assets/images/mountaincup.jpg' alt="mountain cup" /></ModalHeader>
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
        </div>
    )
}

export default BookingModal
