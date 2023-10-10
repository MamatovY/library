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
        <main className='container'>
            <Image width={100} height={100} src={img} alt="" className="rounded-xl w-full object-cover h-[17rem]" />
            <div className="font-bold">
                {book?.volumeInfo?.title}
            </div>
            <div className="text-xs my-1">
                Category: {book?.volumeInfo?.categories?.join(', ')}
            </div>
            <div className="text-xs">
                Authors: {book?.volumeInfo?.authors?.join(', ')}
            </div>
            {/* Для того чтобы если из бекенда приходят HTML теги можно было их выводить как HTML элемент */}
            <div className="text-xs" dangerouslySetInnerHTML={{ __html: book?.volumeInfo?.description }}></div>
        </main>
    )
}

export default BookPage