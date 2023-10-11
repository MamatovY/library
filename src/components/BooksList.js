'use client'
import LoadMore from "./LoadMore"
import { useState } from "react"
import BookItem from "./BookItem"
import { getAllBooks } from "@/service"



const BooksList = ({ books, query }) => {
    const [data, setData] = useState(books.items)
    const [offset, setOffset] = useState(30)
    const [loading, setLoading] = useState(false)
    const handleMore = async () => {
        setLoading(true)
        const res = await getAllBooks(query, offset)
        setData([...data, ...res.items]) // Используем оператор распыления для объединения массивов
        setOffset(offset + 30)
        setLoading(false)
    }

    return (
        <>
            <div className="flex flex-wrap justify-center gap-6" >
                {data?.map((item, i) => {
                    return (
                        <BookItem item={item} key={i} />
                    )
                })}
            </div>
            <LoadMore loading={loading} handleMore={handleMore} />
        </>
    )
}

export default BooksList