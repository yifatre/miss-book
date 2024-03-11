const { useState, useEffect } = React
const { Link } = ReactRouterDOM


import { BookDetails } from "./BookDetails.jsx"
import { BookFilter } from "../cmps/BookFilter.jsx"
import { BookList } from "../cmps/BookList.jsx"
import { bookService } from "../services/book.service.js"

export function BookIndex() {
    const [books, setBooks] = useState(null)
    const [selectedBook, setSelectedBook] = useState(null)
    const [filterBy, setFilterBy] = useState(bookService.getDefaultFilter())

    useEffect(() => {
        loadBooks()

    }, [filterBy])

    function loadBooks() {
        bookService.query(filterBy)
            .then(books => {
                return setBooks(books)
            })
    }

    function onSelectBook(book) {
        setSelectedBook(book)
    }

    function onSetFilter(fieldsToUpdate) {
        setFilterBy(prevFilter => ({ ...prevFilter, ...fieldsToUpdate }))
    }

    if (!books) return <div>loading...</div>
    return <section className='book-index'>
        <BookFilter filterBy={filterBy} onSetFilter={onSetFilter} />
        <Link to="/books/edit"><button>Add Book</button></Link>
        <BookList books={books} onSelectBook={onSelectBook} />

    </section>
}