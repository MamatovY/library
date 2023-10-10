import Link from "next/link"
import skeleton from '@/assets/img/skeleton.jpg'
import Image from "next/image"

const BookItem = ({ item }) => {
    const img = item?.volumeInfo?.imageLinks?.thumbnail ? item?.volumeInfo?.imageLinks?.thumbnail : skeleton
    return (
        <Link
            className="block rounded-lg w-[17rem] bg-d4b996 text-black p-3 max-w-full"
            style={{ background: '#FFF' }}
            href={`/book/${item?.id}`}>

            <Image width={100} height={100} src={img} alt="" className="rounded-xl w-full object-cover h-[17rem]" />
            <div className="font-bold">
                {item?.volumeInfo?.title}
            </div>
            <div className="text-xs my-1">
                Category: {item?.volumeInfo?.categories?.join(', ')}
            </div>
            <div className="text-xs">
                Authors: {item?.volumeInfo?.authors?.join(', ')}
            </div>
        </Link>
    )
}

export default BookItem