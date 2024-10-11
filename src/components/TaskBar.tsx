import { HiTerminal } from "react-icons/hi";
import { BsBrowserChrome } from "react-icons/bs";

interface Props {
    setApp: React.Dispatch<React.SetStateAction<string>>
}

export default function TaskBar({setApp}: Props) {
  return (
    <div className='flex items-center justify-center gap-5 h-[12%] bg-zinc-800 rounded-b-lg'>
          <HiTerminal onClick={() => setApp('terminal')} fontSize={'190%'} className='text-[#e5e5e5] hover:text-stone-400 ease-in-out duration-300 cursor-pointer active:scale-75 active:text-[#e5e5e5]'/>
          <BsBrowserChrome onClick={() => setApp('socialMedia')} fontSize={'170%'} className='text-[#e5e5e5] hover:text-stone-400 ease-in-out duration-300 cursor-pointer active:scale-75 active:text-[#e5e5e5]'/>
        </div>
  )
}
