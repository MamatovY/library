//Специально добавил api ключ локально а не в .env.local
import { __apiBase, __apiKey } from "@/api";

export const getAllBooks = async (params, offset) => {
    const url = `${__apiBase}?${params}&startIndex=${offset}&${__apiKey}`
    //https://www.googleapis.com/books/v1/volumes?q=react&orderBy=relevance&maxResults=30&startIndex=30&key=AIzaSyA9ESmiBbNEK5a7Xmg485w2GgUIcwQwcDo
    const res = await fetch(url)
    const books = await res.json()
    return books
}

export const getBook = async (id) => {
    const url = `${__apiBase}/${id}?${__apiKey}`
    // https://www.googleapis.com/books/v1/volumes/J89cEAAAQBAJ?key=AIzaSyA9ESmiBbNEK5a7Xmg485w2GgUIcwQwcDo
    const res = await fetch(url)
    const book = await res.json()
    return book
}