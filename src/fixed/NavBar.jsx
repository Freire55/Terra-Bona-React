import './NavBar.css'

function NavBar() {
    return (
        <>
            <div class="topics">
                <a href="/About">
                    <button class="links">Sobre Nós</button>
                </a>
                <a href="/Vinha">
                    <button class="links">A Vinha</button>
                </a>
                <a href="/Villas">
                    <button class="links">Villas</button>
                </a>
                <a href="/Experiences">
                    <button class="links">Experiências</button>
                </a>
                <a href="/Boaventura">
                    <button class="links">A Boaventura</button>
                </a>
                <a href="/News">
                    <button class="links">Notícias</button>
                </a>
            </div>
        </>
    )
}

export default NavBar