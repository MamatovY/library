import { __apiBase, __apiKey } from '@/api'
import Image from 'next/image'

const getBook = async (id) => {
    const url = `${__apiBase}/${id}?${__apiKey}`
    // https://www.googleapis.com/books/v1/volumes/J89cEAAAQBAJ?key=AIzaSyA9ESmiBbNEK5a7Xmg485w2GgUIcwQwcDo
    const res = await fetch(url)
    const book = await res.json()
    return book
}

// изображение обложки, название, все категории, все авторы, описание.
const BookPage = async ({ params }) => {
    const book = await getBook(params.id)
    const img = book?.volumeInfo?.imageLinks?.thumbnail ? book?.volumeInfo?.imageLinks?.thumbnail : skeleton
    console.log(img);
    return (
        <main className='container mt-10 gap-6'>
            <Image width={100} height={100} src={img} alt="" className="rounded-xl w-[16rem] md:w-[20rem] mx-auto sm:mx-0 sm:float-left sm:mr-5 mb-5" />
            <div>
                <div className="font-bold text-xl sm:text-2xl">
                    {book?.volumeInfo?.title}
                </div>
                <div className="my-5">
                    <span className='font-bold'>Category:</span> {book?.volumeInfo?.categories?.join(', ')}
                </div>
                <div className="mb-5">
                    <span className='font-bold'>Authors:</span> {book?.volumeInfo?.authors?.join(', ')}
                </div>
                {/* Для того чтобы если из бекенда приходят HTML теги можно было их выводить как HTML элемент */}
                <div className="text-sm sm:text-base" dangerouslySetInnerHTML={{ __html: book?.volumeInfo?.description }}></div>
            </div>
        </main>
    )
}

export default BookPage