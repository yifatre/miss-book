import { BookPreview } from "./BookPreview.jsx"

export function BookList({ books, onSelectBook }) {
    
    if(!books.length) return <div>No books match your search</div>
    return <ul className="book-list grid clean-list">
        {/* {console.log('books from list:', books)} */}
        {
            books.map(book => {
                // console.log('book:', book)
                return <li key={book.id}>
                    <BookPreview book={book} />
                    <button onClick={() => { onSelectBook(book) }}>ℹ️</button>
                </li>
            })
        }
    </ul>
}