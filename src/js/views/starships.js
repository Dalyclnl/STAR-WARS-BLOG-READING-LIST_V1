import React, { useState, useEffect } from 'react';

const Starships = () => {
  const [starships, setStarships] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://www.swapi.tech/api/starships');
        const data = await response.json();
        setStarships(data.results);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container">
      <div className="row">
        {starships.length > 0 ? (
          starships.map((starship, index) => (
            <div key={index}>
              <h4>{starship.name}</h4>
            </div>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default Starships;