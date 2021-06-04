import React from 'react';
import CampCard from './CampCard';
import ButtonRow from './ButtonRow';


const CampPage = (props) => {
    return (
        <>

<div className="container my-3">
            <div className="row">
        <div className="col text-center">
             <h4  className="text-center">Camp</h4>
             </div>
          </div>
        </div>
             <ButtonRow filter={props.filter}/>
             <CampCard openModal={props.openModal} isModalOpen={props.isModalOpen} cardItems={props.cardItems}/>
         
        
        </>
    )
}

export default CampPage
