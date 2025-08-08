import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './assets/Components/Header'
import Main from './assets/Components/Main'
import Skills from './assets/Components/Skills'


function App() {
  return (
    <>
      <div className="App relative w-full min-h-screen scroll-smooth">
        <div className="relative z-10 scroll-smooth">
          <div id='home'>
            <Header />
          </div>

          <Main />

          <div id='skills'>
            <Skills/>
          </div>
        </div>
      </div>
    </>
  );
}

export default App
