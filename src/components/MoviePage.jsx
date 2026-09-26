import { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';

export default function MoviePage({ movies }) {
  const { id } = useParams();
  const movie = movies.find(m => m.id === Number(id));
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef(null); // Пункт 5: Храним ID интервала

  useEffect(() => {
    if (!movie || movie.images.length <= 1) return;

    // Пункт 4: Смена каждые 5 секунд
    intervalRef.current = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % movie.images.length);
    }, 5000);

    // Пункт 5: Очистка при размонтировании
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [movie]);

  if (!movie) return <div>Фильм не найден</div>;

  return (
    <div style={{ padding: '20px' }}>
      <Link to="/">← Назад</Link>
      <h1>{movie.title}</h1>
      <img 
        src={movie.images[currentIndex] || 'https://via.placeholder.com/400'} 
        alt={movie.title} 
        width="400" 
      />
      <p>Картинка {currentIndex + 1} из {movie.images.length || 1}</p>
    </div>
  );
}