import './App.css';
import Home from './fixed/Home.jsx';
import NavBar from './fixed/NavBar.jsx'
import About from './diftexts/About'
import Boaventura from './diftexts/Boaventura'
import Experiences from './diftexts/Experiences'
import News from './diftexts/News'
import Villas from './diftexts/Villas'
import Vinha from './diftexts/Vinha'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Login from './login/Login.jsx';
import Signup from './login/Signup.jsx';
import Footer from './fixed/Footer.jsx';
import { useState } from "react";


function App() {

  const [disp, setDisp] = useState('block')

  function OnlyLogin(appprops) {
    setDisp('none')
}

// function NoLogin(appprops) {
//     setDisp('block')
// }

  return (
    <div>
            <Router>
            <Home removeBody={OnlyLogin}></Home>
        <main className="main" style={{display: disp}}>
            <NavBar></NavBar>
               <Routes>
                    <Route path="/" element={<About />} ></Route>
                    <Route path="/Boaventura" element={<Boaventura />} ></Route>
                    <Route path="/Experiences" element={<Experiences />} ></Route>
                    <Route path="/News" element={<News />} ></Route>
                    <Route path="/Villas" element={<Villas />} ></Route>
                    <Route path="/Vinha" element={<Vinha />} ></Route>
                    <Route path="/Login" element={<Login />} ></Route>
                    <Route path="/Signup" element={<Signup />} ></Route>
                </Routes>     
            <Footer></Footer>
        </main>
            </Router>     
    </div>
  );
}

export default App;
