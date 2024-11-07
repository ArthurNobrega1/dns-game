import Computer from "../components/Computer"
import { useEffect, useState } from "react"
import { showInfoToast } from "../utils/toast"

interface Props {
    setScreen: React.Dispatch<React.SetStateAction<string>>
}

export default function Game({ setScreen }: Props) {
    const [displayFirstHash, setDisplayFirstHash] = useState(0)
    const [displaySecondHash, setDisplaySecondHash] = useState(0)

    useEffect(() => {
        if (displayFirstHash === 1 && displaySecondHash === 1) {
            showInfoToast('Parabéns! Você encontrou o IP de sua rede social e agora pode acessá-la', 3000)
            setTimeout(() => {
                showInfoToast('Jogue novamente...', 3000)
                setScreen('home')
                setDisplayFirstHash(0)
                setDisplaySecondHash(0)
            }, 3000)
        }
    }, [displayFirstHash, displaySecondHash])

    return (
        <div className="relative size-full flex items-center justify-center gap-3 bg-gradient-to-r from-fuchsia-500 to-cyan-500">
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
