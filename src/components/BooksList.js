'use client'
import Link from "next/link"
import LoadMore from "./LoadMore"
import { useState } from "react"
import { __apiBase, __apiKey } from '@/api'

const getAllBooks = async (params, offset) => {
    const url = `${__apiBase}?${params}&startIndex=${offset}&${__apiKey}`

    //https://www.googleapis.com/books/v1/volumes?q=react&orderBy=relevance&maxResults=30&startIndex=30&key=AIzaSyA9ESmiBbNEK5a7Xmg485w2GgUIcwQwcDo
    console.log(url);
    const res = await fetch(url)
    const books = await res.json()
    return books
}

const BooksList = ({ books, query }) => {
    const [data, setData] = useState(books.items)
    const [offset, setOffset] = useState(30)
    const handleMore = async () => {
        const res = await getAllBooks(query, offset)
        setData([...data, ...res.items]) // Используем оператор распыления для объединения массивов
        setOffset(offset + 30)
    }


    console.log(data);
    console.log(offset);

    return (
        <>
            <div>
                {data.map((item, i) => {
                    return (
                        <Link key={i} href={`/book/${item.id}`}>
                            {item.volumeInfo.title}
                        </Link>
                    )
                })}
            </div>
            <LoadMore data={data} handleMore={handleMore} />
        </>
    )
}

export default BooksList