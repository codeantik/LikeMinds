import './styles.css'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { config } from '../../App'
import { useNavigate } from 'react-router-dom'

const Home = ({ setHistory }) => {

    const [searchQuery, setSearchQuery] = useState('')
    const [movies, setMovies] = useState([])
    const [timer, setTimer] = useState(500)
    const navigate = useNavigate()

    const handleSearch = async (query) => {
        const newDate = new Date();
        setHistory((prevHistory) => {
            return [
                ...prevHistory,
                {
                    query,
                    date: newDate.toLocaleDateString(),
                    time: newDate.toLocaleTimeString(),
                }
            ]
        })
        try {
            const res = await axios.get(`${config.baseUrl}s=${query}`)
            console.log(res);
            setMovies(res.data.Search)
        } catch(err) {
            console.log(err)
        }
    }

    const handleChange = (e, timeout) => {
        if(timeout) clearTimeout(timeout)
        setSearchQuery(e.target.value)
        let t = setTimeout(() => handleSearch(e.target.value), 500)
        setTimer(t)

    }

    return (
        <div className="home-container">
            <h2>Search a Movie</h2>
            <div className='search-bar'>
                <input type='search' onChange={(e) => handleChange(e, timer)} />
            </div>
            <div className='search-result'>
                {movies?.length ? (
                    movies.map(({ Poster, Title, Year, Type, imdbID }) => (
                        <div className='movie-card' key={imdbID} onClick={() => navigate(`/detail/${imdbID}`, { state: { imdbID }})}>
                            <img src={Poster} alt={imdbID}/>
                            <h3>{Title}</h3>
                            <p>{Year}</p>
                            <p>{Type}</p>
                        </div> 
                    ))
                ) : (
                    <div>No movies found</div>
                )}
            </div>
        </div>
    )
}

export default Home;