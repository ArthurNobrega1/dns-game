import { showErrorToast, showInfoToast, showSuccessToast, showToastsInSequence, showWarnToast } from "./toast"

export const tipSocialMedia = () => {
    showInfoToast('Estamos no site', 1500)
}

export const tipHomeSocialMedia = () => {
    showToastsInSequence([
        { messageFunction: () => showInfoToast('Estamos na tela principal do site', 2000), duration: 2000 },
        { messageFunction: () => tipError500() }
    ])
}

export const tipProfile = () => {
    showInfoToast('Parece que há resquícios da sua rede social. Talvez haja algo escondido nesta página. Verifique o conteúdo com mais cuidado.', 5000)
}

export const tipRobotsTxt = () => {
    showWarnToast('Este arquivo contém locais que não devem ser acessados facilmente. Porém, é possível que ele revele pistas ou informações úteis. Dê uma olhada!', 5500)
}

export const tipLogin = () => {
    showToastsInSequence([
        { messageFunction: () => showWarnToast('Para acessar, você precisará de credenciais', 2000), duration: 2000 },
        { messageFunction: () => showInfoToast('Dentro da área restrita, você pode encontrar algo confidencial que será útil para sua investigação', 3500), duration: 3500 }
    ])
}

export const tipLoginWithoutData = () => {
    showErrorToast('Preencha todos os campos', 1500)
}

export const tipLoginInvalidData = () => {
    showErrorToast('Usuário ou senha inválidos', 1500)
}

export const tipChat = () => {
    showToastsInSequence([
        { messageFunction: () => showWarnToast('Uau! Você encontrou uma conversa vazada...', 1500), duration: 1500 },
        { messageFunction: () => showInfoToast('Aparentemente na conversa estavam querendo passar dados que podem ser bem úteis, mas só tem esse código estranho') },
        { messageFunction: () => showInfoToast('Em alguns cenários específicos da internet é necessário o uso de criptografias, mas o que é isso?', 3500), duration: 3500 },
        { messageFunction: () => showInfoToast('De uma maneira simples, é transformar seu texto simples em uma grande palavra estranha com numeros e ás vezes até simbolos', 4500), duration: 4500 },
        { messageFunction: () => showInfoToast('Com isso, para ter acesso a seu texto simples, uma pessoa precisa de uma key (chave) para acessá-lo') },
        { messageFunction: () => showInfoToast('Você praticamente faz um cofre com seu dado e foi isso o que eles fizeram aqui e já lhe passaram até qual foi a criptografia', 5000), duration: 5000 },
        { messageFunction: () => showInfoToast('Use esse site que eles usaram ou qualquer outro que consiga quebrar a criptografia e aguarde conseguir o dado') }
    ])
}

export const tipTerminal = () => {
    showInfoToast('Use o comando help para conhecer os comandos, escrevendo "help" e apertando enter no terminal', 4500)
}

export const tipError500 = () => {
    showErrorToast('“Erro 500” indica que o servidor encontrou um problema ao tentar carregar a página.')
}

export const tipError404 = () => {
    showToastsInSequence([
        { messageFunction: () => showErrorToast('“Erro 400” indica que o caminho que você tentou acessar não foi encontrado', 3500), duration: 3500 },
        { messageFunction: () => showInfoToast('Tente voltar o caminho e buscar em outros lugares', 3500), duration: 3500 }
    ])
}

export const tipTerminalHelp = () => {
    showInfoToast('Olha só, temos alguns comandos interessantes aqui! Siga os exemplos e teste à vontade', 3000)
}

export const tipTerminalClear = () => {
    showInfoToast('Clear é muito bom para organizar, mas infelizmente perde algumas informações...', 3000)
}

