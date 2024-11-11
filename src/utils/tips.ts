import { showErrorToast, showInfoToast, showSuccessToast, showToastInSequence, showWarnToast } from "./toast"

export const tipSocialMedia = () => {
    showInfoToast('Estamos no site', () => { })
}

export const tipHomeSocialMedia = async () => {
    return showToastInSequence([
        (onConfirm: () => void) => { showInfoToast('Estamos na tela principal do site', onConfirm) },
        (onConfirm: () => void) => { tipError500(onConfirm) }
    ])
}

export const tipProfile = () => {
    showInfoToast('Parece que há resquícios da sua rede social. Talvez haja algo escondido nesta página. Verifique o conteúdo com mais cuidado.', () => { })
}

export const tipRobotsTxt = () => {
    showWarnToast('Este arquivo contém locais que não devem ser acessados facilmente. Porém, é possível que ele revele pistas ou informações úteis. Dê uma olhada!', () => { })
}

export const tipLogin = () => {
    showToastInSequence([
        (onConfirm: () => void) => { showWarnToast('Para acessar, você precisará de credenciais', onConfirm) },
        (onConfirm: () => void) => { showInfoToast('Dentro da área restrita, você pode encontrar algo confidencial que será útil para sua investigação', onConfirm) }
    ])
}

export const tipLoginWithoutData = () => {
    showErrorToast('Preencha todos os campos', () => { })
}

export const tipLoginInvalidData = () => {
    showErrorToast('Usuário ou senha inválidos', () => { })
}

export const tipChat = () => {
    showToastInSequence([
        (onConfirm: () => void) => { showSuccessToast('Parabéns! Você encontrou uma conversa vazada...', onConfirm) },
        (onConfirm: () => void) => { showInfoToast('Aparentemente na conversa estavam querendo passar dados que podem ser bem úteis, mas só tem esse código estranho', onConfirm) },
        (onConfirm: () => void) => { showInfoToast('Em alguns cenários específicos da internet é necessário o uso de criptografias, mas o que é isso?', onConfirm) },
        (onConfirm: () => void) => { showInfoToast('De uma maneira simples, é transformar seu texto simples em uma grande palavra estranha com numeros e ás vezes até simbolos', onConfirm) },
        (onConfirm: () => void) => { showInfoToast('Com isso, para ter acesso a seu texto simples, uma pessoa precisa de uma key (chave) para acessá-lo', onConfirm) },
        (onConfirm: () => void) => { showInfoToast('Você praticamente faz um cofre com seu dado e foi isso o que eles fizeram aqui e já lhe passaram até qual foi a criptografia', onConfirm) },
        (onConfirm: () => void) => { showInfoToast('Use esse site que eles usaram ou qualquer outro que consiga quebrar a criptografia e aguarde conseguir o dado', onConfirm) },
    ])
}

export const tipTerminal = () => {
    showInfoToast('Use o comando help para conhecer os comandos, escrevendo "help" e apertando enter no terminal', () => { })
}

export const tipError500 = (onConfirm?: () => void) => {
    showErrorToast('“Erro 500” indica que o servidor encontrou um problema ao tentar carregar a página.', onConfirm || (() => { }))
}

export const tipError404 = () => {
    showToastInSequence([
        (onConfirm: () => void) => { showErrorToast('“Erro 400” indica que o caminho que você tentou acessar não foi encontrado', onConfirm) },
        (onConfirm: () => void) => { showInfoToast('Tente voltar o caminho e buscar em outros lugares', onConfirm) }
    ])
}

export const tipTerminalHelp = () => {
    showInfoToast('Olha só, temos alguns comandos interessantes aqui! Siga os exemplos e teste à vontade', () => { })
}

export const tipTerminalClear = () => {
    showInfoToast('Clear é muito bom para organizar, mas infelizmente perde algumas informações...', () => { })
}

