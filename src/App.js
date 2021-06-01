
import './App.css';
import 'react-dates/lib/css/_datepicker.css';
import { useState } from 'react';
import Header from './components/Header';
// import { BrowserRouter } from 'react-router-dom';
import BookingModal from './components/BookingModal';
import CarouselHead from './components/Carousel';
import CampCard from './components/CampCard';
import ButtonRow from './components/ButtonRow';
import { SITES } from '../src/shared/SITES';




function App() {
  const [cardItems, setCardItems] = useState(SITES);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isNavOpen, setNavOpen] = useState(true);
  const [siteSelected, setsiteSelected] = useState("")
  const [sitePrice, setSitePrice] = useState("")

  const filter = (button) => {
    if(button === "All"){
      setCardItems(SITES);
      return;
    }
    const filteredData = SITES.filter(site => site.type === button);
    setCardItems(filteredData);
  }
  const openModal = (titleName, price)=>{
    if (isModalOpen === false){
      setIsModalOpen(!isModalOpen);
      setsiteSelected(titleName);
      setSitePrice(price);
    }else{
      setIsModalOpen(!isModalOpen)

    }
    
  }
  const toggleNav = ()=> {
  setNavOpen(!isNavOpen);
}
  return (
    <>
    <Header isNavOpen={isNavOpen} openModal={openModal} toggleNav={toggleNav}  />
    <CarouselHead />
    <ButtonRow  filter={filter}/>
    <CampCard openModal={openModal} isModalOpen={isModalOpen} cardItems={cardItems}/>
    <BookingModal openModal={openModal} isModalOpen={isModalOpen} siteSelected={siteSelected} sitePrice={sitePrice}/>
    </>
  );
}

export default App;
