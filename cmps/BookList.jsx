const { Link } = ReactRouterDOM

import { BookEdit } from "../pages/BookEdit.jsx"
import { BookPreview } from "./BookPreview.jsx"

export function BookList({ books, onSelectBook }) {

    if (!books.length) return <div>No books match your search</div>
    return <ul className="book-list grid clean-list">
        {/* {console.log('books from list:', books)} */}
        {
            books.map(book => {
                // console.log('book:', book)
                return <li key={book.id}>
                    <Link to={`/books/${book.id}`}>
                        <BookPreview book={book} />
                    </Link>
                    <Link to={`/books/edit/${book.id}`}>
                        Edit
                    </Link>

                </li>
            })
        }
    </ul>
}