import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './assets/Components/Header'
import Main from './assets/Components/Main'


function App() {

  return (
    <>
      <div className='App'>
        <Header/>
        <div>
          <Main/>
        </div>
        
      </div>
    </>
  )
}

export default App
