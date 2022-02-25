import React from 'react'
import { Link } from 'react-router-dom'

function MoviesCard({ id, image, movieName, }) {
    return (

        <Link to={`/${id}`}>
            <div className='flex w-[90%] flex-col justify-center rounded-lg items-center hover:scale-110 duration-200 pl-5 my-3 cursor-pointer'>
                <img className=' object-cover w-[100%] h-[25vh] rounded-lg' src={`https://image.tmdb.org/t/p/original${image}`} alt={movieName} />
                <p className='font-semibold text-green-500 text-[20px]'>{movieName.slice(0,10)}</p>
            </div>
        </Link>
    )
}

export default MoviesCard