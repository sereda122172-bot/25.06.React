import { Routes, Route } from 'react-router-dom';
import MainPage from './components/MainPage';
import MoviePage from './components/MoviePage';
import { movies } from './data/movies';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage movies={movies} />} />
      <Route path="/movie/:id" element={<MoviePage movies={movies} />} />
    </Routes>
  );
}

export default App;