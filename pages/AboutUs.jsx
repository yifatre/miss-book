const { Link, Outlet } = ReactRouterDOM

export function AboutUs() {
    return <section className="about">
        <h3>"So many books, so little time"</h3>
        <nav>
            <Link to="/about/team">Team</Link> |
            <Link to="/about/vision"> Vision</Link>
        </nav>

        <Outlet />

    </section>
}