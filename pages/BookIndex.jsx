const { useState, useEffect } = React

import { BookList } from "../cmps/BookList.jsx"
import { bookService } from "../services/book.service.js"

export function BookIndex() {

    const [books, setBooks] = useState(null)

    useEffect(() => {
        loadBooks()
    }, [])

    function loadBooks() {
        bookService.query()
            .then(books => {
                console.log('books:', books)
                return setBooks(books)
            })
    }

    if(!books) return <div>loading...</div>
    return <section className='book-index'>
        {/* book filter */}
        {/* book list */}
        <BookList books={books} />
        {/* book details */}
        {/* <span>BOOKS</span> */}

    </section>
}