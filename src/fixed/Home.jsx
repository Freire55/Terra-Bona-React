import './Home.css'
import {Link} from 'react-router-dom'
import LogoImg from './LogoImg.jsx'
import {useState} from 'react'
import Login from '../login/Login'

function Home(appprops) {   

    const [disable, setDisable] = useState(true)
    function ChangeDisable() {
        setDisable(!disable)
    }
    

    return (
        disable ?(
        <>
             <div className="nav-bar container-fluid">
                <div className="row">
                    <div className="col-sm-4">
          <LogoImg />
          </div>
          <div className="langs col-sm-4 no-img">
              <a className="lang" href="indexpt.html"> Português </a>
              <a className="lang" href="indexpt.html"> English </a>
              <a className="lang" href="indexpt.html"> Français </a>
            </div>
            <div className="sign-up col-sm-3 no-img">
                {/* <Link to="/Login" target="_blank"> */}
                    <button onClick={() => {appprops.removeBody(); ChangeDisable()}} className="login box" id="show-login">
                        Login
                    </button>
                {/* </Link> */}
                <Link to="/Signup" target="_blank">
                    <button className="login box" id="show-signup">
                        Registar
                    </button>
                </Link>
            </div>
          </div>
        </div>
        <div class="background">
                <div class="parag">
                    <div class="">
                        <p class="read-more">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit necessitatibus quaerat quasi temporibus id, eius aliquam, explicabo, ullam laudantium dolorem nam eligendi minima reprehenderit blanditiis molestias. Ut molestiae exercitationem maiores!</p>
                    </div>
                    <div class="">
                        <p class="read-more">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique veritatis molestiae nemo incidunt odio dolores placeat possimus fugiat, corporis officiis.</p>
                    </div>
                    <div class="">
                        <p class="read-more" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, assumenda.</p>
                    </div>
                </div>
            </div>

        </>
        ) : (
            <Login showLogin={ChangeDisable}></Login>
        )
    )
}

export default Home