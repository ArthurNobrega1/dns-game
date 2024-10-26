import { useState } from "react"

interface handlleSubmitDTO {
  event: React.KeyboardEvent<HTMLInputElement>,
  currentPath: string
}

const commands = {
  help: 'Lista todos os comandos',
  clear: 'Limpa o terminal',
  ls: 'Lista de diretorios',
  cd: 'Navegar por diretorios'
}

const fileSystem: { [key: string]: string[] } = {
  "$": ["documentos", "downloads", "músicas"],
  "$documentos": ["arquivo1.txt", "arquivo2.txt"],
  "$downloads": [],
  "$músicas": []
}

const handlleSubmit = ({ event, currentPath }: handlleSubmitDTO) => {
  if (event.key === 'Enter') {
    const currentInput = event.target as HTMLInputElement

    if (currentInput.value === 'clear') {
      const divsToRemove = document.querySelectorAll("div.closed-div, div.help")

      divsToRemove.forEach(div => {
        if (div) div.remove()        
      })

      const currentDiv = currentInput.parentElement
      if (currentDiv) {
        currentDiv.remove()
      }
    }

    if (currentInput.value === 'ls') {
      const files = fileSystem[currentPath] || []
      const output = files.length > 0 ? files.join(" ") : "Diretorio vazio"

      const div = document.createElement("div")
      div.textContent = output
      div.className = "ls-output"

      const terminal = document.getElementById("terminal")
      if(terminal) {
        terminal.appendChild(div)
      }
    }

    if (currentInput.value === 'help') {
      const divHelp = document.createElement('div')
      divHelp.className = 'help'
      const title = document.createElement('p')
      divHelp.appendChild(title)
      title.textContent = '|---LISTA DE COMANDOS---|'
      Object.entries(commands).map(([key, value]) => {
        const paragraph = document.createElement('p')
        paragraph.textContent = `${key}: ${value}`

        divHelp.appendChild(paragraph)
        const terminal = document.getElementById('terminal')
        if (terminal) {
          terminal.appendChild(divHelp)
        }
      })
    }
    const oldOpenInput = document.getElementById('open-input') as HTMLInputElement
    if (oldOpenInput) {
      oldOpenInput.id = ''
      oldOpenInput.classList.add('closed-input')
      oldOpenInput.autofocus = false
      oldOpenInput.disabled = true
      oldOpenInput.onblur = null
      oldOpenInput.parentElement?.classList.add('closed-div')
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
          autoFocus={true}
        />
      </div>
    </div>
  )
}
