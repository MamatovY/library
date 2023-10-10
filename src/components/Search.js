'use client'
import { useRouter } from "next/navigation"
import { useState } from "react"
import background from '@/assets/img/s08pj8uAxDM.jpg'

const Search = () => {

    const [query, setQuery] = useState('')
    const [category, setCategory] = useState('')
    const [sorting, setSorting] = useState('relevance')
    const [msg, setMsg] = useState('')
    const router = useRouter()

    const handleSubmit = (e) => {
        e.preventDefault()
        if (query || category) {
            let params = `/books/q=`
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
        <header style={{
            background: `url(${background.src}) 0% 0% / cover no-repeat;`
        }}
            className="py-20 sm:py-28 text-center">
            <form onSubmit={handleSubmit} className=''>
                <div className="flex justify-between w-[18rem] 2xl:w-[26rem] mx-auto mb-5 gap-2">
                    <input className="text-sm 2xl:text-2xl w-5/6 p-2  rounded-lg" name='text' value={query} onChange={(e) => setQuery(e.target.value)} type="text" placeholder='Введите название книги' />
                    <button className="bg-white flex justify-center items-center rounded-full w-1/6 " type="submit" >
                        <svg className="2xl:w-[1.7rem] 2xl:h-[1.7rem]" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            <path d="M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0 0 11.6 0l43.6-43.5a8.2 8.2 0 0 0 0-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z"></path>
                        </svg>
                    </button>
                </div>
                <div className="w-[18rem] 2xl:w-[26rem] mx-auto grid grid-cols-2 gap-3 justify-between">
                    <select
                        className="p-2 rounded-lg 2xl:text-2xl"
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
                        className="p-2 rounded-lg"
                        name="sorting"
                        value={sorting}
                        onChange={e => setSorting(e.target.value)}
                    >
                        <option value="relevance">Relevance</option>
                        <option value="newest">Newest</option>
                    </select>
                </div>
            </form >
        </header>
    )
}

export default Search