import React from 'react';
import './App.css';
import NavBar from './features/components/navBar/NavBar';
import PostsSection from './features/components/postsSection/PostsSection';
import SubReddits from './features/components/subReddits/SubReddits';

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className='main-content'>
        <PostsSection />
        <SubReddits />
      </div>
    </div>
  );
}

export default App;
