// src/App.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    // Function to fetch data
    const fetchData = async () => {
      try {
        const response = await axios.post(
          'http://localhost:3000/lostark/markets/items',
          {
            Sort: 'GRADE',
            CategoryCode: 90600,
            CharacterClass: '',
            ItemTier: null,
            ItemGrade: '',
            ItemName: '',
            PageNo: 0,
            SortCondition: 'ASC',
          }
        );
        console.log(response.data);
        // Set the response data to state
        setItems(response.data.Items);
      } catch (error) {
        console.error('Error fetching market items:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <div className="App">
      <h1>Market Item List</h1>
      <ul>
        {items.map((item) => (
          <li key={item.Id}>
            <img src={item.Icon} alt={item.Name} width={50} />
            <div>
              <strong>{item.Name}</strong> - {item.Grade}
            </div>
            <div>
              Average Price:{' '}
              {item.YDayAvgPrice ? item.YDayAvgPrice.toFixed(2) : 'N/A'}
            </div>
            <div>
              Recent Price: {item.RecentPrice ? item.RecentPrice : 'N/A'}
            </div>
            <div>
              Min Price: {item.CurrentMinPrice ? item.CurrentMinPrice : 'N/A'}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
