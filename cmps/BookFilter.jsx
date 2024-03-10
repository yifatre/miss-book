const { useState, useEffect } = React

export function BookFilter({ filterBy, onSetFilter }) {
    const [filterByToEdit, setFilterByToEdit] = useState(filterBy)

    useEffect(() => {
        onSetFilter(filterByToEdit)
    }, [filterByToEdit])

    function handleChange({ target }) {
        let { value, name: field, type } = target
        if (type === 'number') value = +value
        setFilterByToEdit(prevFilterBy => ({ ...prevFilterBy, [field]: value }))
    }

    return <section className="book-filter">
        <h2>Filter Books:</h2>
        <form>
            <label htmlFor="title">Title:</label>
            <input onChange={handleChange} type="search" name="title" id="title" value={filterByToEdit.title} />

            <label htmlFor="maxPrice">Price lower than:</label>
            <input onChange={handleChange} type="number" name="maxPrice" id="maxPrice" value={filterByToEdit.maxPrice} />
        </form>
    </section>
}