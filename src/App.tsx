import { useState } from "react"
import Home from "./screens/Home"
import Game from "./screens/Game"

function App() {
  const [screen, setScreen] = useState('home')

  return (
    <>
      {
        screen === 'home'
          ? <Home setScreen={setScreen} />
          : <Game />
      }
    </>
  )
}

export default App
