import React, { useState, useEffect } from 'react'
import { popularMovieWithId } from '../api/Api';
import { Link, useParams } from 'react-router-dom'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'


function MovieDetails() {

    const [isLoaded, setisLoaded] = useState(true)
    const [allMovies, setallMovies] = useState();
    const { id } = useParams()


    useEffect(() => {
        setisLoaded(true)
        const getData = async () => {
            const { data } = await popularMovieWithId(id)
            setallMovies(data)
        }
        getData()
        setisLoaded(false)
    }, [])


    return (

        <div>
            {allMovies ? 
                <div>

                    <img className='mt-[-200px] xs:min-h-[120vh] sm:min-h-[120vh] xs:w-[100%] sm:w-[100%] relative z-[1]' src={`https://image.tmdb.org/t/p/original${allMovies && allMovies.poster_path}`} alt="" />
                    <div className='w-[50%] xs:mx-2 sm:mx-2 xs:w-[90%] sm:w-[90%] overflow-hidden xs:left-0 sm:left-0 left-[10px] absolute z-10 xs:top-[100px] sm:top-[100px] top-[250px] text-white bg-[rgba(0,0,0,0.3)] px-10 xs:px-4 sm:px-4 py-10 rounded-xl'>

                        <div className='absolute top-[-230px] xs:top-[10px] sm:top-[10px] z-[999999]'>

                            <Link to={'/'}>
                                <button className='underline text-[18px]'>
                                    Home
                                </button>
                            </Link>

                        </div>



                        <p className='text-[30px] font-bold'>
                            {allMovies && allMovies.original_title}
                        </p>
                        <p className='py-4'>
                            {allMovies && allMovies.genres.map((genre) => genre.name + " | ")}

                        </p>
                        <p className='w-[100%]'>
                            {allMovies && allMovies.overview}
                        </p>
                    </div>
                </div>
                :<div className='ml-[8vw]'> <Skeleton width={"80vw"} count={1} height={"80vh"} /> </div>
            }

        </div>
    )
}

export default MovieDetails