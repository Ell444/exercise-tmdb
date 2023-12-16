import { useState, useEffect } from 'react';
import './App.css'
import MovieCard from './components/MovieCard';
const apiKey = import.meta.env.VITE_API_KEY;

function App() {

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`)
      .then(response => response.json())
      .then(obj => setMovies(obj.results))
      .catch(error => console.error(error))
  }, [])

  return (<>
    <MovieCard />

  </>)
}

export default App
