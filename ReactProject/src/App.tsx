import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { HeaderOfPage } from './exercise1/HeaderOfPage'
import { LeftNavigation } from './exercise1/LeftNavigation'
import { Content } from './exercise1/Content'
import { BigTitle } from './exercise1/BigTtile'
import { Box } from './exercise1/Box'
import { Footer } from './assets/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <HeaderOfPage/>
      <div className='bigContent'>
        <div className='test'>
          <BigTitle/>
          <Content/>
        </div>
        <LeftNavigation/>
      </div>
      <Box/>
      <Footer/>
    </div>
  )
}

export default App
