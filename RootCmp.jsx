const { useState, useEffect, useRef } = React

import { AboutUs } from './pages/AboutUs.jsx'
import { BookIndex } from './pages/BookIndex.jsx'
import { Home } from './pages/Home.jsx'

export function App() {
    const [page, setPage] = useState('books')

    return <section className="app">
        <header className="app-header">
            <h1>My App</h1>
            <nav>
                <a href="#" onClick={() => setPage('home')}>Home</a>
                <a href="#" onClick={() => setPage('books')}>Books</a>
                <a href="#" onClick={() => setPage('about')}>About Us</a>
            </nav>
        </header>
        <main className="container">
            {page === 'home' && <Home />}
            {page === 'about' && <AboutUs />}
            {page === 'books' && <BookIndex />}
        </main>
    </section>
}