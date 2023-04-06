import './App.css';
import { Routes, Route } from 'react-router-dom'
import { useState } from 'react';
import {
  Header,
  History,
  Home,
  Detail
} from './components'


export const config = {
  baseUrl: 'http://www.omdbapi.com/?apikey=57ed164d&'
}

const App = () => {

  const historyObject = {
    query: "",
    date: "",
    time: "",
  }
  const [history, setHistory] = useState([])

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" exact element={<Home setHistory={setHistory} />} />
        <Route path="/detail/:movieId" element={<Detail />} />
        <Route path="/history" element={<History history={history} />} />
        <Route path="*" element={<div>Page Not Found</div>} />
      </Routes>
    </div>
  );
}

export default App;
