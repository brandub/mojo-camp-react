import React from 'react'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, CardGroup,

  } from 'reactstrap';


const CampCard = ({openModal, cardItems}) => {
   
    return (
        <div className="container">
            <CardGroup>
                {
                cardItems.map((site) => {
                    return  <div className="col col-sm-6 col-md-3"  key={site.id}>
                                <Card >
                                    <CardImg  width="100%" src={site.image} alt={site.name} />
                                    <CardBody>
                                    <CardTitle className="text-nowrap"tag="h6">{site.name}</CardTitle>
                                    <CardSubtitle tag="h6" className="mb-2 text-muted">{site.price}</CardSubtitle>
                                    <CardText>{site.description}</CardText>
                                    <Button onClick={() => openModal(site.name, site.price)}>Button</Button>
                                    </CardBody>
                                </Card>
                            </div>
            
                    })
                }
                    
            </CardGroup>
            </div>
            
        );
    }
  
export default CampCard

