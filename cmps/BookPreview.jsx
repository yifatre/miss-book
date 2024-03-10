export function BookPreview({ book }) {
    return <article className="book-preview grid">
        <img src={book.thumbnail} alt="" />
        <div className="flex flex-column">
            <h3>{book.title}</h3>
            <h5>Price: {book.listPrice.amount}</h5>

        </div>
    </article>
}