import { Toaster } from "react-hot-toast"
import Computer from "../components/Computer"
import { useState } from "react"

export default function Game() {
    const [displayFirstHash, setDisplayFirstHash] = useState(0)
    const [displaySecondHash, setDisplaySecondHash] = useState(0)

    return (
        <div className="relative size-full flex items-center justify-center gap-3 bg-gradient-to-r from-fuchsia-500 to-cyan-500">
            <Toaster />
            <div className="absolute flex top-2 right-2">
                <div className="w-[5rem]">
                    <p style={{ opacity: displayFirstHash }} className="torn-paper pl-2 py-1 ease-in-out duration-700">142.250</p>
                </div>
                <div className="w-[5rem]">
                    <p style={{ opacity: displaySecondHash }} className="torn-paper pr-2 py-1 ease-in-out duration-700">.939.459</p>
                </div>
            </div>
            <Computer setDisplayFirstHash={setDisplayFirstHash} setDisplaySecondHash={setDisplaySecondHash} />
        </div>
    )
}
