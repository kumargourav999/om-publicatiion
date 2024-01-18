import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Aboutus from './Aboutus';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Contact from './Contact';
import Home from './Home';
import Janaral from './Janaral';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  
  const add=()=>{
   
    alert('hello');
  }
  return (
    <div className="App">
    
    <BrowserRouter>
    <Navbar></Navbar>
    <Routes>
    <Route exact path="/" element={<Home></Home>}></Route>
        <Route exact path="/about" element={<Aboutus></Aboutus>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/product" ></Route>
        <Route path="/journal" element={<Janaral></Janaral>}></Route>
      
    </Routes>
    </BrowserRouter>

    </div>
  );
}

export default App;
