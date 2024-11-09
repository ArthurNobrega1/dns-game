import { HiTerminal } from "react-icons/hi";
import { BsBrowserChrome } from "react-icons/bs";
import { tipSocialMedia, tipTerminal } from "../utils/tips"

interface Props {
    setApp: React.Dispatch<React.SetStateAction<string>>
}

export default function TaskBar({ setApp }: Props) {
    const handlleChangeApp = (context: 'terminal' | 'socialMedia') => {
        setApp(context)
        if (context === 'terminal') { tipTerminal() }
        else if (context === 'socialMedia') { tipSocialMedia() }
    }

    return (
        <div className='flex items-center justify-center gap-5 h-[12%] bg-zinc-800 rounded-b-lg *:max-lg:text-[130%]'>
            <HiTerminal onClick={() => handlleChangeApp('terminal')} fontSize={'190%'} className='text-[#e5e5e5] hover:text-stone-400 ease-in-out duration-300 cursor-pointer active:scale-75 active:text-[#e5e5e5] max-md:max-h-4' />
            <BsBrowserChrome onClick={() => handlleChangeApp('socialMedia')} fontSize={'170%'} className='text-[#e5e5e5] hover:text-stone-400 ease-in-out duration-300 cursor-pointer active:scale-75 active:text-[#e5e5e5] max-md:max-h-3' />
        </div>
    )
}