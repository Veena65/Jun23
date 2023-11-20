import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Axios1() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await axios.get('https://6503f8e3c8869921ae245392.mockapi.io/Student');
        setData(response.data);
      } 
      catch (error) {
        setError(error.message);
      }

      setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>API Example</h1>

      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {data.length > 0 && (
        <div>
          <h2>Data from API:</h2>
          <ul>
            {data.map(item => (
              <li key={item.id}>Id:{item.id},Name:{item.Name},Course:{item.Course}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Axios1;