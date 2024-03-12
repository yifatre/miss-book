const { useState, useEffect } = React
const { useParams, useNavigate } = ReactRouter
const { Link } = ReactRouterDOM


import { bookService } from "../services/book.service.js";
import { LongText } from "../cmps/LongText.jsx";
import { AddReview } from "../cmps/AddReview.jsx";
import { Reviews } from "../cmps/Reviews.jsx";

export function BookDetails() {
    const [book, setBook] = useState(null)
    const { bookId } = useParams()
    console.log('bookId:', bookId)

    useEffect(() => {
        loadBook()
    }, [bookId])

    function loadBook() {
        bookService.get(bookId)
            .then(book => setBook(book))
            .catch(err => console.log('Error:', err))
        // .finally()
    }

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

    if (!book) return <div>loading...</div>
    return <React.Fragment>
        <article className="book-details grid">
            <img src={ book.thumbnail } />
            <div className="flex flex-column">
                <h2>{ book.title }</h2>
                <h3>{ book.subtitle }</h3>
                <h5>By: { book.authors }</h5>
                <span>Price: <span className={ getPriceClass() }>{ (book.listPrice.amount).toLocaleString("en-US", { style: "currency", currency: book.listPrice.currencyCode }) }</span></span>
                <span>Number of pages: { book.pageCount } { getPageCountMsg() }</span>
                <span>Language: { book.language }</span>
                <span>Published on { book.publishedDate } { getDateMsg() }</span>
                { book.listPrice.isOnSale && <img className="sale-icon" src="assets/imgs/sale.gif" alt="" /> }
                { book.description && <LongText txt={ book.description } /> }
            </div>
            {/* <button onClick={() => onGoBack()}>Go back</button> */ }
        </article>
        <Link to={ `/book/${book.prevBookId}` }><button>Previous book</button></Link>
        <Link to={ `/book/${book.nextBookId}` }><button>Next book</button></Link>
        <AddReview book={ book } setBook={ setBook } />
        { book.reviews && <Reviews reviews={ book.reviews } /> }
    </React.Fragment>
}