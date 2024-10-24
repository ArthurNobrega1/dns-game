import { useState } from "react"

interface handlleSubmitDTO {
  event: React.KeyboardEvent<HTMLInputElement>,
  currentPath: string
}

interface IPaths {
  [x: string]: string[]
}

const paths: IPaths = {
  'https://www.redesocial.com/': ['robots.txt', 'profile']
}

const commands = {
  help: 'Lista todos os comandos [Ex: help]',
  clear: 'Limpa o terminal [Ex: clear]',
  dirb: 'Mapeia diretórios de uma url [Ex: dirb https://site.com/]'
}

const handlleSubmit = ({ event, currentPath }: handlleSubmitDTO) => {
  if (event.key === 'Enter') {
    const currentInput = event.target as HTMLInputElement

    if (currentInput.value === 'clear') {
      const divsToRemove = document.querySelectorAll("div.closed-div, div.help, div.paths")

      divsToRemove.forEach(div => {
        if (div) div.remove()
      })

      const currentDiv = currentInput.parentElement
      if (currentDiv) {
        currentDiv.remove()
      }
    }

    if (currentInput.value === 'help') {
      const divHelp = document.createElement('div')
      divHelp.className = 'help'

      const title = document.createElement('p')
      title.textContent = '|---LISTA DE COMANDOS---|'
      divHelp.appendChild(title)

      Object.entries(commands).map(([key, value]) => {
        const paragraph = document.createElement('p')
        paragraph.textContent = `${key}: ${value}`
        divHelp.appendChild(paragraph)
      })

      const terminal = document.getElementById('terminal')
      if (terminal) {
        terminal.appendChild(divHelp)
      }
    }

    if (currentInput.value.split(" ")[0] === 'dirb') {
      const url = currentInput.value.split(" ")[1]
      if (Object.keys(paths).includes(url)) {
        const divPaths = document.createElement('div')
        divPaths.className = 'paths'

        const title = document.createElement('p')
        title.textContent = '|---LISTA DE PATHS---|'
        divPaths.appendChild(title)

        const pathsUrl = paths[url]
        pathsUrl.map((path) => {
          const paragraph = document.createElement('p')
          paragraph.textContent = `- ${path}`
          divPaths.appendChild(paragraph)
        })

        const terminal = document.getElementById('terminal')
        if (terminal) {
          terminal.appendChild(divPaths)
        }
      }
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
    <div id='terminal' className='font-mono bg-black flex-1 text-neutral-50 pl-3 max-md:pl-1 py-3 overflow-y-scroll no-scrollbar text-sm max-md:text-[0.4rem]'>
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
