import React, { useState, useEffect } from 'react';
import Character from '../component/Character';

const People = () => {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://www.swapi.tech/api/people');
        const data = await response.json();
        setPeople(data.results);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container">
      <div className="row">
        {people.length > 0 ? (
          people.map((person, index) => (
            <div key={index} className="col-12 col-md-4">
             <Character image={person.image} name={person.name}/>
            </div>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default People;
