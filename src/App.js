import React from 'react';
import './App.css';

import GameWorld from './components/gameworld/gameworld';
import MoneyCounter from './components/GUI/moneycounter';

function App() {
  return (
    <div className="App">
      <GameWorld />
      <MoneyCounter />
    </div>
  );
}

export default App;
