import './Home.css'
import {BrowserRouter as Router, Link} from 'react-router-dom'
import Logo from './terra_bona_logo-removebg-preview.png'


function Home() {
    return (
        <>
             <div className="nav-bar">
          <img
          className="logo"
          src={Logo}
          alt="Terra Bona Logo"
          />
          <div className="langs">
              <a className="lang" href="indexpt.html"> Português </a>
              <a className="lang" href="indexpt.html"> English </a>
              <a className="lang" href="indexpt.html"> Français </a>
            </div>
            <div className="sign-up">
                <Link to="/Login" target="_blank">
                    <button className="login">
                        Login
                    </button>
                </Link>
                <Link to="/Signup" target="_blank">
                    <button className="login">
                        Registar
                    </button>
                </Link>
            </div>
        </div>
            <div className="view-img">
                <div className="parag">
                    <p className="read-more">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit necessitatibus quaerat quasi temporibus id, eius aliquam, explicabo, ullam laudantium dolorem nam eligendi minima reprehenderit blanditiis molestias. Ut molestiae exercitationem maiores!</p>
                    <p className="read-more">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique veritatis molestiae nemo incidunt odio dolores placeat possimus fugiat, corporis officiis.</p>
                    <p className="read-more">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, assumenda.</p>
                </div>
            </div>

        </>
    )
}

export default Home