const { useState } = React

export function StarsRating({ rating, setReview }) {
    function onRating(value) {
        setReview(prevRev => { return { ...prevRev, rating: value } })
    }
    console.log('rating:', rating <= 1)
    return <React.Fragment>
        <label htmlFor="rating">Rate the book:</label>
        <span onClick={ () => onRating(1) }>{ rating >= 1 ? '⭐' : '⚪' }</span>
        <span onClick={ () => onRating(2) }>{ rating >= 2 ? '⭐' : '⚪' }</span>
        <span onClick={ () => onRating(3) }>{ rating >= 3 ? '⭐' : '⚪' }</span>
        <span onClick={ () => onRating(4) }>{ rating >= 4 ? '⭐' : '⚪' }</span>
        <span onClick={ () => onRating(5) }>{ rating >= 5 ? '⭐' : '⚪' }</span>
    </React.Fragment>
}