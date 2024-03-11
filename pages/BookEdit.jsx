const { useState, useEffect } = React
const { useParams, useNavigate } = ReactRouter

import { bookService } from "../services/book.service.js"

export function BookEdit() {
    const [bookToEdit, setBookToEdit] = useState(bookService.getEmptyBook())
    const { bookId } = useParams()

    useEffect(() => {
        if (bookId) loadBook()
    }, [])

    function loadBook() {
        bookService.get(bookId)
            .then(book => {
                setBookToEdit(book)
                console.log('book:', book)
            })
            .catch(err => console.log('Error:', err))
        // .finally()
    }

    function onSave(ev) {
        ev.preventDefault()

        bookService.save(bookToEdit)
            .then(book => console.log('book:', book))
            .catch(err => console.log('err:', err))
    }

    function handleChange({ target }) {
        let { value, name: field, type } = target
        console.log('target:', target)
        if (type === 'number') value = +value
        else if (type === 'checkbox') value = target.checked ? true : false
        if (field === 'isOnSale' || field === 'amount' || field === 'currencyCode')
            [field, value] = ['listPrice', { ...bookToEdit.listPrice, [field]: value }]
        console.log('value:', value)
        setBookToEdit(prevBook => ({ ...prevBook, [field]: value }))
    }

    const { title, subtitle, authors, listPrice, pageCount } = bookToEdit
    console.log(listPrice)
    // const isOnSale = listPrice.isOnSale ? 'checked' : ''
    if (!bookToEdit) return <div>loading...</div>

    return <form onSubmit={onSave} className="book-edit grid">
        <label htmlFor="title">Title:</label>
        <input
            type="text"
            id="title"
            name="title"
            onChange={handleChange}
            value={title}
        />

        <label htmlFor="subtitle">Subtitle:</label>
        <input
            type="text"
            id="subtitle"
            name="subtitle"
            onChange={handleChange}
            value={subtitle}
        />

        <label htmlFor="authors">Authors:</label>
        <input
            type="text"
            id="authors"
            name="authors"
            onChange={handleChange}
            value={authors}
        />

        <label htmlFor="amount">Price:</label>
        <input
            type="number"
            id="amount"
            name="amount"
            onChange={handleChange}
            value={listPrice.amount}
        />

        <select name="currencyCode" id="currencyCode" onChange={handleChange} value={listPrice.currencyCode}>
            <option value="ILS">₪</option>
            <option value="USD">$</option>
            <option value="EUR">€</option>
        </select>

        <label htmlFor="pageCount">Number of pages:</label>
        <input
            type="number"
            id="pageCount"
            name="pageCount"
            onChange={handleChange}
            value={pageCount}
        />

        <input
            type="checkbox"
            name="isOnSale"
            id="isOnSale"
            onChange={handleChange}
            checked={listPrice.isOnSale}
        />
        <label htmlFor="isOnSale">Book is on sale</label>

        <button>Save</button>
    </form>
}
