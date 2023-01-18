import './NavBar.css'
import {Link} from 'react-router-dom'

function NavBar() {
    return (
        <>
            <div className="topics">
                <Link to="/">
                    <button className="links">Sobre Nós</button>
                </Link>
                <Link to="/Vinha">
                    <button className="links">A Vinha</button>
                </Link>
                <Link to="/Villas">
                    <button className="links">Villas</button>
                </Link>
                <Link to="/Experiences">
                    <button className="links">Experiências</button>
                </Link>
                <Link to="/Boaventura">
                    <button className="links">A Boaventura</button>
                </Link>
                <Link to="/News">
                    <button className="links">Notícias</button>
                </Link>
            </div>
        </>
    )
}

export default NavBar