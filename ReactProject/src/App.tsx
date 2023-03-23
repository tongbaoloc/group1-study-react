import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { HeaderOfPage } from './HeaderOfPage'
import { LeftNavigation } from './LeftNavigation'
import { Content } from './Content'
import { BigTitle } from './BigTtile'
import { Box } from './Box'
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
