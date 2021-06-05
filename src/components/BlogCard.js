import React from 'react'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle,  Button, CardGroup,

  } from 'reactstrap';


const BlogCard = ({blogItems}) => {
   
    return (
        <div className="container">
            <CardGroup>
                {
                blogItems.map((blog) => {
                    return  <div id="blogButton" className="col col-md-4 my-2"  key={blog.id}>
                                <Card >
                                    <CardImg  width="100%" src={blog.image} alt={blog.headline} />
                                    <CardBody>
                                    <CardTitle className="text-nowrap"tag="h6">{blog.headline}</CardTitle>
                                    
                                    <CardText>{blog.content}</CardText>
                                    <Button>More..</Button>
                                    </CardBody>
                                </Card>
                            </div>
            
                    })
                }
                    
            </CardGroup>
            </div>
            
        );
    }
  
export default BlogCard