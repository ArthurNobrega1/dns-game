import { useState } from "react"

interface handlleSubmitDTO {
  event: React.KeyboardEvent<HTMLInputElement>,
  currentPath: string
}

const handlleSubmit = ({event, currentPath}: handlleSubmitDTO) => {
  if (event.key === 'Enter') {
    const currentInput = event.target as HTMLInputElement

    if (currentInput.value === 'clear') {
      const divsToRemove = document.querySelectorAll("div > input#closed-input");

      divsToRemove.forEach(inputElement => {
        const divToRemove = inputElement.parentElement;
        if (divToRemove) {
          divToRemove.remove()
        }
      })

      const currentDiv = currentInput.parentElement
      if (currentDiv) {
        currentDiv.remove()
      }
    }
    const oldOpenInput= document.getElementById('open-input') as HTMLInputElement
    if (oldOpenInput) {
      oldOpenInput.id = 'closed-input'
      oldOpenInput.autofocus = false
      oldOpenInput.disabled = true
      oldOpenInput.onblur = null
    }

    const div = document.createElement('div')
    div.className = 'flex'

    const paragraph = document.createElement('p')
    paragraph.textContent = `user@root: ${currentPath}`

    const input = document.createElement('input')
    input.className = 'bg-transparent flex-1 pl-3 outline-none'
    input.onblur = e => {
      const target = e.target as HTMLInputElement
      return target.focus()
    }
    input.onkeydown = e => handlleSubmit({
      event: e as unknown as React.KeyboardEvent<HTMLInputElement>,
      currentPath
    })
    input.id = 'open-input'

    div.appendChild(paragraph)
    div.appendChild(input)

    const terminal = document.getElementById('terminal')
    if (terminal) {
      terminal.appendChild(div)
      input.focus()
    }
  }
}

export default function Terminal() {
  const [currentPath, setCurrentPath] = useState('$')
  return (
    <div id='terminal' className='font-mono bg-black flex-1 text-neutral-50 pl-3 py-3 overflow-y-scroll no-scrollbar'>
      <div className='flex'>
        <p>user@root: {currentPath}</p>
        <input 
          type="text" 
          id='open-input' 
          className='bg-transparent flex-1 pl-3 outline-none' 
          onBlur={e => e.target.focus()} 
          onKeyDown={e => handlleSubmit({
            event: e,
            currentPath
          })}
          autoFocus = {true}
        />
      </div>
    </div>
  )
}
