import { useState } from 'react'
import SocialMedia from './apps/SocialMedia'
import TaskBar from './TaskBar'

export default function Monitor() {
  const [app, setApp] = useState('socialMedia')
  return (
    <div className="flex flex-col justify-between w-3/4 h-[46%] max-md:h-[30%] bg-neutral-200 border-[1rem] 
    border-neutral-600 shadow-2xl rounded-3xl font-serif">
        {app === 'socialMedia' ? 
          <SocialMedia/>:
          <div className='bg-black flex-1 text-neutral-50 pl-3 py-3'>
            <div className='flex'>
              <p>user@root: </p>
              <input type="text" id='open-input' className='bg-transparent flex-1 pl-3'/>
            </div>
          </div>
        }
        <TaskBar setApp={setApp}/>
    </div>
  )
}
