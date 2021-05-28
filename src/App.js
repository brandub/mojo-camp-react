
import './App.css';
import Header from './components/Header';
import { BrowserRouter } from 'react-router-dom';
import CarouselHead from './components/Carousel'
import CampCard from './components/CampCard';

function App() {
  return (
    <>
    <Header />
    <CarouselHead />
    <CampCard />
    </>
  );
}

export default App;
