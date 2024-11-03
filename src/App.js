import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import UpperNav from './components/upper-nav/UpperNav';
import Navbar from './components/navbar/Navbar';
import Banner from './components/banner/Banner';
import Details from './components/details/Details';
import Counts from './components/counts/Counts';
import WhoweAre from './components/ourDetails/WhoweAre';
import Footer from './components/footer/Footer';
import ScrollToTopButton from './components/scrolltoTop/ScrollTop';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <UpperNav />
      <Navbar />
      <Banner />
      <Details />
      <Counts />
      <WhoweAre />
      <Footer />
      <ScrollToTopButton />

       <Routes>
        <Route path='/about'>About</Route>
        <Route path='/doctors'>Doctors</Route>
        <Route path='/contact'>Contact Us</Route>
        <Route path='/faq'>FAQ</Route>
       </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
