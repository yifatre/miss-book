import { LongText } from "./LongText.jsx";

export function BookDetails({ book, onGoBack }) {
    console.log('book from dets:', book);

    function getPageCountMsg() {
        if (book.pageCount > 500) return 'Serious Reading'
        if (book.pageCount > 200) return 'Decent Reading'
        if (book.pageCount < 100) return 'Light Reading'
        return ''
    }

    function getDateMsg() {
        const currYear = new Date().getFullYear()
        if (currYear - book.publishedDate >= 10) return 'Vintage'
        if (currYear - book.publishedDate <= 1) return 'New'

    }

    function getPriceClass() {
        if (book.listPrice.amount > 150) return 'red'
        if (book.listPrice.amount < 20) return 'green'
    }

    return <article className="book-details grid">
        <img src={book.thumbnail} alt="" />
        <div className="flex flex-column">
            <h2>{book.title}</h2>
            <h3>{book.subtitle}</h3>
            <h5>By: {book.authors}</h5>
            <span>Price: <span className={getPriceClass()}>{(book.listPrice.amount).toLocaleString("en-US", { style: "currency", currency: book.listPrice.currencyCode })}</span></span>
            <span>Number of pages: {book.pageCount} {getPageCountMsg()}</span>
            <span>Language: {book.language}</span>
            <span>Published on {book.publishedDate} {getDateMsg()}</span>
            {book.listPrice.isOnSale && <img className="sale-icon" src="assets/imgs/sale.gif" alt="" />}
            <LongText txt={book.description} />
        </div>
        <button onClick={() => onGoBack()}>Go back</button>
    </article>
}