import React from 'react';
import './App.css';
import NavBar from './features/components/navBar/NavBar';
import Posts from './features/components/posts/Posts';
import SubReddits from './features/components/subReddits/SubReddits';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Posts />
      <SubReddits />
    </div>
  );
}

export default App;
