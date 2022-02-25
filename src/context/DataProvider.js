import { createContext, useState } from 'react'


export const DataContext = createContext(null)

const DataProvider = ({ children }) => {
    const [allMovies, setallMovies] = useState()
    const [inputVal, setInputVal] = useState("")

    return (
        <DataContext.Provider value={{
            allMovies, setallMovies,
            inputVal, setInputVal
        }}>
            {children}
        </DataContext.Provider>
    )
}


export default DataProvider