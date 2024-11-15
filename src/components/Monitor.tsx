
import { useState } from 'react'
import SocialMedia from './apps/SocialMedia'
import TaskBar from './TaskBar'
import Terminal from './apps/Terminal'

interface Props {
  setDisplayFirstHash: React.Dispatch<React.SetStateAction<number>>
  setDisplaySecondHash: React.Dispatch<React.SetStateAction<number>>;

}

export default function Monitor({ setDisplayFirstHash, setDisplaySecondHash}: Props) {
  const [app, setApp] = useState('socialMedia')
  return (
    <div className="flex flex-col justify-between w-3/4 max-w-[64%] h-[46%] max-md:h-[30%] bg-neutral-200 border-[1rem] 
    border-neutral-600 shadow-2xl rounded-3xl font-serif">
      {app === 'socialMedia' ?
        <SocialMedia setDisplayFirstHash={setDisplayFirstHash}  setDisplaySecondHash={setDisplaySecondHash}/> :
        <Terminal />
      }
      <TaskBar setApp={setApp} />
    </div>
  )
}
