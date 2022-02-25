import axios from 'axios'


const url = "https://movie-task.vercel.app/api"

export const popularMovies = async () => {
    try {

        let { data } = await axios.get(`${url}/popular?page=1`)
        return data

    } catch (error) {
        console.log('there is error')
    }
}


// const filterUrl = "https://movie-task.vercel.app/api/movie?movieId=634649"
export const popularMovieWithId = async (id) => {
    try {

        let { data } = await axios.get(`${url}/movie?movieId=${id}`)
        return data

    } catch (error) {
        console.log('there is error')
    }
}
export const searchMovie = async (input) => {
    try {

        let { data } = await axios.get(`${url}/search?page=1&query=${input}`)
        return data

    } catch (error) {
        console.log('there is error')
    }
}
