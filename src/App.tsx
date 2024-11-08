import { useState } from "react"
import Home from "./screens/Home"
import Game from "./screens/Game"
import { Toaster } from "react-hot-toast"
import Sobre from "./screens/Sobre"

function App() {
  const [screen, setScreen] = useState('home')

  return (
    <>
      <Toaster />
      {screen === 'home' ? (
        <Home setScreen={setScreen} />
      ) : screen === 'game' ? (
        <Game setScreen={setScreen} />
      ) : (
        <Sobre setScreen={setScreen} />
      )}
    </>
  )
}

export default App
