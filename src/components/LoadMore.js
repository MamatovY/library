import Loader from "./loader"

const LoadMore = ({ handleMore, loading }) => {
    console.log(loading);
    return (
        <>
            {
                loading ? <Loader />
                    :
                    <div onClick={handleMore} className='text-2xl underline cursor-pointer text-center mt-5'>
                        Load more
                    </div>
            }
        </>
    )
}

export default LoadMore