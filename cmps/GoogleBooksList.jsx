export function GoogleBooksList({ books, onAddBook }) {
    if(!books) return <div>loading...</div>
    return <ul>
        { books.map(book => <li key={ book.id }>
            <span>{ book.volumeInfo.title }</span><button onClick={ () => onAddBook(book) }>+</button>
        </li>) }
    </ul>
}