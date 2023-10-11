import { getBook } from '@/service';
import Image from 'next/image'


export async function generateMetadata({ params }) {
    const book = await getBook(params.id)

    return {
        title: book.volumeInfo.title
    }
}

// изображение обложки, название, все категории, все авторы, описание.
const BookPage = async ({ params }) => {
    const book = await getBook(params.id)
    const img = book?.volumeInfo?.imageLinks?.thumbnail ? book?.volumeInfo?.imageLinks?.thumbnail : skeleton

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