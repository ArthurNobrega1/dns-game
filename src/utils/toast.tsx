import toast, { Toast } from "react-hot-toast"

export const showInfoToast = (message: string, onConfirm: () => void): void => {
    toast((t: Toast) => (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span>{message}</span>
            <button
                onClick={() => {
                    toast.dismiss(t.id)
                    onConfirm()
                }}
                style={{ marginLeft: '10px', background: 'transparent', color: 'white', border: 'none', cursor: 'pointer' }}
            >
                Confirmar
            </button>
            <button
                onClick={() => {
                    toast.dismiss(t.id)
                    skipToasts()
                }}
                style={{ marginLeft: '10px', background: 'transparent', color: 'white', border: 'none', cursor: 'pointer' }}
            >
                Pular
            </button>
        </div>
    ), {
        icon: 'ℹ️',
        style: {
            background: '#1E40AF',
            color: '#FFFFFF'
        },
        duration: Infinity
    })
}

export const showWarnToast = (message: string, onConfirm: () => void): void => {
    toast((t: Toast) => (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span>{message}</span>
            <button
                onClick={() => {
                    toast.dismiss(t.id)
                    onConfirm()
                }}
                style={{ marginLeft: '10px', background: 'transparent', color: 'black', border: 'none', cursor: 'pointer' }}
            >
                Confirmar
            </button>
            <button
                onClick={() => {
                    toast.dismiss(t.id)
                    skipToasts()
                }}
                style={{ marginLeft: '10px', background: 'transparent', color: 'white', border: 'none', cursor: 'pointer' }}
            >
                Pular
            </button>
        </div>
    ), {
        icon: '⚠️',
        style: {
            background: '#F59E0B',
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
                    toast.dismiss(t.id)
                    onConfirm()
                }}
                style={{ marginLeft: '10px', background: 'transparent', color: 'white', border: 'none', cursor: 'pointer' }}
            >
                Confirmar
            </button>
            <button
                onClick={() => {
                    toast.dismiss(t.id)
                    skipToasts()
                }}
                style={{ marginLeft: '10px', background: 'transparent', color: 'white', border: 'none', cursor: 'pointer' }}
            >
                Pular
            </button>
        </div>
    ), {
        icon: '❌',
        style: {
            background: '#DC2626',
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
                    toast.dismiss(t.id)
                    onConfirm()
                }}
                style={{ marginLeft: '10px', background: 'transparent', color: 'white', border: 'none', cursor: 'pointer' }}
            >
                Confirmar
            </button>
            <button
                onClick={() => {
                    toast.dismiss(t.id)
                    skipToasts()
                }}
                style={{ marginLeft: '10px', background: 'transparent', color: 'white', border: 'none', cursor: 'pointer' }}
            >
                Pular
            </button>
        </div>
    ), {
        icon: '✅',
        style: {
            background: '#10B981',
            color: '#FFFFFF'
        },
        duration: Infinity
    })
}

export const showToastInSequence = async (toastFunctions: ((onConfirm: () => void) => void)[]) => {
    for (let i = 0; i < toastFunctions.length; i++) {
        await new Promise<void>((resolve) => {
            toastFunctions[i](resolve)
        })
    }
}

const skipToasts = () => toast.dismiss()