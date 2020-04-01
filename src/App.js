import React from 'react';
import Card from './Card/Card';

import './App.css';
import './Card/card.css';
import './Heading/heading.css';

const users = require('./users.json');

function App() {

  let userCards = [];

  for (let i = 0; i < users.length; i++) {
        userCards.push(
          <Card 
          id={users[i].id}
          name={users[i].name}
          job={users[i].occupation}
          photo={users[i].avatar}
        />
        );
      }

  return (
    <div className="App">
      {userCards}
    </div>
  );
}

export default App;
