const { useNavigate } = ReactRouter
const { NavLink } = ReactRouterDOM

export function AppHeader() {
    const navigate = useNavigate()

	function onGoHome() {
		navigate('/')
	}

    return <header className="app-header grid">
        <h1>The Magical Book Shop </h1>
        <img src="assets/imgs/magic-book.png" alt="" />
        <nav className="flex">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/book">Books</NavLink>
            <NavLink to="/about">About Us</NavLink>
        </nav>
    </header>
}