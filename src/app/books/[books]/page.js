import { __apiBase, __apiKey } from '@/api'
import BooksList from '@/components/BooksList'

const getAllBooks = async (params) => {
    const url = `${__apiBase}?${params}&${__apiKey}`
    //https://www.googleapis.com/books/v1/volumes?q=react+subject:art&orderBy=relevance&key=AIzaSyA9ESmiBbNEK5a7Xmg485w2GgUIcwQwcDo
    console.log(url);
    const res = await fetch(url)
    const books = await res.json()
    return books

}

const Books = async ({ params }) => {
    //Получение декодированный URL
    const query = decodeURIComponent(params.books)
    const books = await getAllBooks(query)

    return (
        <div className='books'>

            <div className='text-slate-100 font-bold border-b-2 text-lg text-right py-2'>
                <div className="container">
                    Найдено: {books.totalItems}
                </div>
            </div>
            <div className="container mt-6">
                <BooksList books={books} query={query} />
            </div>
        </div>
    )
}

export default Books