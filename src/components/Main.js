import React, { useState, useEffect, useContext } from 'react'
import MoviesCard from './MoviesCard'
import { popularMovies, searchMovie } from '../api/Api';
import Loader from './Loader';

import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { DataContext } from '../context/DataProvider';

function Main() {

    // const { account, setAccount } = 


    const [isLoaded, setisLoaded] = useState(true)


    const { allMovies, setallMovies } = useContext(DataContext)
    const { inputVal, setInputVal } = useContext(DataContext)




    useEffect(() => {

        setisLoaded(true)

        const getData = async () => {

            const { data } = await popularMovies()

             setallMovies(data.results)
        }

        getData()


        setisLoaded(false)
    }, [])



    useEffect(() => {
    
    //   return () => {
        setisLoaded(true)

        const getData = async () => {

            const { data } = await searchMovie(inputVal)

             setallMovies(data.results)
        }

        getData()


        setisLoaded(false)
    //   }
    }, [inputVal])
    







    return (
        <div>


            {isLoaded ? <div className='ml-[8vw]'> <Skeleton width={"80vw"} count={1} height={"80vh"} /> </div> :

                <div className='flex flex-wrap pl-4'>
                    {
                        allMovies ? allMovies.map((movie, index) => {
                            return (
                                <MoviesCard key={index} id={movie.id} image={movie.backdrop_path} movieName={movie.title} />
                            )
                        }) : <div className='ml-[8vw]'> <Skeleton width={"80vw"} count={1} height={"80vh"} /> </div>
                    }
                </div>
            }
        </div>
    )
}

export default Main