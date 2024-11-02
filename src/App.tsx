import { Toaster } from "react-hot-toast"
import Computer from "./components/Computer"


function App() {

  return (
    <div className="w-full flex items-center justify-center gap-3 h-full bg-gradient-to-r from-fuchsia-500 to-cyan-500">
      <Toaster/>
      <Computer />
    </div>
  )
}

export default App
