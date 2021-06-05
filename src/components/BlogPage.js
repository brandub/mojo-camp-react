import React from "react"
import { useState } from 'react';
import {Button} from 'reactstrap';
import {BLOGS} from '../shared/BLOGS';
import BlogCard from './BlogCard';

const BlogPage = () => {
    const [blogItems, setBlogItems] = useState(BLOGS);
    return (
        <React.Fragment>
        <div className="container my-5">
            <div className="row">
        <div className="col text-center">
             <h3  className="text-center">Blog</h3>
           <p>This blog contains the latest Ranch news and happenings. <br />
          Please subscribe to follow along.<br /> </p>
          <input id="emailInput" type="email" placeholder="Enter email"/> 
          <Button id="subscribeButton" className="btn btn-light">Submit</Button>
          
          </div>
          </div>
            
        </div>
        <BlogCard blogItems={blogItems}/>
        </React.Fragment>
    )
}

export default BlogPage
