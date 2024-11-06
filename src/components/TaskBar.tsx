import { HiTerminal } from "react-icons/hi";
import { BsBrowserChrome } from "react-icons/bs";
import toast from "react-hot-toast";
import { useEffect } from "react";

interface Props {
    setApp: React.Dispatch<React.SetStateAction<string>>;
    context: 'terminal' | 'socialMedia' | 'admin' | 'login';
}

const showInfoToast = (message: string, duration = 4000) => { // duração padrão de 4 segundos
    toast(message, {
        icon: 'ℹ️',
        style: {
            background: '#1E40AF',
            color: '#FFFFFF'
        },
        duration: duration, // define a duração da mensagem
    });
};

export default function TaskBar({ setApp, context }: Props) {
    useEffect(() => {
        setApp(context);
        
        if (context === 'terminal') {
            showInfoToast('Escreva help para conhecer os comandos');
        } else if (context === 'socialMedia') {
            showInfoToast('Sabia que o DNS é como o catálogo telefônico da internet? Ele traduz nomes de domínio (como www.exemplo.com) em endereços IP que os servidores entendem.');
        } else if (context === 'admin') {
            showInfoToast('Aqui você pode procurar o IP da página desejada pra usá-lo para acessar a página diretamente');
        } else if (context === 'login') {
            showInfoToast('Para testar, use as credenciais padrão. Nome de usuário: admin, Senha: 1234', 5000);
        }
    }, [context, setApp]);

    return (
        <div className='flex items-center justify-center gap-5 h-[12%] bg-zinc-800 rounded-b-lg *:max-lg:text-[130%]'>
            <HiTerminal onClick={() => setApp('terminal')} fontSize={'190%'} className='text-[#e5e5e5] hover:text-stone-400 ease-in-out duration-300 cursor-pointer active:scale-75 active:text-[#e5e5e5] max-md:max-h-4'/>
            <BsBrowserChrome onClick={() => setApp('socialMedia')} fontSize={'170%'} className='text-[#e5e5e5] hover:text-stone-400 ease-in-out duration-300 cursor-pointer active:scale-75 active:text-[#e5e5e5] max-md:max-h-3'/>
        </div>
    );
}
