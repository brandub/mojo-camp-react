import React, { Component } from 'react'
import {SITES} from '../shared/SITES';

export class CampCard extends Component {
    constructor(props) {
        super(props);
        this.state = {sites: SITES};
      }

      

      render() {
        const featured = this.state.sites.map(site => {
            return (
                <div className="col-6 col-md-3">
                    <img height="60rem" width="60rem" src={site.image} alt={site.name} />
                    <h5>{site.name}</h5>
                    <p>{site.price}</p>
                </div>
            );
        });

        return (
            <div className="container">
                <div className="row">
                    {featured}
                </div>
            </div>
        );
    }
}

export default CampCard

