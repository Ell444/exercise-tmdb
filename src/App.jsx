import { useState, useEffect } from 'react';
import './App.scss'
import MovieCard from './components/MovieCard';
import SearchBar from './components/SearchBar';
const apiKey = import.meta.env.VITE_API_KEY;

function App() {

  const [movies, setMovies] = useState([]);



  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`)
      .then(response => response.json())
      .then(obj => setMovies(obj.results))
      .catch(error => console.error(error))
  }, [])

  const search = async (searchValue) => {
    const searchParams = new URLSearchParams({
      api_key: apiKey,
      query: searchValue
    })
    const response = await fetch(`https://api.themoviedb.org/3/search/movie?${searchParams.toString()}`);
    const { results } = await response.json();
    setMovies(results);
  }

  return (<>
    <h1>Wanna chill? Search your movie here</h1>
    <SearchBar onSearch={search} />
    <div className="movies">
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          title={movie.title}
          poster={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          overview={movie.overview}
          vote={movie.vote_average}
        />
      ))}
    </div>





  </>)
};

export default App
