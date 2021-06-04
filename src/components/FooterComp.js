import React from 'react'
import {Link} from 'react-router-dom'




const FooterComp = () => {
    return (
        
      <footer className="site-footer mt-2">
      <div className="container">
          <div className="row">             
              <div className="col-6 text-center my-3">
                  <h5>Links</h5>
                  <ul className="list-unstyled">
                  
                  
                  <li><Link to='/home'>Home</Link></li>
                      <li><Link to='/camp'>Camp</Link></li>
                      <li><Link to='/about'>About</Link></li>
                      <li><Link to='/blog'>Blog</Link></li>
                  </ul>
              </div>
              <div className="col-6 text-center mt-3">
                  <h5>Follow us</h5>
                  <a className="btn btn-social-icon btn-instagram" href="http://instagram.com/"><i className="fa fa-instagram" /></a>{' '}
                  <a className="btn btn-social-icon btn-facebook" href="http://www.facebook.com/"><i className="fa fa-facebook" /></a>{' '}
                  
              </div>
              
          </div>
      </div>
      <div className="text-center">Copyright 2021, Mount Joseph Ranch</div>
  </footer>
        
    )
}

export default FooterComp

