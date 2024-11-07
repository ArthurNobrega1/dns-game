import { useState } from "react"
import Home from "./screens/Home"
import Game from "./screens/Game"
import { Toaster } from "react-hot-toast"

function App() {
  const [screen, setScreen] = useState('home')

  return (
    <>
      <Toaster />
      {
        screen === 'home'
          ? <Home setScreen={setScreen} />
          : <Game setScreen={setScreen} />
      }
    </>
  )
}

export default App
