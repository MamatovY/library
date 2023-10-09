import { __apiBase, __apiKey } from '@/api'

const getBook = async (id) => {
    const url = `${__apiBase}/${id}?${__apiKey}`
    // https://www.googleapis.com/books/v1/volumes/J89cEAAAQBAJ?key=AIzaSyA9ESmiBbNEK5a7Xmg485w2GgUIcwQwcDo
    const res = await fetch(url)
    const book = await res.json()
    return book
}


const BookPage = async ({ params }) => {
    const book = await getBook(params.id)
    return (
        <div className='page'>
            {book?.volumeInfo?.title}
        </div>
    )
}

export default BookPage