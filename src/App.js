
import './App.css';
import { useState } from 'react';
import Header from './components/Header';
import { BrowserRouter } from 'react-router-dom';
import CarouselHead from './components/Carousel'
import CampCard from './components/CampCard';
import ButtonRow from './components/ButtonRow';
import { SITES } from '../src/shared/SITES';

const allCategories = ['All', ...new Set(SITES.map(item => item.type))];
console.log(allCategories);

function App() {
  const [cardItems, setCardItems] = useState(SITES);
 

  const filter = (button) => {
    if(button === "All"){
      setCardItems(SITES);
      return;
    }
    const filteredData = SITES.filter(site => site.type === button);
    setCardItems(filteredData);
  }
  return (
    <>
    <Header />
    <CarouselHead />
    <ButtonRow  filter={filter}/>
    <CampCard cardItems={cardItems}/>
    </>
  );
}

export default App;
