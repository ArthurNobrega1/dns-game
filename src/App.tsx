import { useState, useEffect } from "react";
import WebFont from "webfontloader";
import Home from "./screens/Home";
import Game from "./screens/Game";
import { Toaster } from "react-hot-toast";
import Sobre from "./screens/Sobre";
import Loading from "./screens/Loading";

function App() {
  const [screen, setScreen] = useState("home");
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Playfair Display:400,700,900", "Jaro:opsz@6..72"],
      },
      active: () => {
        setFontsLoaded(true); // Definir que as fontes foram carregadas
      },
    })
  }, [])

  if (!fontsLoaded) {
    return <Loading />
  }

  return (
    <>
      <Toaster />
      {screen === "home" ? (
        <Home setScreen={setScreen} />
      ) : screen === "game" ? (
        <Game setScreen={setScreen} />
      ) : (
        <Sobre setScreen={setScreen} />
      )}
    </>
  )
}

export default App;
