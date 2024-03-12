const { useState } = React
const { useParams } = ReactRouter


import { bookService } from "../services/book.service.js"
import { DynamicRating } from "./DynamicRating.jsx"

export function AddReview({ book, setBook }) {
    const [review, setReview] = useState(bookService.getEmptyReview())
    const [ratingMethod, setRatingMethod] = useState('select')
    // const { bookId } = useParams()

    function onAddReview(ev) {
        ev.preventDefault()
        bookService.addReview(book, review)
            .then(book => {
                console.log('review:', book.reviews.slice(-1))
                showSuccessMsg('Review saved successfully')
                setBook(prevBook => {
                    return { ...prevBook, reviews: book.reviews }
                })
            })
            .catch(err => {
                console.log('Error:', err)
                showErrorMsg('Could not save review')
            })
    }

    function onChangeMethod({ target }) {
        console.log('target:', target)
        setRatingMethod(target.value)
    }

    function handleChange({ target }) {
        let { value, name: field, type } = target
        // window.aaa = target
        console.log('target:', target)
        if (type === 'select' || type === 'number' || type === 'stars') value = +value
        console.log('value:', value)
        setReview(prevReview => ({ ...prevReview, [field]: value }))
    }

    return <form onSubmit={ onAddReview }>
        <label htmlFor="fullname">Full name:</label>
        <input
            type="text"
            id="fullname"
            name="fullname"
            value={ review.fullname }
            onChange={ handleChange }
        />

        <fieldset>
            <legend>Select rating method:</legend>

            <input type="radio" id="select" name="ratingMethod" value="select" defaultChecked={ ratingMethod === 'select' } onChange={ onChangeMethod } />
            <label htmlFor="select">Drop down list</label>

            <input type="radio" id="textbox" name="ratingMethod" value="textbox" defaultChecked={ ratingMethod === 'textbox' } onChange={ onChangeMethod } />
            <label htmlFor="textbox">Text box</label>

            <input type="radio" id="stars" name="ratingMethod" value="stars" defaultChecked={ ratingMethod === 'stars' } onChange={ onChangeMethod } />
            <label htmlFor="stars">Stars</label>
        </fieldset>

        <DynamicRating cmpType={ ratingMethod } handleChange={ handleChange } rating={ review.rating } setReview={ setReview } />

        <label htmlFor="readOn">Read on:</label>
        <input
            type="date"
            name="readOn"
            id="readOn"
            value={ review.readOn }
            onChange={ handleChange }
        />

        <button>Save review</button>
    </form>
}