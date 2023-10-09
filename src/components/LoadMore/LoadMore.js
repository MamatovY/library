import Link from "next/link";

const LoadMore = ({ handleMore, data }) => {

    return (
        <div onClick={() => handleMore(data)} className='loadMore'>
            Load more
        </div>
    )
}

export default LoadMore