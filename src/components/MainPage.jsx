import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

export default function MainPage({ movies }) {
  const searchRef = useRef(null);

  // Пункт 1: Фокусировка при загрузке
  useEffect(() => {
    searchRef.current?.focus();
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h1>Главная страница</h1>
      <input ref={searchRef} placeholder="Поиск..." style={{ padding: '8px' }} />
      
      <div style={{ display: 'flex', gap: '20px', marginTop: '20px' }}>
        {movies.map(m => (
          <div key={m.id} style={{ border: '1px solid #ccc', padding: '10px' }}>
            <Link to={`/movie/${m.id}`}>{m.title}</Link>
            <br />
            {/* Пункт 2 и 3: Массив картинок и заглушка */}
            <img 
              src={m.images[0] || 'https://via.placeholder.com/200'} 
              alt={m.title} 
              width="200" 
              style={{ marginTop: '10px' }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}