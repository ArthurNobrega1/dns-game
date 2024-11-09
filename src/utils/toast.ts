import toast from "react-hot-toast";

// Toast de informação
export const showInfoToast = (message: string, duration = 4000) => {
    toast(message, {
        icon: 'ℹ️',
        style: {
            background: '#1E40AF', // Azul
            color: '#FFFFFF'
        },
        duration: duration
    })
}

// Toast de alerta
export const showWarnToast = (message: string, duration = 4000) => {
    toast(message, {
        icon: '⚠️',
        style: {
            background: '#F59E0B', // Amarelo
            color: '#000000'
        },
        duration: duration
    })
}

// Toast de erro
export const showErrorToast = (message: string, duration = 4000) => {
    toast(message, {
        icon: '❌',
        style: {
            background: '#DC2626', // Vermelho
            color: '#FFFFFF'
        },
        duration: duration
    })
}

// Toast de sucesso
export const showSuccessToast = (message: string, duration = 4000) => {
    toast(message, {
        icon: '✅',
        style: {
            background: '#16A34A', // Verde
            color: '#FFFFFF'
        },
        duration: duration
    })
}

interface ToastMessage {
    messageFunction: () => void
    duration?: number
}

export const showToastsInSequence = (ToastMessages: ToastMessage[]) => {
    let delay = 0
    ToastMessages.forEach(({ messageFunction, duration=4000 }) => {
        setTimeout(() => messageFunction(), delay)
        delay += duration
    })
}