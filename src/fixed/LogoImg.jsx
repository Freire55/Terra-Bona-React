import './Home.css'
import Logo from './terra_bona_logo-removebg-preview.png'

function LogoImg() {
    return(
        <img
          className="logo img-fluid"
          src={Logo}
          alt="Terra Bona Logo" />
    )
}

export default LogoImg