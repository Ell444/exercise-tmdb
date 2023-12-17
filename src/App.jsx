import { useState, useEffect } from 'react';
import './App.scss'
import MovieCard from './components/MovieCard';
import SearchBar from './components/SearchBar';
const apiKey = import.meta.env.VITE_API_KEY;

function App() {

  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([])


  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`)
      .then(response => response.json())
      .then(obj => {
        setMovies(obj.results)
        setFilteredMovies(obj.results);
      })
      .catch(error => console.error(error))
  }, [])


  return (<>
    <h1>Most popular movies</h1>
    <SearchBar onSearch={(searchValue) => {
      const newFilteredMovies = filteredMovies.filter(m => {
        return m.title.toLowerCase().includes(searchValue.toLowerCase())
      })
      setFilteredMovies(newFilteredMovies)
    }} />
    {filteredMovies.map((movie) => (
      <MovieCard
        key={movie.id}
        title={movie.title}
        poster={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        overview={movie.overview}
        vote={movie.vote_average}
      />
    ))}




  </>)
};

export default App
