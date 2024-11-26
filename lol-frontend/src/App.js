import React, { useState, useEffect } from 'react';
import { getChampions } from './services/api'; // Vérifiez que ce chemin est correct

const App = () => {
  const [champions, setChampions] = useState([]);

  useEffect(() => {
    const loadChampions = async () => {
      const data = await getChampions(); // Utilisez la bonne fonction ici
      if (data && data.data) {
        setChampions(data.data);
      }
    };

    loadChampions();
  }, []);

  return (
    <div>
      <h1>Liste des Champions</h1>
      <ul>
        {champions.map((champion) => (
          <li key={champion.id}>
            <h2>{champion.attributes.Champion}</h2>
            <img
              src={`http://localhost:1337${champion.attributes.SplashArt.data.attributes.url}`}
              alt={champion.attributes.Champion}
              width="300"
            />
            <p>{champion.attributes.Description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
