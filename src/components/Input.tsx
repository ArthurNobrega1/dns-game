import { useState } from "react"

interface Props {
    id?: string
    placeholder: string
    onKeyDown?: React.KeyboardEventHandler<HTMLInputElement>
    type?: React.HTMLInputTypeAttribute
}

export default function Input({ id, placeholder, onKeyDown, type }: Props) {
    const [showPasswords, setShowPasswords] = useState(false)

    const togglePasswordVisibility = () => setShowPasswords(!showPasswords)

    return (
        <div className="w-2/4 max-md:w-3/4 flex justify-center relative">
            <input
                className="w-full py-1 max-md:py-0 text-sm rounded-2xl pl-3 text-[#131016] max-lg:text-[0.45rem]"
                type={showPasswords ? "text" : type || 'text'}
                id={id}
                placeholder={placeholder}
                onKeyDown={onKeyDown}
                autoComplete={type === 'password' ? 'current-password' : 'on'}
            />
            {type === "password" && (
                <button
                    type="button"
                    className="absolute right-3 top-2/4 transform -translate-y-2/4 text-gray-500"
                    onClick={togglePasswordVisibility}
                >
                    {showPasswords ? (
                        <img className="w-[1rem] max-md:w-[0.5rem]" src='image/eye.svg' />
                    ) : (
                        <img className="w-[1rem] max-md:w-[0.5rem]" src='image/eye-slash.svg' />
                    )}
                </button>
            )}
        </div>
    )
}
