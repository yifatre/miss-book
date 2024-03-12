export function Reviews({ reviews }) {
    return <pre>{JSON.stringify(reviews, null, 2)}</pre>

}