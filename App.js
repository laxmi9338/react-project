import logo from './logo.svg';
import './App.css';
import Nav from "./components/Nav"
import Footer from "./components/Footer"
import Register from "./components/Register"
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Privatecomponent from './components/Privatecomponent';
import Login from './components/Login';
import Addproduct from './components/Addproduct';
import Productlist from './components/Productlist';
import Update from './components/Update';

// import Update from './components/Update';

function App() {
  return (
    <div className="App">

<BrowserRouter>
<Nav/>



      <Routes>
        <Route element={<Privatecomponent/>}>
        <Route path="/" element={<Productlist/>}> </Route>
        

        <Route path="/add" element={<Addproduct/>}></Route>
        <Route path="/update/:id" element={<Update/>}></Route>
        <Route path="/logout" element={<h1>Logout</h1>} ></Route>
        <Route path="/profile" element={<h1>Profile</h1>}></Route>
        </Route>

        <Route path="/signup" element={<Register/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
       
      </Routes>
      
      </BrowserRouter>

      <Footer/>



     
    </div>
  );
}

export default App;
