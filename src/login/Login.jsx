import './Login.css'


function Login(props) {

    return (
        <>
            <div className="container">
                <form className="form card">
                    <div className="card_header">
                    <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 0h24v24H0z" fill="none"></path>
                        <path d="M4 15h2v5h12V4H6v5H4V3a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-6zm6-4V8l5 4-5 4v-3H2v-2h8z" fill="currentColor"></path>
                    </svg>
                    <h1 className="form_heading">Fazer Login</h1>
                    </div>
                    <div className="field">
                        <label htmlFor="username">Nome de Usuário</label>
                        <input required id="username" placeholder="Nome de Usuário" type="text" name="username" className="input" />
                    </div>
                    <div className="field">
                        <label htmlFor="email2">Email</label>
                        <input required id="email2" placeholder="example@gmail.com" type="email" name="username" className="input" />
                    </div>
                    <div className="field">
                        <label htmlFor="password">Password</label>
                        <input required id="password" placeholder="Password" type="password" name="user_password" className="input" />
                    </div>
                        <p>Ainda não tem conta? <a className="link" onClick={null}>Registe-se</a></p>
                    <div className="field">
                        <button onClick={() => props.showLogin} type='submit' className="button">Login</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Login