export const tipTerminalDirb = () => {
    showToastsInSequence([
        { messageFunction: () => showInfoToast('Olha só, você achou o dirb!', 1500), duration: 1500 },
        { messageFunction: () => showInfoToast('Esse comando serve para você achar caminhos (paths) válidos de site de terceiros sem ter que testá-los manualmente um por um', 5700), duration: 5700 },
        { messageFunction: () => showInfoToast('Ou seja, em vez de você testar se tem alguma coisa no google.com/perfil ou google.com/gerencia, o dirb vai testar vários desse /(alguma coisa) e lhe enviar o que ele achou de diferente', 8000), duration: 8000 },
        { messageFunction: () => showInfoToast('Ás vezes ele também retorna resposta com erros que podem ser programadas pelo próprio dono do site para confundir quem faz uso dessas ferramentas', 6200), duration: 6200 }
    ])
}

export const tipTerminalIncompleteCommand = () => {
    showErrorToast('O comando está incompleto! Preencha como no exemplo!', 2000)
}

export const tipTerminalLs = () => {
    showInfoToast('Ls é usado para listar as suas pastas e arquivos aqui no jogo', 3500)
}

export const tipTerminalCd = () => {
    showInfoToast('Cd ou change directory é usado para entrar ou sair de pastas', 3000)
}

export const tipAdmin = () => {
    showToastsInSequence([
        { messageFunction: () => showSuccessToast('Parabéns! Você conseguiu entrar no painel', 2000), duration: 2000 },
        { messageFunction: () => showInfoToast('Tente encontrar alguma informação importante por aqui, clique, mexa, segure, faça o que você quiser pois algo importante deve estar aqui', 5000), duration: 5000 }
    ])
}

export const tipInitial = () => {
    showToastsInSequence([
        { messageFunction: () => showInfoToast('Bem vindo ao DNS Game', 2000), duration: 2000 },
        { messageFunction: () => showInfoToast('Para contextualizar, você estava em sua rede social quando de repente...', 3500), duration: 3500 },
        { messageFunction: () => showInfoToast('Ela cai e de alguma forma e você perde o acesso a tudo dela 😭', 3500), duration: 3500 },
        { messageFunction: () => showInfoToast('Aí então que entra o DNS, mas o que é o DNS?', 3500), duration: 3500 },
        { messageFunction: () => showInfoToast('Para simplificar, assim como nós temos nomes e podemos ser reconhecidos por eles, os sites têm seus hostnames, como https://www.google.com ou, neste caso, https://www.redesocial.com', 8500), duration: 8500 },
        { messageFunction: () => showInfoToast('E, mesmo que de forma estranha, poderiamos nos chamar pelo CPF ou pelo RG na rua pois nos identificamos também a partir disso', 6500), duration: 6500 },
        { messageFunction: () => showInfoToast('Comparado com a gente, há também outras formas de identificar um site, no caso, podemos chamá-lo pelo IP', 5500), duration: 5500 },
        { messageFunction: () => showInfoToast('Logo, o DNS é basicamente um serviço que nomeia CPFs de computadores para que a gente não precise decorar todo o IP do google para ter que pesquisar algo nele', 6500), duration: 6500 },
        { messageFunction: () => showInfoToast('Toda sua aventura aqui se baseia nisso: tentar burlar esse erro e acessar o site de outra forma, ou seja, pelo IP', 5500), duration: 5500 },
        { messageFunction: () => tipHomeSocialMedia(), duration: 6000 },
        { messageFunction: () => showInfoToast('Geralmente é um sinal de que algo está errado no servidor desse site nessa página que você está') },
        { messageFunction: () => showInfoToast('Tente investigar mais a fundo em outros lugares', 2500), duration: 2500 }
    ])
}

export const tipHalfGame = () => {
    showToastsInSequence([
        { messageFunction: () => showSuccessToast('Parabéns! Você encontrou a metade do ip de sua rede social', 2000), duration: 2000 },
        { messageFunction: () => showInfoToast('Procure em outros lugares para achar a parte restante', 3000), duration: 3000 }
    ])
}

export const tipEndGame = () => {
    showToastsInSequence([
        { messageFunction: () => showSuccessToast('Parabéns! Você encontrou o IP de sua rede social e agora pode acessá-la', 2000), duration: 2000 },
        { messageFunction: () => showInfoToast('Jogue novamente...', 3000), duration: 3000 }
    ])
}