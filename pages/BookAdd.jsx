import { GoogleBooksList } from "../cmps/GoogleBooksList.jsx"

import { bookService } from "../services/book.service.js"
import { googleBookService } from "../services/googleBook.service.js"

const { useState, useEffect } = React

export function BookAdd() {
    const [books, setBooks] = useState(null)
    const [txt, setTxt] = useState('')

    function handleChange({ target }) {
        setTxt(target.value)
    }

    function onSearchBooks(ev) {
        ev.preventDefault()
        if (txt === '') return
        googleBookService.query(txt)
            .then(books => setBooks(books))
    }

    function onAddBook(book) {
        bookService.addGoogleBook(book)
            .then(book => {
                console.log('g_book:', book)
                showSuccessMsg('Book saved successfully')
            })
            .catch(err => {
                console.log('Error:', err)
                showErrorMsg('Could not save book')
            })
    }

    return <section>
        <form onSubmit={ onSearchBooks }>
            <input type="search" name="txt" id="txt" onChange={ handleChange } value={ txt } />
            <button>Search</button>
        </form>
        <GoogleBooksList books={ books } onAddBook={ onAddBook } />
    </section>
}
