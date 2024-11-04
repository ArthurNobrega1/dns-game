import { AiOutlineClose } from "react-icons/ai";
import { AiOutlineLine } from "react-icons/ai";
import { VscChromeRestore } from "react-icons/vsc";
import { GrAdd } from "react-icons/gr";
import ErroMensagem from "./socialMediaScreens/ErroMensage";
import RobotsTxt from "./socialMediaScreens/RobotsTxt";
import Profile from "./socialMediaScreens/Profile"

interface Props {
    setContentScreen: React.Dispatch<React.SetStateAction<JSX.Element>>
}

export default function SearchBar({ setContentScreen }: Props) {
    const url = 'https://www.redesocial.com/'
    const handlleSubmit = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            const path = event.target as HTMLInputElement
            if (path.value === '' || path.value === 'home' || path.value === 'home/') {
                setContentScreen(<ErroMensagem />)
            } else if (path.value === 'robots.txt' || path.value === 'robots.txt/') {
                setContentScreen(<RobotsTxt />)
            } else if (path.value === 'profile' || path.value === 'profile/') {
                setContentScreen(<Profile />)
            } else {
                setContentScreen(<p>Teste</p>)
            }
        }
    }

    return (
        <div className="h-[18%] flex flex-col bg-[#202020]">
            <div className="flex relative items-center h-2/6 bg-[#202020] text-stone-50 pl-3">
                <div className="flex items-center bg-[#353535] w-[20%] max-md:w-[35%] h-[100%] rounded-tl-lg max-md:rounded-tl-md rounded-tr-lg max-md:rounded-tr-md rounded-br-[-25px]">
                    <img
                        src="/image/images-removebg-preview.png"
                        alt="Logo da Rede Social"
                        className="w-[6%] mx-3 max-md:mr-1"
                    />
                    <p className="text-1 max-lg:text-[0.4rem] w-fit">Rede Social</p>
                </div>
                <div className="ml-3 max-md:ml-1">
                    <GrAdd className="text-neutral-500 h-4 max-md:h-2" />
                </div>
                <div className="flex absolute right-0 *:size-[1.2vw] *:max-lg:size-[2vw] *:max-md:size-[4vw]">
                    <AiOutlineLine
                        className="hover:bg-[#353535] hover:text-black  p-1 rounded-md"
                    />
                    <VscChromeRestore
                        className="hover:bg-[#353535] hover:text-black  p-1 rounded-md"
                    />
                    <AiOutlineClose
                        className="hover:bg-red-700 p-1 rounded-md"
                    />
                </div>

            </div>
            <div className="flex items-center h-4/6 bg-[#353535] text-stone-50 px-3 py-2 max-md:py-1 max-lg:text-[.6rem] max-md:text-[0.4rem]">
                <div className="flex w-full h-6/6 items-center bg-[#202020] rounded-3xl px-3 border-2 border-transparent hover:bg-[#262626] focus-within:border-blue-500">
                    <p className="text-stone-400 mr-1">{url}</p>
                    <input
                        type="text"
                        className="flex-1 bg-transparent outline-none text-stone-400"
                        onKeyDown={handlleSubmit}
                    />
                </div>
            </div>
        </div>
    )
}
