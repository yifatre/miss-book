const { useState } = React
const { useParams } = ReactRouter


import { bookService } from "../services/book.service.js"

export function AddReview({ book }) {
    const [review, setReview] = useState(bookService.getEmptyReview())
    // const { bookId } = useParams()

    function onAddReview(ev) {
        ev.preventDefault()
        bookService.addReview(book, review)
            .then(book => {
                console.log('review:', book.reviews.slice(-1))
                showSuccessMsg('Review saved successfully')
            })
            .catch(err => {
                console.log('Error:', err)
                showErrorMsg('Could not save review')
            })
    }

    function handleChange({ target }) {
        let { value, name: field, type } = target
        console.log('target:', target)
        if (type === 'select') value = +value
        console.log('value:', value)
        setReview(prevReview => ({ ...prevReview, [field]: value }))
    }

    return <form onSubmit={onAddReview}>
        <label htmlFor="fullname">Full name:</label>
        <input
            type="text"
            id="fullname"
            name="fullname"
            value={review.fullname}
            onChange={handleChange}
        />

        <label htmlFor="rating">Rate the book:</label>
        <select
            name="rating"
            id="rating"
            value={review.rating}
            onChange={handleChange}
            type='select'
        >
            <option value="1">⭐</option>
            <option value="2">⭐⭐</option>
            <option value="3">⭐⭐⭐</option>
            <option value="4">⭐⭐⭐⭐</option>
            <option value="5">⭐⭐⭐⭐⭐</option>
        </select>

        <label htmlFor="readOn">Read on:</label>
        <input
            type="date"
            name="readOn"
            id="readOn"
            value={review.readOn}
            onChange={handleChange}
        />

        <button>Save review</button>
    </form>
}