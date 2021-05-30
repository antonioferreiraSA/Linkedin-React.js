import './App.css';

import Header from './components/Header';
import React from 'react';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="app">

      {/* header */}
      <Header/>
      {/* App Body */}
      <div className="app__body">
        <Sidebar/>
      </div>
      {/* Sidebar */}
    
      {/* Feed */}
      {/* Widgets */}

    </div>
  );
}

export default App;
