

import React from 'react';
import {Button} from 'reactstrap';



const ButtonRow = ({filter}) => {
    return (
        
<div className="container  mb-4">
    <div className="row justify-content-center row-group">
          <Button id="selector" onClick={() => filter('All')} className="m-1  col-5 col-md-2">
            All
          </Button>
        <Button id="selector" onClick={() => filter('Cabin')} className="m-1 col-5 col-md-2">
          Cabins
        </Button>
        <Button id="selector" onClick={() => filter('Teepee')} className="m-1 col-5 col-md-2">
          Teepees
        </Button>
        <Button id="selector" onClick={() => filter('Tent')} className="m-1 col-5 col-md-2">
          Campsites
         </Button>
        
    </div>
</div>
    )
}

export default ButtonRow


