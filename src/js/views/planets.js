import React, { useState, useEffect } from 'react';

const Planets = () => {
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://www.swapi.tech/api/planets');
        const data = await response.json();
        setPlanets(data.results);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container">
      <div className="row">
        {planets.length > 0 ? (
          planets.map((planet, index) => (
            <div key={index}>
              <h4>{planet.name}</h4>
            </div>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default Planets;