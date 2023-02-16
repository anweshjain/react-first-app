
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
// import Component1 from './components/Component1';
// import Component2 from './components/Component2';
// import Image from "./watermark.png";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Services from "./pages/Services";


function App() {

  return (
    // <div className="App">
    //   <h1>Basic webpage </h1>
    //   <p>just a normal coder with average coding skills </p>
    //   <h3>{50+50}</h3>
    //   <img src={Image} alt="anwesh jain "/>
    //   <Component1 />
    //   <Component2 />
    // </div>
    <div>
      <BrowserRouter>
      <Routes>
        <Route path ="/"element ={<Home />}/>
        <Route path ="/About"element ={<About />}/>
        <Route path ="/contact"element ={<Contact/>}/>
        <Route path ="/services"element ={<Services />}/>

      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
