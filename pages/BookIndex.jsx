const { useState, useEffect } = React

import { BookDetails } from "../cmps/BookDetails.jsx"
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
                // console.log('books:', books)
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
        {!selectedBook && <BookList books={books} onSelectBook={onSelectBook} />}
        {selectedBook && <BookDetails book={selectedBook} onGoBack={() => onSelectBook(null)} />}

    </section>
}