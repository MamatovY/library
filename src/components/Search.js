'use client'
import { useRouter } from "next/navigation"
import { useState } from "react"

const Search = () => {

    const [query, setQuery] = useState('')
    const [category, setCategory] = useState('')
    const [sorting, setSorting] = useState('relevance')
    const [msg, setMsg] = useState('')
    const router = useRouter()

    const handleSubmit = (e) => {
        e.preventDefault()
        if (query || category) {
            let params = `q=`
            if (query) params += `${query}`
            if (category) params += `+subject:${category}`
            params += `&orderBy=${sorting}`
            params += '&maxResults=30'

            router.push(params)
        } else {
            setMsg('Введите либо название, либо категорию')
        }
    }

    return (
        <form onSubmit={handleSubmit} className='query'>
            <input name='text' value={query} onChange={(e) => setQuery(e.target.value)} type="text" placeholder='Введите название книги' />
            <button type="submit">Search</button>
            <select
                className="form-select"
                name="category"
                value={category}
                onChange={e => setCategory(e.target.value)}
            >
                <option value="">all</option>
                <option value="art">Art</option>
                <option value="biography">Biography</option>
                <option value="computers">Computers</option>
                <option value="history">History</option>
                <option value="medical">Medical</option>
                <option value="poetry">Poetry</option>
            </select>
            <select
                className="form-select"
                name="sorting"
                value={sorting}
                onChange={e => setSorting(e.target.value)}
            >
                <option value="relevance">Relevance</option>
                <option value="newest">Newest</option>
            </select>
        </form >
    )
}

export default Search