import './styles.css'
import { useNavigate } from 'react-router-dom';

const History = ({ history }) => {
    const navigate = useNavigate()
    
    return (
        <div className="history-container">
            <h2>Search History</h2>
            <div className='search-history-container'>
                {history.length ? (
                    history.map(item => (
                        <div className='search-history-item' key={item.time}>
                            <span>{item.query}</span>
                            <span>{item.date}</span>
                            <span>{item.time}</span>
                        </div>
                    ))
                ) : (
                    <div>No Search history found</div>
                )}
            </div>
            <div className='back-button'>
                <button onClick={() => navigate(-1)}>
                    Back to Home
                </button>
            </div>
        </div>
    )
}

export default History;