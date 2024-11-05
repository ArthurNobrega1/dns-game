import { Toaster } from "react-hot-toast"
import Computer from "./components/Computer"
import { useState } from "react"

function App() {
  const [displayFirstHash, setDisplayFirstHash] = useState(0)
  const [displaySecondHash, setDisplaySecondHash] = useState(0)

  return (
    <div className="relative w-full flex items-center justify-center gap-3 h-full bg-gradient-to-r from-fuchsia-500 to-cyan-500">
      <Toaster />
      <div className="absolute flex top-2 right-2">
        <div className="w-[4.1rem]">
          <p style={{ opacity: displayFirstHash }} className="border-l border-t border-b rounded-l-3xl pl-2 py-1 ease-in-out duration-700">142.250</p>
        </div>
        <div className="w-[4.4rem]">
          <p style={{ opacity: displaySecondHash }} className="border-e border-t border-b rounded-e-3xl pr-2 py-1 ease-in-out duration-700">.939.459</p>
        </div>
      </div>
      <Computer setDisplayFirstHash={setDisplayFirstHash} />
    </div>
  )
}

export default App
