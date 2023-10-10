import Loader from "./loader"

const LoadMore = ({ handleMore, loading }) => {
    console.log(loading);
    return (
        <>
            {
                loading ? <Loader className='mt-5 w-[3rem] h-[3rem]' />
                    :
                    <div onClick={handleMore} className='text-2xl underline cursor-pointer text-center mt-5'>
                        Load more
                    </div>
            }
        </>
    )
}

export default LoadMore