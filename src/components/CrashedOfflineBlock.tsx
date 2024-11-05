interface Props {
    setDisplayFirstHash: React.Dispatch<React.SetStateAction<number>>
}

export default function CrashedOfflineBlock({ setDisplayFirstHash }: Props) {
    const handleClick = () => {
        setDisplayFirstHash(1)
    }

    return (
        <div className="flex items-center justify-center w-36 h-20 max-md:w-16 max-md:h-10 shrink-0 text-white bg-white rounded-2xl shadow-md hover:text-[#ddd] max-md:text-xs">
            <button onClick={handleClick}>Não clicar</button>
        </div>
    )
}
