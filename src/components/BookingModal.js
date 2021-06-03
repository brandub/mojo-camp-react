import React from 'react'


import {Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input} from 'reactstrap';

import DateSelector from './DateSelector';


const BookingModal = ({openModal, isModalOpen, siteSelected, sitePrice}) => {
    return (
        <div>
            
            <Modal  isOpen={isModalOpen} toggle={() => openModal("","", false)}>
                 <ModalHeader toggle={() => openModal("","", false)}><img width="100%" src='/assets/images/mountaincup.jpg' alt="mountain cup" /></ModalHeader>
                 <ModalBody>
                 <Form>
                 <FormGroup className="m-2">
                        <Label >Check In-Check Out </Label>
                        <DateSelector />
                        </FormGroup>
                       
                        <FormGroup className="m-2">
                            <Label for="name">Name</Label>
                            <Input type="text" name="name" id="name" placeholder="First and Last Name" />
                        </FormGroup>
                        <FormGroup className="m-2"> 
                            <Label for="exampleEmail">Email</Label>
                            <Input type="email" name="email" id="exampleEmail" placeholder="example@reactjs.com" />
                        </FormGroup>
                        <FormGroup className="m-2">
                            <Label for="exampleSelect">Site</Label>
                            <Input type="select" name="select" id="exampleSelect">
                            <option selected>{siteSelected}</option>
                            <option>Cabin Morel</option>
                            <option> Camp Fir</option>
                            <option>Camp Wallowa</option>
                            <option>Alder Cabin</option>
                            <option>Teepee Eagle</option>
                            <option>Teepee Pierre</option>
                            <option>Guest Cabin</option>
                            
                            </Input>
                        </FormGroup>
                        
                        
                        <FormGroup className="m-2">
                            <Label for="exampleText">Price</Label>
                            <div>{sitePrice} a night</div> 
                        </FormGroup>
                        
                        <FormGroup className="m-2">
                            <Label for="exampleText">Comments/Questions</Label>
                            <Input type="textarea" name="text" id="exampleText" />
                        </FormGroup>
                        
                        <Button>Book It!</Button>
                    </Form>
                 </ModalBody>
             </Modal>
        </div>
    )
}


export default BookingModal
