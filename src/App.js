import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppointmentForm from './pages/AppointmentForm';
import Index from './pages/Index';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
       <Routes>
        <Route path='/' element={<Index />} />
        <Route path='/doctors'>Doctors</Route>
        <Route path='/contact'>Contact Us</Route>
        <Route path='/faq'>FAQ</Route>
        <Route path='/form' element={<AppointmentForm />} />
       </Routes>
      </BrowserRouter> 
    </div>
  );
}

export default App;
