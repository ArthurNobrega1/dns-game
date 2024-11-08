import { IoMdArrowRoundBack } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

interface Props {
    setScreen: React.Dispatch<React.SetStateAction<string>>;
}

export default function Sobre({ setScreen }: Props) {
    return (
        <div className="bg-[#495DF8] h-full ">
            <button
                className="flex top-3 max-lg:top-1 left-3 max-lg:left-1 px-4 py-2 bg-slate-100 text-black border-black  rounded-lg hover:bg-gray-200 justify-center items-center gap-4 fixed text-2xl max-lg:text-sm"
                onClick={() => setScreen('home')}
            >
                <IoMdArrowRoundBack />  Voltar
            </button>
            <div className="flex flex-col gap-5 max-lg:gap-6 items-center justify-center size-full bg-[#495DF8] text-black text-6xl max-lg:text-sm font-Jaro">
                <h1 className="text-white max-lg:text-3xl">Equipe desenvolvedora </h1>
                <div className="w-4/6 lg:max-w-[70rem] max-lg:w-[75%] bg-[#D9D9D9] p-10 max-lg:p-6 rounded-[4rem] max-lg:rounded-[3rem]">
                    <div>
                        <h1>Arthur Nobrega</h1>
                        <a
                            href="https://www.linkedin.com/in/arthur-nobrega-leite/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-4 px-4 py-2 bg-white text-black rounded-lg hover:bg-gray-200 flex items-center justify-center gap-4"
                        >
                            <FaLinkedin />
                            Linkedin
                        </a>
                        <a
                            href="https://github.com/ArthurNobrega1"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-4 px-4 py-2 bg-white text-black rounded-lg hover:bg-gray-200 flex items-center justify-center gap-4"
                        >
                            <FaGithub />
                            Github
                        </a>

                    </div>
                    <div>
                        <h1>Henrique Furtado</h1>
                        <a
                            href="https://www.linkedin.com/in/henrique-machado-220750242/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-4 px-4 py-2 bg-white text-black rounded-lg hover:bg-gray-200 flex items-center justify-center gap-4"
                        >
                            <FaLinkedin />
                            Linkedin
                        </a>
                        <a
                            href="https://github.com/HenriqueFMA"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-4 px-4 py-2 bg-white text-black rounded-lg hover:bg-gray-200 flex items-center justify-center gap-4"
                        >
                            <FaGithub />
                            Github
                        </a>

                    </div>
                    <div>
                        <h1>joão Vitor</h1>
                        <a
                            href="https://www.linkedin.com/in/jo%C3%A3o-vitor-37b0841a5/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-4 px-4 py-2 bg-white text-black rounded-lg hover:bg-gray-200 flex items-center justify-center gap-4"
                        >
                            <FaLinkedin />
                            Linkedin
                        </a>
                        <a
                            href="https://github.com/ritov1"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-4 px-4 py-2 bg-white text-black rounded-lg hover:bg-gray-200 flex items-center justify-center gap-4"
                        >
                            <FaGithub />
                            Github
                        </a>

                    </div>

                </div>

            </div>
        </div>
    );
}