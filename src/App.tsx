import React, { useState } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Teams from './components/Teams';
import Fixtures from './components/Fixtures';
import Standings from './components/Standings';
import Players from './components/Players';
import News from './components/News';

function App() {
  const [activeTab, setActiveTab] = useState('home');

  const renderActiveComponent = () => {
    switch (activeTab) {
      case 'home':
        return <Home />;
      case 'teams':
        return <Teams />;
      case 'fixtures':
        return <Fixtures />;
      case 'standings':
        return <Standings />;
      case 'players':
        return <Players />;
      case 'news':
        return <News />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-0">
        {renderActiveComponent()}
      </main>
    </div>
  );
}

export default App;