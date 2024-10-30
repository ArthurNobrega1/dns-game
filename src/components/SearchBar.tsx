import { AiOutlineClose } from "react-icons/ai";
import { AiOutlineLine } from "react-icons/ai";
import { VscChromeRestore } from "react-icons/vsc";
import { GrAdd } from "react-icons/gr";
import toast from "react-hot-toast";
import React, { useState } from "react";

const showInfoToast = (message: string) => {
    
    toast(message, {
        icon: "ℹ️",
        style: {
            background: "#1E40AF",
            color: "#FFFFFF",
        },
    });
};

export default function SearchBar() {
    const [inputValue, setInputValue] = useState('');

    const handleInputSubmit = (e: React.FormEvent) => {
        e.preventDefault(); // Previne o comportamento padrão de recarregar a página

        // Verifica o valor do input
        if (inputValue.trim() === '/socialProfile') {
            showInfoToast('Você acertou o caminho!');
            
            setInputValue(''); // Limpa o input após o sucesso
        } else {
            showInfoToast('Caminho incorreto. Tente novamente!');
        }
    };

    return (
        <div className="h-[18%] flex flex-col bg-[#202020]">
            <div className="flex justify-between items-center h-[40px] bg-[#202020] text-stone-50 px-3">
                <div className="flex items-center bg-[#353535] w-[20%] h-[100%] rounded-tl-lg rounded-tr-lg rounded-br-[-25px]">
                    <img
                        src="/image/images-removebg-preview.png"
                        alt="Logo da Rede Social"
                        className="w-[1rem] mr-3 ml-2"
                    />
                    <p className="text-1 max-lg:text-[0.4rem] w-fit">Rede Social</p>
                </div>
                <div className="mr-[979px] ml-2">
                    <GrAdd className="text-neutral-500" />
                </div>
                <div className="flex space-x-2">
                    <AiOutlineLine
                        className="hover:bg-[#353535] hover:text-black w-[30px] h-[30px] p-1 rounded-md"
                    />
                    <VscChromeRestore
                        className="hover:bg-[#353535] hover:text-black w-[30px] h-[30px] p-1 rounded-md"
                    />
                    <AiOutlineClose
                        className="hover:bg-red-700 w-[30px] h-[30px] p-1 rounded-md"
                    />
                </div>
            </div>
            <div className="flex items-center bg-[#353535] text-stone-50 px-3 py-2">
                <div className="flex w-full items-center h-[28px] bg-[#202020] rounded-[55px] px-3 border-2 border-transparent hover:bg-[#262626] focus-within:border-blue-500">
                    <p className="text-stone-400 mr-3">https://www.redesocial.com/</p>
                    <form onSubmit={handleInputSubmit} className="flex-1">
                        <input
                            type="text"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            placeholder="Digite o caminho..."
                            className="flex-1 bg-transparent outline-none   text-stone-400"
                        />
                    </form>
                </div>
            </div>
        </div>
    );
}
