import './styles.css'
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { config } from '../../App';
import axios from 'axios';

const Detail = () => {

    const [movie, setMovie] = useState({})
    const { movieId } = useParams()
    const navigate = useNavigate()

    const handleFetchDetail = async (id) => {
        try {
            const res = await axios.get(`${config.baseUrl}i=${id}`)
            console.log(res)
            setMovie(res.data)
        } catch(err) {
            console.log(err);
        }
    }

    useEffect(() => {
        handleFetchDetail(movieId)
    }, [])

    return (
        <div className="detail-container">
            <div className='detail-result'>
            {(typeof movie === 'object' && !Array.isArray(movie) && movie !== null) ? (
                    <div className='detail-result-container'>
                        <div className='detail-result-img'>
                            <img src={movie.Poster} alt={movieId} />
                        </div>
                        <div className='detail-result-content'>
                            <h2>{movie.Title}</h2>
                            <h3>{movie.Plot}</h3>
                            <p>Country: {movie.Country}</p>
                            <p>Year: {movie.Year}</p>
                            <p>Runtime: {movie.Runtime}</p>
                            <p>Genre: {movie.Genre}</p>
                            <p>Language: {movie.Language}</p>
                            <p>Release: {movie.Released}</p>
                            <p>Writer: {movie.Writer}</p>
                            <p>Director: {movie.Director}</p>
                            <p>Actors: {movie.Actors}</p>
                            <p>BoxOffice: {movie.BoxOffice}</p>
                            <p>imdbRating: {movie.imdbRating}</p>
                            <p>imdbVotes: {movie.imdbVotes}</p>
                        </div>
                    </div>
            ) : (
                <div>Movie details not found </div>
            )}
            <div className='back-button'>
                <button onClick={() => navigate(-1)}>
                    Back to Home
                </button>
            </div>
            </div>
        </div>
    )
}

export default Detail;