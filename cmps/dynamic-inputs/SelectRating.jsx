export function SelectRating({handleChange, rating}) {
    return <React.Fragment>
        <label htmlFor="rating">Rate the book:</label>
        <select
            name="rating"
            id="rating"
            value={ rating }
            onChange={ handleChange }
            type='select'
        >
            <option value="1">⭐</option>
            <option value="2">⭐⭐</option>
            <option value="3">⭐⭐⭐</option>
            <option value="4">⭐⭐⭐⭐</option>
            <option value="5">⭐⭐⭐⭐⭐</option>
        </select>
    </React.Fragment>
}