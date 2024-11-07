import { HiTerminal } from "react-icons/hi";
import { BsBrowserChrome } from "react-icons/bs";
import { showInfoToast } from "../utils/toast";

interface Props {
    setApp: React.Dispatch<React.SetStateAction<string>>
}

export default function TaskBar({ setApp }: Props) {
    const handlleChangeApp = (context: 'terminal' | 'socialMedia' | 'adimin') => {
        setApp(context)
        if (context === 'terminal') showInfoToast('Escreva help para conhecer os comandos')
        else if (context === 'socialMedia') showInfoToast('Sabia que o DNS é como o catálogo telefônico da internet? Ele traduz nomes de domínio (como <strong>www.exemplo.com</strong>) em endereços IP que os servidores entendem. Se o DNS falhar, o site pode não ser encontrado! ')

    }

    return (
        <div className='flex items-center justify-center gap-5 h-[12%] bg-zinc-800 rounded-b-lg *:max-lg:text-[130%]'>
            <HiTerminal onClick={() => handlleChangeApp('terminal')} fontSize={'190%'} className='text-[#e5e5e5] hover:text-stone-400 ease-in-out duration-300 cursor-pointer active:scale-75 active:text-[#e5e5e5] max-md:max-h-4' />
            <BsBrowserChrome onClick={() => handlleChangeApp('socialMedia')} fontSize={'170%'} className='text-[#e5e5e5] hover:text-stone-400 ease-in-out duration-300 cursor-pointer active:scale-75 active:text-[#e5e5e5] max-md:max-h-3' />
        </div>
    )
}