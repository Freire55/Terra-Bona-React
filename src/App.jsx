import './App.css';
import Home from './fixed/Home.jsx';
import NavBar from './fixed/NavBar.jsx'
import About from './diftexts/About'
import Boaventura from './diftexts/Boaventura'
import Experiences from './diftexts/Experiences'
import News from './diftexts/News'
import Villas from './diftexts/Villas'
import Vinha from './diftexts/Vinha'
import {BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {
  return (
    <div>
            <Home></Home>
        <main class="main">
            <NavBar></NavBar>
            <Router>
               <Routes>
                    <Route path="/About" element={<About />} ></Route>
                    <Route path="/Boaventura" element={<Boaventura />} ></Route>
                    <Route path="/Experiences" element={<Experiences />} ></Route>
                    <Route path="/News" element={<News />} ></Route>
                    <Route path="/Villas" element={<Villas />} ></Route>
                    <Route path="/Vinha" element={<Vinha />} ></Route>
                </Routes>     
            </Router>     
        </main>
    </div>
  );
}

export default App;
