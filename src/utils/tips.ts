import { showErrorToast, showInfoToast, showSuccessToast, showWarnToast } from "./toast"

export const tipHome = () => {
    showInfoToast('Não parece conter nada relevante, mas não desista, procure mais. Às vezes o que não está visível à primeira vista pode ter mais importância do que parece.');
}

export const tipProfile = () => {
    showInfoToast('Parece que há resquícios da sua rede social. Talvez haja algo escondido nesta página. Verifique o conteúdo com mais cuidado.');
}

export const tipRobotsTxt = () => {
    showWarnToast('Este arquivo contém locais que não devem ser acessados facilmente. Porém, é possível que ele revele pistas ou informações úteis. Dê uma olhada!');
}

export const tipLogin = () => {
    showInfoToast('Para acessar, você precisará de credenciais. Dentro da área restrita, você pode encontrar algo confidencial que será útil para sua investigação. Tente encontrar a chave que aciona o IP.');
}

export const tipChat = () => {
    showInfoToast('A senha de login foi vazada e está criptografada em MD2. Você precisa encontrar o site que foi criptografado e tentar descriptografá-lo para obter mais informações.');
}

export const tipTerminal = () => {
    showInfoToast('No terminal, experimente usar o comando dirb <site.com> para descobrir quais caminhos existem no servidor. Teste os caminhos encontrados para revelar novas informações e acessar áreas protegidas.');
}

export const tipError500 = () => {
    showErrorToast('“Erro 500” indica que o servidor encontrou um problema ao tentar carregar a página. No jogo, pode ser um sinal de que algo está errado na configuração do servidor DNS, o sistema que traduz os nomes dos sites em endereços IP. Tente investigar mais a fundo e localizar o IP correto para prosseguir.');
}

export const tipDNS = () => {
    showInfoToast('O DNS é responsável por traduzir o nome do site em um endereço IP. Se você não souber o IP do site, terá dificuldades para acessar. Procure descobrir o IP para avançar.');
}

export const tipError404 = () => {
    showErrorToast('O caminho que você tentou acessar não foi encontrado. Isso pode significar que o conteúdo foi removido ou está inacessível. Tente explorar outras áreas.');
}

export const tipSuccess = () => {
    showSuccessToast('Sucesso! Você conseguiu encontrar a pista crucial. Agora, com essas informações, está mais próximo de desvendar o mistério. Continue investigando!');
}