import { useState } from 'react'
import reactLogo from '../../assets/react.svg'
// import './App.css'

import { Logo, LinkContainer, Card, ReadTheDocs } from './Elements'
import { Button } from '../utils/Button'

const App = () => {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      {/* <div> */}
      <LinkContainer>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <Logo src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank" rel="noreferrer">
          <Logo
            src={reactLogo}
            className="logo react"
            alt="React logo"
            filterStyle="drop-shadow(0 0 2em #61dafbaa)"
          />
        </a>
      </LinkContainer>
      {/* </div> */}
      <h1>Vite + React</h1>
      {/* <div className="card"> */}
      <Card>
        <Button
          onClick={() => setCount((count) => count + 1)}
          color="#FFFFFF"
          bgColor="#000000">
          count is {count}
        </Button>
        {/* <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button> */}
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </Card>
      {/* </div> */}
      {/* <p className="read-the-docs"> */}
      <ReadTheDocs>Click on the Vite and React logos to learn more</ReadTheDocs>
      {/* </p> */}
    </div>
  )
}

export default App
