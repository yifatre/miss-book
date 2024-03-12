const Router = ReactRouterDOM.HashRouter
const { Route, Routes } = ReactRouterDOM

import { AppHeader } from './cmps/AppHeader.jsx'
import { BookDetails } from './pages/BookDetails.jsx'
import { AboutUs } from './pages/AboutUs.jsx'
import { BookIndex } from './pages/BookIndex.jsx'
import { Home } from './pages/Home.jsx'
import { BookEdit } from './pages/BookEdit.jsx'
import { UserMsg } from './cmps/UserMsg.jsx'
import { AboutTeam } from './cmps/AboutTeam.jsx'
import { AboutVision } from './cmps/AboutVision.jsx'

export function App() {
    return <Router>
        <section className="app">
            <AppHeader />
            <main className="container">
                <Routes>
                    <Route path="/" element={ <Home /> } />
                    <Route path="/book" element={ <BookIndex /> } />
                    <Route path="/book/:bookId" element={ <BookDetails /> } />
                    <Route path="/book/edit" element={ <BookEdit /> } />
                    <Route path="/book/edit/:bookId" element={ <BookEdit /> } />
                    <Route path="/about" element={ <AboutUs /> }>
                        <Route path="/about/team" element={ <AboutTeam /> } />
                        <Route path="/about/vision" element={ <AboutVision /> } />
                    </Route>
                </Routes>
            </main>
            <UserMsg />
        </section>
    </Router>
}