export const tipTerminalDirb = () => {
    showToastInSequence([
        (onConfirm: () => void) => { showInfoToast('Olha só, você achou o dirb!', onConfirm) },
        (onConfirm: () => void) => { showInfoToast('Esse comando serve para você achar caminhos (paths) válidos de site de terceiros sem ter que testá-los manualmente um por um', onConfirm) },
        (onConfirm: () => void) => { showInfoToast('Ou seja, em vez de você testar se tem alguma coisa no google.com/perfil ou google.com/gerencia, o dirb vai testar vários desse /(alguma coisa) e lhe enviar o que ele achou de diferente', onConfirm) },
        (onConfirm: () => void) => { showInfoToast('Ás vezes ele também retorna resposta com erros que podem ser programadas pelo próprio dono do site para confundir quem faz uso dessas ferramentas', onConfirm) }
    ])
}

export const tipTerminalIncompleteCommand = () => {
    showErrorToast('O comando está incompleto! Preencha como no exemplo!', () => { })
}

export const tipTerminalLs = () => {
    showInfoToast('Ls é usado para listar as suas pastas e arquivos aqui no jogo', () => { })
}

export const tipTerminalCd = () => {
    showInfoToast('Cd ou change directory é usado para entrar ou sair de pastas', () => { })
}

export const tipAdmin = () => {
    showToastInSequence([
        (onConfirm: () => void) => { showSuccessToast('Parabéns! Você conseguiu entrar no painel', onConfirm) },
        (onConfirm: () => void) => { showInfoToast('Tente encontrar alguma informação importante por aqui, clique, mexa, segure, faça o que você quiser pois algo importante deve estar aqui', onConfirm) }
    ])
}

export const tipInitial = async () => {
    await showToastInSequence([
        (onConfirm: () => void) => { showInfoToast('Bem-vindo ao DNS Game', onConfirm) },
        (onConfirm: () => void) => { showInfoToast('Para contextualizar, você estava em sua rede social quando de repente...', onConfirm) },
        (onConfirm: () => void) => { showInfoToast('Ela cai e de alguma forma você perde o acesso a tudo dela 😭', onConfirm) },
        (onConfirm: () => void) => { showInfoToast('Aí então que entra o DNS, mas o que é o DNS?', onConfirm) },
        (onConfirm: () => void) => { showInfoToast('Para simplificar, assim como nós temos nomes e podemos ser reconhecidos por eles, os sites têm seus hostnames, como https://www.google.com ou, neste caso, https://www.redesocial.com', onConfirm) },
        (onConfirm: () => void) => { showInfoToast('E, mesmo que de forma estranha, poderíamos nos chamar pelo CPF ou pelo RG na rua, pois nos identificamos também a partir disso', onConfirm) },
        (onConfirm: () => void) => { showInfoToast('Comparado com a gente, há também outras formas de identificar um site, no caso, podemos chamá-lo pelo IP', onConfirm) },
        (onConfirm: () => void) => { showInfoToast('Logo, o DNS é basicamente um serviço que nomeia CPFs de computadores para que a gente não precise decorar todo o IP do Google para ter que pesquisar algo nele', onConfirm) },
        (onConfirm: () => void) => { showInfoToast('Toda sua aventura aqui se baseia nisso: Já que eles bloqueram você de chamar o site pelo nome (hostname), você vai tentar chamar ele pelo cpf (ip), apostando em eles não terem bloqueado também', onConfirm) },
        async (onConfirm: () => void) => {
            await tipHomeSocialMedia()
            onConfirm()
        },
        (onConfirm: () => void) => { showInfoToast('Geralmente é um sinal de que algo está errado no servidor desse site nessa página que você está', onConfirm) },
        (onConfirm: () => void) => { showInfoToast('Procure mais informações nos icone abaixo (terminal)', onConfirm) }
    ])
}

export const tipHalfGame = () => {
    showToastInSequence([
        (onConfirm: () => void) => { showSuccessToast('Parabéns! Você encontrou a metade do ip de sua rede social', onConfirm) },
        (onConfirm: () => void) => { showInfoToast('Procure em outros lugares para achar a parte restante', onConfirm) }
    ])
}

export const tipEndGame = () => {
    showToastInSequence([
        (onConfirm: () => void) => { showSuccessToast('Parabéns! Você encontrou o IP de sua rede social e agora pode acessá-la', onConfirm) },
        (onConfirm: () => void) => { showInfoToast('Jogue novamente...', onConfirm) }
    ])
}