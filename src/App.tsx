import { useState } from 'react'
import './App.css'
import Aside from './component/Aside/Aside'
import Boxes from './component/Boxes/Boxes'
import Footer from './component/Footer/Footer'
import Header from './component/Header/Header'

function App() {

  return (
    <div className="App">
      <Header />
      <Aside />
      <Boxes amount={5} />
      <Footer />
    </div>
  )
}

export default App
