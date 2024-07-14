// import './App.css';
import "./index.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./user/Login/Login.js";
import Home from "./components/Home.js";
import About from "./components/About.js";
import Contact from "./components/Contact.js";
import News from "./components/News.js";
import Signup from "./user/Registration/Signup.js";

function App() {
  return (
   <>
   <Router>
   
    <Routes>

      <Route path="/"  element={<Login />}  />
      <Route path="/signup"  element={<Signup />}  />
      <Route path="/home"  element={<Home />}  />
      <Route path="/about"  element={<About />}  />
      <Route path="/contact"  element={<Contact />}  />
      <Route path="/news"  element={<News />}  />
    </Routes>
   </Router>
   {/* <h1 className="bold mt-5 text-xl" >Share market</h1> */}
   </>
  );
}

export default App;
