import ButtonHome from "../components/ButtonHome"

interface Props {
    setScreen: React.Dispatch<React.SetStateAction<string>>
}

export default function Home({ setScreen }: Props) {
    return (
        <div className="flex flex-col gap-12 max-lg:gap-6 items-center justify-center size-full bg-[#495DF8] text-black text-6xl max-lg:text-sm font-Jaro">
            <h1 className="text-white max-lg:text-3xl">Dns-game</h1>
            <div className="w-4/6 lg:max-w-[70rem] max-lg:w-[75%] bg-[#D9D9D9] p-10 max-lg:p-6 rounded-[4rem] max-lg:rounded-[3rem]">
                <p>O objetivo do jogo é encontrar as duas partes de uma chave hash para acessar uma página especial em uma rede social. Quando você conseguir juntar as partes e acessar essa página, o jogo será finalizado. Explore as páginas e use os comandos disponíveis para encontrar as chaves e alcançar o objetivo!</p>
            </div>
            <ButtonHome onClick={_ => setScreen('game')} name="Play" />
            <ButtonHome onClick={_ => setScreen('sobre')} name="Sobre" />
        </div>
    )
}
