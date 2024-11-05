import { useState } from "react"

interface IPaths {
  [x: string]: string[]
}

const paths: IPaths = {
  'https://www.redesocial.com/': ['robots.txt', 'profile', 'home', 'chat/23781829']
}

const commands = {
  help: 'Lista todos os comandos [Ex: help]',
  clear: 'Limpa o terminal [Ex: clear]',
  dirb: 'Mapeia diretórios de uma url [Ex: dirb https://site.com/]',
  ls: 'Lista de diretorios [Ex: ls]',
  cd: 'Navegar por diretorios [Ex: cd pasta]'
}
const fileSystem: { [key: string]: string[] } = {
  'root': ['dont-open']
}

export default function Terminal() {
  const [pathsTerminal, setPathsTerminal] = useState<string[]>(['root'])
  const [input, setInput] = useState('')

  const handleCommand = (currentInput: HTMLInputElement) => {
    if (currentInput.value === 'clear') {
      const divToRemove = document.getElementById("conteudo") as HTMLDivElement
      divToRemove.innerHTML = ''
      return undefined
    }

    else if (currentInput.value === 'ls') {
      const currentPath = pathsTerminal[pathsTerminal.length - 1]
      const filesLs = currentPath.includes('dont-open')
        ? [`realy-${currentPath}`, '..']
        : fileSystem[currentPath] || []
      const output = filesLs.length > 0 ? filesLs.join(" ") : "Diretorio vazio"
      const div = document.createElement("div")
      div.textContent = output
      div.className = "ls"
      return div
    }

    else if (currentInput.value.split(" ")[0] === 'cd') {
      const currentPath = pathsTerminal[pathsTerminal.length - 1]
      const filesCd = currentPath.includes('dont-open')
        ? [`realy-${currentPath}`, '..']
        : fileSystem[currentPath] || []
      const cdValue = currentInput.value.split(" ")[1]
      if (filesCd.includes(cdValue)) {
        if (cdValue === '..' && currentPath !== 'root') {
          setPathsTerminal((prev) => prev.slice(0, -1))
        } else {
          setPathsTerminal((prev) => [...prev, cdValue])
        }
      }
      return undefined
    }

    else if (currentInput.value === 'help') {
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

      return divHelp
    }

    else if (currentInput.value.split(" ")[0] === 'dirb') {
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

        return divPaths
      }
    }

    return undefined
  }

  const handleSubmit = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      const currentInput = event.target as HTMLInputElement
      const conteudo = document.getElementById('conteudo')
      if (currentInput.value !== 'clear') {
        const oldInput = document.createElement('p')
        oldInput.textContent = `user@root:/${pathsTerminal[pathsTerminal.length - 1] === 'root' ? '' : pathsTerminal[pathsTerminal.length - 1]}$  ${currentInput.value}`
        if (conteudo && currentInput.value !== 'clear') {
          conteudo.appendChild(oldInput)
        }
      }
      const output = handleCommand(currentInput)
      setInput('')
      if (output) {
        if (conteudo) {
          conteudo.appendChild(output)
        }
      }
    }
  }
  return (
    <div className='font-mono bg-black flex-1 text-neutral-50 pl-3 max-md:pl-1 py-3 overflow-y-scroll no-scrollbar text-sm max-md:text-[0.4rem] max-md:leading-3'>
      <main id="conteudo">
      </main>
      <div className='flex'>
        <p>user@root:/{pathsTerminal[pathsTerminal.length - 1] === 'root' ? '' : pathsTerminal[pathsTerminal.length - 1]}$</p>
        <input
          type="text"
          id='open-input'
          className='bg-transparent flex-1 pl-3 outline-none'
          onBlur={e => e.target.focus()}
          onKeyDown={event => handleSubmit(event)}
          autoFocus={true}
          onChange={e => setInput(e.target.value)}
          value={input}
        />
      </div>
    </div>
  )
}
