import BooksList from '@/components/BooksList'
import { getAllBooks } from '@/service'


export const metadata = {
    title: 'Books result'
}


const Books = async ({ params }) => {
    //Получение декодированный URL
    const query = decodeURIComponent(params.books)
    const books = await getAllBooks(query, 0)

    return (
        <main>
            <div className='text-slate-100 font-bold border-b-2 text-lg text-right py-2'>
                <div className="container">
                    Найдено: {books.totalItems}
                </div>
            </div>
            <div className="container mt-6">
                <BooksList books={books} query={query} />
            </div>
        </main>
    )
}

export default Books