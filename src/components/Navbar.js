import React, {useContext} from 'react'
import { DataContext } from '../context/DataProvider'

function Navbar() {

    const {inputVal, setInputVal} = useContext(DataContext)



    return (



        <div className='flex justify-center items-center mt-1 mb-5'>


            {/* Filter by year */}
            <div className="p-10 xs:ml-[-50px] sm:ml-[-50px]">

                <div className="dropdown inline-block relative">
                    <button className="bg-green-500 text-white font-semibold py-2 px-4 rounded inline-flex items-center">
                        <span className="mr-1">Year</span>
                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /> </svg>
                    </button>
                    <ul className="dropdown-menu absolute hidden text-white pt-1 rounded-lg">
                        <li className=""><a className="bg-green-500 hover:bg-green-600 py-2 pr-14 pl-3 block" href="#">2021</a></li>
                        <li className=""><a className="bg-green-500 hover:bg-green-600 py-2 pr-14 pl-3 block" href="#">2022</a></li>
                        <li className=""><a className="bg-green-500 hover:bg-green-600 py-2 pr-14 pl-3 block" href="#">2020</a></li>
                    </ul>
                </div>

            </div>



            {/* Search Input */}

            <input onChange={(e)=> setInputVal(e.target.value)} value={inputVal} className='bg-green-500 w-[40vw] placeholder:text-[#f9fcf9] outline-none border-none text-white px-5 py-3 rounded-2xl xs:ml-[-10px] xs:w-[50vw] sm:ml-[-10px] sm:w-[60vw] ' type="text" name="search" id="search" placeholder='search movie....' />
        </div>
    )
}

export default Navbar