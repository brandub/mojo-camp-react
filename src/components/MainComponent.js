import React from 'react';
import CarouselHead from './Carousel';
import ButtonRow from './ButtonRow';
import CampCard from './CampCard';
const HomePage = (props) => {
    return (
        <>
    <CarouselHead />
        
    <ButtonRow  filter={props.filter}/>
    <CampCard openModal={props.openModal} isModalOpen={props.isModalOpen} cardItems={props.cardItems}/>
        </>
    )
}

export default HomePage
