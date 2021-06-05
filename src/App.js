
import './App.css';
import 'react-dates/lib/css/_datepicker.css';
import { useState } from 'react';
import Header from './components/Header';
import BookingModal from './components/BookingModal';
import CampPage from './components/CampPage'

import { SITES } from '../src/shared/SITES';
import BlogPage from './components/BlogPage';
import About from './components/About';
import FooterComp from './components/FooterComp';
import HomePage from './components/MainComponent';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';





function App() {
  const [cardItems, setCardItems] = useState(SITES);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isNavOpen, setNavOpen] = useState(true);
  const [siteSelected, setsiteSelected] = useState("");
  const [sitePrice, setSitePrice] = useState("49")

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
    <BrowserRouter>
    <Header isNavOpen={isNavOpen} openModal={openModal} toggleNav={toggleNav}  />
    <BookingModal cardItems={cardItems} openModal={openModal} isModalOpen={isModalOpen} siteSelected={siteSelected} sitePrice={sitePrice}/>
    <Switch>
          <Route path='/home' render={() => <HomePage filter={filter} openModal={openModal} isModalOpen={isModalOpen} cardItems={cardItems} />}/>
          <Route path='/camp' render={() => <CampPage filter={filter} openModal={openModal} isModalOpen={isModalOpen} cardItems={cardItems} />}/>
          <Route path='/blog' component={BlogPage} />
          <Route path='/about' component={About}/>
           <Redirect to='/home' />
    </Switch>
    <FooterComp />
    </BrowserRouter>
    </>
  );
}

export default App;
