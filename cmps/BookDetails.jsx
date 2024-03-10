export function BookDetails({ book, onGoBack }) {
    console.log('book from dets:', book);
    return <article className="book-details grid">
        <img src={book.thumbnail} alt="" />
        <div className="flex flex-column">
            <h3>{book.title}</h3>
            <h5>{book.authors}</h5>
            <h5>Price: {book.listPrice.amount}</h5>
            <h5>{book.pageCount}</h5>
        </div>
        <button onClick={() => onGoBack()}>Go back</button>
    </article>

}