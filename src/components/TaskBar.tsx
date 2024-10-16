import { HiTerminal } from "react-icons/hi";
import { BsBrowserChrome } from "react-icons/bs";
import toast from "react-hot-toast";

interface Props {
    setApp: React.Dispatch<React.SetStateAction<string>>
}

const showInfoToast = (message: string) => {
  toast(message, {
    icon: 'ℹ️',
    style: {
      background: '#1E40AF', // Classe Tailwind para cor de fundo (azul escuro)
      color: '#FFFFFF', // Cor do texto
    },
  })
}

export default function TaskBar({setApp}: Props) {
  const handlleChangeApp = (context: 'terminal' | 'socialMedia') => {
    setApp(context)
    if (context === 'terminal') showInfoToast('Escreva help para conhecer os comandos')
  }

  return (
    <div className='flex items-center justify-center gap-5 h-[12%] bg-zinc-800 rounded-b-lg'>
          <HiTerminal onClick={() => handlleChangeApp('terminal')} fontSize={'190%'} className='text-[#e5e5e5] hover:text-stone-400 ease-in-out duration-300 cursor-pointer active:scale-75 active:text-[#e5e5e5]'/>
          <BsBrowserChrome onClick={() => handlleChangeApp('socialMedia')} fontSize={'170%'} className='text-[#e5e5e5] hover:text-stone-400 ease-in-out duration-300 cursor-pointer active:scale-75 active:text-[#e5e5e5]'/>
        </div>
  )
}
