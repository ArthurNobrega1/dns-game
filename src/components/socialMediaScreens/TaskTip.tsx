import { useEffect } from "react";
import { HiTerminal } from "react-icons/hi";
import { BsBrowserChrome } from "react-icons/bs";
import toast from "react-hot-toast";

interface Props {
  setApp: React.Dispatch<React.SetStateAction<string>>;
  context: 'terminal' | 'socialMedia' | 'admin';
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
    
    if (context === 'admin') {
        showInfoToast('Aqui você pode procurar o IP da pagina desejada pra usá-lo pra acessar a pagina diretamente',4000);    }
  }, [context, setApp]);

  return null;
}

