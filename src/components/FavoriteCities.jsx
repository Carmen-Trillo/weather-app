function FavoriteCities({ favorites, onRemoveFavorite }) {
    return (
      <div>
        <h3>Ciudades favoritas</h3>
        <ul>
          {favorites.map((city, index) => (
            <li key={index}>
              {city}
              <button onClick={() => onRemoveFavorite(city)}>Borrar</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  
  export default FavoriteCities;
  