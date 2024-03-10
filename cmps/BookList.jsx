import { BookPreview } from "./BookPreview.jsx"

export function BookList({ books }) {
    return <ul className="book-list grid clean-list">
        {console.log('books from list:', books)}
        {
            books.map(book => {
                console.log('book:', book)
                return <li key={book.id}>
                    <BookPreview book={book} />
                </li>
            })
        }
    </ul>
}