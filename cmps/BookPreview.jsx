export function BookPreview({ book }) {
    return <article className="book-preview grid">
        <img src={book.thumbnail} alt="" />
        <div className="flex flex-column">
            <h3>{book.title}</h3>
            <h5>Price: {(book.listPrice.amount).toLocaleString("en-US", { style: "currency", currency: book.listPrice.currencyCode })}</h5>
            {book.listPrice.isOnSale && <img className="sale-icon" src="assets/imgs/sale.gif" alt="" />}


        </div>
    </article>
}