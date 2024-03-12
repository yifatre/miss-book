export function Reviews({ reviews }) {
    return <ul className="reviews flex flex-column clean-list">
        {reviews.map(review =>
            <li key={review.id} className="grid">
                <span>Name: {review.fullname}</span>
                <span>{'⭐'.repeat(review.rating)}</span>
                <span>Read on: {review.readOn}</span>
            </li>)}
    </ul>
    // <pre>{JSON.stringify(reviews, null, 2)}</pre>

}