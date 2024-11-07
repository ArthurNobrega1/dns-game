import ButtonHome from "../components/ButtonHome"
import { showInfoToast } from "../utils/toast"

interface Props {
    setScreen: React.Dispatch<React.SetStateAction<string>>
}

export default function Home({ setScreen }: Props) {
    return (
        <div className="flex flex-col gap-12 max-lg:gap-6 items-center justify-center size-full bg-[#495DF8] text-black text-6xl max-lg:text-sm font-Jaro">
            <h1 className="text-white max-lg:text-3xl">Dns-game</h1>
            <div className="w-4/6 lg:max-w-[80rem] max-lg:w-[85%] bg-[#D9D9D9] p-16 max-lg:p-6 rounded-[4rem] max-lg:rounded-[3rem]">
                <p>O objetivo do jogo é encontrar as duas partes de uma chave hash para acessar uma página especial em uma rede social. Quando você conseguir juntar as partes e acessar essa página, o jogo será finalizado. Explore as páginas e use os comandos disponíveis para encontrar as chaves e alcançar o objetivo!</p>
            </div>
            <ButtonHome onClick={_ => setScreen('game')} name="Play" />
            <ButtonHome name="Sobre" onClick={_=> showInfoToast('Bem-vindo ao DNS Simulator, um jogo educativo que transforma o complexo mundo dos servidores e da internet em uma experiência interativa e divertida! A cada desafio, você irá descobrir mais sobre como o DNS mantém a internet conectada, aprendendo sobre temas como IPs, domínios, e como os servidores resolvem endereços para carregar as páginas corretas.')} />
        </div>
    )
}
