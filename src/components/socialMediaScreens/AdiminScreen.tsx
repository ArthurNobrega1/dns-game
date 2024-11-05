import React, { useState } from 'react';
import { SlLogin } from "react-icons/sl";
import { VscAccount } from "react-icons/vsc";
import { FaList } from "react-icons/fa6";
import { MdOutlineBugReport } from "react-icons/md";
import { TbRouteSquare } from "react-icons/tb";
import RouteManagement from "./AdmScreens/RoutesScreen";
import { IoHome } from "react-icons/io5";
import DefaultScreen from './AdmScreens/DefaultScreen';
import ListaDeIP from './AdmScreens/ListaDeIP';
import Reclamações from './AdmScreens/Reclamações';

const AdminScreen: React.FC = () => {
    const [activeContent, setActiveContent] = useState<string>(''); // Estado para controlar o conteúdo ativo
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    

    const renderContent = () => {
        switch (activeContent) {
            case 'listaDeIP':
                return <ListaDeIP />;
            case 'reclamacoes':
                return <Reclamações />;
            case 'rotas':
                return <RouteManagement />;
            case 'default':
                return <DefaultScreen />;
            default:
                return <DefaultScreen />;
        }
    };
    

    return (
        <div className='flex-1 overflow-hidden '>
            {/* header */}
            <div className="w-full bg-blue-950 flex p-1 space-x-4 justify-end max-md:w-full h-full">
  {/* Ícone Home */}
  <IoHome 
    className="w-6 h-6 text-gray-50 cursor-pointer hover:text-zinc-500 max-md:w-5 max-md:h-5" 
    onClick={() => setActiveContent('default')} 
  />

  {/* Container de Conta */}
  <div className="bg-gray-700 rounded-3xl w-[20%] h-[3%] flex justify-center items-center space-x-2 mx-3 max-md:mr-1 max-md:w-[50%]">
  <VscAccount className="text-gray-50 w-5 h-5 max-md:w-4 max-md:h-4" />
  <p className="text-gray-50 truncate max-w-[100px] max-md:max-w-[50px]">Henrique@gmail.com</p>
</div>

  {/* Botão de Sair */}
  <button className="text-gray-50 flex items-center space-x-1 justify-center max-md:space-x-0.5">
    <SlLogin className="w-5 h-5 text-red-700 max-md:w-4 max-md:h-4" />
    <span className="max-md:hidden" >Sair</span>
  </button>
</div>


            {/* main */}
          


 
            <div className="flex overflow-y-auto w-full">
                {/* Sidebar */}
                <div className={`bg-blue-800 flex flex-col transition-all duration-300 h-auto ${isSidebarOpen ? 'w-50' : 'w-20'}`}>
                    {/* Botão para Expandir/Reduzir a Sidebar sempre ativo */}
                    <button
                        className="text-white p-2 focus:outline-none"
                        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                    >
                        {isSidebarOpen ? '←' : '→'}
                    </button>

                    {/* Informações do usuário */}
                    <div className="flex flex-col justify-center items-center border-b border-neutral-800 p-4">
                        <VscAccount className="w-10 h-10 mt-2 text-white" />
                        {isSidebarOpen && (
                            <>
                                <h1 className="text-white mt-2 ">Henrique Machado</h1>
                                <h5 className="text-gray-300">Matrícula: 122.89</h5>
                            </>
                        )}
                    </div>

                    {/* Opções na lateral */}
                    <div className="flex flex-col flex-1">
                        {['listaDeIP', 'reclamacoes', 'rotas'].map((option) => (
                            <div
                                key={option}
                                className={`flex items-center border-b border-neutral-800 cursor-pointer p-3 transition-all duration-150 ${activeContent === option ? 'bg-slate-600' : 'hover:bg-slate-500'}`}
                                onClick={() => setActiveContent(option)}
                            >
                                {option === 'listaDeIP' && <FaList className="w-5 h-5 text-white mr-3" />}
                                {option === 'reclamacoes' && <MdOutlineBugReport className="w-5 h-5 text-white mr-3" />}
                                {option === 'rotas' && <TbRouteSquare className="w-5 h-5 text-white mr-3" />}
                                {isSidebarOpen && (
                                    <h5 className="text-white capitalize">{option}</h5>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Conteúdo */}
                <div className="flex-1 bg-slate-50 p-6 overflow-y-auto h-auto">
                    {renderContent()}
                </div>
            </div>
</div>
    );
};

export default AdminScreen; 