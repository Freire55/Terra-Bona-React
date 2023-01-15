import './Home.css'

function Home() {
    return (
        <>
             <div class="nav-bar">
          <img
          class="logo"
          src="terra_bona_logo-removebg-preview.png"
          alt="Terra Bona Logo"
          />
          <div class="langs">
              <a class="lang" href="indexpt.html"> Português </a>
              <a class="lang" href="indexpt.html"> English </a>
              <a class="lang" href="indexpt.html"> Français </a>
            </div>
            <div class="sign-up">
                <form action="./loginpt.html" target="_blank">
                    <button class="login">
                        Login
                    </button>
                </form>
                <form action="./signuppt.html" target="_blank">
                    <button class="login">
                        Registar
                    </button>
                </form>
            </div>
        </div>
            <div class="view-img">
                <div class="parag">
                    <p class="read-more">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit necessitatibus quaerat quasi temporibus id, eius aliquam, explicabo, ullam laudantium dolorem nam eligendi minima reprehenderit blanditiis molestias. Ut molestiae exercitationem maiores!</p>
                    <p class="read-more">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique veritatis molestiae nemo incidunt odio dolores placeat possimus fugiat, corporis officiis.</p>
                    <p class="read-more">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, assumenda.</p>
                </div>
            </div>
        </>
    )
}

export default Home