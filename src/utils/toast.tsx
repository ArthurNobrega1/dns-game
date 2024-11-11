import toast, { Toast } from "react-hot-toast";

// Funções de toasts com diferentes estilos e ícones
export const showInfoToast = (message: string, onConfirm: () => void): void => {
    toast((t: Toast) => (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span>{message}</span>
            <button
                onClick={() => {
                    toast.dismiss(t.id);
                    onConfirm(); // Chama a função de confirmação
                }}
                style={{ marginLeft: '10px', background: 'transparent', color: 'white', border: 'none', cursor: 'pointer' }}
            >
                Confirmar
            </button>
        </div>
    ), {
        icon: 'ℹ️',
        style: {
            background: '#1E40AF', // Azul
            color: '#FFFFFF'
        },
        duration: Infinity // Duração infinita até o usuário confirmar
    })
}

export const showWarnToast = (message: string, onConfirm: () => void): void => {
    toast((t: Toast) => (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span>{message}</span>
            <button
                onClick={() => {
                    toast.dismiss(t.id);
                    onConfirm(); // Chama a função de confirmação
                }}
                style={{ marginLeft: '10px', background: 'transparent', color: 'black', border: 'none', cursor: 'pointer' }}
            >
                Confirmar
            </button>
        </div>
    ), {
        icon: '⚠️',
        style: {
            background: '#F59E0B', // Amarelo
            color: '#000000'
        },
        duration: Infinity
    })
}

export const showErrorToast = (message: string, onConfirm: () => void): void => {
    toast((t: Toast) => (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span>{message}</span>
            <button
                onClick={() => {
                    toast.dismiss(t.id);
                    onConfirm(); // Chama a função de confirmação
                }}
                style={{ marginLeft: '10px', background: 'transparent', color: 'white', border: 'none', cursor: 'pointer' }}
            >
                Confirmar
            </button>
        </div>
    ), {
        icon: '❌',
        style: {
            background: '#DC2626', // Vermelho
            color: '#FFFFFF'
        },
        duration: Infinity
    })
}

export const showSuccessToast = (message: string, onConfirm: () => void): void => {
    toast((t: Toast) => (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span>{message}</span>
            <button
                onClick={() => {
                    toast.dismiss(t.id);
                    onConfirm(); // Chama a função de confirmação
                }}
                style={{ marginLeft: '10px', background: 'transparent', color: 'white', border: 'none', cursor: 'pointer' }}
            >
                Confirmar
            </button>
        </div>
    ), {
        icon: '✅',
        style: {
            background: '#10B981', // Verde
            color: '#FFFFFF'
        },
        duration: Infinity
    })
}

// Função para exibir toasts em sequência
export const showToastInSequence = async (toastFunctions: ((onConfirm: () => void) => void)[]) => {
    for (let i = 0; i < toastFunctions.length; i++) {
        await new Promise<void>((resolve) => {
            toastFunctions[i](resolve); // Passa a função resolve para chamar quando o toast for confirmado
        })
    }
}
