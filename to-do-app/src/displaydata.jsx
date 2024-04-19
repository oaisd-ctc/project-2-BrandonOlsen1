// DisplayData.js

import React, { useState, useEffect } from 'react';

function DisplayData() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('/api/getData');
      const jsonData = await response.json();
      setData(jsonData.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
      <h2>Data from API</h2>
      <ul>
        {data.map((item) => (
          <li key={item._id}>{item.message}</li>
        ))}
      </ul>
    </div>
  );
}

export default DisplayData;
