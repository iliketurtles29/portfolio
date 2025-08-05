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
      <div className="App relative w-full h-full overflow-hidden">
        <div className="relative z-10">
          <Header />
          <Main />
          <Skills/>
        </div>
      </div>
    </>
  );
}

export default App
