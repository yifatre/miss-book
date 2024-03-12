export function TextboxRating({ handleChange, rating }) {
    return <React.Fragment>
        <label htmlFor="rating">Rate the book:</label>
        <input type="number" name="rating" id="rating" value={ rating } onChange={ handleChange }/>
    </React.Fragment>
}