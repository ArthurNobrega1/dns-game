import toast from "react-hot-toast"

export const showInfoToast = (message: string, duration = 4000) => {
    toast(message, {
        icon: 'ℹ️',
        style: {
            background: '#1E40AF',
            color: '#FFFFFF'
        },
        duration: duration
    })
}