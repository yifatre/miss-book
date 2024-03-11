const { useState, useEffect, useRef } = React
const Router = ReactRouterDOM.HashRouter
const { Route, Routes } = ReactRouterDOM

import { AppHeader } from './cmps/AppHeader.jsx'
import { BookDetails } from './pages/BookDetails.jsx'
import { AboutUs } from './pages/AboutUs.jsx'
import { BookIndex } from './pages/BookIndex.jsx'
import { Home } from './pages/Home.jsx'
import { BookEdit } from './pages/BookEdit.jsx'

export function App() {
    const [page, setPage] = useState('books')

    return <Router>
        <section className="app">
            <AppHeader />
            <main className="container">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/books" element={<BookIndex />} />
                    <Route path="/books/:bookId" element={<BookDetails />} />
                    <Route path="/books/edit" element={<BookEdit />} />
                    <Route path="/books/edit/:bookId" element={<BookEdit />} />
                    <Route path="/about" element={<AboutUs />} />
                </Routes>
            </main>
        </section>
    </Router>
}