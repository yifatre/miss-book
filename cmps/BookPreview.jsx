export function BookPreview({ book }) {
    return <article className="book-preview grid">
        <h3>{book.title}</h3>
        <h5>Price: {book.listPrice.amount}</h5>
        <img src={book.thumbnail} alt="" />
    </article>
}