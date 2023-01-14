import logo from './logo.svg';
import './App.css';
import SignUp from './components/signup';
import SignIn from './components/signin';
import Home from './components/home';
import About from './components/about';
import Contact from './components/contact';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import Notfound from './components/notfounf';
import Gstservices from './components/gstservices';
import Gstr1 from './components/GSTR-1_flow/gstr1';



function App() {
  const authenticated = localStorage.getItem('authToken');
  return (
    <BrowserRouter>
    <Routes>  
    
    <Route path="/" element={<Home/>} ></Route>

      <Route path="/about" element={<About/>}></Route>
      <Route path="*" element={<Notfound/>} ></Route>
      <Route path="/gstservices" element={<Gstservices/>} ></Route>
      <Route path="/gstservices/gstr1" element={<Gstr1/>} ></Route>
      <Route path="/contact" element={<Contact/>} ></Route>
        <Route path="/signin" element={<SignIn/>} ></Route>
        <Route path="/signup" element={<SignUp/>} ></Route>
        
        </Routes>
    </BrowserRouter>
  );
}

export default App;
